<template>
  <button
    :class="buttonClasses"
    :disabled="loading || disabled"
    @click="handleClick"
    class="ripple"
  >
    <span v-if="loading" class="animate-spin">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24">
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses =
    'font-semibold rounded-lg transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variantClasses = {
    primary: 'btn-primary', // Uses global CSS class
    secondary: 'btn-secondary', // Uses global CSS class
    outline:
      'border-2 border-gray-200 text-gray-700 bg-transparent hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50',
  }

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return `${baseClasses} ${variantClasses[props.variant]} ${sizeClasses[props.size]}`
})

const handleClick = (event) => {
  if (!props.loading && !props.disabled) {
    emit('click', event)
  }
}
</script>
