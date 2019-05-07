<template>
  <div>
    <form>
      <label for="torrentId"> Stream file </label>
      <input name="torrentId" placeholder="magnet: ">
      <button type="submit">Download</button>
    </form>
      <h3>Log</h3>
      <div class="speed"></div>
      <div class="log"></div>

      <hr style="margin: 0 0 3rem;">

      <div class="bd-content">
        <div class="bd-links">
          <div class="bd-link" v-for="data in movies" :key="data.id">
            <router-link  :to="{name: 'MoviesNowPlaying' , params:{id: data.id}}">
              <p class="bd-link-surtitle">
                {{data.uploadDate}}
              </p>
              <h2 class="bd-link-name">
                <figure class="bd-link-figure">
                  <span class="bd-link-icon has-text-link">
                    <i class="fab fa-magento"></i>
                  </span>
                </figure>
                {{data.name}}
              </h2>
              <p class="bd-link-subtitle">
                {{data.size}} &nbsp
                <i class="fas fa-seedling" style="color: green;"></i>
                  seeder: {{data.seeders}} &nbsp
                <i class="fas fa-leaf"></i>
                  leechers: {{data.leechers}}
              </p>
              </router-link>
            </div>
          </div>
      </div>
    <paginate
      class="paginator-container"
      v-model="moviePage"
      :page-count="movies.length"
      :page-range="3"
      :margin-pages="2"
      :click-handler="nextMovie"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>

    <hr style="margin: 0 0 3rem;">

    <div class="bd-content">
        <div class="bd-links">
          <div class="bd-link" v-for="data in tvshow" :key="data.id">
            <router-link  :to="{name: 'ShowsNowPlaying' , params:{id: data.id}}">
              <p class="bd-link-surtitle">
                {{data.uploadDate}}
              </p>
              <h2 class="bd-link-name">
                <figure class="bd-link-figure">
                  <span class="bd-link-icon has-text-link">
                    <i class="fab fa-magento"></i>
                  </span>
                </figure>
                {{data.name}}
              </h2>
              <p class="bd-link-subtitle">
                {{data.size}} &nbsp
                <i class="fas fa-seedling" style="color: green;"></i>
                  seeder: {{data.seeders}} &nbsp
                <i class="fas fa-leaf"></i>
                  leechers: {{data.leechers}}
              </p>
              </router-link>
            </div>
          </div>
      </div>
    <paginate
      class="paginator-container"
      v-model="showPage"
      :page-count="tvshow.length"
      :page-range="3"
      :margin-pages="2"
      :click-handler="nextShow"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'">
    </paginate>

  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import store from '../store/index'

  export default {
    name: 'home',
    data: () => ({
      moviePage: 0,
      showPage: 0
    }),
    computed:{
      ...mapState(['movies' , 'tvshow'])
    },
    created(){
      store.dispatch('getMovies');
      store.dispatch('getTvShow');
    },
    methods:{
      nextMovie(){
        this.$store.dispatch('getMovies' , this.moviePage);
      },
      nextShow(){
        this.$store.dispatch('getTvShow' , this.showPage);
      }
    },
    mounted() {
      require('../streaming/index.js');
      require('../js/bulma.js')
    },
  }
</script>

<style scoped>
  a{
    text-decoration: none !important;
    color: inherit !important;
  }

  .paginator-container{
    display: block;
    text-align: center;
    text-decoration: none !important;

  }
</style>
