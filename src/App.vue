
<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <!-- <div class="wrapper"> -->
      <HelloWorld/>
      <br/>
      <muscle/>
      <br/>
      <page/>
      <br/>
      <pie/>
      <!-- <nav> -->
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <!-- <RouterLink to="/about">About</RouterLink> -->
      <!-- </nav> -->
    <!-- </div> -->
  <!-- </header> -->
<!-- <div id='container'></div> -->
  <!-- <RouterView /> -->
</template>
<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/line-Chart.vue'
import muscle from './components/muscle.vue'
import page from './components/Check-Page.vue'
import pie from './components/Pie-Chart.vue'
</script>

<style scoped>
</style>
