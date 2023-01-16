<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'

const modules = import.meta.glob('@/assets/svg/*.svg', { eager: true })
const props = withDefaults(defineProps<{ name: string }>(), {})
const currentComponent = computed<Component>(() => {
  const filePath = '/' + props.name + '.svg'
  for (const path in modules) {
    const mod = modules[path]
    if (path.endsWith(filePath)) {
      return mod as Component
    }
  }
  throw new Error('Not found svg file:' + filePath)
})
</script>

<template>
  <component :is="currentComponent" />
</template>
