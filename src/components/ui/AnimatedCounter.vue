<template>
  <div class="text-center" v-motion :initial="{ opacity: 0 }" :visible="{ opacity: 1 }">
    <div class="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text mb-2">
      {{ displayValue }}{{ suffix }}
    </div>
    <div class="text-gray-600 text-sm sm:text-base font-medium">{{ label }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  target: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    default: 2000,
  },
  suffix: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    required: true,
  },
  start: {
    type: Boolean,
    default: false,
  },
})

const displayValue = ref(0)
let animationId = null

const animateCount = () => {
  const startTime = Date.now()
  const startValue = 0
  const endValue = props.target

  const animate = () => {
    const currentTime = Date.now()
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / props.duration, 1)

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.floor(startValue + (endValue - startValue) * easeOut)

    if (progress < 1) {
      animationId = requestAnimationFrame(animate)
    } else {
      displayValue.value = endValue
    }
  }

  animate()
}

watch(
  () => props.start,
  (newVal) => {
    if (newVal) {
      animateCount()
    }
  },
)

onMounted(() => {
  if (props.start) {
    animateCount()
  }
})
</script>
