<template>
  <div>
    <v-container class="pa-0" fluid>
      <v-col :style="!$vuetify.breakpoint.xs?'background:#222':'background:#ffffff'" :class="[!$vuetify.breakpoint.xs ? 'pa-12' : 'pa-0']">
        <v-img src="@/assets/home/slider1.png" class="full-width">
          <div v-if="$vuetify.breakpoint.xs" class="d-flex fill-height align-center">
            <v-col>
              <h3 class="white--text">
                We Believe that the <br>
                <span class="text-size-42">Vesta Lease</span> platform is a<br>
                <span class="bold-italic">WIN – WIN – WIN</span>
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
          <span class="text-size-42">Vesta Lease</span> platform is a
          <span class="bold-italic">WIN – WIN – WIN</span>
        </h2>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs" :class="['text-center', !$vuetify.breakpoint.xs ? 'pa-12' : 'pa-0']">
        <h1>The New Way of Renting Properties</h1>
        <p class="text-body1">
          New online auction-based application for booking rental properties
        </p>
        <v-img src="@/assets/home/rent-way.png"></v-img>
      </v-col>
      <v-col :class="[!$vuetify.breakpoint.xs ? 'pr-12 pl-12' : 'pa-4']">
        <h2>Popular Destination</h2>
        <v-row class="pt-8"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="3" lg="3" 
            v-for="(city, i) in cities"
            :key="i">
            <div class="d-flex align-center">
              <img class="img-city" :src="city.img" width="100px" height="100px"/>
              <div class="ml-4">
                <p>
                  <strong><h3>{{ city.city }}</h3></strong> <br />
                  <span class="state-name">{{ city.state }}</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col style="background:#222" :class="[!$vuetify.breakpoint.xs ? 'pa-12' : 'pa-4']">
        <v-row align="center">
          <v-col cols="10" class="mr-auto white--text">
            <h2>Featured Deals</h2>
          </v-col>
          <v-col cols="2" v-if="!$vuetify.breakpoint.xs">
            <a href="">VIEW ALL</a>
          </v-col>
        </v-row>
        <v-row class="pt-8"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col  :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="3" lg="3" 
            v-for="(feature, i) in features" :key="i">
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="feature.img" />
              <v-row align="center">
                <v-col>
                  <v-card-text>
                    <strong>{{ feature.title }}</strong>
                  </v-card-text>

                  <v-card-text class="text--primary">
                    <div>{{ feature.desc }}</div>

                    <div>{{ feature.city }}</div>
                  </v-card-text>
                </v-col>
                <v-col align="center" align-self="center">
                  <v-icon color="black" class="" left>mdi-hammer</v-icon>
                  <v-card-text><strong>Bid</strong></v-card-text>
                  <v-card-text>20 Hours Left</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col :class="!$vuetify.breakpoint.xs?'pa-12':'pa-4'">
        <v-row>
          <v-col cols="12" md="auto">
            <h1 class="text-center">Property Spotlight</h1>
          </v-col>
        </v-row>
        <v-row class="pt-8"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="4" lg="4" 
            v-for="(spotlight, i) in spotlights" :key="i">
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="spotlight.img" />
              <v-row align="center">
                <v-col>
                  <v-card-title>
                    {{ spotlight.title }}
                  </v-card-title>

                  <v-card-text class="text--primary">
                    <div>Baldwin Country, Daphine, AL 36526</div>

                    <div><strong>Auction Date</strong> Mar 21,2021</div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col style="background:#f0f0f0" :class="[!$vuetify.breakpoint.xs ? 'pa-12' : 'pa-4']">
        <v-row align="center">
          <v-col cols="10" class="mr-auto">
            <h1>Ending Soon</h1>
          </v-col>
          <v-col cols="2" v-if="!$vuetify.breakpoint.xs">
            <a href="">VIEW ALL</a>
          </v-col>
        </v-row>
        <v-row class="pt-8"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"  
        >
          <v-col :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="3" lg="3" 
            v-for="(feature, i) in features" :key="i">
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="feature.img" />
              <v-row align="center">
                <v-col>
                  <v-card-text>
                    <strong>{{ feature.title }}</strong>
                  </v-card-text>

                  <v-card-text class="text--primary">
                    <div>{{ feature.desc }}</div>

                    <div>{{ feature.city }}</div>
                  </v-card-text>
                </v-col>
                <v-col align="center" align-self="center">
                  <v-icon color="black" left>mdi-hammer</v-icon>
                  <v-card-text><strong>Bid</strong></v-card-text>
                  <v-card-text>20 Hours Left</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col :class="$vuetify.breakpoint.xs?'pa-0':'pa-12'">
        <v-img :class="!$vuetify.breakpoint.xs?'rounded-xl':''" :src="require('../../assets/home/back_find_property.png')">
          <div class="d-flex fill-height align-center pa-4">
            <v-col>
              <h2 class="white--text" :style="$vuetify.breakpoint.xs?'font-size: 14px':''" >Find Properties to Rent Near You</h2>
              <p class="white--text" :style="$vuetify.breakpoint.xs?'font-size: 8px':''" >Explore our interactive map to search for your ideal home or Apartment.<br> 
                When you find the ones you like, bid your price and get the deal.</p>
              <v-btn color="primary" :small="$vuetify.breakpoint.xs">FIND IT NOW</v-btn>
            </v-col>
          </div>
        </v-img>
        
      </v-col>
    </v-container>
  </div>
