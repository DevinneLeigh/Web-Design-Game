<script setup>
import { ref } from "vue"
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'
import Popup from './components/Popup.vue'

const showLandingHelp = ref(false)

function openLandingHelp() {
  showLandingHelp.value = true
}

function closeLandingHelp() {
  showLandingHelp.value = false
}
</script>

<template>
  <button
    class="landing-button"
    @click="openLandingHelp"
  >
    ?
  </button>

  <Popup
    :open="showLandingHelp"
    :showConfetti="false"
    title="Welcome to the Web Design Game"
    message="Learn web design by playing through interactive HTML and CSS coding challenges."
    @close="closeLandingHelp"
  />

  <Nav></Nav>

  <div class="container py-4">
    <h1 class="mb-4 text-center">Web Design Game</h1>
  </div>

  <div id="main">
    <router-view />
  </div>

  <Footer></Footer>
</template>