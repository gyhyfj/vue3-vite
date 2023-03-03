<template>
  <div class="preview-container mt-5 grid justify-center justify-items-center">
    <div
      v-for="item in svgArr"
      :key="item"
      class="flex-center mb-3 h-[5rem] w-[6.25rem] cursor-pointer flex-col pt-1 opacity-80 shadow-md hover:outline hover:outline-2 hover:outline-pink-500 active:bg-pink-100"
      @click="handleClick(item)"
    >
      <SvgRaw
        :name="item"
        fill="currentColor"
        width="1.25rem"
        height="1.25rem"
      />
      <div class="pt-1.5">{{ item }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modules = import.meta.glob('@/assets/svg/*.svg', { eager: true })

const svgArr = reactive<string[]>([])
for (const key in modules) {
  svgArr.push((key.split('/').pop() as string).split('.')[0])
}

const handleClick = (item: string) => {
  navigator.clipboard.writeText(`<SvgRaw name="${item}" />`)
  console.log('copied success')
}
</script>

<style scoped>
.preview-container {
  grid-template-columns: repeat(auto-fill, 7rem);
}
</style>
