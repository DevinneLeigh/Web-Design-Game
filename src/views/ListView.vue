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
  <div class="list-main">
    <button
    v-if="!showLandingHelp"
    class="landing-button"
    @click="openLandingHelp">
      ?
    </button>

    <Popup
      :open="showLandingHelp"
      :showConfetti="false"
      title="WELCOME TO THE WEB DESIGN GAME"
      :message="aboutGame"
      @close="closeLandingHelp"/>

    <div class="list-wrapper">
      <LevelAccordion />
    </div>

  </div>
</template>