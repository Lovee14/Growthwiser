<template>
  <footer class="bg-white relative overflow-hidden border-t-4 border-orange-500">
    <!-- Main Footer Content -->
    <div class="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
        <!-- Brand Column -->
        <div class="lg:col-span-4">
          <div class="flex items-center mb-6">
            <img
              src="/growth_logo-2.png"
              alt="GrowthWiser Logo"
              class="h-16 w-auto object-contain"
            />
          </div>

          <p class="text-gray-500 leading-relaxed text-sm max-w-sm mb-8">
            Empowering businesses with expert consulting. We turn complexity into opportunity with
            specialized funding solutions and compliance support.
          </p>

          <!-- Social Links -->
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              href="https://www.facebook.com/profile.php?id=61573513186067"
              class="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-400 hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300"
            >
              <span class="sr-only">{{ social.label }}</span>
              <svg
                class="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                v-html="social.path"
              ></svg>
            </a>
          </div>
        </div>

        <!-- Company Links -->
        <div class="lg:col-span-2">
          <h4
            class="text-gray-900 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2"
          >
            <span class="w-4 h-0.5 bg-orange-500 inline-block"></span>
            Company
          </h4>
          <ul class="space-y-3">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-gray-500 text-sm hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group"
              >
                <span
                  class="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200 inline-block"
                ></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Services Links -->
        <div class="lg:col-span-3">
          <h4
            class="text-gray-900 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2"
          >
            <span class="w-4 h-0.5 bg-orange-500 inline-block"></span>
            Services
          </h4>
          <ul class="space-y-3">
            <li v-for="link in serviceLinks" :key="link.label">
              <a
                :href="link.href"
                class="text-gray-500 text-sm hover:text-orange-500 transition-colors duration-200 flex items-center gap-2 group"
              >
                <span
                  class="w-0 group-hover:w-3 h-px bg-orange-400 transition-all duration-200 inline-block"
                ></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact + Newsletter -->
        <div class="lg:col-span-3">
          <h4
            class="text-gray-900 font-black text-sm uppercase tracking-widest mb-6 flex items-center gap-2"
          >
            <span class="w-4 h-0.5 bg-orange-500 inline-block"></span>
            Contact
          </h4>

          <ul class="space-y-4 mb-8">
            <li class="flex items-center gap-3 group">
              <div
                class="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300"
              >
                <svg
                  class="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <span class="text-gray-500 text-sm">info@growthwiser.in</span>
            </li>
            <li class="flex items-center gap-3 group">
              <div
                class="w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300"
              >
                <svg
                  class="w-4 h-4 text-orange-500 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <span class="text-gray-500 text-sm">+91 94273 43165</span>
            </li>
          </ul>

          <!-- Newsletter -->
          <div class="bg-orange-50 border border-orange-100 rounded-2xl p-4">
            <p class="text-gray-900 text-xs font-bold mb-1">Stay Updated</p>
            <p class="text-gray-400 text-xs mb-3">Get business tips in your inbox.</p>
            <div class="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                class="flex-1 bg-white border border-orange-100 rounded-xl px-3 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 transition-colors"
              />
              <button
                class="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3 py-2 rounded-xl transition-colors duration-200 flex-shrink-0"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-orange-50 border-2 border-orange-100 rounded-2xl p-5 text-center hover:border-orange-400 hover:shadow-md hover:shadow-orange-100 transition-all duration-300"
        >
          <div class="text-2xl font-black text-orange-500 mb-1">{{ stat.value }}</div>
          <div class="text-xs text-gray-400">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t-2 border-orange-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p class="text-xs text-gray-400">
          © {{ currentYear }} <span class="text-orange-500 font-semibold">GrowthWiser</span>. All
          rights reserved.
        </p>
        <div class="flex items-center gap-6 text-xs text-gray-400">
          <a href="#" class="hover:text-orange-500 transition-colors duration-200"
            >Privacy Policy</a
          >
          <span class="text-gray-200">|</span>
          <a href="#" class="hover:text-orange-500 transition-colors duration-200"
            >Terms of Service</a
          >
          <span class="text-gray-200">|</span>
          <a href="#" class="hover:text-orange-500 transition-colors duration-200">Cookie Policy</a>
        </div>
      </div>
    </div>

    <!-- Background decorative orbs -->
    <div
      class="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full opacity-50 -translate-x-1/2 translate-y-1/2 pointer-events-none"
    ></div>
    <div
      class="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full opacity-50 translate-x-1/2 -translate-y-1/2 pointer-events-none"
    ></div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

const socials = [
  {
    label: 'Facebook',
    path: `<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />`,
  },
  {
    label: 'Twitter',
    path: `<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />`,
  },
  {
    label: 'LinkedIn',
    path: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
  },
  {
    label: 'Instagram',
    path: `<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>`,
  },
]

const companyLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Careers', href: '#careers' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  { label: 'Business Loans', href: '#' },
  { label: 'Government Grants', href: '#' },
  { label: 'ISO Certifications', href: '#' },
  { label: 'Startup Registration', href: '#' },
  { label: 'Digital Marketing', href: '#' },
]

// const stats = [
//   { value: '500+', label: 'Businesses Served' },
//   { value: '98%', label: 'Success Rate' },
//   { value: '10+', label: 'Years Experience' },
//   { value: '24/7', label: 'Expert Support' },
// ]
</script>
