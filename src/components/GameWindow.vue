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
            @action="handleSave" />
        </div>

        <div>
          <Button 
            label="Reset Level" 
            buttonClass="reset button" 
            @action="handleReset" />
        </div>

        <div>
          <Button 
            label="Check Code" 
            buttonClass="submit button" 
            @action="handleCheck" />
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
      :secondaryButtonText="secondaryButtonText"
      :isConfirmPopup="isConfirmPopup"
      @close="closePopup"
      @confirm="confirmReset"
    />
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import CodeEditor from "./CodeEditor.vue";
import GameInstructions from "./GameInstructions.vue";
import { useLevelStore } from '@/stores/levelStore'
import { useRoute } from "vue-router"
import Button from "./Button.vue";
import Popup from "./Popup.vue";
import { checkTag } from "../data/levels/code-validation";
import star from '../assets/images/star.gif'

const route = useRoute()

const levelStore = useLevelStore()
levelStore.load() 

const activeTab = ref('html')
const showPopup = ref(false)

const isConfirmPopup = ref(false)
const secondaryButtonText = ref("")

const level = computed(() =>
  levelStore.findLevelById(route.params.id)
)

const popupTitle = ref("")
const popupMessage = ref("")
const popupImage = ref(null)
const popupConfetti = ref(false)
const popupButtonText = ref("Continue")
const htmlKey = computed(() => `html-${level.value?.id}`)
const cssKey = computed(() => `css-${level.value?.id}`)

const htmlCode = ref("")
const cssCode = ref("")

watch(level, (newLevel) => {
  if (!newLevel) return

  const htmlKey = `html-${newLevel.id}`
  const cssKey = `css-${newLevel.id}`

  htmlCode.value =
    localStorage.getItem(htmlKey) || newLevel.starterCode.html

  cssCode.value =
    localStorage.getItem(cssKey) || newLevel.starterCode.css
}, { immediate: true })

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


let currentHint = "code validators should replace this text"
let setHint = (newHint) => {
  currentHint.value = "Hint: " + newHint 
}

function openPopup({
  title,
  message,
  image = null,
  confetti = false,
  buttonText = "Continue",
  secondaryButton = "",
  confirmPopup = false
}) {
  popupTitle.value = title
  popupMessage.value = message
  popupImage.value = image
  popupConfetti.value = confetti
  popupButtonText.value = buttonText
  secondaryButtonText.value = secondaryButton
  isConfirmPopup.value = confirmPopup
  showPopup.value = true
}

function handleSave() {
  const htmlKey = `html-${level.value.id}`
  const cssKey = `css-${level.value.id}`

  localStorage.setItem(htmlKey, htmlCode.value)
  localStorage.setItem(cssKey, cssCode.value)
  openPopup({
    title: "Code Saved",
    message: "Your progress has been saved.",
    confetti: false,
    buttonText: "OK"
  })
}

function handleReset() {
  if (!level.value) return

  openPopup({
    title: "Reset Level?",
    message: "Are you sure you want to reset only this level back to its starter code?",
    confetti: false,
    buttonText: "Confirm",
    secondaryButton: "Back",
    confirmPopup: true
  })
}

function confirmReset() {
  if (!level.value) return

  const htmlKey = `html-${level.value.id}`
  const cssKey = `css-${level.value.id}`

  htmlCode.value = level.value.starterCode.html || ""
  cssCode.value = level.value.starterCode.css || ""

  localStorage.setItem(htmlKey, htmlCode.value)
  localStorage.setItem(cssKey, cssCode.value)

  showPopup.value = false
  isConfirmPopup.value = false
  secondaryButtonText.value = ""
}

function handleCheck() {
  const isCompleteNow = isLevelComplete()

  if (isCompleteNow) {
    levelStore.completeLevel(level.value.worldKey, level.value.id)
    
    openPopup({
      title: `${level.value.title} Complete`,
      message: "Your code met all the requirements. Good job!",
      image: star,
      confetti: true,
      buttonText: "Next Level"
    })
  } else {
    openPopup({
      title: "Not Quite Yet",
      message: `Your code is missing some requirements. Try again.<br><br>${currentHint}`,
      confetti: false,
      buttonText: "Try Again"
    })
  }
}

function closePopup() {
  showPopup.value = false
  isConfirmPopup.value = false
  secondaryButtonText.value = ""
}

function isLevelComplete() {
    const completion = level.value?.completion;
    if (!completion) return false;

    const cssOk = (cssCode.value || "")
        .toLowerCase()
        .includes(String(completion.requiredCSS?.[0] || "").toLowerCase());

    return checkHtmlCompletion() && cssOk //checkCssCompletion(); //htmlOk
}

function checkCssCompletion() {
    const requiredCSS = level.value?.completion.requiredCSS;
    return true;
}

function checkHtmlCompletion() {
    const requiredTags = level.value?.completion.requiredHTML;

    const parser = new DOMParser();
    const inputHtml = parser.parseFromString(htmlCode.value, "text/html");

    let worked = true;
    try {
      checkTag(inputHtml, {validTags: ["body"], childElements: requiredTags})
    } catch (error) {
        setHint(error.message);
        worked = false;
    }

    return worked;
}
</script>
