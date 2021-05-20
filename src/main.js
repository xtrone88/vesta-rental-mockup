import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import moment from "moment";

import * as VueGoogleMaps from "vue2-google-maps";
import VuetifyGoogleAutocomplete from "vuetify-google-autocomplete";

import router from "./router";
import store from "./store/store";

import titleMixin from "./mixins/title.mixin";
import helpers from "./helpers";
import "./api";

import "@aws-amplify/ui-vue";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import awsconfig from "./aws-exports";
// import { applyPolyfills, defineCustomElements } from "@aws-amplify/ui-components/loader";

Amplify.configure(aws_exports);
Amplify.configure(awsconfig);
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

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

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_TOKEN,
    libraries: "places"
  },
  installComponents: true
});

Vue.use(VuetifyGoogleAutocomplete, {
  vueGoogleMapsCompatibility: true
});

// import { StripePlugin } from "@vue-stripe/vue-stripe";

// const options = {
//   pk: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
//   stripeAccount: process.env.VUE_APP_STRIPE_ACCOUNT
//   // apiVersion: process.env.API_VERSION,
//   // locale: process.env.LOCALE
// };

// Vue.use(StripePlugin, options);

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");
