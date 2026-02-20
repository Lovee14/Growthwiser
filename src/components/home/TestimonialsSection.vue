<template>
  <section id="reviews" class="py-24 bg-gray-100">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <h2 class="text-4xl md:text-6xl font-serif text-gray-900 mb-14">Testimonials</h2>

      <!-- Orange Rounded Container -->
      <div
        class="bg-[#FF6B00] rounded-3xl md:rounded-[50px] px-6 md:px-12 py-12 md:py-16 relative overflow-hidden"
      >
        <!-- Slider -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * slideWidth}%)` }"
          >
            <!-- Cards -->
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="flex-shrink-0 px-2 md:px-4"
              :style="{ width: cardWidth }"
            >
              <div class="bg-gray-100 rounded-3xl p-5 md:p-6 h-full shadow-sm">
                <!-- Top Section -->
                <div class="flex items-start justify-between mb-4">
                  <div class="flex items-center gap-3">
                    <!-- Avatar -->
                    <img
                      :src="testimonial.image"
                      alt="avatar"
                      class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <div class="font-semibold text-gray-900 text-sm">
                        {{ testimonial.name }}
                      </div>
                      <!-- Stars -->
                      <div class="flex gap-0.5 mt-1">
                        <svg
                          v-for="i in 5"
                          :key="i"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class="w-3 h-3 md:w-4 md:h-4 text-yellow-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <!-- Time -->
                  <span class="text-xs text-gray-500 flex-shrink-0 ml-2">{{
                    testimonial.time
                  }}</span>
                </div>

                <!-- Quote -->
                <p class="text-gray-600 text-sm leading-relaxed">
                  {{ testimonial.quote }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Nav Arrows (mobile) -->
        <div class="flex items-center justify-between mt-8 md:hidden">
          <button
            @click="prevSlide"
            class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <!-- Pagination Dots -->
          <div class="flex justify-center gap-2">
            <button
              v-for="(_, index) in maxSlides"
              :key="index"
              @click="goToSlide(index)"
              class="rounded-full transition-all duration-300"
              :class="currentIndex === index ? 'bg-white w-6 h-3' : 'bg-white/50 w-3 h-3'"
            ></button>
          </div>

          <button
            @click="nextSlide"
            class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        <!-- Pagination Dots (desktop only) -->
        <div class="hidden md:flex justify-center gap-3 mt-12">
          <button
            v-for="(_, index) in maxSlides"
            :key="index"
            @click="goToSlide(index)"
            class="rounded-full transition-all duration-300"
            :class="currentIndex === index ? 'bg-white w-6 h-3' : 'bg-white/50 w-3 h-3'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

const currentIndex = ref(0)
let interval = null

const testimonials = [
  {
    name: 'Ashley Robinson',
    time: '3d ago',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    quote:
      'I recently hired a business coach and was genuinely impressed with the level of support and clarity I received. Every session brought actionable insights that made a real difference.',
  },
  {
    name: 'Jay Rutherford',
    time: '3d ago',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    quote:
      'Starting my company felt overwhelming at first, but the structured guidance and strategic advice helped me move forward with confidence. Highly recommended.',
  },
  {
    name: 'Sarah Jackson',
    time: '4d ago',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote:
      "I was hesitant about investing in consulting services, but it turned out to be one of the best business decisions I've made so far.",
  },
  {
    name: 'Daniel White',
    time: '5d ago',
    image: 'https://randomuser.me/api/portraits/men/55.jpg',
    quote:
      'Their professionalism and attention to detail stood out immediately. We saw measurable growth within just a few months of working together.',
  },
  {
    name: 'Emma Wilson',
    time: '1w ago',
    image: 'https://randomuser.me/api/portraits/women/25.jpg',
    quote:
      'Clear communication, practical strategies, and ongoing support — exactly what we needed to scale our operations smoothly.',
  },
]

// Responsive: 1 card on mobile, 3 on desktop
const isMobile = ref(window.innerWidth < 768)

const visibleCards = computed(() => (isMobile.value ? 1 : 3))
const cardWidth = computed(() => (isMobile.value ? '100%' : `${100 / 3}%`))
const slideWidth = computed(() => (isMobile.value ? 100 : 100 / 3))
const maxSlides = computed(() => testimonials.length - visibleCards.value + 1)

const handleResize = () => {
  isMobile.value = window.innerWidth < 768
  if (currentIndex.value >= maxSlides.value) {
    currentIndex.value = 0
  }
}

const nextSlide = () => {
  currentIndex.value = currentIndex.value < maxSlides.value - 1 ? currentIndex.value + 1 : 0
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value > 0 ? currentIndex.value - 1 : maxSlides.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const startAuto = () => {
  interval = setInterval(nextSlide, 4000)
}
const stopAuto = () => {
  clearInterval(interval)
}

onMounted(() => {
  startAuto()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  stopAuto()
  window.removeEventListener('resize', handleResize)
})
</script>
