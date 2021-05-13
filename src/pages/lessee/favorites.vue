<template>
  <v-container class="page-wrapper" :fluid="!$vuetify.breakpoint.mdAndUp">
    <v-row>
      <v-col class="d-flex">
        <span class="font-weight-bold text-md-h3 text-sm-h4 text-h5"
          >Favorites</span
        >
        <v-spacer></v-spacer>
        <v-icon class="flip-y" color="dark" :large="!$vuetify.breakpoint.xs"
          >mdi-sort-variant</v-icon
        >
      </v-col>
    </v-row>

    <v-row v-for="property in properties" :key="property._id">
      <v-col cols="12">
        <v-lazy
          v-model="property.isActive"
          :options="{
            threshold: 0.5,
          }"
        >
          <v-row no-gutters>
            <v-col cols="12" lg="3" md="3">
              <router-link :to="{ path: '/properties/' + property._id }">
                <v-img
                  :src="property.pictures[0].original"
                  class="fill-height rounded-xl"
                  :aspect-ratio="3 / 2"
                >
                </v-img>
              </router-link>
            </v-col>
            <v-col class="pl-sm-4" cols="7" sm="6" md="3">
              <div class="d-flex fill-height flex-column">
                <div>
                  <div
                    class="font-weight-bold text-subtitle-1"
                  >
                    <router-link :to="{ path: '/properties/' + property._id }">
                      {{ property.title }}
                    </router-link>
                  </div>
                  <div
                    class="font-weight-regular text-sm-body-2 text-caption"
                  >
                    {{ property.address.street }}<br />
                    {{ property.address.city + "," + property.address.country }}
                  </div>
                </div>
                <div class="mt-auto">
                  <div
                    class="font-weight-regular text-sm-body-2 text-caption mb-2"
                  >
                    {{ property.capacity }}
                  </div>
                  <div>
                    <v-btn
                      small
                      elevation="0"
                      color="pink"
                      class="px-6 white--text"
                      :to="{ path: `/properties/${property._id}` }"
                    >
                      <v-icon class="rotate-270" left>mdi-hammer</v-icon>
                      BID NOW
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col class="d-none d-sm-flex justify-center" cols="3" sm="3">
              <div class="d-flex fill-height flex-column align-baseline">
                <div class="d-inline-block text-center">
                  <div
                    class="font-weight-bold text-lg-h6 text-md-subtitle-1 text-sm-body-2 text-caption"
                  >
                    Current Bid
                  </div>
                  <v-chip
                    class="d-inlie-block justify-center"
                    style="width: 100px"
                    color="cyan"
                    outlined
                    label
                  >
                    $1,000
                  </v-chip>
                </div>
                <div class="mt-auto mb-4 d-inline-block text-center">
                  <div
                    class="font-weight-bold text-lg-h6 text-md-subtitle-1 text-sm-body-2 text-caption"
                  >
                    Total Bids
                  </div>
                  <v-chip
                    class="d-inlie-block justify-center"
                    style="width: 100px"
                    color="cyan"
                    outlined
                    label
                  >
                    20
                  </v-chip>
                </div>
              </div>
            </v-col>
            <v-col cols="5" sm="2">
              <div class="d-flex fill-height flex-column justify-space-between">
                <div class="text-sm-body-2 text-caption">
                  <div>TAKING POST BIDS</div>
                  <div class="font-weight-bold">
                    {{ property.postbids }} days
                  </div>
                  <div>Ends {{ property.postBidsEndingDate }}</div>
                </div>
                <div
                  class="mt-2 text-sm-body-2 text-caption"
                >
                  <div>Lease Start</div>
                  <div class="font-weight-bold">
                    {{ property.leaseStartDate }}
                  </div>
                  <div>Lease End</div>
                  <div class="font-weight-bold">
                    {{ property.leaseEndDate }}
                  </div>
                </div>
              </div>
            </v-col>
            <v-col class="d-flex d-sm-none mt-2" cols="12">
              <v-row no-gutters>
                <v-col cols="6" class="border-top">
                  <div class="text-subtitle-2 text-center">
                    <span class="cyan--text">Current Bid</span><br />
                    $1,000
                  </div>
                </v-col>
                <v-divider :vertical="true"></v-divider>
                <v-col cols="6" class="border-top">
                  <div class="text-subtitle-2 text-center">
                    <span class="cyan--text">Total Bids</span><br />
                    20
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-divider class="mt-sm-4"></v-divider>
            </v-col>
          </v-row>
        </v-lazy>
      </v-col>
    </v-row>

    <v-snackbar v-model="watched"
      :timeout="1000"
      :top="true"
      color="primary"
      elevation="4">
      You have watched.
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="watched = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
// import { sampleProperties } from "../../data/properties";
import guestyProperties from "@/data/guesty.json";

export default {
  name: "TransactionsPage",

  data: () => ({
    properties: [],
    watched: false,
  }),

  methods: {
    toggleWatch: function (index) {
      let property = this.properties[index];
      property.stats.views++;
      if (property.stats.views >= 0) {
        this.watched = true;
      }
    },
  },

  created() {
    this.properties = guestyProperties.results.map((property) => {
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
};
</script>

<style lang="scss" scoped>
.rotate-270 {
  transform: rotate(270deg);
}
.flip-y {
  transform: rotateY(180deg);
}
.border-top {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
