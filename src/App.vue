<template>
  <Nav></Nav>
  <div class="container py-4">
    <h1 class="mb-4 text-center">Web Design Game</h1>
  </div>
  <GameWindow></GameWindow>
  <Footer></Footer>
</template>

<script setup>
import Nav from './components/Nav.vue';
import GameWindow from './components/GameWindow.vue';
import Footer from './components/Footer.vue';
</script>