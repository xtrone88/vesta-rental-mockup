<style lang="scss" scoped>

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-y: auto;

  .card {
    flex: 0 0 auto;
  }
}

#view-on-photo {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50px;
  top: 50px;
  color: white;
}

</style>

<template>
  <div>
    <v-container class="pa-0" fluid>
      <v-col :style="$vuetify.breakpoint.smAndDown?{background:'#222'}:{background:'#000'}" :class="[!$vuetify.breakpoint.xs ? 'pa-16' : 'pa-0']">
        <v-img src="@/assets/home/slider1.png" class="full-width"/>
        <div class="d-flex align-center"
            style="width: 70%;transform: translate(20%, -30%);-ms-transform: translate(20%, -30%);-webkit-transform: translate(20%, -30%);">
          <v-text-field
            label="Enter an address, neighborhood, city or ZIP code"
            background-color="white"
            outlined
            prepend-inner-icon="mdi-crosshairs-gps"
            append-icon="mdi-magnify"
            reqired
          ></v-text-field>
        </div>
        <h2 class="text-center white--text">
          We Believe that the
          <span class="text-size-42">Vesta Lease</span> platform is a
          <span class="bold-italic">WIN – WIN – WIN</span>
        </h2>
      </v-col>
      <div>
        <h1>The New Way of Renting Properties</h1>
        <h6>
          New online auction-based application for booking rental properties
        </h6>
        <v-img src="@/assets/home/rent-way.png"></v-img>
      </div>
      <div>
        <h1>Popular Destination</h1>
        <v-row :class="$vuetify.breakpoint.mobile?'pa-8':''">
          <v-col :cols="3"
            v-for="(city, i) in cities"
            :key="i"
            class="card">
            <div class="d-flex align-center">
              <img class="img-city" :src="city.img"/>
              <div class="ml-4">
                <p class="city-name">
                  {{ city.city }} <br />
                  <span class="state-name">{{ city.state }}</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div>
        <v-row class="pt-12 pb-12">
          <v-col cols="12" md="auto" class="mr-auto">
            <h1>Featured Deals</h1>
          </v-col>
          <v-col cols="12" md="auto" v-if="!$vuetify.breakpoint.mobile">
            <a href="">VIEW ALL</a>
          </v-col>
        </v-row>
        <v-row class="scrolling-wrapper-flexbox pb-12">
          <v-col v-for="(feature, i) in features" :key="i" md="3">
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
      </div>
      <div>
        <v-row class="pt-12 pb-12" align="center">
          <v-col cols="12" md="auto">
            <h1>Property Spotlight</h1>
          </v-col>
        </v-row>
        <v-row class="scrolling-wrapper-flexbox pb-12">
          <v-col v-for="(spotlight, i) in spotlights" :key="i" md="4">
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
      </div>
      <div>
        <v-row class="pt-12 pb-12">
          <v-col cols="12" md="auto" class="mr-auto">
            <h1>Ending Soon</h1>
          </v-col>
          <v-col cols="12" md="auto" v-if="!$vuetify.breakpoint.mobile">
            <a href="">VIEW ALL</a>
          </v-col>
        </v-row>
        <v-row class="scrolling-wrapper-flexbox pb-12">
          <v-col v-for="(feature, i) in features" :key="i" md="3">
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
      </div>
      <div class="v-overlay__content">
        <v-img class="rounded-xl" :src="require('../../assets/home/back_find_property.png')"/>
        <div id="view-on-photo">
          <h2>Find Properties to Rent Near You</h2>
          <p>Explore our interactive map to search for your ideal home or Apartment.<br> 
            When you find the ones you like, bid your price and get the deal.</p>
          <v-btn color="primary">FIND IT NOW</v-btn>
        </div>
      </div>
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
