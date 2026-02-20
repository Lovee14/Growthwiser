<template>
  <section id="loan" class="min-h-screen bg-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- SECTION TITLE -->
      <div class="text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">Business Loans</h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore funding opportunities across sectors to grow your business and innovation.
        </p>
      </div>

      <!-- GRANTS GRID -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="grant in grants"
          :key="grant.scheme"
          class="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 p-6 text-center"
          style="background: linear-gradient(135deg, #ff8c00, #ff5500)"
        >
          <!-- LABEL + AMOUNT (One Line) -->
          <h2 class="text-xl font-bold text-white">
            {{ grant.label }}
            <span class="text-yellow-200">{{ grant.amount }}</span>
          </h2>

          <!-- SCHEME NAME -->
          <h3 class="text-md font-semibold text-white mt-3">
            {{ grant.scheme }}
          </h3>

          <!-- DESCRIPTION -->
          <p class="text-sm mt-3 text-white/85">
            {{ grant.description }}
          </p>

          <!-- BUTTON -->
          <button
            class="mt-4 text-xs px-4 py-2 rounded-lg transition font-medium"
            style="
              background: rgba(255, 255, 255, 0.2);
              color: white;
              border: 1px solid rgba(255, 255, 255, 0.4);
            "
            onmouseover="this.style.background = 'rgba(255,255,255,0.35)'"
            onmouseout="this.style.background = 'rgba(255,255,255,0.2)'"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const grants = ref([
  {
    label: 'Up To',
    amount: '₹10L - ₹15L',
    scheme: 'Financial Assistance for SC, ST & OBC',
    description: 'Supports SC, ST and OBC entrepreneurs across all sectors.',
  },
  {
    label: 'Up To',
    amount: '₹10 Lakhs',
    scheme: 'Prime Minister Mudra Yojna (PMMY)',
    description: 'Provides funding options with interest rates ranging from 7% to 12%.',
  },
  {
    label: 'Up To',
    amount: '₹2 Crore',
    scheme: 'National Agri Infra Financing (NAIFF)',
    description: 'Supports infrastructure development in agri-business at 6% effective interest.',
  },
  {
    label: 'Up To',
    amount: '₹50 Crore',
    scheme: 'Animal Husbandry Infrastructure Development Fund (AHDF)',
    description:
      'Offers loans for modern infrastructure in the animal husbandry sector at 6% interest.',
  },
  {
    label: 'Up To',
    amount: '₹50 Lakhs',
    scheme: 'PMEGP (Prime Minister Employment Generation Program)',
    description: 'Offers low-interest loans between 8% and 12%.',
  },
  {
    label: 'Up To',
    amount: 'Subsidy 35%',
    scheme: 'Prime Minister Micro Food Processing Enterprise (PMFME)',
    description: 'Boosts micro food processing sector with 35% capital subsidy.',
  },
  {
    label: 'Up To',
    amount: '₹30L - ₹35L',
    scheme: 'Assistance for Loan & Subsidy',
    description: 'Supports manufacturing MSMEs in Gujarat.',
  },
  {
    label: 'Up To',
    amount: '₹50 Lakhs',
    scheme: 'Startup India Seed Fund Scheme (SISFS)',
    description: 'Supports loans at 6.5% interest with 12-month moratorium.',
  },
  {
    label: 'Up To',
    amount: '₹5 Crore',
    scheme: 'CGTMSE',
    description: 'Credit guarantee support for micro and small enterprises.',
  },
])
</script>
