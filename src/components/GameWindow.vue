<template>
  <div class="game-window">
    <div class="left-side">
      <div class="instructions custom-border">
        <GameInstructions />
      </div>
      <div>
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
      </div>
      <div class="save-button">
      <Button 
        label="Save Code" 
        buttonClass="custom-button" 
        @action="handleSave" ></Button>
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

const htmlCode = ref(
  localStorage.getItem("htmlCode") || "<h1 class=\"title\">Hello World</h1>\n" + "\n".repeat(18)
)

const cssCode = ref(
  localStorage.getItem("cssCode") || "body {\n  background-color: #ececef;\n  font-family: 'Arial', sans-serif;\n}\n\n.title {\n  color: #282C34;\n  text-align: center;\n}\n" + "\n".repeat(10)
)



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
  localStorage.setItem('htmlCode', htmlCode.value)
  localStorage.setItem('cssCode', cssCode.value)
  alert('Code saved!')
}
</script>



