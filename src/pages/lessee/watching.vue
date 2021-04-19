<template>
  <v-container class="pa-4 my-10">
    <div class="d-flex align-center mb-16">
      <h3 class="text-h3">Watching</h3>
      <v-spacer></v-spacer>
      <v-icon color="grey" large>mdi-sort-variant</v-icon>
    </div>
    <v-divider class="mb-4"></v-divider>

    <v-row v-for="property in properties" :key="property.id">
      <v-col cols="12">
        <v-sheet
          class="mb-4 fill-height"
          color="transparent"
        >
          <v-lazy
            v-model="property.isActive"
            :options="{
              threshold: 0.5,
            }"
            class="fill-height"
          >
            <v-row>
              <v-col cols="12" md="3">
                <v-img
                  height="100%"
                  :src="property.picture.thumbnail"
                  :aspect-ratio="3 / 2"
                  class="rounded-xl"
                >
                </v-img>
              </v-col>
              <v-col cols="4" md="4">
                <v-row no-gutters class="half-height">
                  <v-col>
                    <div class="d-flex align-center">
                      <h6 class="text-h6">{{ property.title }}</h6>
                      <v-spacer></v-spacer>
                      <v-btn icon color="cyan" small>
                        <v-icon>mdi-eye-outline</v-icon>
                      </v-btn>
                    </div>
                    <div class="text-body-2 mb-2">
                      {{ property.address.street }}<br />
                      {{
                        property.address.city + "," + property.address.country
                      }}
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters class="half-height align-center">
                  <v-col>
                    <div class="text-body-2 mb-2">
                      {{ property.capacity }}
                    </div>
                    <div>
                      <v-btn small elevation="0" color="primary" class="px-6"
                        :to="{name:'PropertyDetail'}">
                        <v-icon class="rotate-270" left>mdi-hammer</v-icon>
                        BID NOW
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" md="2">
                <v-row no-gutters class="half-height justify-center">
                  <v-col>
                    <div class="d-inline-block text-center">
                      <div class="text-h6">Current Bid</div>
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
                  </v-col>
                </v-row>
                <v-row no-gutters class="half-height">
                  <v-col>
                    <div class="d-inline-block text-center">
                      <div class="text-h6">Total Bids</div>
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
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" md="3">
                <v-row no-gutters class="half-height justify-center">
                  <v-col>
                    <div class="text-body-2 black--text">
                      <div>TAKING POST BIDS</div>
                      <div>
                        <b>{{ property.postbids }} days</b>
                      </div>
                      <div>Ends {{ property.postBidsEndingDate }}</div>
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters class="half-height justify-center">
                  <v-col>
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
        </v-sheet>

        <v-divider></v-divider>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sampleProperties } from "../../data/properties";

export default {
  name: "TransactionsPage",

  data: () => ({}),

  computed: {
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
        property.picture.thumbnail = require("@/assets/property/property_200_300_" +
          property.id +
          ".png");
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
  },
};
</script>

<style lang="scss" scoped>
.half-height {
  height: 50% !important;
}
.rotate-270 {
  transform: rotate(270deg);
}
</style>