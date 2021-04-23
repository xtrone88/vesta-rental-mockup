<template>
  <div>
    <v-container class="pa-0" fluid>
      <v-col :style="!$vuetify.breakpoint.xs?'background:#222':'background:#ffffff'" :class="[!$vuetify.breakpoint.xs ? 'pa-12' : 'pa-0']">
        <v-img src="@/assets/home/slider1.png" class="full-width">
          <div v-if="$vuetify.breakpoint.xs" class="d-flex fill-height pl-4">
            <v-col>
              <h3 class="white--text">
                We Believe that the <br>
                <span>Vesta Lease</span> platform is a<br>
                <span><b>WIN – WIN – WIN</b></span>
              </h3>
            </v-col>
          </div>
        </v-img>
        <div class="d-flex align-center"
            :style="!$vuetify.breakpoint.xs?'width: 70%;transform: translate(20%, -30%);-ms-transform: translate(20%, -30%);-webkit-transform: translate(20%, -30%);':''">
          <v-card class="pa-2" style="width:100%">
            <vuetify-google-autocomplete
                id="map"
                ref="address"
                prepend-icon="mdi-crosshairs-gps"
                placeholder="Enter an address, neighborhood, city or ZIP code"
                v-on:placechanged="getAddressData"
            >
            </vuetify-google-autocomplete>
          </v-card>
        </div>
        <h2 v-if="!$vuetify.breakpoint.xs" class="text-center white--text">
          We Believe that the
          <span style="font-size: 32px">Vesta Lease</span> platform is a
          <span><i><b>WIN – WIN – WIN</b></i></span>
        </h2>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs" :class="['text-center', !$vuetify.breakpoint.xs ? 'pa-12' : 'pa-0 ma-0']">
        <h1>The New Way of Renting Properties</h1>
        <p style="font-size: 14px">
          New online auction-based application for booking rental properties
        </p>
        <v-img src="@/assets/home/rent-way.png"></v-img>
      </v-col>
      <v-col :class="[!$vuetify.breakpoint.xs ? 'pr-12 pl-12' : 'pl-4 pr-4 pt-0 mt-0 pb-0 mb-0']">
        <h2>Popular Destination</h2>
        <v-row class="pt-8 mb-0"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col :cols="$vuetify.breakpoint.xs ? 5 : 3" sm="6" md="3" lg="3" 
            v-for="(city, i) in cities"
            :key="i">
            <div class="mx-auto pa-0 ma-0" elevation="0">
              <div align="center">
                <img :width="$vuetify.breakpoint.xs?'100':'150'" class="rounded-xl" :src="city.img"/>
                <p>
                  <strong><h3>{{ city.city }}</h3></strong>
                  <span style="font-size: 14px">{{ city.state }}</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col style="background:#222" :class="[!$vuetify.breakpoint.xs ? 'pa-12' : 'pa-4']">
        <v-row align="center">
          <v-col class="mr-auto white--text">
            <div class="d-flex align-center mt-6">
              <h2>Featured Deals</h2>
              <v-spacer></v-spacer>
              <p class="white--text" v-if="!$vuetify.breakpoint.xs" href="" v-on:click="changeLimit_feature">VIEW ALL</p>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6 mb-6"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col  :cols="$vuetify.breakpoint.xs ? 9 : 3" sm="6" md="3" lg="3" 
            v-for="property in properties" :key="property.id" v-show="property.id < 5">
            <v-card class="rounded-xl">
              <v-row no-gutters>
                <v-col>
                  <router-link :to="{ path: `/properties/${property.id}` }">
                    <v-img
                      :src="property.pictures[0].thumb_500"
                      :aspect-ratio="1"
                      class="rounded-xl fill-height"
                    >
                    </v-img>
                  </router-link>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="8" class="pl-2 pb-2">
                  <div class="font-weight-bold card-title">
                    Apartment for Rent
                  </div>
                  <div class="text--primary card-subtitle-g">
                    {{ property.address.full }}
                  </div>
                </v-col>
                <v-col cols="4" class="pr-2 pb-2 d-flex align-center justify-end">
                  <div>
                    <div class="d-flex align-center justify-end text-caption">
                      <v-icon small class="flip-y" color="black">mdi-hammer</v-icon>
                      <span class="font-weight-bold">Bid Now</span>
                    </div>
                    <div class="text-caption text-grey text-center">20hrs Left</div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col style="background:#f0f0f0" :class="[!$vuetify.breakpoint.xs ? 'pa-12' : 'pa-4']">
        <v-row align="center">
          <v-col class="mr-auto">
            <div class="d-flex align-center mt-4">
              <h2>Ending Soon</h2>
              <v-spacer></v-spacer>
              <a class="black--text" v-if="!$vuetify.breakpoint.xs" href="">VIEW ALL</a>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-4"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"  
        >
          <v-col  :cols="$vuetify.breakpoint.xs ? 9 : 3" sm="6" md="3" lg="3" 
            v-for="property in properties" :key="property.id" v-show="property.id < 5">
            <v-card class="rounded-xl">
              <v-row no-gutters>
                <v-col>
                  <router-link :to="{ path: `/properties/${property.id}` }">
                    <v-img
                      :src="property.pictures[0].thumb_500"
                      :aspect-ratio="1"
                      class="rounded-xl fill-height"
                    >
                    </v-img>
                  </router-link>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="8" class="pl-2 pb-2">
                  <div class="font-weight-bold card-title">
                    Apartment for Rent
                  </div>
                  <div class="text--primary card-subtitle-g">
                    {{ property.address.full }}
                  </div>
                </v-col>
                <v-col cols="4" class="pr-2 pb-2 d-flex align-center justify-end">
                  <div>
                    <div class="d-flex align-center justify-end text-caption">
                      <v-icon small class="flip-y" color="black">mdi-hammer</v-icon>
                      <span class="font-weight-bold">Bid Now</span>
                    </div>
                    <div class="text-caption text-grey text-center">20hrs Left</div>
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import { sampleProperties } from "../../data/properties";
import { citiesOfProperties } from "../../data/cities";

export default {
  title: "Vesta Leese",
  name: "HomePage",
  methods: {
    getAddressData: function (addressData/*, placeResultData, id*/) {
      this.$router.push({path:'/locations/' + addressData.name});
    },
    changeLimit_feature: function(){
      this.showlimit = this.properties.length();
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    properties: sampleProperties,
    cities: citiesOfProperties,
    showlimit: 4,
  })
};
</script>

<style lang="scss" scoped>

.card-title {
  font-size: 14px;
}

.card-subtitle-g {
  font-size: 12px;
  color: grey;
}

.card-text-g {
  font-size: 10px;
  color: grey;
}
.card-text-b {
  font-size: 10px;
}
.card-text-r {
  font-size: 10px;
  color: red;
}
.flip-y {
  transform: rotateY(180deg);
}
</style>

-->