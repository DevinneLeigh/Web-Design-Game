<script setup>
import { ref } from "vue"
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Nav></Nav>

  <div class="header">
    <div class="logo">
      <img src ="./assets/images/game-logo.svg">
    </div>
    <div class="title">
      <h1 class="text-center">WEB DESIGN GAME</h1>
    </div>
  </div>

  <div id="main">
    <router-view />
  </div>

  <Footer></Footer>
</template>