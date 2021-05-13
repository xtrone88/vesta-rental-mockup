<template>
  <v-container class="page-wrapper" :fluid="$vuetify.breakpoint.smAndDown">
    <v-row>
      <v-col cols="12" md="10" offset-md="1">
        <v-row v-if="!$vuetify.breakpoint.smAndDown">
          <v-col>
            <h6 class="text-h6 cyan--text">{{ property.title }}</h6>
            <h5 class="text-h5">
              <span class="d-inline-block font-weight-bold mr-3">{{
                property.address.street
              }}</span>
              <span
                class="d-inline-block text-h6 font-weight-regular grey--text"
              >
                {{ property.address.city }}, {{ property.address.country }}
              </span>
            </h5>
            <div>
              Property ID
              <span class="font-weight-bold">{{ property._id }}</span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" :class="{ 'pa-0': $vuetify.breakpoint.smAndDown }">
            <ImageGallery :pictures="property.pictures" />
          </v-col>
        </v-row>
        <v-row>
          <v-col md="7" cols="12" order-sm="1" order="2">
            <v-card
              class="pa-2"
              :elevation="$vuetify.breakpoint.smAndDown ? 0 : 1"
            >
              <v-card-title class="cyan--text justify-space-between">
                <div class="d-inline-block">Property Details</div>
                <div class="d-inline-block">
                  <v-btn icon color="black" @click="toggleWatch()">
                    <v-icon>mdi-eye-outline</v-icon>
                  </v-btn>
                </div>
              </v-card-title>
              <v-card-text>
                <v-card outlined class="rounded text-center pa-2 black--text">
                  {{this.stringHelpers.pluralize(property.accommodates, "guest", "guests")}} ·
                  {{this.stringHelpers.pluralize(property.bedrooms, "bedroom", "bedrooms")}} ·
                  {{this.stringHelpers.pluralize(property.beds, "bed", "beds")}} ·
                  {{this.stringHelpers.pluralize(property.bathrooms, "bath", "baths")}}
                </v-card>
              </v-card-text>
              <v-divider class="mx-4" />
              <template v-if="property.publicDescription.neighborhood">
              <v-card-title class="text-subtitle-2"> Neighborhood </v-card-title>
              <v-card-text>
                <TextClamp>
                  {{property.publicDescription.neighborhood}}
                </TextClamp>
              </v-card-text>
              </template>
              <template v-if="property.publicDescription.space">
              <v-card-title class="text-subtitle-2"> Space </v-card-title>
              <v-card-text>
                <TextClamp>
                  {{property.publicDescription.space}}
                </TextClamp>
              </v-card-text>
              </template>
              <template v-if="property.publicDescription.transit">
              <v-card-title class="text-subtitle-2"> Transit </v-card-title>
              <v-card-text>
                <TextClamp>
                  {{property.publicDescription.transit}}
                </TextClamp>
              </v-card-text>
              </template>
              <template v-if="property.publicDescription.interactionWithGuests">
              <v-card-title class="text-subtitle-2"> Interaction With Guests </v-card-title>
              <v-card-text>
                <TextClamp>
                  {{property.publicDescription.interactionWithGuests}}
                </TextClamp>
              </v-card-text>
              </template>
              <template v-if="property.publicDescription.houseRules">
              <v-card-title class="text-subtitle-2"> House Rules </v-card-title>
              <v-card-text>
                <v-chip
                  v-for="allow in houseRules"
                  :key=allow
                  class="ma-2"
                  :color="allow.trim().indexOf('No') === 0 ? 'red' : 'success'"
                  text-color="white"
                  small
                >
                  {{allow.trim()}}
                </v-chip>
              </v-card-text>
              </template>
              <v-divider class="mx-4" />
              <v-card-title class="text-subtitle-2"> Amentities </v-card-title>
              <v-card-text>
                <v-row align="center" justify="space-between">
                  <v-col class="text-center" cols="3" v-for="(amenity,i) in amenities" :key="i">
                    <v-icon large color="black">{{amenity.icon}}</v-icon>
                    <br />
                    {{amenity.amenity}}
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider class="mx-4" />
              <v-card-text>
                <VueClamp autoresize :max-lines="1" :expanded="summaryExpand">
                  {{property.publicDescription.summary}}
                  {{property.publicDescription.notes}}
                </VueClamp>
              </v-card-text>
              <v-btn text color="secondary" small @click="summaryExpand=!summaryExpand">
                {{summaryExpand ? "Show Less" : "Show More"}}
              </v-btn>
            </v-card>
          </v-col>
          <v-col md="5" cols="12" order-sm="2" order="1">
            <v-card class="mx-auto pa-6 text-center">
              <v-card-title class="cyan--text text-center">
                AUCTION TIME LEFT
              </v-card-title>
              <div class="font-weight-bold mb-8">
                {{this.stringHelpers.pluralize(day, "day", "days")}} {{this.stringHelpers.pluralize(hour, "hour", "hours")}} {{ min }} : {{ sec }}
              </div>

              <v-row class="my-0 mx-n6 lease-time">
                <v-col>
                  <div class="cyan--text">LEASE START</div>
                  <div>Mar 22, 2021</div>
                </v-col>
                <v-col style="border-left: solid 1px lightgray">
                  <div class="cyan--text">LEASE END</div>
                  <div>Aug 22, 2021</div>
                </v-col>
              </v-row>

              <v-card-title class="cyan--text justify-space-between">
                OPENING BID
              </v-card-title>
              <v-card-text>
                <div class="pa-2 mb-3 rounded bid-price">$10,000</div>
                <div class="black--text mt-6">
                  NUMBER OF BIDS :
                  <span class="rounded-circle pa-1 bid-number">20</span>
                </div>
                <v-btn block class="mt-6 cyan white--text"> BID NOW </v-btn>
                <v-btn block class="mt-6 cyan white--text">
                  LEASE IT NOW FOR $11,000
                </v-btn>
                <v-btn
                  text
                  class="mt-6 cyan--text text-capitalize"
                  :to="{ path: '/bidhistory/' + property._id }"
                >
                  Bid History
                </v-btn>
              </v-card-text>
            </v-card>
            <v-btn
              block
              class="mt-6 cyan white--text"
              :to="{ path: '/contact/' + property._id }"
            >
              Contact
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="watched"
      :timeout="1000"
      :top="true"
      color="success"
      elevation="4"
    >
      You have watched.
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="watched = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar
      v-model="favorite"
      :timeout="1000"
      :top="true"
      color="secondary"
      elevation="4"
    >
      You have favorite.
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="favorite = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import VueClamp from "vue-clamp"
import ImageGallery from "@/components/image.gallery";
import TextClamp from "@/components/text.clamp";
// import { sampleProperties } from "@/data/properties";
import guestyProperties from "@/data/guesty.json";
import amenityIcons from "@/data/amenity.json";
import moment from "moment";

