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
        <div class="editor-buttons">
          <div>
            <Button 
              label="Save Code" 
              buttonClass="save button" 
              @action="handleSave" ></Button>
          </div>
          <div>
            <Button 
              label="Check Code" 
              buttonClass="submit button" 
              @action="handleCheck" ></Button>
          </div>
        </div>
      </div>
    </div>
    <div class="output">
      <iframe class="preview" :srcdoc="previewDoc"></iframe>
    </div>
    
    <Popup
      :open="showPopup"
      :title="popupTitle"
      :message="popupMessage"
      :image="popupImage"
      :showConfetti="popupConfetti"
      :buttonText="popupButtonText"
      @close="closePopup"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CodeEditor from './CodeEditor.vue'
import GameInstructions from './GameInstructions.vue'
import { worlds, playerProject } from "@/data/levels"
import { useRoute } from "vue-router"
import Button from './Button.vue'
import Popup from './Popup.vue'
import star from '../assets/images/star.gif'

const activeTab = ref('html')
const showPopup = ref(false)

const props = defineProps({
  level: Object
})

const popupTitle = ref("")
const popupMessage = ref("")
const popupImage = ref(null)
const popupConfetti = ref(false)
const popupButtonText = ref("Continue")
const htmlKey = `html-${props.level.id}`
const cssKey = `css-${props.level.id}`

const allLevels = [
  ...worlds.flatMap(w => w.levels),
  ...playerProject
]

const htmlCode = ref(
  localStorage.getItem(htmlKey) || props.level.starterCode.html
)

const cssCode = ref(
  localStorage.getItem(cssKey) || props.level.starterCode.css
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
const route = useRoute()

const currentHint = computed(() => {
  const hint =allLevels.find(
    l => String(l.id) === String(route.params.id)
  )?.hint

  if (hint != "") {
    return "Hint: " + hint
  }
  return ""

})

function openPopup({
  title,
  message,
  image = null,
  confetti = false,
  buttonText = "Continue"
}) {
  popupTitle.value = title
  popupMessage.value = message
  popupImage.value = image
  popupConfetti.value = confetti
  popupButtonText.value = buttonText
  showPopup.value = true
}

function handleSave() {
  localStorage.setItem(htmlKey, htmlCode.value)
  localStorage.setItem(cssKey, cssCode.value)
  openPopup({
    title: "Code Saved",
    message: "Your progress has been saved.",
    confetti: false,
    buttonText: "OK"
  })
}

function handleCheck() {
  const isCompleteNow = isLevelComplete()

  if (isCompleteNow) {
    openPopup({
      title: `${props.level.title} Complete`,
      message: "Your code met all the requirements. Good job!",
      image: star,
      confetti: true,
      buttonText: "Next Level"
    })
  } else {
    openPopup({
      title: "Not Quite Yet",
      message: `Your code is missing some requirements. Try again.<br><br>${currentHint.value}`,
      confetti: false,
      buttonText: "Try Again"
    })
  }
}

function closePopup() {
  showPopup.value = false
}

function isLevelComplete() {
  const completion = props?.level?.completion
  if (!completion) return false
  
  const htmlOk = (htmlCode.value || '').toLowerCase().includes(
    String(completion.requiredHTML?.[0] || '').toLowerCase()
  )
  const cssOk = (cssCode.value || '').toLowerCase().includes(
    String(completion.requiredCSS?.[0] || '').toLowerCase()
  )
  
  return htmlOk && cssOk
}
</script>



