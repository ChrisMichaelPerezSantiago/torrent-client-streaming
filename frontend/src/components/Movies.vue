<template>
  <div>
    <router-link :to="{name: 'MoviesNowPlaying' , params:{id: data.id}}">
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
          seeders: {{data.seeders}} &nbsp
        <i class="fas fa-leaf"></i>
          leechers: {{data.leechers}}
      </p>
      </router-link>
  </div>
</template>


<script>
  export default {
    props: ['data']
  }
</script>

<style scoped>
  a{
    text-decoration: none !important;
    color: inherit !important;
  }
</style>
