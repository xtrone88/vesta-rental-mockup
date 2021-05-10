<template>
  <v-container class="page-wrapper" :fluid="!$vuetify.breakpoint.mdAndUp">
    <v-row>
      <v-col class="d-flex">
        <span class="font-weight-bold text-md-h3 text-sm-h4 text-h5"
          >Bid History</span
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col order="2" order-md="1" cols="12" md="8">
        <v-card class="px-4 py-8">
          <div
            :class="[
              $vuetify.breakpoint.smAndDown ? 'd-flex-column' : 'd-flex',
              'text-subtitle-1',
              'align-center',
              'justify-space-between',
            ]"
          >
            <div class="d-flex justify-space-between align-baseline">
              Bidders: <span class="font-weight-bold text-h6">7</span>
            </div>
            <div class="d-flex justify-space-between align-baseline">
              Bids: <span class="font-weight-bold text-h6">35</span>
            </div>
            <div class="d-flex justify-space-between align-baseline">
              Time left:
              <span class="font-weight-bold text-h6"
                >5 days 5 hours 44 mins</span
              >
            </div>
            <div class="d-flex justify-space-between align-baseline">
              Duration: <span class="font-weight-bold text-h6">7 days</span>
            </div>
          </div>

          <v-simple-table class="mt-8">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Bidder</th>
                  <th class="text-left">Bid Amount</th>
                  <th class="text-left">Bid Time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in history" :key="i">
                  <td>{{ item.bidder }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.time }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
      <v-col order="1" order-md="2" cols="12" md="4">
        <v-card class="px-4 py-8">
          <v-row no-gutters>
            <v-col cols="12">
              <v-img
                :src="property.pictures[0].original"
                :aspect-ratio="3 / 2"
                class="rounded-xl fill-height"
              >
              </v-img>
            </v-col>
            <v-col cols="12">
              <div class="text-center text-h6">{{ property.title }}</div>
              <v-divider></v-divider>
            </v-col>
          </v-row>
          <v-row no-gutters class="mt-4">
            <v-col cols="6">
              <span class="text-subtitle-2">Property ID:</span>
            </v-col>
            <v-col cols="6">
              <span class="font-weight-bold text-subtitle-1">{{
                property._id
              }}</span>
            </v-col>
            <v-col cols="6">
              <span class="text-subtitle-2">Address:</span>
            </v-col>
            <v-col cols="6">
              <span class="font-weight-bold text-subtitle-1">{{
                property.address.full
              }}</span>
            </v-col>
            <v-col cols="6">
              <span class="text-subtitle-2">Current Bid:</span>
            </v-col>
            <v-col cols="6">
              <span class="font-weight-bold text-subtitle-1">$8200</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex align-baseline" cols="12">
              <v-text-field
                :counter="10"
                label="Your Maximum bid"
                required
              ></v-text-field>
              <v-btn color="primary">Place Bid</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { sampleProperties } from "@/data/properties";
import guestyProperties from "@/data/guesty.json";

export default {
  name: "BidHistoryPage",

  data: () => ({
    property: null,
  }),

  computed: {
    history() {
      return [
        { bidder: 15, amount: 18000, time: "23 Apr 2021 at 9:48:10am PDT" },
        { bidder: 12, amount: 14000, time: "23 Apr 2021 at 8:48:10am PDT" },
        { bidder: 8, amount: 13000, time: "23 Apr 2021 at 7:48:10am PDT" },
        { bidder: 5, amount: 12000, time: "23 Apr 2021 at 6:48:10am PDT" },
        { bidder: 4, amount: 9000, time: "23 Apr 2021 at 5:48:10am PDT" },
        { bidder: 3, amount: 8000, time: "23 Apr 2021 at 4:48:10am PDT" },
        { bidder: 1, amount: 5000, time: "23 Apr 2021 at 3:48:10am PDT" },
      ];
    },
  },

  created() {
    let propertyId = this.$route.params.propertyId;
    let property = guestyProperties.results[0];
    guestyProperties.results.forEach(function (p) {
      if (propertyId == p._id) {
        property = p;
      }
    });
    this.property = property;
  },
};
</script>
