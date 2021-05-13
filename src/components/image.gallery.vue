<template>
  <v-card :elevation="0">
    <v-container class="pa-0" fluid>
      <v-row no-gutters>
        <v-col cols="12" md="6">
          <v-row no-gutters>
            <v-col
              class="d-flex child-flex"
              cols="12"
              :class="$vuetify.breakpoint.smAndDown ? 'pa-0' : 'pa-1'"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  @click="showAll = 0"
                  :hover="true"
                  flat
                  tile
                  :class="[
                    'd-flex',
                    !$vuetify.breakpoint.smAndDown ? 'rounded-l-lg' : '',
                  ]"
                >
                  <v-img
                    v-if="gallery.length"
                    :src="gallery[0]"
                    :aspect-ratio="$vuetify.breakpoint.smAndDown ? 2 : 1"
                    class="grey lighten-2"
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
                    <div
                      v-if="pictures[0].caption"
                      class="d-flex full-width full-height align-center justify-center white--text text-center pa-4"
                    >
                      {{ pictures[0].caption }}
                    </div>
                  </v-img>
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#036358"
                      :class="[
                        !$vuetify.breakpoint.smAndDown ? 'rounded-l-lg' : '',
                      ]"
                    >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </v-hover>
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
              <v-hover v-slot="{ hover }">
                <v-card
                  @click="showAll = idx + 1"
                  :hover="true"
                  flat
                  tile
                  :class="`d-flex ${
                    idx == 1 ? 'rounded-tr-lg' : idx == 3 ? 'rounded-br-lg' : ''
                  }`"
                >
                  <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
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
                        <span v-if="pictures[idx].caption">{{
                          pictures[idx].caption
                        }}</span>
                      </v-row>
                    </template>
                    <div
                      v-if="pictures[idx].caption"
                      class="d-flex full-width full-height align-center justify-center white--text text-center pa-4"
                    >
                      {{ pictures[idx].caption }}
                    </div>
                  </v-img>

                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="#036358"
                      :class="`${
                        idx == 1
                          ? 'rounded-tr-lg'
                          : idx == 3
                          ? 'rounded-br-lg'
                          : ''
                      }`"
                    >
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <gallery
      :images="slider"
      :index="index"
      @close="index = null"
      v-if="!$vuetify.breakpoint.smAndDown"
    />
    <picture-grid
      :pictures="pictures"
      v-model="grid"
      @close="grid = false"
      v-if="$vuetify.breakpoint.smAndDown"
    />
  </v-card>
</template>

<script>
import VueGallery from "vue-gallery";
import PictureGrid from "./image.grid.vue";

export default {
  name: "ImageGallery",
  props: ["pictures"],
  components: {
    gallery: VueGallery,
    "picture-grid": PictureGrid,
  },
  computed: {
    showAll: {
      get() {
        return this.index;
      },
      set(index) {
        if (this.$vuetify.breakpoint.smAndDown) {
          this.index = null;
          this.grid = true;
        } else {
          this.index = index;
        }
      },
    },
  },
  data: () => ({
    index: null,
    grid: false,
    gallery: [],
    slider: [],
  }),
  created() {
    for (let i = 0; i < 5 && i < this.pictures.length; i++) {
      if (i == 0) {
        this.gallery.push(
          this.pictures[i].large
            ? this.pictures[i].large
            : this.pictures[i].original
        );
      } else {
        this.gallery.push(this.pictures[i].large);
      }
    }

    for (let i = 0; i < this.pictures.length; i++) {
      this.slider.push(this.pictures[i].original);
    }
  },
};
</script>
