<template>
  <div id="app">
   <AppNavbar />
    <div  class="container my-3">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
      AppNavbar
  }
}
</script>

<style scoped>

</style>
