<template>
  <section id="about" class="section-padding bg-gray-50">
    <div class="container-padding">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div v-motion :initial="{ opacity: 0, x: -50 }" :visible="{ opacity: 1, x: 0 }">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Your Business, <span class="gradient-text">Our Blueprint</span>
            </h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              Facing challenges in scaling your business? You're not alone. At GrowthWiser, we've
              been in the trenches transforming obstacles into opportunities— whether it's securing
              funding, navigating loans and grants, or getting certifications, compliance, and
              regulations for your business.
            </p>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              We'll help you navigate your path to success with expert guidance at every step. Our
              mission is to empower businesses like yours to achieve sustainable growth and unlock
              untapped potential.
            </p>

            <div class="grid sm:grid-cols-2 gap-6">
              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Expert Guidance</h3>
                  <p class="text-gray-600">Industry specialists with proven track records</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div
                  class="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Rapid Results</h3>
                  <p class="text-gray-600">Fast-track your business goals efficiently</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div
            class="relative"
            v-motion
            :initial="{ opacity: 0, x: 50 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="200"
          >
            <div class="relative z-10">
              <div
                class="glass-white rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300"
              >
                <div class="space-y-6">
                  <div class="flex items-center gap-4">
                    <div
                      class="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="white"
                        class="w-8 h-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                        />
                      </svg>
                    </div>
                    <div>
                      <div class="text-2xl font-bold gradient-text">10+ Years</div>
                      <div class="text-gray-600">Industry Experience</div>
                    </div>
                  </div>

                  <div class="h-px bg-gradient-to-r from-primary-400 to-secondary-400"></div>

                  <div class="grid grid-cols-2 gap-4">
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-xl font-bold text-primary-600">100%</div>
                      <div class="text-sm text-gray-600">Customized</div>
                    </div>
                    <div class="text-center p-4 bg-gray-50 rounded-lg">
                      <div class="text-xl font-bold text-secondary-600">24/7</div>
                      <div class="text-sm text-gray-600">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Background decoration -->
            <div
              class="absolute -top-6 -right-6 w-full h-full rounded-2xl bg-gradient-to-br from-primary-200 to-secondary-200 -z-10"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic
</script>
