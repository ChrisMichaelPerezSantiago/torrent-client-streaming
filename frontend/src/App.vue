<template>
  <div id="app" class="layout-default">
    <NavBar/>
    <br/>
    <router-view/>
    <br/>
    <Footer/>
  </div>
</template>

<script>
  import NavBar from './views/navbar.vue'
  import Footer from './views/footer.vue'

  export default {
    components:{
      NavBar,
      Footer
    }
  }
</script>
