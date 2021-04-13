<template>
  <v-container>
    <h4 class="text-h4 my-16 light-green--text text-center">
      You have won this auction
    </h4>
    <v-row>
      <v-col cols="12">
        <div class="v-overlay__content">
          <ImageGallery :pictures="samplePictures" />
          <v-chip
            id="view-all-photos"
            color="grey lighten-5"
            label
            text-color="black"
          >
            <v-icon left> mdi-image </v-icon>
            View all Photos
          </v-chip>
          <v-icon id="won-auction" color="light-green">
            mdi-check-circle-outline
          </v-icon>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-16 rounded-xl">
          <v-row>
            <v-col cols="12" md="auto" class="mr-auto">
              <div class="d-flex align-center">
                <span class="text-h5 mr-4"> 380 Brainard Street </span>
                <span class="text-subtitle-1 grey--text">
                  Jefferson County, Watertown, NY 13601
                </span>
              </div>
              <p class="text-body-1">
                <span class="mr-2">Product ID</span>
                <b>10469</b>
              </p>
              <p>
                  <v-icon class="mr-4" color="cyan">mdi-calendar</v-icon>
                  <span class="text-subtitle-1">Wed, 13 March 2021</span>
              </p>
              <p>
                  <v-icon class="mr-4" color="cyan">mdi-directions-fork</v-icon>
                  <span class="text-subtitle-1">Jefferson County, Watertown, NY 13601</span>
              </p>
            </v-col>
            <v-col cols="6" md="auto">
              <p class="text-body-1 text-center">
                CHECK IN<br />
                4/26/2021
              </p>
            </v-col>
            <v-col cols="6" md="auto">
              <p class="text-body-1 text-center">
                CHECK OUT<br />
                5/26/2021
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ImageGallery from "@/components/image.gallery";
import { sampleProperties } from "@/data/properties";

export default {
  name: "WonAuctionPage",

  components: {
    ImageGallery,
  },

  data: () => ({
    properties: sampleProperties,
  }),

  computed: {
    samplePictures() {
      return [
        require("@/assets/property/property_1.png"),
        require("@/assets/property/property_1_01.png"),
        require("@/assets/property/property_1_02.png"),
        require("@/assets/property/property_1_03.png"),
        require("@/assets/property/property_1_04.png"),
      ];
    },
  },
};
</script>

<style scoped>
#view-all-photos {
  position: absolute;
  bottom: 20px;
  border-top-right-radius: 16px !important;
  border-bottom-right-radius: 16px !important;
}
#won-auction {
  position: absolute;
  top: -40px;
  left: 50px;
  font-size: 80px;
}
</style>
