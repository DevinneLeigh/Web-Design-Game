<script setup>
import { ref } from "vue"
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Nav></Nav>

  <div class="header">
    <h1 class="text-center">WEB DESIGN GAME</h1>
  </div>

  <div id="main">
    <router-view />
  </div>

  <Footer></Footer>
</template>