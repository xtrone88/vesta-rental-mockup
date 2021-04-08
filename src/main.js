import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import Footer from './components/footer';

import titleMixin from './mixins/title.mixin';

Vue.mixin(titleMixin);
Vue.component('Footer', Footer)

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
