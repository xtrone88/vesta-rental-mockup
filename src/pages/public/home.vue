<style lang="scss" scoped>
.container {
  padding: 0px 120px;
}
.container.bg-black {
  background-color: black;
  color: white;
  & > .v-card {
    background-color: black;
    color: white;
  }
}
.container.bg-grey {
  background-color: grey;
  color: white;
  & > .v-card {
    background-color: grey;
    color: white;
  }
}
.home-intro {
  padding-top: 119px;
  padding-bottom: 67px;
  & > .v-img {
    border-radius: 20px;
  }
  & > h2 {
    margin-top: 81px;
    font-size: 32px;
    text-align: center;
    & .text-size-42 {
      font-size: 42px;
    }
    & .bold-italic {
      font-weight: bold;
      font-style: italic;
    }
  }
  & div.search-bar {
    display: inline-block;
    padding: 24px 4px 24px 21px;
    max-width: 870px;
    width: 100%;
    height: 80px;
    background-color: white;
    border-radius: 4px;
    transform: translate(0, -50%);
    -ms-transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    & i.v-icon {
      font-size: 32px;
      color: rgba(#000000, 0.54);
    }
  }
}
.rent-way {
  padding: 0px 80px;
  margin-top: 119px;
  & h1 {
    font-size: 50px;
    text-align: center;
  }
  & h6 {
    margin-top: 20px;
    margin-bottom: 96px;
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }
}
.popular-destination {
  margin-top: 112px;
  h4 {
    font-size: 32px;
  }
  & div.city-rows {
    margin-top: 66px;
  }
  & p.city-name {
    font-weight: bold;
    font-size: 28px;
    line-height: 1;
  }
  & span.state-name {
    font-weight: normal;
    font-size: 20px;
  }
}

.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  .card {
    flex: 0 0 auto;
  }
}

</style>

