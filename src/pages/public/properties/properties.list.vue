<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-row>
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
            <v-btn v-if="$vuetify.breakpoint.mobile" icon color="black" @click="mapDialog = true">
              <v-icon>mdi-map</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="align-baseline">
          <v-col cols="12" sm="6">
            <vuetify-google-autocomplete
                id="map"
                ref="address"
                append-icon="mdi-target"
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
                <v-btn text color="primary" @click="datePickerMenu = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dateDialog.save(dates)">OK</v-btn>
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
        <v-row v-for="property in properties" :key="property.id">
          <v-col cols="12">
            <v-lazy
              v-model="property.isActive"
              :options="{
                threshold: 0.5,
              }"
            >
              <v-row no-gutters>
                <v-col cols="12" lg="4" md="3" sm="4">
                  <router-link :to="{ path: `/properties/${property.id}` }">
                    <v-img
                      :src="
                        $vuetify.breakpoint.mobile
                          ? property.pictures[0].thumb_750
                          : property.pictures[0].thumb_500
                      "
                      :aspect-ratio="3 / 2"
                      class="rounded-xl fill-height"
                    >
                    </v-img>
                  </router-link>
                </v-col>
                <v-col cols="12" lg="8" md="9" sm="8" class="pl-4">
                  <v-row no-gutters>
                    <v-col cols="8">
                      <div class="font-weight-bold text-sm-h6 text-subtitle-1">
                        <router-link
                          :to="{ path: `/properties/${property.id}` }"
                        >
                          <span class="mr-4">{{ property.title }}</span>
                        </router-link>
                        <v-icon class="mr-1">mdi-eye-outline</v-icon>
                        <v-icon>mdi-heart-outline</v-icon>
                      </div>
                      <div class="text-body-2">
                        {{ property.address.street }}<br />
                        {{
                          property.address.city + "," + property.address.country
                        }}
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <div class="text-body-2 black--text">
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
                        <div class="text-body-2 mb-2">
                          {{ property.capacity }}
                        </div>
                        <div>
                          <v-btn
                            small
                            elevation="0"
                            color="primary"
                            class="mr-1 mb-1"
                            @click="dialog = true"
                          >
                            <v-icon class="rotate-270" left>mdi-hammer</v-icon>
                            CURRENT BID | $900
                          </v-btn>
                          <v-btn
                            small
                            elevation="0"
                            color="secondary"
                            class="px-1 mb-1"
                            :to="{ path: `/properties/${property.id}` }"
                          >
                            LEASE IT FOR $1000
                          </v-btn>
                        </div>
                      </div>
                    </v-col>
                    <v-col cols="4">
                      <div class="text-body-2 black--text mt-2">
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
            </v-lazy>
            <v-divider class="mt-4"></v-divider>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="pa-0" v-if="!$vuetify.breakpoint.mobile">
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
        <div style="position:relative;width:100%">
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
          <v-btn icon dark x-small color="red" outlined @click="mapDialog = false"
            style="position:absolute;left:5px;top:5px;">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { sampleProperties } from "../../../data/properties";
import BiddingDialog from "../../../components/dialog.bidding";

export default {
  name: "PropertiesPage",
  title: "Properties",
  data: () => ({
    center: null,
    dates: ["2019-09-10", "2019-09-20"],
    datePickerMenu: false,
    popularLocation: "New York",
    dialog: false,
    mapDialog: false,
    address: '',
  }),
  components: {
    BiddingDialog,
  },
  methods: {
    getAddressData: function (addressData, placeResultData, id) {
        this.address = addressData;
        console.log(placeResultData, id);
    }
  },
  computed: {
    dateRangeText() {
      return this.dates.join(' ~ ');
    },
    defaultCenter() {
      return sampleProperties[0].address;
    },
    properties() {
      return sampleProperties.map((property) => {
        let details = [];
        details.push(
          this.stringHelpers.pluralize(property.accommodates, "guest", "guests")
        );
        details.push(
          this.stringHelpers.pluralize(property.bedrooms, "bedroom", "bedrooms")
        );
        details.push(
          this.stringHelpers.pluralize(
            property.bathrooms,
            "bathroom",
            "bathrooms"
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
};
</script>

<style scoped>
.sized-chip {
  display: inline-block;
  width: 100px;
  text-align: center;
}
</style>