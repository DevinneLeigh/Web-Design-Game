<script setup>
const props = defineProps({
  instructions: String
})
</script>

<template>
  <div class="instructions" v-html="instructions">
    
  </div>
</template>