<template>
  <div>
    <v-container class="bg-black pa-4 my-10" fluid>
      <v-card class="home-intro">
        <v-img
          src="@/assets/home/slider1.png"
          class="full-width"
        ></v-img>
        <div class="text-center">
          <div class="search-bar" style="height:100%">
            <div class="d-flex align-center">
              <v-icon left dark>mdi-crosshairs-gps</v-icon>
              <v-text-field
                label="Enter an address, neighborhood, city or ZIP code"
                reqired
              ></v-text-field>
              <v-icon right dark>mdi-magnify</v-icon>
            </div>
          </div>
        </div>
        <h2 v-if="!$vuetify.breakpoint.mobile">
          We Believe that the
          <span class="text-size-42">VestaLease</span> platform is a
          <span class="bold-italic">WIN – WIN – WIN</span>
        </h2>
      </v-card>
    </v-container>
    <v-container v-if="!$vuetify.breakpoint.mobile" class="pa-4 my-10" fluid>
      <div class="rent-way">
        <h1>
          The New Way of Renting Properties
        </h1>
        <h6>New online auction-based application for booking rental properties</h6>
        <v-img src="@/assets/home/rent-way.png"></v-img>
      </div>
    </v-container>
    <v-container class="pa-4 my-10" fluid>
      <div class="popular-destination">
        <h4>Popular Destination</h4>
        <v-row v-if="!$vuetify.breakpoint.mobile" class="city-rows">
          <v-col cols="3"
            v-for="(city, i) in cities"
            :key="i"
            class="card">
            <div class="d-flex align-center">
              <img :src="city.img"/>
              <div class="ml-4">
                <p class="city-name">
                  {{city.city}} <br>
                  <span class="state-name">{{city.state}}</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row v-if="$vuetify.breakpoint.mobile" class="scrolling-wrapper-flexbox city-rows">
          <v-col cols="12"
            v-for="(city, i) in cities"
            :key="i"
            class="card">
            <div class="d-flex align-center">
              <img :src="city.img"/>
              <div class="ml-4">
                <p class="city-name">
                  {{city.city}} <br>
                  <span class="state-name">{{city.state}}</span>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container class="bg-black pa-4 my-10" fluid>
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
          <v-col 
            v-for="(feature, i) in features"
            :key="i"
            md="3"
          >
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="feature.img"/>
              <v-row align="center">
                <v-col>
                  <v-card-text>
                    <strong>{{ feature.title }}</strong>
                  </v-card-text>

                  <v-card-text class="text--primary">
                    <div> {{ feature.desc }} </div>

                    <div> {{ feature.city }} </div>
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
    </v-container>
    <v-container class="pa-4 my-10" fluid>
      <div>
        <v-row class="pt-12 pb-12" align="center">
          <v-col cols="12" md="auto">
            <h1>Property Spotlight</h1>
          </v-col>
        </v-row>
        <v-row class="scrolling-wrapper-flexbox pb-12">
          <v-col 
            v-for="(spotlight, i) in spotlights"
            :key="i"
            md="4"
          >
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="spotlight.img"/>
              <v-row align="center">
                <v-col>
                  <v-card-title>
                    {{ spotlight.title }}
                  </v-card-title>

                  <v-card-text class="text--primary">
                    <div> Baldwin Country, Daphine, AL 36526 </div>

                    <div> <strong>Auction Date</strong> Mar 21,2021 </div>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-container class="bg-grey pa-4 my-10" fluid>
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
          <v-col 
            v-for="(feature, i) in features"
            :key="i"
            md="3"
          >
            <v-card class="rounded-xl mx-auto pa-0">
              <v-img class="rounded-xl" :src="feature.img"/>
              <v-row align="center">
                <v-col>
                  <v-card-text>
                    <strong>{{ feature.title }}</strong>
                  </v-card-text>

                  <v-card-text class="text--primary">
                    <div> {{ feature.desc }} </div>

                    <div> {{ feature.city }} </div>
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
    </v-container>
    <v-container class="pt-12 pb-9 pa-4 my-10" fluid>
      <div>
        <v-card color="black" class="rounded-xl mx-auto pa-0" height="500px">
          <v-row align="center">
            <v-col md="6" class="white--text pa-15">
              <h2>Find Properties to Rent Near You</h2>
              <p>Explore our interactive map to search for your ideal home or Apartment. 
                When you find the ones you like, bid your price and get the deal.</p>
              <v-btn color="primary">FIND IT NOW</v-btn>
            </v-col>
            <v-col md="6">
              <v-img class="rounded-xl" :src="require('../../assets/home/back_find_property.png')"/>
            </v-col>
          </v-row>
        </v-card>
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
    'cities': [
      {city:"New York", state:"New York", img:require("@/assets/home/dest_newyork.png")},
      {city:"San Francisco", state:"California", img:require("@/assets/home/dest_sanfrancisco.png")},
      {city:"Austin", state:"Texas", img:require("@/assets/home/dest_austin.png")},
      {city:"Lake Anna", state:"Virginia", img:require("@/assets/home/dest_lakeanna.png")},
      {city:"Los Angeles", state:"Californiat", img:require("@/assets/home/dest_losangels.png")},
      {city:"San Diego", state:"California", img:require("@/assets/home/dest_sandiego.png")},
      {city:"Houston", state:"Texas", img:require("@/assets/home/dest_houston.png")},
      {city:"Seattle", state:"Washington", img:require("@/assets/home/dest_seattle.png")}
    ],
    'features': [
      {title:"Apartment for Rent", desc:"222 Hallec St", city:"San Fransisco", img:require("@/assets/home/featured_1.png")},
      {title:"Apartment for Rent", desc:"222 Hallec St", city:"San Fransisco", img:require("@/assets/home/featured_2.png")},
      {title:"Apartment for Rent", desc:"222 Hallec St", city:"San Fransisco", img:require("@/assets/home/featured_3.png")},
      {title:"Apartment for Rent", desc:"222 Hallec St", city:"San Fransisco", img:require("@/assets/home/featured_4.png")},
    ],
    'spotlights': [
      {title:"258 Montclair Loop", img:require("@/assets/home/spotlight_1.png")},
      {title:"258 Montclair Loop", img:require("@/assets/home/spotlight_2.png")},
      {title:"258 Montclair Loop", img:require("@/assets/home/spotlight_3.png")},
    ]
  }),
};
</script>
