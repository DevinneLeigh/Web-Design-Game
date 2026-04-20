
<script setup>
import { RouterLink } from "vue-router"
import { useLevelStore } from '@/stores/levelStore'
import { computed } from 'vue'
import completed from '../assets/images/completed.png'
import unlocked from '../assets/images/unlocked.png'
import locked from '../assets/images/locked.png'

const levelStore = useLevelStore()
levelStore.load()

function getLevelImage(level) {
  if (level.completed) return completed
  if (level.unlocked) return unlocked
  return locked
}

const worlds = computed(() => [
  {
    id: 'world1',
    name: 'World 1',
    levels: levelStore.worlds.world1
  },
  {
    id: 'world2',
    name: 'World 2',
    levels: levelStore.worlds.world2
  }
])

</script>

<template>
  <div class="map">
    <div
      v-for="world in worlds"
      :key="world.id"
      class="world"     
    >
      <h2>{{ world.name }}</h2>

      <div class="levels accordion" :id="`level-accordion-${world.id}`">
          <div
          v-for="level in world.levels"
          :key="level.id"
        >
        <h2 class="accordion-header">
          <button 
          class="accordion-button collapsed"
          :class="{ 
            completed: level.completed,
            unlocked: !level.completed && level.unlocked, 
            locked: !level.completed && !level.unlocked 
          }" 
          type="button" data-bs-toggle="collapse"   
          :data-bs-target="`#collapse-${level.id}`"
          :aria-controls="`collapse-${level.id}`">
            <img :src="getLevelImage(level)"/>
            {{ level.title }}
          </button>
        </h2>
        <div
          :id="`collapse-${level.id}`"
          class="accordion-collapse collapse"
          :data-bs-parent="`#level-accordion-${world.id}`"
        >
          <div
          :class="{ 
            completedBody: level.completed,
            unlockedBody: !level.completed && level.unlocked, 
            lockedBody: !level.completed && !level.unlocked,  }"
          class="accordion-body level-body" >
            {{ level.description }}
            <div v-if="level.unlocked || level.completed" class="level-actions">
                <RouterLink :to="`/level/${level.id}`">
                <button class="level-node">
                    {{ level.completed ? "Replay" : "Start" }}
                </button>
                </RouterLink>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
    <RouterLink to="/level/project1">
    <button class="custom-button">Go to Project</button>
  </RouterLink>
</template>