export default {
  name: "PropertyDetailPage",
  components: {
    ImageGallery,
    VueClamp,
    TextClamp
  },
  data: () => ({
    property: null,
    endDate: new Date(),
    now: moment(),

    watched: false,
    favorite: false,
    neighborExpand: false,
    spaceExpand: false,
    summaryExpand: false,
  }),
  computed: {
    day() {
      return moment(this.endDate).diff(this.now, "days");
    },
    hour() {
      let h = moment(this.endDate).diff(this.now, "hours") % 24;
      return h > 9 ? h : "0" + h;
    },
    min() {
      let m = moment(this.endDate).diff(this.now, "minutes") % 60;
      return m > 9 ? m : "0" + m;
    },
    sec() {
      let s = moment(this.endDate).diff(this.now, "seconds") % 60;
      return s > 9 ? s : "0" + s;
    },
    amenities() {
      return this.property.amenities.reduce((a, amenity) => {
        let icon = amenityIcons[amenity];
        if (icon != undefined && icon != null) {
          a.push({icon, amenity});
        }
        return a;
      }, []);
    },
    houseRules() {
      let houseRules = this.property.publicDescription.houseRules;
      if (!houseRules) {
        return [];
      }
      houseRules = houseRules.split("•");
      return houseRules.length > 1 ? houseRules.slice(1) : houseRules;
    }
  },
  methods: {
    setupCountdown() {
      setInterval(() => (this.now = moment()), 1000);
    },
    toggleWatch: function () {
      this.property.stats.views++;
      if (this.property.stats.views >= 0) {
        this.watched = true;
      }
    },
    toggleFavorite: function () {
      this.property.stats.favorites++;
      if (this.property.stats.favorites >= 0) {
        this.favorite = true;
      }
    }
  },
  created() {
    this.setupCountdown();
    let propertyId = this.$route.params.propertyId;
    let property = guestyProperties.results[0];
    guestyProperties.results.forEach(function (p) {
      if (propertyId == p._id) {
        property = p;
      }
    });
    this.property = property;
    this.endDate.setDate(this.endDate.getDate() + 2);
  },
};
</script>

<style scoped>
.room-summary {
  padding: 5px;
  border: solid 1px lightgray;
}
.lease-time {
  border-style: solid;
  border-width: 1px 0px 1px 0px;
  border-color: lightgray;
}
.bid-number {
  border: solid 1px lightgray;
}
.bid-price {
  font-size: 24px;
  border: solid 1px cyan;
  color: black;
  font-weight: bold;
}
</style>