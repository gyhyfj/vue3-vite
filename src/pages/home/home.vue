<template>
  <div @click="$i18n.locale = $i18n.locale === 'zh' ? 'en' : 'zh'">
    {{ $t('home.toggleLan') }}
  </div>
</template>

<script setup lang="ts"></script>
