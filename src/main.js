import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Footer from './components/layout/footer/footer';
import store from './store/store';

import titleMixin from './mixins/title.mixin';
import './api'

Vue.mixin(titleMixin);
Vue.component('Footer', Footer)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
