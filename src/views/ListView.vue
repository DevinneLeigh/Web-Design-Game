<script setup>
  import { ref, computed } from "vue"
  import { useRoute } from "vue-router"
  import { useRouter } from "vue-router"
  import { aboutGame } from "@/data/game"
  import { useLevelStore } from '@/stores/levelStore'
  import LevelAccordion from "../components/LevelAccordion.vue"
  import Popup from '@/components/Popup.vue'
  const route = useRoute()
  const router = useRouter()

  const showLandingHelp = ref(false)
  const levelStore = useLevelStore()

  function openLandingHelp() {
    showLandingHelp.value = true
  }
  function closeLandingHelp() {
    showLandingHelp.value = false
  }

  const latestUnlockedProject = computed(() => {
    const projects = levelStore.categories.playerProject

    if (!projects) return null

    const unlocked = projects.filter(p => p.unlocked)

    if (unlocked.length === 0) return null

    unlocked.sort((a, b) => {
      const getNum = id => parseInt(id.replace(/\D/g, ""))
      return getNum(b.id) - getNum(a.id)
    })

    return unlocked[0] 
  })

  function goToLatestProject() {
    if (!latestUnlockedProject.value) return
    router.push(`/level/${latestUnlockedProject.value.id}`)
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
    <button
      v-if="latestUnlockedProject"
      class="project-button"
      @click="goToLatestProject"
    >
      Project →
    </button>
  </div>
</template>