<template>
  <section
    class="section-padding bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-pattern-dots opacity-10"></div>

    <!-- Animated Background Blobs -->
    <div
      class="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"
      style="animation-delay: 2s"
    ></div>

    <div class="container-padding relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          Ready to Transform Your Business?
        </h2>
        <p
          class="text-lg sm:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Take the first step towards sustainable growth. Book your free consultation today and
          discover how we can help unlock your business potential.
        </p>

        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          <BaseButton
            variant="secondary"
            size="lg"
            class="bg-white hover:bg-gray-50 w-full sm:w-auto"
            @click="scrollToContact"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            Schedule Free Consultation
          </BaseButton>

          <a
            href="tel:+911234567890"
            class="btn-base border-2 border-white text-white hover:bg-white/10 w-full sm:w-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call Us Now
          </a>
        </div>

        <!-- Trust Badge -->
        <div
          class="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-6 text-white/80"
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1 }"
          :delay="600"
        >
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Free Consultation</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>No Hidden Costs</span>
          </div>
          <div class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Expert Guidance</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../ui/BaseButton.vue'

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
