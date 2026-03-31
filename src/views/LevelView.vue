<script setup>
import { useRoute } from "vue-router"
import { worlds, playerProject } from "@/data/levels"
import GameWindow from "@/components/GameWindow.vue"

const route = useRoute()

// const level = worlds
//   .flatMap(w => w.levels)
//   .find(l => l.id === route.params.id)

const allLevels = [
  ...worlds.flatMap(w => w.levels),
  ...playerProject
]
const level = allLevels.find(l => l.id === route.params.id)
</script>

<template>
  <div class="level-main">
    <GameWindow :level="level" />
  </div>
</template>

