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
          <v-text-field
            label="Enter an address, neighborhood, city or ZIP code"
            background-color="white"
            prepend-inner-icon="mdi-crosshairs-gps"
            append-icon="mdi-magnify"
            single-line
            solo
            reqired
          ></v-text-field>
        </div>
        <h2 v-if="!$vuetify.breakpoint.xs" class="text-center white--text">
          We Believe that the
          <span style="font-size: 32px">Vesta Lease</span> platform is a
          <span><i><b>WIN – WIN – WIN</b></i></span>
        </h2>
      </v-col>
      <v-col v-if="!$vuetify.breakpoint.xs" :class="['text-center', !$vuetify.breakpoint.xs ? 'pa-12' : 'pa-0']">
        <h1>The New Way of Renting Properties</h1>
        <p style="font-size: 14px">
          New online auction-based application for booking rental properties
        </p>
        <v-img src="@/assets/home/rent-way.png"></v-img>
      </v-col>
      <v-col :class="[!$vuetify.breakpoint.xs ? 'pr-12 pl-12' : 'pa-4']">
        <h2>Popular Destination</h2>
        <v-row class="pt-8 mb-4"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="3" lg="3" 
            v-for="(city, i) in cities"
            :key="i">
            <div class="d-flex align-center">
              <img class="img-city" :src="city.img" width="100px" height="100px"/>
              <div class="ml-4">
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
              <a class="white--text" v-if="!$vuetify.breakpoint.xs" href="">VIEW ALL</a>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-6 mb-6"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col  :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="3" lg="3" 
            v-for="(feature, i) in features" :key="i">
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="feature.img" />
              <v-row align="center">
                <v-col class="pr-0 pl-8" cols="8">
                  <div class="mt-4 mb-0 pb-0 card-title">
                    <strong>{{ feature.title }}</strong>
                  </div>

                  <div class="text--primary pt-0 mt-2">
                    <div class="card-subtitle-g">{{ feature.desc }}</div>
                    <div class="card-subtitle-g">{{ feature.city }}</div>
                  </div>
                </v-col>
                <v-col align="center" align-self="center" class="pl-0 pr-4" cols="4">
                  <v-icon color="black" class="pa-0 mt-3" left>mdi-hammer</v-icon>
                  <div class="pa-0 card-text-b"><strong>Bid Now</strong></div>
                  <div class="pa-0 card-text-g mt-2">20 Hours Left</div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col :class="!$vuetify.breakpoint.xs?'pa-12':'pa-4'">
          <h1 class="text-center" :style="$vuetify.breakpoint.xs?'font-size:24px':''">Property Spotlight</h1>
        <v-row class="mt-4 pl-0"
          :style="$vuetify.breakpoint.xs?'display: flex;flex-wrap: nowrap;overflow-y: auto;':''"
        >
          <v-col :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="4" lg="4" 
            v-for="(spotlight, i) in spotlights" :key="i">
            <v-img class="rounded-xl" :src="spotlight.img" />
            <v-row>
              <v-col class="mt-4 mb-4">
                <div><b>{{ spotlight.title }}</b></div>
                <div>Baldwin Country, Daphine, AL 36526</div>
                <div><strong>Auction Date</strong> Mar 21,2021</div>
              </v-col>
            </v-row>
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
          <v-col :cols="$vuetify.breakpoint.xs ? 8 : 3" sm="6" md="3" lg="3" 
            v-for="(feature, i) in features" :key="i">
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="feature.img" />
              <v-row align="center">
                <v-col class="pr-0 pl-8" cols="8">
                  <div class="mt-4 mb-0 pb-0 card-title">
                    <strong>{{ feature.title }}</strong>
                  </div>

                  <div class="text--primary pt-0 mt-2">
                    <div class="card-subtitle-g">{{ feature.desc }}</div>
                    <div class="card-subtitle-g">{{ feature.city }}</div>
                  </div>
                </v-col>
                <v-col align="center" align-self="center" class="pl-0 pr-4" cols="4">
                  <v-icon color="black" class="pa-0 mt-3" left>mdi-hammer</v-icon>
                  <div class="pa-0 card-text-b"><strong>Bid Now</strong></div>
                  <div class="pa-0 card-text-r mt-2">20 Hours Left</div>
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
              <h2 class="white--text mb-1" :style="$vuetify.breakpoint.xs?'font-size: 14px':''" >Find Properties to Rent Near You</h2>
              <p class="white--text mb-4" :style="$vuetify.breakpoint.xs?'font-size: 8px':''" >Explore our interactive map to search for your ideal home or Apartment.<br> 
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
</style>

-->