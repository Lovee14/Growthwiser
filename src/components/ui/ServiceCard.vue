<template>
  <div
    class="card-glass p-6 sm:p-8 group cursor-pointer"
    v-motion
    :initial="{ opacity: 0, y: 50 }"
    :visible="{ opacity: 1, y: 0 }"
    :delay="delay"
  >
    <div
      class="w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300"
    >
      <slot name="icon">
        <component :is="icon" class="w-8 h-8 sm:w-10 sm:h-10" />
      </slot>
    </div>

    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
      {{ title }}
    </h3>

    <p class="text-gray-600 mb-6 leading-relaxed">
      {{ description }}
    </p>

    <RouterLink
      v-if="link && link.startsWith('/')"
      :to="link"
      class="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
    >
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </RouterLink>

    <a
      v-else-if="link"
      :href="link"
      class="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all duration-300"
    >
      Learn More
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: Object,
    default: null,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    default: '',
  },
  delay: {
    type: Number,
    default: 0,
  },
})
</script>
