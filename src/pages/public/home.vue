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
</style>

<template>
  <div>
    <v-container class="bg-black" fluid>
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
        <h2>
          We Believe that the
          <span class="text-size-42">VestaLease</span> platform is a
          <span class="bold-italic">WIN – WIN – WIN</span>
        </h2>
      </v-card>
    </v-container>
    <v-container fluid>
      <div class="rent-way">
        <h1>
          The New Way of Renting Properties
        </h1>
        <h6>New online auction-based application for booking rental properties</h6>
        <v-img src="@/assets/home/rent-way.png"></v-img>
      </div>
    </v-container>
    <v-container fluid>
      <div class="popular-destination">
        <h4>Popular Destination</h4>
        <v-row class="city-rows">
          <v-col md="3"
            v-for="(city, i) in cities"
            :key="i">
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
    ]
  }),
};
</script>
