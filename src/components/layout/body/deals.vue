<template>
  <v-col :style="bkColor" class="pa-0">
    <v-container>
      <v-row align="center">
        <v-col>
          <div class="d-flex align-center justify-space-between">
            <h2 :class="titleColor">{{ name }}</h2>

            <!-- <v-hover v-slot="{ hover }">
              <button :class="titleColor" v-if="!$vuetify.breakpoint.xs">
                <p :class="hover ? 'cyan--text' : ''">VIEW ALL</p>
              </button>
            </v-hover> -->
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-3 flex-nowrap pb-3 pl-3" style="overflow-x: auto">
        <v-card
          class="rounded-xl fill-height mr-6 my-2"
          width="250px"
          min-width="250px"
          max-width="250px"
          v-for="property in properties"
          :key="property.id"
          v-show="property.id < 5"
        >
          <v-row no-gutters>
            <v-col>
              <router-link :to="{ path: `/properties/${property.id}` }">
                <v-img
                  height="250"
                  :src="property.pictures[0].thumb_750"
                  :aspect-ratio="1"
                  class="rounded-xl fill-height"
                >
                </v-img>
              </router-link>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="8" class="pl-4 pb-2 pt-2">
              <div class="font-weight-bold card-title">Apartment for Rent</div>
              <div class="text--primary card-subtitle-g">
                {{ property.address.full }}
              </div>
            </v-col>
            <v-col cols="4" class="pr-4 pb-2 d-flex align-center justify-end">
              <div>
                <div class="d-flex align-center justify-end text-caption">
                  <v-icon small class="flip-y" color="black">mdi-hammer</v-icon>
                  <span class="font-weight-bold">Bid Now</span>
                </div>
                <div :class="['text-caption text-center', bidColor]">
                  20Hrs Left
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
import { sampleProperties } from "../../../data/properties";

export default {
  name: "Deals",

  props: ["name", "background", "tColor", "bColor"],

  components: {},

  data: () => ({
    properties: sampleProperties,
  }),

  computed: {
    bkColor() {
      return "background-color:" + this.background;
    },
    titleColor() {
      return this.tColor;
    },
    bidColor() {
      return this.bColor;
    },
  },

  methods: {},
};
</script>

<style scoped>
.flip-y {
  transform: rotateY(180deg);
}
.flex-card {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;
}
</style>
