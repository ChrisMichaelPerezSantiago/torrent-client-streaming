<template>
  <div>
    <h1>Movie</h1>
    <h2>{{id}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'MoviesNowPlaying',
    data(){
      return{
        id: this.$route.params.id,
      };
    }
  }
</script>