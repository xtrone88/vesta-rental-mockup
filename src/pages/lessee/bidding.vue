<template>
  <div class="container">
    <h1 :class="{'h2': true, 'my-12': $vuetify.breakpoint.mdAndUp, 'mb-4': $vuetify.breakpoint.xsAndDown}">Bidding</h1>
        
    <v-divider></v-divider>

    <v-container>
      <v-layout flat v-for="bid in bids" :key="bid.id">
        <v-layout column class="mb-2">
          <v-layout row wrap :class="`bid ${bid.status} my-2`">
            <v-flex xs12 md6 sm12>
              <v-layout col wrap>
                <v-flex xs12 md6 sm6>
                  <v-img width="250px" height="150px" :src="`${bid.image}`" class="rounded-lg"></v-img>
                </v-flex>
                <v-flex xs12 md6 sm6>
                  <v-layout column :fill-height="!$vuetify.breakpoint.xs" :class="{'ml-5': $vuetify.breakpoint.mdOnly, 'mt-4': $vuetify.breakpoint.xsOnly}">
                    <v-layout column>
                      <div class="font-weight-bold" style="font-size:20px">{{bid.title}}</div>
                      <div class="grey--text" style="font-size:16px">{{bid.address1}}</div>
                      <div class="grey--text" style="font-size:16px">{{bid.address2}}</div>
                    </v-layout>
                    <v-layout column style="flex:0">
                      <div class="grey--text mb-0" style="font-size:16px">{{bid.guests}} guests · {{bid.bedrooms}} bedroom · {{bid.beds}} bed · {{bid.baths}} bath </div>
                    </v-layout>
                  </v-layout>
                </v-flex>
              </v-layout>
            </v-flex>

            <v-flex xs12 md6 sm12>
              <v-layout col wrap fill-height>

                <v-flex xs6 md6 sm6>
                  <v-layout column>
                    <v-layout column>
                      <div class="font-weight-bold" style="font-size:20px">Your Bid: ${{bid.price}}</div>
                      <v-layout class="my-2" align-center>
                        <v-icon style="width:20px" color=#12A7C6>mdi-alarm-check</v-icon>
                        <div class="ml-2" style="font-size:16px">{{bid.hoursLeft}} Hrs Left</div>
                      </v-layout>
                    </v-layout>
                    <v-spacer></v-spacer>
                    <v-layout>
                      <v-chip :class="`${bid.status} white--text subtitle-2 px-5`">{{bid.status.toUpperCase()}}</v-chip>
                    </v-layout>
                  </v-layout>
                </v-flex>

                <v-flex xs6 md6 sm6 align-self-center>
                  <v-row>
                    <v-btn :class="`${bid.status} white--text subtitle-2 ml-2`" :height="$vuetify.breakpoint.smAndUp ? '50px' : '40px'">{{$vuetify.breakpoint.xs ? "Increase" : "Increse Bid Now"}}</v-btn>
                  </v-row>
                </v-flex>

              </v-layout>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
        </v-layout>
      </v-layout>
    </v-container>
   
  </div>
</template>

<script>
  export default {

    data() {
      return {
        bids: [
          {
            id: 1,
            image: "https://i.pinimg.com/236x/2e/8e/d5/2e8ed5802f5fe242872b9f24975a77ef.jpg",
            title: "Online Auction - CWCOT",
            address1: "380 Brainard Street",
            address2: "Watertown, NY 13601",
            guests: 3,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            price: 1000,
            hoursLeft: 20,
            status: "winning"
          },
          {
            id: 2,
            image: "https://i.pinimg.com/236x/87/06/47/8706475a1a312afc0d0658df509d0401.jpg",
            title: "Online Auction - CWCOT",
            address1: "380 Brainard Street",
            address2: "Watertown, NY 13601",
            guests: 3,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            price: 1000,
            hoursLeft: 20,
            status: "losing"
          },
          {
            id: 3,
            image: "https://i.pinimg.com/236x/2e/8e/d5/2e8ed5802f5fe242872b9f24975a77ef.jpg",
            title: "Online Auction - CWCOT",
            address1: "380 Brainard Street",
            address2: "Watertown, NY 13601",
            guests: 3,
            bedrooms: 1,
            beds: 1,
            baths: 1,
            price: 1000,
            hoursLeft: 20,
            status: "losing"
          }
        ]
      }
    }
  }
</script>

<style>

.bid.winning{
  border-right: 4px solid #68B73E;
}
.bid.losing{
  border-right: 4px solid #B73E3E;
}

.v-chip.winning{
  background: #68B73E !important;
}
.v-chip.losing{
  background: #B73E3E !important;
}

.v-btn.winning{
  background: #12A7C6 !important;
}
.v-btn.losing{
  background: #C1C1C1 !important;
}

</style>
