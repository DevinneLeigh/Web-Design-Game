<script setup>
import { useRoute } from "vue-router"
import { worlds } from "@/data/levels"
import GameWindow from "@/components/GameWindow.vue"

const route = useRoute()

const level = worlds
  .flatMap(w => w.levels)
  .find(l => l.id === route.params.id)

</script>

<template>
  <GameWindow :level="level" />
</template>

