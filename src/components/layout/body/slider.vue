<template>
    <v-col :class="[!$vuetify.breakpoint.xs ? 'pa-12 dark-backcolor' : 'pa-0 light-backcolor']">
        <v-img src="@/assets/home/slider1.png" class="full-width">
          <div v-if="$vuetify.breakpoint.xs" class="d-flex fill-height pl-4">
            <v-col>
              <h3 class="white--text">
                We Believe that the <br>
                <span>Vesta Lease</span> platform is a<br>
                <span class="font-weight-bold">WIN – WIN – WIN</span>
              </h3>
            </v-col>
          </div>
        </v-img>
        <div class="d-flex align-center"
            :style="!$vuetify.breakpoint.xs?'width: 70%;transform: translate(20%, -30%);-ms-transform: translate(20%, -30%);-webkit-transform: translate(20%, -30%);':''">
          <v-card :class="[!$vuetify.breakpoint.xs ? 'pa-2' : 'pa-0']" elevation="0" style="width:100%">
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
</template>

<script>

export default {
  name: "Slider",

  components: {},

  data: () => ({
    
  }),

  computed: {
  },

  methods: {
    getAddressData: function (addressData/*, placeResultData, id*/) {
      this.$router.push({path:'/properties/' + addressData.name});
    },
  },
};
</script>

<style scoped>
.dark-backcolor{
  background-color: #222;
}
.light-backcolor{
  background-color: #ffffff;
}
</style>