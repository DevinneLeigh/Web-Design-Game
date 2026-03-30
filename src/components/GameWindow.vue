<template>
  <div v-if="!level">
      <p>Level not found. Please select a level from the map.</p>
  </div>
  <div class="game-window" v-else>
    <div class="left-side">
      <div class="instructions custom-border">
        <GameInstructions :instructions="level.instructions" />
      </div>
      <div class="editor-section">
        <div class="editor-tabs">
          <button :class="{ active: activeTab === 'html' }" @click="activeTab = 'html'">HTML</button>
          <button :class="{ active: activeTab === 'css' }" @click="activeTab = 'css'">CSS</button>
        </div>
        <div class="editor custom-border">

          <CodeEditor
            v-if="activeTab === 'html'"
            v-model="htmlCode"
            language="html" 
          />
          <CodeEditor
            v-if="activeTab === 'css'"
            v-model="cssCode"
            language="css" 
          />
        </div>
        <div class="save-button">
          <Button 
            label="Save Code" 
            buttonClass="custom-button" 
            @action="handleSave" ></Button>
        </div>
      </div>
    </div>
    <div class="output">
      <iframe class="preview" :srcdoc="previewDoc"></iframe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CodeEditor from './CodeEditor.vue'
import GameInstructions from './GameInstructions.vue'
import Button from './Button.vue'

const activeTab = ref('html')

const props = defineProps({
  level: Object
})

const htmlCode = ref(props?.level?.starterCode?.html)
const cssCode = ref(props?.level?.starterCode?.css)



const previewDoc = computed(() => `
  <html>
    <head>
      <style>${cssCode.value}</style>
    </head>
    <body>
      ${htmlCode.value}
    </body>
  </html>
`)


function handleSave() {
  localStorage.setItem(htmlKey, htmlCode.value)
  localStorage.setItem(cssKey, cssCode.value)
  alert('Code saved!')
}

function getLandingRequirements(progress, landingPage) {
  return landingPage.requirements.filter(req =>
    progress.unlockedConcepts.includes(req.concept)
  )
}
</script>



