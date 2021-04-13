<template>
  <div class="container">
    <v-container class="pa-4 my-10">
      <div class="d-flex align-center mb-16">
        <h3 class="text-h3">Bidding</h3>
        <v-spacer></v-spacer>
        <v-icon color="grey" large>mdi-sort-variant</v-icon>
      </div>
      <v-divider class="mb-4"></v-divider>

      <v-row v-for="bid in bids" :key="bid.id">
        <v-col cols="12">
          <v-sheet class="mb-4">
            <v-row>
              <v-col cols="12" md="3">
                <v-img
                  max-width="100%"
                  :src="`${bid.image}`"
                  :aspect-ratio="3 / 2"
                  class="rounded-xl"
                >
                </v-img>
              </v-col>
              <v-col cols="4" md="4">
                <v-row no-gutters class="half-height">
                  <v-col>
                    <div class="d-flex align-center">
                      <h6 class="text-h6">{{ bid.title }}</h6>
                      <v-spacer></v-spacer>
                    </div>
                    <div class="text-body-2 mb-2">
                      {{ bid.address1 }}<br />
                      {{ bid.address2 }}
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters class="half-height align-center">
                  <v-col>
                    <div class="text-body-2 mb-2">
                      {{ bid.guests }} guests · {{ bid.bedrooms }} bedroom ·
                      {{ bid.beds }} bed · {{ bid.baths }} bath
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" md="2">
                <v-row no-gutters class="half-height">
                  <v-col>
                    <div class="text-body-2 mb-2">
                      Your Bid: ${{ bid.price }}
                    </div>
                    <div>
                      <v-icon color="cyan">mdi-alarm-check</v-icon>
                      <span class="text-body-2 ml-2"
                        >{{ bid.hoursLeft }} Hrs Left</span
                      >
                    </div>
                  </v-col>
                </v-row>
                <v-row no-gutters class="half-height align-center">
                  <v-col>
                    <div class="mb-2">
                      <v-chip
                        :class="`${bid.status} white--text justify-center`"
                        style="width: 100px"
                      >
                        {{ bid.status.toUpperCase() }}
                      </v-chip>
                    </div>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="4" md="3" :class="`bid ${bid.status}`">
                <v-row no-gutters class="fill-height align-center">
                  <v-col>
                    <v-btn :class="`${bid.status} white--text`">
                      Increse Bid
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-sheet>
          <v-divider></v-divider>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bids: null,
    };
  },

  async created() {
    try {
      axios.get("/api/bidding/get").then((res) => {
        this.bids = res.data;
      });
    } catch (error) {
      this.bids = null;
    }
  },
};
</script>

<style>
.bid.winning {
  border-right: 4px solid #68b73e;
}
.bid.losing {
  border-right: 4px solid #b73e3e;
}
.v-chip.winning {
  background: #68b73e !important;
}
.v-chip.losing {
  background: #b73e3e !important;
}
.v-btn.winning {
  background: #c1c1c1 !important;
}
.v-btn.losing {
  background: #12a7c6 !important;
}
.half-height {
  height: 50% !important;
}
</style>