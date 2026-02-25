<template>
  <div class="game-window">
    <div class="left-side">
      <div class="editor">
        <CodeEditor />
      </div>
    <div class="instructions-wrapper">
      <!-- Placeholder for now -->
      <div class="instructions"></div>
    </div>
    </div>
    <div class="output-wrapper">
      <!-- Placeholder for now -->
      <div class="output"></div>
    </div>
  </div>
</template>

<script setup>
import CodeEditor from './CodeEditor.vue'
</script>

