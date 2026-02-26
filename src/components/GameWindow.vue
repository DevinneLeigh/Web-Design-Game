<template>
  <div class="game-window">
    <div class="left-side">
      <div class="instructions custom-border">
        <GameInstructions />
      </div>
      <div class="editor custom-border">
        <CodeEditor ref="editorRef" />
      </div>
      <Button 
        label="Save Code" 
        buttonClass="custom-button" 
        @action="handleSave" />
    </div>
    <div class="output">
      <CodeOutput />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CodeEditor from './CodeEditor.vue'
import GameInstructions from './GameInstructions.vue'
import CodeOutput from './CodeOutput.vue'
import Button from './Button.vue'

const editorRef = ref(null)

function handleSave() {
  if (editorRef.value) {
    const content = editorRef.value.getContent()
    localStorage.setItem("editorContent", content)
    alert("Code saved!")
  }
}
</script>



