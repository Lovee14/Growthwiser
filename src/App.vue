<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'
import { MotionPlugin } from '@vueuse/motion'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen flex flex-col overflow-x-hidden w-full">
    <TheHeader />
    <main class="flex-grow pt-20">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
/* App-specific styles if needed */
</style>
