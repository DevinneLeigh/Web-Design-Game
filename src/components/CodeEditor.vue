<template>
  <div ref="editor" class="editor"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { oneDark } from '@codemirror/theme-one-dark'

const editor = ref(null)

onMounted(() => {
  new EditorView({
    doc: `console.log("Hello CodeMirror!");`,
    extensions: [basicSetup, javascript(), oneDark],
    parent: editor.value
  })
})
</script>

<style scoped>
.editor {
  border: 1px solid #ccc;
  height: 300px;
}
</style>