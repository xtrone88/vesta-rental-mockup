<template>
  <v-container class="page-wrapper" :fluid="!$vuetify.breakpoint.mdAndUp">
    <v-row>
      <v-col class="d-flex">
        <span class="font-weight-bold text-md-h3 text-sm-h4 text-h5"
          >Bidding</span
        >
        <v-spacer></v-spacer>
        <v-icon class="flip-y" color="dark" :large="!$vuetify.breakpoint.xs"
          >mdi-sort-variant</v-icon
        >
      </v-col>
    </v-row>
    <v-row v-for="(bid, i) in bids" :key="bid.id">
      <v-col cols="12">
        <v-lazy
          v-model="bid.isActive"
          :options="{
            threshold: 0.5,
          }"
        >
          <v-row no-gutters>
            <v-col cols="12" lg="3" md="3" sm="3">
              <router-link :to="{path:'/properties/' + bid.id}">
                <v-img :src="`${bid.image}`" class="rounded-xl fill-height" :aspect-ratio="3/2">
                </v-img>
              </router-link>
            </v-col>
            <v-col class="pl-sm-4" cols="7" lg="5" md="5" sm="4">
              <div class="d-flex fill-height flex-column">
                <div>
                  <div class="font-weight-bold text-md-h5 text-sm-h6 text-subtitle-1">
                    {{ bid.title }}
                  </div>
                  <div class="font-weight-regular text-lg-h6 text-md-body-1 text-sm-body-2 text-caption">
                    {{ bid.address1 }}<br />
                    {{ bid.address2 }}
                  </div>
                </div>
                <div class="mt-auto">
                  <div class="font-weight-regular text-lg-h6 text-md-body-1 text-sm-body-2 text-caption">
                    {{ bid.guests }} guests · {{ bid.bedrooms }} bedroom ·
                    {{ bid.beds }} bed · {{ bid.baths }} bath
                  </div>
                </div>
              </div>
            </v-col>
            <v-col cols="5" lg="4" md="4" :class="`bid ${bid.status}`">
              <v-row class="fill-height">
                <v-col cols="12" sm="6">
                  <div class="d-flex fill-height flex-column align-center">
                      <div>
                        <div class="font-weight-bold text-lg-h6 text-md-subtitle-1 text-sm-body-2 text-caption">
                          Your Bid: ${{ bid.price }}
                        </div>
                        <div>
                          <v-icon color="cyan">mdi-alarm-check</v-icon>
                          <span class="font-weight-regular text-lg-h6 text-md-body-1 text-sm-body-2 text-caption"
                            >{{ bid.hoursLeft }} Hrs Left</span
                          >
                        </div>
                      </div>
                      <div class="mt-auto">
                        <v-chip
                          :class="`${bid.status} white--text`"
                          :small="$vuetify.breakpoint.mobile"
                        >
                          {{ bid.status.toUpperCase() }}
                        </v-chip>
                      </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6">
                  <div class="d-flex fill-height align-center justify-center">
                    <v-btn
                      :class="`${bid.status} white--text`"
                      :small="$vuetify.breakpoint.mobile"
                      v-on:click="increaseBid(i)"
                    >
                      Increase Bid
                    </v-btn>
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
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      bids: null,
    };
  },

  methods: {
      increaseBid : function(index) {
        this.bids[index].price += 1000;
      }
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

<style lang="scss" scoped>
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
.flip-y {
  transform: rotateY(180deg);
}
.v-size--small {
  font-size: 10px !important;
}
</style>
