<template>
  <div class="min-h-screen bg-white">
    <!-- HERO -->
    <div class="relative overflow-hidden bg-orange-500 px-6 py-24 md:px-16">
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span
          class="inline-block text-xs font-semibold tracking-widest uppercase text-white border border-white/40 px-4 py-2 rounded-full mb-6"
        >
          Business Consulting
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Expert Guidance for <span class="text-orange-100">Every Stage</span>
        </h1>
        <p class="text-lg text-orange-100 max-w-2xl leading-relaxed mx-auto">
          From government grants to venture capital — we connect your business with the right
          funding and support at the right time.
        </p>
      </div>
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-orange-400 rounded-full opacity-40"></div>
      <div
        class="absolute bottom-0 left-10 w-72 h-72 bg-orange-600 rounded-full opacity-20 translate-y-1/2"
      ></div>
    </div>

    <!-- SERVICES -->
    <div class="max-w-7xl mx-auto px-6 md:px-16 py-20">
      <!-- ZIGZAG CARDS -->
      <div class="space-y-6">
        <div
          v-for="(service, index) in services"
          :key="service.title"
          class="group relative overflow-hidden rounded-3xl border-2 border-orange-100 bg-white cursor-pointer transition-all duration-500 hover:border-orange-400 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-1"
        >
          <div
            class="flex flex-col md:flex-row items-stretch"
            :class="index % 2 !== 0 ? 'md:flex-row-reverse' : ''"
          >
            <!-- Color Panel -->
            <div
              class="relative md:w-72 flex-shrink-0 flex flex-col items-center justify-center p-10 overflow-hidden"
              :class="service.bg"
            >
              <!-- Big number watermark -->
              <span
                class="absolute text-[120px] font-black opacity-10 text-white leading-none select-none"
                style="top: 50%; transform: translateY(-50%)"
              >
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <!-- Icon -->
              <div
                class="relative z-10 w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mb-4"
              >
                <component :is="service.icon" class="w-10 h-10 text-white" />
              </div>
              <span
                class="relative z-10 text-xs font-bold tracking-widest uppercase text-white/80"
                >{{ service.tag }}</span
              >
            </div>

            <!-- Content -->
            <div class="flex-1 p-8 md:p-10 flex flex-col justify-center">
              <h2
                class="text-2xl md:text-3xl font-black text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300"
              >
                {{ service.title }}
              </h2>
              <p class="text-gray-500 leading-relaxed mb-6 max-w-xl">
                {{ service.description }}
              </p>

              <!-- Features list -->
              <div class="flex flex-wrap gap-2 mb-8">
                <span
                  v-for="tag in service.features"
                  :key="tag"
                  class="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange-50 text-orange-500 border border-orange-100"
                >
                  {{ tag }}
                </span>
              </div>

              <div
                class="flex items-center gap-2 text-orange-500 font-bold text-sm group-hover:gap-4 transition-all duration-300"
              >
                Get Started
                <svg
                  class="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM CTA BANNER -->
      <div class="mt-16 rounded-3xl bg-orange-500 overflow-hidden relative">
        <div
          class="absolute -top-16 -right-16 w-64 h-64 bg-orange-400 rounded-full opacity-40"
        ></div>
        <div
          class="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-600 rounded-full opacity-30"
        ></div>
        <div
          class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-14"
        >
          <div>
            <h3 class="text-3xl md:text-4xl font-black text-white mb-2">
              Not sure where to start?
            </h3>
            <p class="text-orange-100 text-base max-w-md">
              Book a free 30-minute consultation and let our experts map the perfect path for your
              business.
            </p>
          </div>
          <button
            class="flex-shrink-0 bg-white text-orange-500 font-black text-base px-8 py-4 rounded-2xl hover:bg-orange-50 transition-colors duration-200 shadow-xl"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

function makeIcon(pathD) {
  return h(
    'svg',
    { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' },
    [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: pathD })],
  )
}

const services = [
  {
    title: 'Government Grants Consulting',
    tag: 'Funding',
    description:
      'We identify and secure the right government grants for your business. From application to approval, our experts guide you through every step to maximize your funding chances.',
    features: ['Grant Identification', 'Application Support', 'Documentation', 'Follow-up'],
    bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
    icon: makeIcon(
      'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
    ),
  },
  {
    title: 'Business Loan Assistance',
    tag: 'Finance',
    description:
      'Access quick and affordable financing tailored to your needs. We connect you with the best banks and NBFCs, prepare your loan profile, and ensure faster approvals.',
    features: ['Loan Profiling', 'Bank Matching', 'Documentation', 'Faster Approval'],
    bg: 'bg-gradient-to-br from-amber-500 to-orange-500',
    icon: makeIcon(
      'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    ),
  },
  {
    title: 'Business Certifications & Registrations',
    tag: 'Certifications',
    description:
      'ISO, MSME, Startup India, FSSAI, GST and more — we handle end-to-end certification and registration so your business earns the credibility it deserves.',
    features: ['ISO Certification', 'MSME / Udyam', 'Startup India', 'FSSAI & More'],
    bg: 'bg-gradient-to-br from-orange-600 to-red-500',
    icon: makeIcon(
      'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    ),
  },
  {
    title: 'Compliance & Documentation Services',
    tag: 'Compliance',
    description:
      'Stay legally protected and audit-ready. We manage your GST, TDS, IT returns, audit reports and all business documentation so you can focus on growth.',
    features: ['GST Filing', 'TDS Management', 'IT Returns', 'Audit Reports'],
    bg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    icon: makeIcon(
      'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    ),
  },
  {
    title: 'Venture Capital Investment Support',
    tag: 'Investment',
    description:
      'We prepare your startup for VC conversations — pitch decks, financial projections, term sheet review, and investor introductions to top-tier venture capital firms.',
    features: ['Pitch Deck', 'Projections', 'Investor Intro', 'Term Sheet Review'],
    bg: 'bg-gradient-to-br from-red-500 to-orange-500',
    icon: makeIcon(
      'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    ),
  },
  {
    title: 'Angel Investment Assistance',
    tag: 'Angel Network',
    description:
      'Connect with our curated network of angel investors who believe in early-stage businesses. We help you tell your story, structure your deal, and close funding rounds.',
    features: ['Angel Network', 'Deal Structuring', 'Story Building', 'Round Closing'],
    bg: 'bg-gradient-to-br from-orange-400 to-orange-600',
    icon: makeIcon(
      'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    ),
  },
]
</script>
