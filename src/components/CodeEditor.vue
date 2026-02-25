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
    doc: "\n".repeat(24),
    extensions: [basicSetup, javascript(), oneDark],
    parent: editor.value
  })
})
</script>
