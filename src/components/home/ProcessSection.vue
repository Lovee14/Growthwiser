<template>
  <section class="section-padding bg-gray-50" id="process">
    <div class="container-padding">
      <!-- Section Heading -->
      <div class="text-center mb-16 md:mb-20">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Our Process
        </h2>
        <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          A proven 4-step journey to transform your business challenges into growth opportunities
        </p>
      </div>

      <!-- Timeline Wrapper -->
      <div class="relative">
        <!-- Horizontal Line -->
        <div class="absolute top-20 left-0 right-0 h-[2px] bg-gray-300 hidden md:block"></div>

        <!-- Steps -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div v-for="(step, index) in steps" :key="index" class="relative">
            <!-- Icon Card -->
            <div class="relative flex justify-center md:justify-start">
              <div class="icon-card group">
                <!-- Icon -->
                <component
                  :is="step.icon"
                  class="w-8 h-8 text-orange-500 transition-all duration-300 group-hover:text-white group-hover:scale-110"
                />

                <!-- Number Badge -->
                <div class="badge">
                  {{ step.number }}
                </div>
              </div>
            </div>

            <!-- Text -->
            <div class="mt-10 text-center md:text-left">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">
                {{ step.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  PaperAirplaneIcon,
  ClipboardDocumentCheckIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from '@heroicons/vue/24/outline'

const steps = [
  {
    number: '01',
    title: 'Strategic Audit',
    description:
      'A baseline assessment of your business profile vs departmental eligibility metrics.',
    icon: PaperAirplaneIcon,
  },
  {
    number: '02',
    title: 'Docu-Verification',
    description:
      'Full digitization and internal audit of your case file to ensure zero rejections.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    number: '03',
    title: 'Precision Filing',
    description:
      'Submitting your application through prioritized nodal channels for faster turnout.',
    icon: RocketLaunchIcon,
  },
  {
    number: '04',
    title: 'Final Approval',
    description:
      'Active follow-up and liaison until certificates or capital are successfully disbursed.',
    icon: AcademicCapIcon,
  },
]
</script>

<style scoped>
/* Icon Card Base */
.icon-card {
  @apply relative w-28 h-28 bg-white rounded-3xl flex items-center justify-center shadow-md transition-all duration-300 cursor-pointer;
}

/* Hover Effect */
.icon-card:hover {
  transform: translateY(-8px) scale(1.05);
  background-color: #f97316; /* Orange */
  box-shadow: 0 20px 40px rgba(249, 115, 22, 0.3);
}

/* Number Badge */
.badge {
  @apply absolute -top-4 right-4 bg-[#0F1B2D] text-white text-sm font-bold w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300;
}

/* Optional: badge glow on hover */
.icon-card:hover .badge {
  background-color: #111827;
}
</style>
