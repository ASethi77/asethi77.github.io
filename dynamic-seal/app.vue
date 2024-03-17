<template>
  <div>
    <!-- NuxtPage renders the current route (combination of fixed routes via pages/ and ones generated from md in content/ )-->
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dynamic Seal',
  meta: [
    // I don't know why Nuxt won't let me set theme-color through nuxt.config.js, but this page
    // said useHead() in app.vue was a new recommended interface and it seems to work ¯\_(ツ)_/¯
    { name: 'theme-color', content: '#111827' }
  ],
  script: [
    {
    }
  ]
})
</script>