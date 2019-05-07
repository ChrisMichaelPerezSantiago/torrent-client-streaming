<template>
  <div>
    <h1>Show</h1>
    <h2>{{id}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'ShowsNowPlaying',
    data(){
      return{
        id: this.$route.params.id,
      };
    }
  }
</script>