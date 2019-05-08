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
            <Movies :data="data"/>            
          </div>
           <b-pagination
            class="paginator-container"
            :total="100"
            :current.sync="moviePage"
            :simple="false"
            :per-page="10"
            order="is-centered"
            @change="nextMovie">
          </b-pagination>
        </div>
      </div>

   
    <hr style="margin: 0 0 3rem;">

    <div class="bd-content">
      <div class="bd-links">
        <div class="bd-link" v-for="data in tvshow" :key="data.id">
          <Shows :data="data"/>  
        </div>
         <b-pagination
          class="paginator-container"
          :total="100"
          :current.sync="showPage"
          :simple="false"
          :per-page="10"
          order="is-centered"
          @change="nextShow">
        </b-pagination>
      </div>
    </div>


  </div>
</template>

<script>
  import Movies from '../components/Movies.vue'
  import Shows from '../components/Shows.vue'
  import {mapState} from 'vuex';
  import store from '../store/index'

  export default {
    name: 'home',
    components:{ Movies , Shows },
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
  .paginator-container{
    float: left;
    text-decoration: none;
  }
</style>
