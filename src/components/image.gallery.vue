<template>
  <v-row>
    <v-col cols="12" sm="6" offset-sm="3">
      <v-card>
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <v-row>
                <v-col class="d-flex child-flex" cols="12">
                  <v-card flat tile class="d-flex">
                    <v-img
                      :src="images[0]"
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
                  v-for="(image, idx) in images.slice(1)"
                  :key="idx"
                  class="d-flex child-flex"
                  cols="6"
                >
                  <v-card flat tile class="d-flex">
                    <v-img :src="image" aspect-ratio="1" class="grey lighten-2" @click="index = idx + 1">
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
        <gallery :images="images" :index="index" @close="index = null" />
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import VueGallery from "vue-gallery";

export default {
  name: "ImageGallery",
  components: {
    gallery: VueGallery,
  },
  data: () => ({
    images: [
      "https://picsum.photos/500/300?image=10",
      "https://picsum.photos/500/300?image=15",
      "https://picsum.photos/500/300?image=20",
      "https://picsum.photos/500/300?image=25",
      "https://picsum.photos/500/300?image=30",
    ],
    index: null,
  }),
};
</script>
