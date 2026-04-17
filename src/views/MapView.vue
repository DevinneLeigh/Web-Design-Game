<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { aboutGame } from "@/data/game"
import LevelAccordion from "../components/LevelAccordion.vue"
import Popup from '@/components/Popup.vue'
const route = useRoute()

const showLandingHelp = ref(false)

function openLandingHelp() {
  showLandingHelp.value = true
}
function closeLandingHelp() {
  showLandingHelp.value = false
}
</script>

<template>
  <div class="map-main">
    <button
    v-if="!showLandingHelp"
    class="landing-button"
    @click="openLandingHelp">
      ?
    </button>

  <Popup
    :open="showLandingHelp"
    :showConfetti="false"
    title="Welcome to the Web Design Game"
    :message="aboutGame"
    @close="closeLandingHelp"/>

    <div class="map-wrapper">
      <LevelAccordion />
    </div>

  </div>
</template>