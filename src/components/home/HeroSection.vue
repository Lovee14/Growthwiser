<template>
  <section
    id="hero"
    class="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden bg-white"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-pattern-dots opacity-40"></div>
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent"
    ></div>

    <!-- Floating Blobs -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-20 -right-20 w-48 sm:w-96 h-48 sm:h-96 bg-primary-100/40 rounded-full blur-3xl animate-float"
      ></div>
      <div
        class="absolute top-1/3 left-10 w-36 sm:w-72 h-36 sm:h-72 bg-orange-100/40 rounded-full blur-3xl animate-float"
        style="animation-delay: 2s"
      ></div>
    </div>

    <div class="container-padding relative z-10 py-14 sm:py-24 lg:py-20">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <!-- Main Headline -->
        <h1
          class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-5 sm:mb-8 tracking-tight leading-tight"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="200"
        >
          Empowering Your <span class="text-primary-600">Business Growth</span>
        </h1>

        <!-- Subheadline -->
        <p
          class="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="400"
        >
          Focus on running your business while we handle the rest. From grants and funding to
          compliance and certifications, we guide you at every step.
        </p>

        <!-- CTA Buttons -->
        <div
          class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible="{ opacity: 1, y: 0 }"
          :delay="500"
        >
          <BaseButton
            variant="primary"
            size="lg"
            @click="scrollToContact"
            class="w-full sm:w-auto shadow-xl shadow-primary-600/20"
          >
            Book Free Consultation
          </BaseButton>
          <BaseButton
            variant="secondary"
            size="lg"
            @click="scrollToServices"
            class="w-full sm:w-auto"
          >
            Explore Services
          </BaseButton>
        </div>

        <!-- Trust Indicators -->
        <div
          class="mt-10 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-16 px-4"
          v-motion
          :initial="{ opacity: 0 }"
          :visible="{ opacity: 1 }"
          :delay="700"
        >
          <div class="text-center group cursor-default min-w-[90px]">
            <div
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors"
            >
              500+
            </div>
            <div class="text-gray-500 text-xs sm:text-sm font-medium">Happy Clients</div>
          </div>

          <div class="text-center group cursor-default min-w-[90px]">
            <div
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors"
            >
              ₹50M+
            </div>
            <div class="text-gray-500 text-xs sm:text-sm font-medium">Funding Secured</div>
          </div>

          <div class="text-center group cursor-default min-w-[90px]">
            <div
              class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors"
            >
              95%
            </div>
            <div class="text-gray-500 text-xs sm:text-sm font-medium">Success Rate</div>
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

const scrollToServices = () => {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}
</script>
