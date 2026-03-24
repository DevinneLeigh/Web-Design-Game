
<script setup>
import { useRouter } from "vue-router"
import { worlds } from "@/data/levels"

const router = useRouter()

function goToLevel(levelId) {
  router.push(`/level/${levelId}`)
}
</script>

<template>
  <div class="map">
    <div
      v-for="world in worlds"
      :key="world.id"
      class="world"
    >
      <h2>{{ world.name }}</h2>

      <div class="levels">
        <button
          v-for="level in world.levels"
          :key="level.id"
          @click="goToLevel(level.id)"
          class="level-node"
        >
          {{ level.title }}
        </button>
      </div>
    </div>
  </div>
</template>