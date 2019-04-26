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
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
      }
    },
    mounted() {
      require('../streaming/index.js');
    },
  }
</script>

<style scoped>
</style>
