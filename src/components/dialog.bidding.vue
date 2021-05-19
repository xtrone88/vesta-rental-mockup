<template>
  <v-dialog
    v-model="show"
    transition="dialog-bottom-transition"
    max-width="700"
  >
    <v-card class="rounded-xl">
      <v-toolbar flat height="80">
        <v-row >
          <v-col cols="10" sm="6" offset-sm="3">
            <h1 class="text-center text-md-h4 font-weight-bold">Place a Bid</h1>
          </v-col>
          <v-col cols="1" sm="1" xs="1" offset-sm="2">
            <v-btn
              icon
              @click.stop="show = false"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>                            
      </v-toolbar>
      <v-divider></v-divider>

      <div :class="['container', !$vuetify.breakpoint.xs?'pr-12 pl-12':'pr-4 pl-4']">
        <v-row>
          <v-col>
            <h2>Place Your Bid</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4">
            <v-btn block class="cyan white--text"> bid us $900 </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block class="cyan white--text"> bid us $100 </v-btn>
          </v-col>
          <v-col cols="12" sm="4">
            <v-btn block class="cyan white--text"> bid us $1100 </v-btn>
          </v-col>          
        </v-row>
        <v-row class="align-center">
          <v-col>
            <v-divider class="divider"></v-divider>
          </v-col>
          <v-col cols="2" class="text-center font-weight-bold">
            OR
          </v-col>
          <v-col>
            <v-divider class="divider"></v-divider>
          </v-col>
        </v-row> 
        <v-row class="mt-0">
          <v-col>
            <div class="d-flex align-center">
              <v-text-field
                counter="25"
                hint="Minium of $ 5 Increment"
                label="Your Bid Amount"
              ></v-text-field>
              <span>$</span>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-icon color="green">mdi-check</v-icon>
            <span class="light-green--text accent-3">Property not Reserved - Available for Auction</span>                              
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4">
            <v-row>
              <v-col class="pt-1 pb-1">
                <span class="font-weight-bold">Auction Remaining Time</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-1 pb-1">
                <v-icon class="pr-2" color="primary">mdi-clock</v-icon>
                <span class="text-simple">3d 23:26:32</span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="4">
            <v-row>
              <v-col class="pt-1 pb-1">
                <span class="font-weight-bold">Number of Bids</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="pt-1 pb-1">
                <v-icon color="primary" class="rotate-270" left>mdi-hammer</v-icon>
                <span class="text-simple" > 100 </span>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="4" :class="!$vuetify.breakpoint.xs?'text-end pt-10':'text-start'">
            <a class="text-end" href="/">View Bid History</a>
          </v-col>
        </v-row>
        <v-row justify="space-between">
          <v-col cols="12" sm="5" >
            <v-btn block class="mt-0 green white--text" @click.stop="show = false"> BID </v-btn>
          </v-col>
          <v-col cols="12" sm="5" >
            <v-btn block class="mt-0 cyan white--text" @click.stop="show = false"> LEASE IT FOR $1299 </v-btn>
          </v-col>
        </v-row>     
      </div>
      <div style="flex: 1 1 auto;"></div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "BiddingDialog",
  props: {
     value: Boolean
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
         this.$emit('input', value)
      }
    }
  }
}
</script>

<style scoped>
.divider {
  border-top-width: 2px;
}
</style>