<template>
  <div class="min-h-screen bg-white">
    <!-- HERO -->
    <div class="relative overflow-hidden bg-orange-500 px-6 py-24 md:px-16">
      <div class="relative z-10 max-w-4xl mx-auto text-center">
        <span
          class="inline-block text-xs font-semibold tracking-widest uppercase text-white border border-white/40 px-4 py-2 rounded-full mb-6"
        >
          Startup & Compliance
        </span>
        <h1 class="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Launch. Grow. <span class="text-orange-100">Stay Compliant.</span>
        </h1>
        <p class="text-lg text-orange-100 max-w-2xl leading-relaxed mx-auto">
          End-to-end support for startups and businesses — from your first pitch deck to your annual
          tax filings.
        </p>
      </div>
      <div class="absolute -top-20 -right-20 w-96 h-96 bg-orange-400 rounded-full opacity-40"></div>
      <div
        class="absolute bottom-0 left-20 w-64 h-64 bg-orange-600 rounded-full opacity-30 translate-y-1/2"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 md:px-16 py-20">
      <!-- SECTION LABEL -->
      <div class="flex items-center gap-4 mb-4">
        <div class="h-px flex-1 bg-orange-100"></div>
        <span class="text-xs font-bold tracking-widest uppercase text-orange-400"
          >Our Services</span
        >
        <div class="h-px flex-1 bg-orange-100"></div>
      </div>

      <!-- TWO COLUMNS -->
      <div class="grid md:grid-cols-2 gap-8 mt-10">
        <!-- ── STARTUP COLUMN ── -->
        <div>
          <!-- Column Header -->
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-black text-gray-900">Startup Services</h2>
              <p class="text-sm text-gray-400">Everything to get your startup off the ground</p>
            </div>
          </div>

          <!-- Startup Cards -->
          <div class="space-y-3">
            <div
              v-for="(item, index) in startupServices"
              :key="item.title"
              class="group relative overflow-hidden rounded-2xl border-2 border-orange-100 bg-white p-5 flex items-center gap-5 cursor-pointer transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-0.5"
            >
              <!-- Number badge -->
              <div
                class="w-10 h-10 rounded-xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              >
                <span
                  class="text-sm font-black text-orange-500 group-hover:text-white transition-colors duration-300"
                  >{{ String(index + 1).padStart(2, '0') }}</span
                >
              </div>

              <div class="flex-1">
                <h3 class="font-bold text-gray-900 text-base">{{ item.title }}</h3>
                <p class="text-xs text-gray-400 mt-0.5">{{ item.desc }}</p>
              </div>

              <div
                class="w-8 h-8 rounded-lg bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              >
                <svg
                  class="w-4 h-4 text-orange-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              <!-- Hover left bar -->
              <div
                class="absolute left-0 top-0 h-full w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-2xl"
              ></div>
            </div>
          </div>

          <!-- Startup CTA -->
          <div class="mt-6 rounded-2xl bg-orange-500 p-6 flex items-center justify-between">
            <div>
              <p class="text-white font-bold text-base">Ready to launch?</p>
              <p class="text-orange-100 text-xs mt-0.5">Book a free startup consultation</p>
            </div>
            <button
              class="bg-white text-orange-500 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors duration-200 flex-shrink-0"
            >
              Book Now
            </button>
          </div>
        </div>

        <!-- ── COMPLIANCE COLUMN ── -->
        <div>
          <!-- Column Header -->
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center flex-shrink-0"
            >
              <svg
                class="w-6 h-6 text-orange-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl font-black text-gray-900">Compliance Services</h2>
              <p class="text-sm text-gray-400">Stay legally protected and tax-ready</p>
            </div>
          </div>

          <!-- Compliance Cards -->
          <div class="space-y-3">
            <div
              v-for="(item, index) in complianceServices"
              :key="item.title"
              class="group relative overflow-hidden rounded-2xl border-2 border-orange-100 bg-white p-5 flex items-center gap-5 cursor-pointer transition-all duration-300 hover:border-orange-400 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-0.5"
            >
              <!-- Icon badge -->
              <div
                class="w-10 h-10 rounded-xl bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              >
                <component
                  :is="item.icon"
                  class="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300"
                />
              </div>

              <div class="flex-1">
                <h3 class="font-bold text-gray-900 text-base">{{ item.title }}</h3>
                <p class="text-xs text-gray-400 mt-0.5">{{ item.desc }}</p>
              </div>

              <div
                class="w-8 h-8 rounded-lg bg-orange-50 group-hover:bg-orange-500 flex items-center justify-center flex-shrink-0 transition-colors duration-300"
              >
                <svg
                  class="w-4 h-4 text-orange-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>

              <div
                class="absolute left-0 top-0 h-full w-1 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center rounded-l-2xl"
              ></div>
            </div>
          </div>

          <!-- Compliance CTA -->
          <div
            class="mt-6 rounded-2xl bg-orange-50 border-2 border-orange-200 p-6 flex items-center justify-between"
          >
            <div>
              <p class="text-gray-900 font-bold text-base">Need compliance help?</p>
              <p class="text-gray-400 text-xs mt-0.5">Talk to our compliance experts today</p>
            </div>
            <button
              class="bg-orange-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-orange-600 transition-colors duration-200 flex-shrink-0"
            >
              Talk to Us
            </button>
          </div>
        </div>
      </div>

      <!-- BOTTOM STATS BANNER -->
      <div class="mt-16 rounded-3xl bg-orange-500 p-8 md:p-12">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl font-black text-white mb-1">{{ stat.value }}</div>
            <div class="text-orange-100 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'

const startupServices = [
  {
    title: 'Projection Report',
    desc: 'Financial forecasts and business projections for investors',
  },
  { title: 'Pitch Deck', desc: 'Compelling presentations that win funding and partnerships' },
  { title: 'Documentation', desc: 'Complete business documentation and legal paperwork' },
  { title: 'Training Session', desc: 'Hands-on training for founders and teams' },
  { title: 'Application Process', desc: 'End-to-end support for startup scheme applications' },
  { title: 'Keywords & SEO Strategy', desc: 'Keyword research to boost your digital visibility' },
]

const ShieldIcon = h(
  'svg',
  { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' },
  [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
    }),
  ],
)
const DocIcon = h(
  'svg',
  { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' },
  [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    }),
  ],
)
const ChartIcon = h(
  'svg',
  { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' },
  [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    }),
  ],
)
const TaxIcon = h(
  'svg',
  { fill: 'none', viewBox: '0 0 24 24', 'stroke-width': '1.5', stroke: 'currentColor' },
  [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      d: 'M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z',
    }),
  ],
)

const complianceServices = [
  {
    title: 'GST Filing',
    desc: 'Monthly, quarterly and annual GST return filing',
    icon: ShieldIcon,
  },
  {
    title: 'TDS Management',
    desc: 'TDS deduction, payment and return filing support',
    icon: DocIcon,
  },
  {
    title: 'Audit Report',
    desc: 'Statutory and internal audit report preparation',
    icon: ChartIcon,
  },
  {
    title: 'IT Return',
    desc: 'Income tax return filing for businesses and individuals',
    icon: TaxIcon,
  },
]

const stats = [
  { value: '500+', label: 'Startups Supported' },
  { value: '98%', label: 'Filing Accuracy' },
  { value: '10+', label: 'Years Experience' },
  { value: '24/7', label: 'Expert Support' },
]
</script>
