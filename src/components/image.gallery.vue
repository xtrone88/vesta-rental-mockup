<template>
  <v-card>
    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <v-row>
            <v-col class="d-flex child-flex" cols="12">
              <v-card flat tile class="d-flex rounded-l-lg">
                <v-img
                  v-if="pictures.length"
                  :src="pictures[0]"
                  aspect-ratio="1"
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
        <v-col cols="6">
          <v-row>
            <v-col
              v-for="(image, idx) in pictures.slice(1)"
              :key="idx"
              class="d-flex child-flex"
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
    <gallery :images="pictures" :index="index" @close="index = null" />
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
  }),
};
</script>
