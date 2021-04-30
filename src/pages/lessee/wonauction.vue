<template>
  <v-container :fluid="$vuetify.breakpoint.smAndDown">
    <v-row :class="{'flex-column-reverse':$vuetify.breakpoint.smAndDown}">
      <v-col cols="12">
        <h4 class="text-h4 mt-4 my-lg-8 light-green--text text-center">
          You have won this auction
        </h4>    
      </v-col>
      <v-col cols="12" :class="{'pa-0':$vuetify.breakpoint.smAndDown}">
        <div class="v-overlay__content">
          <ImageGallery ref="gallery" :pictures="property.pictures" />
          <v-chip
            @click="viewAllPhotos"
            v-if="!$vuetify.breakpoint.smAndDown"
            id="view-all-photos"
            color="grey lighten-5"
            label
            text-color="black"
          >
          <v-icon left> mdi-image </v-icon>
            View all Photos
          </v-chip>
          <v-icon id="won-auction" :class="{'on-mobile':$vuetify.breakpoint.smAndDown}" color="light-green">
            mdi-check-circle-outline
          </v-icon>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card
          :class="{'pa-16':!$vuetify.breakpoint.smAndDown, 'rounded-xl':!$vuetify.breakpoint.smAndDown}"
          :elevation="$vuetify.breakpoint.smAndDown ? 0 : 1">
          <v-row>
            <v-col cols="12">
              <v-row class="align-center mb-2 justify-space-between" no-gutters>
                <v-col cols="12" md="auto" order="0" class="text-center pr-md-4">
                  <span class="text-h4 font-weight-bold"> {{property.address.street}} </span>
                </v-col>
                <v-col cols="12" md="auto" order-lg="1" order-md="4" class="text-center">
                  <span class="text-h6 grey--text">
                    {{property.address.city}}, {{property.address.country}}
                  </span>
                </v-col>
                <v-col v-if="!$vuetify.breakpoint.smAndDown" md="auto" order-lg="3" order-md="2">
                  <p class="text-body-1 text-center">
                    CHECK IN<br />
                    4/26/2021
                  </p>
                </v-col>
                <v-col v-if="!$vuetify.breakpoint.smAndDown" md="auto" order-lg="4" order-md="3">
                  <p class="text-body-1 text-center">
                    CHECK OUT<br />
                    5/26/2021
                  </p>
                </v-col>
                <v-col cols="12" order="5" :class="{'text-center':$vuetify.breakpoint.smAndDown}">
                  <span class="text-h6 mr-2">Property ID</span>
                  <span class="text-h5 font-weight-bold">{{property.id}}</span>
                </v-col>
              </v-row>
              <p>
                  <v-icon class="mr-4" color="cyan">mdi-calendar</v-icon>
                  <span class="text-subtitle-1">Wed, 13 March 2021</span>
              </p>
              <p>
                  <v-icon class="mr-4" color="cyan">mdi-directions-fork</v-icon>
                  <span class="text-subtitle-1">{{property.address.full}}</span>
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <GmapMap
                :center="property.address"
                :zoom="12"
                :options="{
                  zoomControl: false,
                  mapTypeControl: false,
                  scaleControl: false,
                  streetViewControl: false,
                  rotateControl: false,
                  fullscreenControl: false,
                  disableDefaultUI: false
                }"
                style="width: 100%; height: 200px"
              >
                <GmapMarker
                  :position="property.address"
                  :clickable="true"
                  :draggable="true"
                >
                </GmapMarker>
              </GmapMap>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.smAndDown">
      <v-col cols="6" class="border-top-bottom">
        <p class="text-h5 text-center">
          <span class="cyan--text">CHECK IN</span><br />
          4/26/2021
        </p>
      </v-col>
      <v-divider :vertical="true"></v-divider>
      <v-col cols="6" class="border-top-bottom">
        <p class="text-h5 text-center">
          <span class="cyan--text">CHECK OUT</span><br />
          5/26/2021
        </p>
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
    property: null
  }),

  methods: {
    viewAllPhotos: function() {
      this.$refs.gallery.index = 0;
    }
  },

  created() {
    let propertyId = this.$route.params.propertyId;
    let property = sampleProperties[0];
    sampleProperties.forEach(function(p) {
        if (propertyId == p.id) {
          property = p;
        }
    });
    this.property = property;
  }
};
</script>

<style scoped>
#view-all-photos {
  position: absolute;
  bottom: 20px;
  border-top-right-radius: 16px !important;
  border-bottom-right-radius: 16px !important;
  z-index: 1000;
}
#won-auction {
  position: absolute;
  top: -40px;
  left: 50px;
  font-size: 80px;
  z-index: 2;
}
#won-auction::after {
  left: 50%;
  top: 50%;
  margin-top: -22px;
  margin-left: -22px;
  width: 44px;
  height: 44px;
  opacity: unset;
  background-color: white;
  z-index: -1;
}
#won-auction.on-mobile {
  left: 50%;
  top: unset;
  bottom: -25px;
  margin-left: -25px;
  font-size: 50px;
}
#won-auction.on-mobile::after {
  margin-top: -14px;
  margin-left: -14px;
  width: 28px;
  height: 28px;
}
.border-top-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
