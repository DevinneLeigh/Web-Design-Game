
<script setup>
import { RouterLink } from "vue-router"
import { worlds } from "@/data/levels"

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
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"   
          :data-bs-target="`#collapse-${level.id}`"
          :aria-controls="`collapse-${level.id}`">
            {{ level.title }}
          </button>
        </h2>
        <div
          :id="`collapse-${level.id}`"
          class="accordion-collapse collapse"
          :data-bs-parent="'#level-accordion'"
        >
          <div class="accordion-body">
            {{ level.description }}
            <div class="level-actions">
              <button
                @click="goToLevel(level.id)"
                class="level-node" 
              >
                Go to level
              </button>
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