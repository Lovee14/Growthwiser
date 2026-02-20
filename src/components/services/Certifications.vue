<template>
  <section id="certifications" class="min-h-screen bg-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- SECTION TITLE -->
      <div class="text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">Certifications</h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get industry-recognized certifications for your business. ISO, MSME, startup
          certifications and more to boost credibility.
        </p>
      </div>

      <!-- CATEGORIES -->
      <div class="space-y-12">
        <!-- Startup & Government -->
        <div>
          <h2 class="text-2xl font-bold text-gray-700 mb-6 border-l-4 border-orange-500 pl-4">
            Startup & Government
          </h2>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              v-for="cert in startupCerts"
              :key="cert.name"
              class="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 p-6 text-center"
              style="background: linear-gradient(135deg, #ff8c00, #ff5500)"
            >
              <div
                class="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-white text-base mb-2">{{ cert.name }}</h3>
              <p class="text-xs mb-4" style="color: rgba(255, 255, 255, 0.85)">
                {{ cert.description }}
              </p>
              <button
                class="text-xs px-4 py-2 rounded-lg transition font-medium"
                style="
                  background: rgba(255, 255, 255, 0.2);
                  color: white;
                  border: 1px solid rgba(255, 255, 255, 0.4);
                "
                onmouseover="this.style.background = 'rgba(255,255,255,0.35)'"
                onmouseout="this.style.background = 'rgba(255,255,255,0.2)'"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <!-- Business Registration -->
        <div>
          <h2 class="text-2xl font-bold text-gray-700 mb-6 border-l-4 border-orange-500 pl-4">
            Business Registration
          </h2>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              v-for="cert in businessCerts"
              :key="cert.name"
              class="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 p-6 text-center"
              style="background: linear-gradient(135deg, #1a1a2e, #16213e)"
            >
              <div
                class="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-10 rounded-full flex items-center justify-center"
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
                    d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-white text-base mb-2">{{ cert.name }}</h3>
              <p class="text-xs mb-4" style="color: rgba(255, 255, 255, 0.75)">
                {{ cert.description }}
              </p>
              <button
                class="text-xs px-4 py-2 rounded-lg transition font-medium"
                style="
                  background: rgba(255, 255, 255, 0.1);
                  color: white;
                  border: 1px solid rgba(255, 255, 255, 0.3);
                "
                onmouseover="this.style.background = 'rgba(255,255,255,0.2)'"
                onmouseout="this.style.background = 'rgba(255,255,255,0.1)'"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <!-- MSME & Quality -->
        <div>
          <h2 class="text-2xl font-bold text-gray-700 mb-6 border-l-4 border-orange-500 pl-4">
            MSME & Quality
          </h2>
          <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div
              v-for="cert in msmeCerts"
              :key="cert.name"
              class="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 p-6 text-center"
              style="background: linear-gradient(135deg, #134e5e, #71b280)"
            >
              <div
                class="w-12 h-12 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center"
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
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </div>
              <h3 class="font-semibold text-white text-base mb-2">{{ cert.name }}</h3>
              <p class="text-xs mb-4" style="color: rgba(255, 255, 255, 0.85)">
                {{ cert.description }}
              </p>
              <button
                class="text-xs px-4 py-2 rounded-lg transition font-medium"
                style="
                  background: rgba(255, 255, 255, 0.2);
                  color: white;
                  border: 1px solid rgba(255, 255, 255, 0.4);
                "
                onmouseover="this.style.background = 'rgba(255,255,255,0.35)'"
                onmouseout="this.style.background = 'rgba(255,255,255,0.2)'"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const startupCerts = ref([
  {
    name: 'Startup India Certification',
    description: 'Official recognition for innovative startups by Government of India',
  },
  { name: 'GeM Certificate', description: 'Sell products & services on Government e-Marketplace' },
  {
    name: 'Shram Suvidha Registration',
    description: 'Unified labour compliance portal registration',
  },
  {
    name: 'Trademark Registration',
    description: 'Protect your brand name, logo and identity legally',
  },
  {
    name: 'ISI Registration',
    description: 'Indian Standards Institution mark for quality products',
  },
  { name: 'BIS Registration', description: 'Bureau of Indian Standards product certification' },
  {
    name: 'Copyright Registration',
    description: 'Protect your creative works and intellectual property',
  },
  {
    name: 'Patent Registration',
    description: 'Secure exclusive rights to your invention or innovation',
  },
])

const businessCerts = ref([
  {
    name: 'Private Limited Company',
    description: 'Most popular business structure with limited liability',
  },
  {
    name: 'Public Limited Company',
    description: 'Raise funds from the public with shares listed on stock exchange',
  },
  {
    name: 'Limited Liability Partnership',
    description: 'Flexible structure combining benefits of partnership and company',
  },
  {
    name: 'Partnership Firm (ROF)',
    description: 'Register your partnership firm under Registrar of Firms',
  },
  {
    name: 'Section 8 Company, 12A & 80G',
    description: 'Non-profit company registration with tax exemption benefits',
  },
  {
    name: 'Non Profit Company Registration',
    description: 'Set up your non-profit organization with legal recognition',
  },
])

const msmeCerts = ref([
  {
    name: 'Udyog Aadhar (MSME)',
    description: 'Official MSME registration for small and medium enterprises',
  },
  {
    name: 'NSIC Registration',
    description: 'National Small Industries Corporation benefits and recognition',
  },
  {
    name: 'Tax Exemption Certificate',
    description: 'Get exemptions and benefits on applicable taxes',
  },
  {
    name: 'ZED Certificate',
    description: 'Zero Defect Zero Effect certification for quality manufacturing',
  },
  {
    name: 'ISO Certificate',
    description: 'International standards certification for quality management',
  },
  {
    name: 'GST Registration & Certificate',
    description: 'Goods and Services Tax registration for your business',
  },
  {
    name: 'FSSAI Certificate',
    description: 'Food Safety and Standards Authority of India license',
  },
  {
    name: 'BIS Certificate',
    description: 'Bureau of Indian Standards certification for compliance',
  },
  {
    name: 'Gumasta Certificate',
    description: 'Shop and establishment registration under local authority',
  },
])
</script>
