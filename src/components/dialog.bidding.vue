<template>
  <v-dialog
    v-model="show"
    transition="dialog-bottom-transition"
    max-width="700"
  >
    <v-card class="rounded-xl">
      <v-toolbar flat height="100">
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
      <v-container>
        <v-row>
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
          <v-col cols="12" sm="10" offset-sm="1">
            <v-icon color="green">mdi-check</v-icon>
            <span class="font-weight-bold light-green--text accent-3">Property not Reserved - Available for Auction</span>                              
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" offset-sm="1">
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
          <v-col  cols="12" sm="5" class="pb-0">
            <v-row>
              <v-col class="pt-1 pb-1">
                <span class="font-weight-bold">Number of Bids</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="4" class="pt-1 pb-1">
                <v-icon color="primary" class="rotate-270" left
                              >mdi-hammer</v-icon>
                <span class="text-simple" > 100 </span>
              </v-col>
              <v-col cols="12" sm="6" class="pt-1 pb-1">
                <a href="/" class="subtitle-2">View Bid History</a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="4" offset-sm="2" class="pt-0 pr-2 pl-2 pb-0">
            <v-btn block class="mt-4 green white--text" @click.stop="show = false"> BID </v-btn>
          </v-col>
          <v-col cols="12" sm="4" class="pt-0 pr-2 pl-2 pb-6">
            <v-btn block class="mt-4 cyan white--text" @click.stop="show = false"> LEASE IT FOR $1299 </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <div style="flex: 1 1 auto;"></div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
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