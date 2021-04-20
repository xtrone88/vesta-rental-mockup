<template>
  <v-card>
    <v-container class="pa-0" fluid>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-row no-gutters>
            <v-col class="d-flex child-flex" cols="12" :class="$vuetify.breakpoint.smAndDown?'pa-0':'pa-1'">
              <v-card flat tile :class="['d-flex', !$vuetify.breakpoint.smAndDown ? 'rounded-l-lg' : '']">
                <v-img
                  v-if="gallery.length"
                  :src="gallery[0]"
                  :aspect-ratio="$vuetify.breakpoint.smAndDown ? 2 : 1"
                  class="grey lighten-2"
                  @click="index = 0"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="6" v-if="!$vuetify.breakpoint.smAndDown">
          <v-row no-gutters>
            <v-col
              v-for="(image, idx) in gallery.slice(1)"
              :key="idx"
              class="d-flex child-flex pa-1"
              cols="6"
            >
              <v-card
                flat
                tile
                :class="`d-flex ${
                  idx == 1 ? 'rounded-tr-lg' : idx == 3 ? 'rounded-br-lg' : ''
                }`"
              >
                <v-img
                  :src="image"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  @click="index = idx + 1"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <gallery :images="slider" :index="index" @close="index = null" />
  </v-card>
</template>
<script>
import VueGallery from "vue-gallery";

export default {
  name: "ImageGallery",
  props: ["pictures"],
  components: {
    gallery: VueGallery,
  },
  data: () => ({
    index: null,
    gallery: [],
    slider: []
  }),
  created() {
    for (let i = 0; i < 5 && i < this.pictures.length; i++) {
      this.gallery.push(i == 0 ? this.pictures[i].thumb_750 : this.pictures[i].thumb_250);
    }
    for (let i = 0; i < this.pictures.length; i++) {
      this.slider.push(this.pictures[i].fullsize);
    }
  }
};
</script>
