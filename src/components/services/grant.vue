<template>
  <section id="grant" class="min-h-screen bg-white py-16">
    <div class="max-w-7xl mx-auto px-6">
      <!-- SECTION TITLE -->
      <div class="text-center mb-14">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800">Government Grants</h1>
        <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore funding opportunities across sectors to grow your business and innovation.
        </p>
      </div>

      <!-- GRANTS GRID -->
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="grant in grants"
          :key="grant.name"
          class="rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 p-6 text-center"
          style="background: linear-gradient(135deg, #ff8c00, #ff5500)"
        >
          <h3 class="font-semibold text-white text-lg mb-2">
            {{ grant.name }}
          </h3>
          <p class="text-sm mb-4" style="color: rgba(255, 255, 255, 0.85)">
            {{ grant.description }}
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
  { name: 'Nidhi Prayas', description: 'Research & Development Grant' },
  { name: 'Product Development Grant', description: 'Advancing innovation and product growth' },
  { name: 'Grant for Textile', description: 'Revitalizing the textile industry' },
  { name: 'Young Innovators Grant', description: 'Empowering future leaders' },
  { name: 'Grant for Defense and Aerospace', description: 'Pioneering future automation' },
  { name: 'Pitch – Pilot Program', description: 'Showcasing new ventures' },
  { name: 'NGO Growth Fund', description: 'Scaling for profit initiatives' },
  { name: 'Pathfinder Grant', description: 'Empowering future leaders' },
  { name: 'Innovation Grant', description: 'Fueling grand and defining ideas' },
  { name: 'Samastha Wash Tech', description: 'Sustainable water solutions' },
  { name: 'Animal Barn Challenge', description: 'Solutions for animal welfare' },
  { name: 'Womenpreneur Initiative', description: 'Supporting female initiatives' },
  { name: 'Business for Impact Grant 2024', description: 'Socially responsible business' },
  { name: 'AI Challenge', description: 'Innovating with artificial intelligence' },
  { name: 'Health Tech Scheme', description: 'Exploring new frontiers in healthcare' },
  { name: 'MSW – 2024', description: 'Municipal Solid Waste solutions' },
  { name: 'Inspire Her', description: 'Mentorship for women' },
  { name: 'DLI Scheme', description: 'Advancing digital literacy initiatives' },
  { name: 'Agri-Preneur Cohort', description: 'Supporting agricultural entrepreneurs' },
  { name: 'Seed Fund', description: 'Early-stage business support' },
  { name: 'Global Impact Grant', description: 'Addressing future technologies' },
  { name: 'Grant for NGO', description: 'Supporting non-profit initiatives' },
  { name: 'GIC – 2024', description: 'Green Innovation Challenge' },
  { name: 'Grant for Automate', description: 'Advancing industrial automation' },
  { name: 'Agri-Business Grant', description: 'Supporting agricultural innovation' },
  { name: 'MSME Design', description: 'Boosting design in small businesses' },
  { name: 'RKVY Raftar', description: 'Revolutionizing healthcare' },
  { name: 'TIDE 2.0', description: 'Technology Innovation & Development' },
])
</script>
