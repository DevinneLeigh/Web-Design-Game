<template>
  <div ref="editor" class="editor"></div>
</template>

<script setup>
import { ref, onMounted, defineExpose } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const editor = ref(null)
let editorView = null 

onMounted(() => {
  const savedContent = localStorage.getItem("editorContent") || "<h1 class=\"title\">Hello World</h1>\n" + "\n".repeat(18)

  editorView = new EditorView({
    doc: savedContent,
    extensions: [basicSetup, javascript(), oneDark],
    parent: editor.value
  })
})

function getContent() {
  return editorView ? editorView.state.doc.toString() : ""
}

defineExpose({ getContent })

</script>
