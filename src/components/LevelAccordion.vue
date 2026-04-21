
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

const levels = computed(() => [
  {
    id: 'html-levels',
    name: 'HTML Levels',
    levels: levelStore.categories.htmlLevels
  },
  {
    id: 'css-levels',
    name: 'CSS Levels',
    levels: levelStore.categories.cssLevels
  }
])

</script>

<template>
  <div class="lists">
    <div
      v-for="level in levels"
      :key="level.id"
      class="list"     
    >
      <h2>{{ level.name }}</h2>

      <div class="levels accordion" :id="`level-accordion-${level.id}`">
          <div
          v-for="subLevel in level.levels"
          :key="subLevel.id"
        >
        <h2 class="accordion-header">
          <button 
          class="accordion-button collapsed"
          :class="{ 
            completed: subLevel.completed,
            unlocked: !subLevel.completed && subLevel.unlocked, 
            locked: !subLevel.completed && !subLevel.unlocked 
          }" 
          type="button" data-bs-toggle="collapse"   
          :data-bs-target="`#collapse-${subLevel.id}`"
          :aria-controls="`collapse-${subLevel.id}`">
            <img :src="getLevelImage(subLevel)"/>
            {{ subLevel.title }}
          </button>
        </h2>
        <div
          :id="`collapse-${subLevel.id}`"
          class="accordion-collapse collapse"
          :data-bs-parent="`#level-accordion-${level.id}`"
        >
          <div
          :class="{ 
            completedBody: subLevel.completed,
            unlockedBody: !subLevel.completed && subLevel.unlocked, 
            lockedBody: !subLevel.completed && !subLevel.unlocked,  }"
          class="accordion-body level-body" >
            {{ subLevel.description }}
            <div v-if="subLevel.unlocked || subLevel.completed" class="level-actions">
                <RouterLink :to="`/level/${subLevel.id}`">
                <button class="level-node">
                    {{ subLevel.completed ? "Replay" : "Start" }}
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