<template>
  <v-container>
    <v-row>
      <v-col xs="12" sm="12" md="10" offset-md="1">
        <v-row>
          <v-col>
            <div class="cyan--text">Online Auction - VL012</div>
            <h2>
              <div class="mr-3 d-inline-block">380 Brainard Street</div>
              <div class="grey--text d-inline-block">
                Jefferson County, Watertown, NY 13601
              </div>
            </h2>
            <div>Property ID <span class="font-weight-bold">718220</span></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <ImageGallery :pictures="properties[0].pictures" />
          </v-col>
        </v-row>
        <v-row class="flex-xl-row-reverse d-flex">
          <v-col md="7" xs="12" sm="12" order="xs12">
            <v-card class="mx-auto pa-6">
              <v-card-title class="cyan--text"> Property Details </v-card-title>
              <v-card-subtitle class="font-weight-black">
                Seller reserves the right to a final review of all bids
                received. Seller my accept or reject any bid regardless of
                whether or not the reserve price has been met.
              </v-card-subtitle>
              <v-card-text>
                <v-card outlined class="rounded text-center pa-2 black--text">
                  3 guests · 1 bedrooms · 1 beds · 1 baths
                </v-card>
              </v-card-text>
              <v-divider class="mx-4" />
              <v-card-title class="cyan--text"> Amentities </v-card-title>
              <v-card-text>
                <v-row justify="space-between">
                  <v-col>
                    <v-icon large color="black"> mdi-domain </v-icon>
                    <br />
                    HotHub
                  </v-col>
                  <v-col>
                    <v-icon large color="black"> mdi-dialpad </v-icon>
                    <br />
                    HotHub
                  </v-col>
                  <v-col>
                    <v-icon large color="black"> mdi-message-text </v-icon>
                    <br />
                    HotHub
                  </v-col>
                  <v-col>
                    <v-icon large color="black"> mdi-email </v-icon>
                    <br />
                    HotHub
                  </v-col>
                </v-row>
              </v-card-text>
              <v-divider class="mx-4" />
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. imperdiet a, venenatis vitae, justo.
                Nullam dictum felis eu pede mollis pretium. Integer tincidunt.
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor eu, consequat
                vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
                metus varius laoreet. Quisque rutrum. Aenean imperdiet.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col md="5" xs="12" sm="12" order="xs1">
            <v-card class="mx-auto pa-6 text-center">
              <v-card-title class="cyan--text text-center">
                AUCTION TIME LEFT
              </v-card-title>
              <div class="font-weight-bold mb-8">
                {{ day }}d {{ hour }}:{{ min }}:{{ sec }}
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

              <v-card-title class="cyan--text text-center">
                OPENING BID
              </v-card-title>
              <v-card-text>
                <div class="pa-2 mb-3 rounded bid-price">$10,000</div>
                <div class="black--text">
                  NUMBER OF BIDS :
                  <span class="rounded-circle pa-1 bid-number">20</span>
                </div>
                <v-btn block class="mt-6 cyan white--text"> BID NOW </v-btn>
                <v-btn block class="mt-6 cyan white--text">
                  LEASE IT NOW FOR $11,000
                </v-btn>
                <v-btn text class="mt-6 cyan--text text-capitalize">
                  Bid History
                </v-btn>
              </v-card-text>
            </v-card>
            <v-btn block class="mt-6 cyan white--text"> contact </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
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
<script>
import ImageGallery from "@/components/image.gallery";
import { sampleProperties } from "@/data/properties";
import moment from "moment";

export default {
  name: "PropertyDetailPage",
  components: {
    ImageGallery,
  },
  data: () => ({
    properties: sampleProperties,
    endDate: new Date(2021, 4, 10),
    now: moment(),
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
  },
  methods: {
    setupCountdown() {
      setInterval(() => (this.now = moment()), 1000);
    },
  },
  created() {
    this.setupCountdown();
  },
};
</script>
