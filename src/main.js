import Vue from "vue";
import App from "./app.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

import titleMixin from "./mixins/title.mixin";
Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
