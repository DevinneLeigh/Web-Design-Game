<template>
  <div ref="editor"></div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { EditorView, basicSetup } from 'codemirror'
import { html } from '@codemirror/lang-html'
import { css } from '@codemirror/lang-css'
import { oneDark } from '@codemirror/theme-one-dark'

const props = defineProps({
  modelValue: String,
  language: String
})

const emit = defineEmits(['update:modelValue']) 

const editor = ref(null)
let editorView = null 

onMounted(() => {
  const languageExtension =
    props.language === 'css'
      ? css()
      : html()

  editorView = new EditorView({
    doc: props.modelValue || '',
    extensions: [
      basicSetup, 
      languageExtension,
      oneDark,
      EditorView.updateListener.of(update => {
        if (update.docChanged) {
          emit('update:modelValue', update.state.doc.toString())
        }
      }),
    ],
    parent: editor.value
  })
})

watch(
  () => props.modelValue,
  (newVal) => {
    if (!editorView) return
    const current = editorView.state.doc.toString()
    if (newVal !== current) {
      editorView.dispatch({
        changes: { from: 0, to: current.length, insert: newVal }
      })
    }
  }
)

</script>