</template>

<script>
export default {
  title: "Vesta Leese",
  name: "HomePage",
  methods: {
    getAddressData: function (addressData/*, placeResultData, id*/) {
      this.$router.push({path:'/properties/' + addressData.name});
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL,
    cities: [
      {
        city: "New York",
        state: "New York",
        img: require("@/assets/home/dest_newyork.png"),
      },
      {
        city: "San Francisco",
        state: "California",
        img: require("@/assets/home/dest_sanfrancisco.png"),
      },
      {
        city: "Austin",
        state: "Texas",
        img: require("@/assets/home/dest_austin.png"),
      },
      {
        city: "Lake Anna",
        state: "Virginia",
        img: require("@/assets/home/dest_lakeanna.png"),
      },
      {
        city: "Los Angeles",
        state: "Californiat",
        img: require("@/assets/home/dest_losangels.png"),
      },
      {
        city: "San Diego",
        state: "California",
        img: require("@/assets/home/dest_sandiego.png"),
      },
      {
        city: "Houston",
        state: "Texas",
        img: require("@/assets/home/dest_houston.png"),
      },
      {
        city: "Seattle",
        state: "Washington",
        img: require("@/assets/home/dest_seattle.png"),
      },
    ],
    features: [
      {
        title: "Apartment for Rent",
        desc: "222 Hallec St",
        city: "San Fransisco",
        img: require("@/assets/home/featured_1.png"),
      },
      {
        title: "Apartment for Rent",
        desc: "222 Hallec St",
        city: "San Fransisco",
        img: require("@/assets/home/featured_2.png"),
      },
      {
        title: "Apartment for Rent",
        desc: "222 Hallec St",
        city: "San Fransisco",
        img: require("@/assets/home/featured_3.png"),
      },
      {
        title: "Apartment for Rent",
        desc: "222 Hallec St",
        city: "San Fransisco",
        img: require("@/assets/home/featured_4.png"),
      },
    ],
    spotlights: [
      {
        title: "258 Montclair Loop",
        img: require("@/assets/home/spotlight_1.png"),
      },
      {
        title: "258 Montclair Loop",
        img: require("@/assets/home/spotlight_2.png"),
      },
      {
        title: "258 Montclair Loop",
        img: require("@/assets/home/spotlight_3.png"),
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>

</style>

-->