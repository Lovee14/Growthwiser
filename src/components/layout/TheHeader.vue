<template>
  <header
    class="fixed z-50 w-full transition-all duration-500"
    :class="[
      scrolled
        ? 'w-[94%] sm:w-[90%] max-w-6xl mx-auto left-0 right-0 top-3 sm:top-4 rounded-2xl sm:rounded-full glass-white shadow-xl shadow-black/5 border border-white/20'
        : 'left-0 right-0 top-0 bg-transparent',
    ]"
  >
    <div
      class="container-padding transition-all duration-500"
      :class="{ 'px-4 sm:px-6': scrolled }"
    >
      <div
        class="flex items-center justify-between transition-all duration-500"
        :class="scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20'"
      >
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-3">
          <img
            src="/growth_logo-2.png"
            alt="GrowthWiser Logo"
            class="h-10 sm:h-12 lg:h-14 w-auto object-contain"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 text-sm sm:text-base"
          >
            {{ item.name }}
          </a>

          <BaseButton
            variant="primary"
            :size="scrolled ? 'sm' : 'md'"
            @click="openConsultation"
            class="transition-all duration-500"
          >
            Book Consultation
          </BaseButton>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            v-if="!mobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileMenuOpen"
        class="lg:hidden mt-2 mx-3 rounded-2xl shadow-xl border border-gray-100 bg-white/95 backdrop-blur-md"
      >
        <nav class="px-5 py-6 flex flex-col gap-4">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 py-2 border-b border-gray-100 last:border-none"
            @click="toggleMobileMenu"
          >
            {{ item.name }}
          </a>

          <BaseButton variant="primary" size="md" @click="openConsultation" class="w-full mt-2">
            Book Consultation
          </BaseButton>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const openConsultation = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
