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

      <pre>{{movies}}</pre>

  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import store from '../store/index'

  export default {
    name: 'home',
    data(){
      return{
      }
    },
    computed:{
      ...mapState(['movies'])
    },
    created(){
      store.dispatch('getMovies');
    },
    mounted() {
      require('../streaming/index.js');
    },
  }
</script>

<style scoped>
</style>
