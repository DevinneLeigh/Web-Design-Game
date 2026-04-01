
<script setup>
import { useRouter } from "vue-router"
import LevelAccordion from "../components/LevelAccordion.vue"

const router = useRouter()

function goToLevel(levelId) {
  router.push(`/level/${levelId}`)
}
</script>

<template>
  <div>
    <LevelAccordion />
  </div>
</template>