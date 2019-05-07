import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Paginate from 'vuejs-paginate';

Vue.config.productionTip = false;

Vue.component('paginate' , Paginate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")