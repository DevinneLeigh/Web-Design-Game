<script setup>
import { ref } from "vue"
import LevelAccordion from "../components/LevelAccordion.vue"
import Popup from "../components/Popup.vue"

const showLanding = ref(true)

function closeLanding() {
  showLanding.value = false
}
</script>

<template>
  <Popup
    :open="showLanding"
    title="Welcome to the Web Design Game"
    message="Learn web design by playing through interactive HTML and CSS coding challenges."
    @close="closeLanding"
  />

  <div>
    <LevelAccordion />
  </div>
</template>