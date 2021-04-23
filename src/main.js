import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib";
import moment from "moment";

import * as VueGoogleMaps from "vue2-google-maps";
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';

import router from "./router";
import store from "./store/store";

import titleMixin from "./mixins/title.mixin";
import helpers from "./helpers";
import "./api";

// Mixins
// If this continues to grow move it out of here
Vue.mixin(titleMixin);

// Filters
// If this continues to grow move it out of here
Vue.filter("formatDateTime", function(value) {
  if (value) {
    return moment(String(value)).format("YYYY-MM-DD hh:mm a");
  }
});

// Config settings
Vue.config.productionTip = false;

Vue.use(helpers);

Vue.use(VueTelInputVuetify, {
  vuetify
});

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_TOKEN,
    libraries: "places"
  },
  installComponents: true
});

Vue.use(VuetifyGoogleAutocomplete, {
  vueGoogleMapsCompatibility: true,
});

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
