<script setup>
import { ref } from "vue"
import LevelAccordion from "../components/LevelAccordion.vue"
import Popup from "../components/Popup.vue"

// controls popup
const showLanding = ref(true)

// closes popup
function closeLanding() {
  showLanding.value = false
}
</script>

<template>
  <Popup
    :open="showLanding"
    title="Welcome to the Web Design Game"
    message="This game helps you learn HTML and CSS by completing levels. Each level gives you a task to fix or build something using code. Click Start when you're ready to begin!"
    @close="closeLanding"
  />

  <div>
    <LevelAccordion />
  </div>
</template>