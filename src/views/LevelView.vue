<script setup>
import { ref, computed } from "vue"
import { useRoute } from "vue-router"
import { useLevelStore } from '@/stores/levelStore'
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

const levelStore = useLevelStore()

const level = computed(() =>
  levelStore.findLevelById(route.params.id)
)


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
    title="HINT"
    :message="level?.hint || 'No hint available'"
    buttonText="Close"
    :showConfetti="false"
    @close="closeHintPopup"
    />
    <GameWindow :level="level" />
  </div>
</template>

