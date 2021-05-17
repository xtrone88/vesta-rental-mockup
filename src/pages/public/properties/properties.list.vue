<template>
  <v-container class="page-wrapper" ref="el" fluid>
    <v-row no-gutters>
      <v-col md="7" lg="6" xl="5">
        <v-row no-gutters>
          <v-col class="d-flex align-center justify-space-between">
            <div class="d-flex align-baseline">
              <span class="font-weight-bold text-md-h3 text-sm-h4 text-h6 mr-2"
                >Popular Destination</span
              >
              <span
                class="text-md-h4 text-sm-h5 text-subtitle-1 grey--text text--lighten-1"
                >{{ popularLocation }}</span
              >
            </div>
            <v-btn
              v-if="$vuetify.breakpoint.mobile"
              icon
              color="black"
              @click="mapDialog = true"
            >
              <v-icon>mdi-map</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row no-gutters class="align-baseline">
          <v-col cols="12" sm="6">
            <vuetify-google-autocomplete
              id="location"
              v-model="address"
              prepend-icon="mdi-target"
              placeholder="Location"
              v-on:placechanged="getAddressData"
            >
            </vuetify-google-autocomplete>
          </v-col>
          <v-col cols="12" sm="6">
            <v-dialog
              ref="dateDialog"
              v-model="datePickerMenu"
              :return-value.sync="dates"
              persistent
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="dateRangeText"
                  label="Select Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dates" range no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="datePickerMenu = false"
                  >Cancel</v-btn
                >
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dateDialog.save(dates)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-dialog>
          </v-col>
        </v-row>
        <v-row v-if="!$vuetify.breakpoint.xs">
          <v-col>
            <v-chip-group mandatory active-class="primary--text">
              <v-chip
                class="sized-chip"
                v-for="type in propertyTypes"
                :key="type"
                outlined
              >
                {{ type }}
              </v-chip>
            </v-chip-group>
          </v-col>
        </v-row>
        <v-divider class="mb-4"></v-divider>
        <v-row v-for="(property, index) in properties" :key="property._id">
          <v-col cols="12">
            
            <transition name="fade" mode="out-in" :appear="isImgLoaded(index)">
              <v-row no-gutters>
                <v-col cols="12" xl="3" lg="4" md="4" sm="4">
                  <router-link :to="{ path: `/properties/${property._id}` }">
                    <v-img
                      :src="property.pictures[0].large ? property.pictures[0].large : property.pictures[0].original"
                      :lazy-src="property.pictures[0].large ? property.pictures[0].large : property.pictures[0].original"
                      :aspect-ratio="3 / 2"
                      :load="setImgLoaded(index)"
                      class="rounded-xl fill-height"
                    >
                    </v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" xl="9" lg="8" md="8" sm="8" class="pl-sm-4">
                  <v-row no-gutters>
                    <v-col cols="8">
                      <div class="font-weight-bold text-subtitle-1">
                        <router-link
                          :to="{ path: `/properties/${property._id}` }"
                        >
                          <span class="mr-4">{{ property.title }}</span>
                        </router-link>
                        <v-icon class="mr-1">mdi-eye-outline</v-icon>
                        <v-icon>mdi-heart-outline</v-icon>
                      </div>
                      <div class="text-caption">
                        {{ property.address.street }}<br />
                        {{
                          property.address.city + "," + property.address.country
                        }}
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <div class="text-caption black--text">
                        <div>TAKING POST BIDS</div>
                        <div>
                          <b>{{ property.postbids }} days</b>
                        </div>
                        <div>Ends {{ property.postBidsEndingDate }}</div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col cols="8" class="d-flex align-end">
                      <div>
                        <div class="text-caption mb-2">
                          {{ property.capacity }}
                        </div>
                        <div>
                          <v-btn
                            x-small
                            elevation="0"
                            color="primary"
                            class="mr-1 mb-1"
                            @click="dialog = true"
                          >
                            <v-icon class="rotate-270" left>mdi-hammer</v-icon>
                            CURRENT BID | $900
                          </v-btn>
                          <v-btn
                            x-small
                            elevation="0"
                            color="secondary"
                            class="px-1 mb-1"
                            :to="{ path: `/properties/${property._id}` }"
                          >
                            LEASE IT FOR $1000
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <div class="text-caption black--text mt-2">
                        <div>Lease Start</div>
                        <div>
                          <b>{{ property.leaseStartDate }}</b>
                        </div>
                        <div>Lease End</div>
                        <div>
                          <b>{{ property.leaseEndDate }}</b>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </transition>
            
            <v-divider class="mt-4"></v-divider>
          </v-col>
        </v-row>
      </v-col>
      <v-col md="5" lg="6" xl="7" class="pa-0" v-if="!$vuetify.breakpoint.mobile">
        <GmapMap
          :center="center || defaultCenter"
          :zoom="12"
          :options="{
            zoomControl: false,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false,
            disableDefaultUI: false,
          }"
          id="googleMap"
        >
          <GmapMarker
            :key="i"
            v-for="(m, i) in properties"
            :position="m.address"
            :clickable="true"
            :draggable="true"
            @click="center = m.address"
          >
          </GmapMarker>
        </GmapMap>
      </v-col>
    </v-row>
    <BiddingDialog v-model="dialog" />
    <v-dialog
      v-model="mapDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="d-flex align-stretch">
        <div style="position: relative; width: 100%">
          <GmapMap
            :center="center || defaultCenter"
            :zoom="12"
            :options="{
              zoomControl: false,
              mapTypeControl: false,
              scaleControl: false,
              streetViewControl: false,
              rotateControl: false,
              fullscreenControl: false,
              disableDefaultUI: false,
            }"
            style="width: 100%; height: 100%"
          >
            <GmapMarker
              :key="i"
              v-for="(m, i) in properties"
              :position="m.address"
              :clickable="true"
              :draggable="true"
              @click="center = m.address"
            >
            </GmapMarker>
          </GmapMap>
          <v-btn
            icon
            dark
            x-small
            color="red"
            outlined
            @click="mapDialog = false"
            style="position: absolute; left: 5px; top: 5px"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
