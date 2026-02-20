<template>
  <section id="why-choose" class="relative w-full overflow-hidden bg-white">
    <!-- Split Layout Container -->
    <div class="flex flex-col lg:flex-row min-h-[600px]">
      <!-- Left Side (Branding & Curve) -->
      <div
        class="relative w-full lg:w-[45%] bg-gray-900 text-white p-10 sm:p-16 flex flex-col justify-center z-10 lg:rounded-r-[100%] transition-all duration-500"
      >
        <!-- Background Pattern -->
        <div class="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none"></div>

        <div
          class="relative z-10 max-w-md mx-auto lg:mr-12 lg:ml-auto text-center lg:text-left"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0 }"
        >
          <div class="mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-12 h-12 text-primary-500 mx-auto lg:mx-0 mb-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>

          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            WHY <br />
            <span class="text-primary-500">CHOOSE US</span>
          </h2>

          <p class="text-gray-400 text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
            We partner with you for long-term success, offering data-driven strategies and expert
            guidance every step of the way.
          </p>
        </div>
      </div>

      <!-- Right Side (Content List) -->
      <div class="relative w-full lg:w-[55%] bg-white p-10 sm:p-16 flex items-center z-0">
        <div class="w-full max-w-xl">
          <!-- List Items -->
          <div class="space-y-12 relative">
            <!-- Connecting Line (Mobile Only) -->
            <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-100 lg:hidden"></div>

            <div
              v-for="(item, index) in differentiators"
              :key="item.title"
              class="relative flex items-start group"
              v-motion
              :initial="{ opacity: 0, x: 50 }"
              :visible="{ opacity: 1, x: 0 }"
              :delay="index * 150"
            >
              <!-- Icon Circle (Overlapping) -->
              <div
                class="absolute -left-4 lg:-left-[5.5rem] mt-1 lg:mt-0 flex-shrink-0 z-20 transition-transform duration-300 group-hover:scale-110"
              >
                <div
                  class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 shadow-lg shadow-primary-500/30 flex items-center justify-center text-white border-4 border-white lg:border-gray-50/50"
                >
                  <component :is="item.icon" class="w-7 h-7" />
                </div>
              </div>

              <!-- Text Content -->
              <div class="ml-16 lg:ml-8 pt-2">
                <h3
                  class="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors"
                >
                  {{ item.title }}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { h } from 'vue'

const differentiators = [
  {
    title: 'Expertise',
    description: 'Seasoned professionals with deep industry knowledge',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5',
        }),
      ],
    ),
  },
  {
    title: 'Insights',
    description: 'Data-driven strategies for optimal outcomes',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
        }),
      ],
    ),
  },
  {
    title: 'Customization',
    description: 'Tailored solutions for your unique needs',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z',
        }),
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
        }),
      ],
    ),
  },
  {
    title: 'Success',
    description: 'Proven track record of client achievements',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0',
        }),
      ],
    ),
  },
]

onMounted(() => {
  // Trigger counters when section is in view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 },
  )

  const section = document.getElementById('why-choose')
  if (section) observer.observe(section)
})
</script>

<style scoped>
.bg-pattern-dots {
  background-image: radial-gradient(circle, currentColor 1px, transparent 1px);
  background-size: 24px 24px;
}
</style>
