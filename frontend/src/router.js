import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/home.vue';
import MoviesNowPlaying from './views/MoviesNowPlaying.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },{
      path: '/MoviesNowPlaying/:id',
      name:'MoviesNowPlaying',
      component: MoviesNowPlaying
    }
  ]
});