// import { sampleProperties } from "@/data/properties";
import guestyProperties from "@/data/guesty.json";
import BiddingDialog from "@/components/dialog.bidding";

Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();

  return [
    this.getFullYear(),
    (mm > 9 ? "" : "0") + mm,
    (dd > 9 ? "" : "0") + dd,
  ].join("-");
};

var startDate = new Date();
var endDate = new Date();
startDate.setDate(1);

export default {
  name: "PropertiesPage",
  title: "Properties",
  data: () => ({
    center: null,
    dates: [startDate.yyyymmdd(), endDate.yyyymmdd()],
    datePickerMenu: false,
    address: "",
    popularLocation: "",
    dialog: false,
    mapDialog: false,
    imgLoaded: []
  }),
  components: {
    BiddingDialog
  },
  methods: {
    getAddressData: function (addressData/*, placeResultData, id*/) {
      this.popularLocation = addressData.name;
    },
    isImgLoaded: function(index) {
      return this.imgLoaded[index] ? true : false;
    },
    setImgLoaded: function(index) {
      this.imgLoaded[index] = true;
    }
  },
  computed: {
    dateRangeText() {
      return this.dates.join(" ~ ");
    },
    defaultCenter() {
      return guestyProperties.results[0].address;
    },
    properties() {
      return guestyProperties.results.map((property) => {
        let details = [];
        details.push(
          this.stringHelpers.pluralize(
            property.accommodates,
            "guest", "guests"
          )
        );
        details.push(
          this.stringHelpers.pluralize(
            property.bedrooms,
            "bedroom", "bedrooms"
          )
        );
        details.push(
          this.stringHelpers.pluralize(
            property.bathrooms,
            "bathroom", "bathrooms"
          )
        );

        property.postbids = 3;
        property.postBidsEndingDate = "Mar 11, 2021";
        property.leaseStartDate = "Mar 24, 2021";
        property.leaseEndDate = "Mar 30, 2021";
        return {
          ...property,
          capacity: details.join("·"),
        };
      });
    },
    propertyTypes() {
      return ["All", "Apartment", "House", "More"];
    },
  },
  mounted() {
    let param = this.$route.params.address;
    if (param == "All" || param == undefined || param == "") {
      param = "";
    } else {
      this.address = this.popularLocation = param;
    }

    let gmap = document.querySelector("#googleMap");
    if (gmap == null) {
      return;
    }
    let rect = gmap.getBoundingClientRect();
    gmap.style.position = "fixed";
    let top = gmap.style.top = rect.top - gmap.parentNode.getBoundingClientRect().top;
    gmap.style.width = gmap.parentNode.clientWidth + "px";
    gmap.style.height = window.innerHeight - top + "px";
  },
};
</script>

<style scoped>
.sized-chip {
  display: inline-block;
  width: 100px;
  text-align: center;
}
</style>
