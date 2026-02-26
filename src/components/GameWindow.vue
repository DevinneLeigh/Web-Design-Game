<template>
  <div class="game-window">
    <div class="left-side">
      <div class="editor custom-border">
        <CodeEditor />
      </div>
    <div class="instructions custom-border">
      <GameInstructions />
    </div>
    </div>
    <div class="output custom-border">
      <!-- Placeholder for now -->
      <CodeOutput />
    </div>
  </div>
</template>

<script setup>
import CodeEditor from './CodeEditor.vue'
import GameInstructions from './GameInstructions.vue'
import CodeOutput from './CodeOutput.vue';
</script>

