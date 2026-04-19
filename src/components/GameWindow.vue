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
    
    <Popup
  :open="showCompletionPopup"
  :title="`${level.title} Complete`"
  message="Your code met all the requirements. Good job!"
  @close="closeCompletionPopup"
/>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CodeEditor from "./CodeEditor.vue";
import GameInstructions from "./GameInstructions.vue";
import Button from "./Button.vue";
import Popup from "./Popup.vue";
import { checkTag, checkOrder } from "../data/levels/code-validation";

const activeTab = ref('html')
const showCompletionPopup = ref(false)

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
  const isCompleteNow = isLevelComplete()
  showCompletionPopup.value = isCompleteNow
}

function closeCompletionPopup() {
  showCompletionPopup.value = false
}

function isLevelComplete() {
    const completion = props?.level?.completion;
    if (!completion) return false;

    const htmlOk = (htmlCode.value || "")
        .toLowerCase()
        .includes(String(completion.requiredHTML?.[0] || "").toLowerCase());
    const cssOk = (cssCode.value || "")
        .toLowerCase()
        .includes(String(completion.requiredCSS?.[0] || "").toLowerCase());

    return checkHtmlCompletion() && checkCssCompletion(); //htmlOk && cssOk
}

function checkCssCompletion() {
    const requiredCSS = props.level.completion.requiredCSS;
    return true;
}

function checkHtmlCompletion() {
    const requiredTags = props.level.completion.requiredHTML;

    const parser = new DOMParser();
    const inputHtml = parser.parseFromString(htmlCode.value, "text/html").body;

    let worked = true;
    const orderedTags = [];

    try {
        requiredTags.forEach((tag) => {
            const checkedTag = checkTag(inputHtml, tag);

            if (tag.order) {
                orderedTags.push({
                    order: tag.order,
                    element: checkedTag,
                });
            }
        });
        checkOrder(inputHtml, orderedTags);
    } catch (error) {
        window.alert(error.message);
        worked = false;
    }

    return worked;
}
</script>
