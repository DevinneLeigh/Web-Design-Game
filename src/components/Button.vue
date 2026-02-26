<template>
  <button :class="buttonClass" @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  label: { type: String, default: 'Continue' },
  buttonClass: { type: String, default: '' }
})

const emit = defineEmits(['action'])

function handleClick() {
  emit('action')
}
</script>