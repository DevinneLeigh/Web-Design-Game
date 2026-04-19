<script setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
import { worlds, playerProject } from "@/data/levels"
import Popup from "@/components/Popup.vue"
import GameWindow from "@/components/GameWindow.vue"

const route = useRoute()

const showHintPopup = ref(false)
function openHintPopup() {
  showHintPopup.value = true
}
function closeHintPopup() {
  showHintPopup.value = false
}

const allLevels = [
  ...worlds.flatMap(w => w.levels),
  ...playerProject
]
const level = allLevels.find(l => l.id === route.params.id)


</script>

<template>
  <div class="level-main">
    <button
    v-if="!showLandingHelp && $route.path !== '/'"
    class="back-button"
    @click="$router.back()">
      ← Back
    </button>
    <button
    v-if="!showHintPopup"
    class="landing-button"
    @click="openHintPopup">
      ?
    </button>
    <Popup
    :open="showHintPopup"
    title="Hint"
    :message="allLevels.find(l => String(l.id) === String(route.params.id))?.hint || 'No hint available'"
    buttonText="Close"
    :showConfetti="false"
    @close="closeHintPopup"
    />
    <GameWindow :level="level" />
  </div>
</template>

