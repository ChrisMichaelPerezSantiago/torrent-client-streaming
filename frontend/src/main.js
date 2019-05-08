import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import Buefy from 'buefy'

Vue.config.productionTip = false;


Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")