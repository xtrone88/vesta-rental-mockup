<template>
  <v-col
    :class="[
      !$vuetify.breakpoint.xs ? 'pa-12 dark-backcolor' : 'pa-0 light-backcolor',
      'position-relative',
    ]"
  >
    <v-container class="pa-0">
      <v-img src="@/assets/home/slider1.png" class="full-width">
        <div v-if="$vuetify.breakpoint.xs" class="d-flex fill-height pl-4">
          <v-col>
            <h3 class="white--text">
              We Believe that the <br />
              <span>Vesta Lease</span> platform is a<br />
              <span class="font-weight-bold">WIN – WIN – WIN</span>
            </h3>
          </v-col>
        </div>
      </v-img>
      <div
        :class="[
          'd-flex-column',
          'align-center',
          !$vuetify.breakpoint.xs ? 'search-position' : 'search-position-mobile',
        ]"
      >
        <h2 v-if="!$vuetify.breakpoint.xs" class="text-center white--text">
          We Believe that the
          <span style="font-size: 32px">Vesta Lease</span> platform is a
          <span
            ><i><b>WIN – WIN – WIN</b></i></span
          >
        </h2>

        <div :class="[!$vuetify.breakpoint.xs ? 'white--text pa-2' : 'px-5']">
          <vuetify-google-autocomplete
            id="map"
            ref="address"
            class="pa-0 mb-0"
            prepend-icon="mdi-crosshairs-gps"
            placeholder="Enter an address, neighborhood, city or ZIP code"
            v-on:placechanged="getAddressData"
          >
          </vuetify-google-autocomplete>
        </div>
      </div>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: "Slider",

  components: {},

  data: () => ({
    
  }),

  computed: {},

  watch: {
    
  },

  methods: {
    getAddressData: function (addressData /*, placeResultData, id*/) {
      this.$router.push({ path: "/properties/" + addressData.name });
    },
  },
};
</script>

<style scoped>
.dark-backcolor {
  background-color: #222;
}
.light-backcolor {
  background-color: #ffffff;
}
.position-relative {
  position: relative;
}
.search-position {
  position: absolute;
  top: 40%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -30%);
  -ms-transform: translate(-50%, -30%);
  -webkit-transform: translate(-50%, -30%);
  background-color: #7f7f7f44;
}
.search-position-mobile {
  background-color: white;
}
</style>

<style>
.white--text input,
.white--text .v-icon,
.white--text input::placeholder {
  color: white !important;
  border-color: white !important;
}
.white--text input::-webkit-input-placeholder {
  color: white !important;
}
.white--text input:-ms-input-placeholder {
  color: white !important;
}
.white--text .v-input__slot:before,
.white--text .v-input__slot:after {
  border-color: white !important;
}
</style>
