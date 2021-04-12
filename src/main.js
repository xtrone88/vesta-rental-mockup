import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTelInputVuetify from 'vue-tel-input-vuetify/lib';

import router from './router';
import store from './store/store';

import titleMixin from './mixins/title.mixin';
import helpers from './helpers';
import './api'

Vue.mixin(titleMixin);
Vue.use(helpers);

Vue.config.productionTip = false;

Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
