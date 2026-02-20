<template>
  <section id="contact" class="section-padding bg-gray-50">
    <div class="container-padding">
      <div class="max-w-6xl mx-auto">
        <!-- Section Header -->
        <div
          class="text-center mb-16"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0 }"
        >
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In <span class="gradient-text">Touch</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help. Fill out the form below and we'll get back to you
            within 24 hours.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div v-motion :initial="{ opacity: 0, x: -30 }" :visible="{ opacity: 1, x: 0 }">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>

              <!-- Service Interest -->
              <div>
                <label for="service" class="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  v-model="formData.service"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="loans">Business Loans</option>
                  <option value="grants">Government Grants</option>
                  <option value="certifications">Certifications</option>
                  <option value="startup">Startup & Compliance</option>
                  <option value="digital">Digital Business Support</option>
                  <option value="consulting">Business Consulting</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  required
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your business needs..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <BaseButton
                type="submit"
                variant="primary"
                size="lg"
                :loading="isSubmitting"
                class="w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </BaseButton>

              <!-- Success Message -->
              <div
                v-if="submitSuccess"
                class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-start gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 flex-shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <div class="font-semibold">Message sent successfully!</div>
                  <div class="text-sm">We'll get back to you within 24 hours.</div>
                </div>
              </div>
            </form>
          </div>

          <!-- Contact Info -->
          <div
            class="space-y-8"
            v-motion
            :initial="{ opacity: 0, x: 30 }"
            :visible="{ opacity: 1, x: 0 }"
            :delay="200"
          >
            <!-- Contact Cards -->
            <div class="glass-white p-6 rounded-2xl">
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a
                    href="mailto:info@growthwiser.in"
                    class="text-primary-600 hover:text-primary-700"
                  >
                    info@growthwiser.in
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-white p-6 rounded-2xl">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:+911234567890" class="text-primary-600 hover:text-primary-700">
                    +91 94273 43165
                  </a>
                </div>
              </div>
            </div>

            <div class="glass-white p-6 rounded-2xl">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p class="text-gray-600">
                    345, Sun gravitas, Near Shyamal cross road, Ahmedabad-380015
                  </p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="glass-white p-6 rounded-2xl">
              <h3 class="font-semibold text-gray-900 mb-4">Business Hours</h3>
              <div class="space-y-2 text-gray-600">
                <div class="flex justify-between">
                  <span>Monday - Friday</span>
                  <span class="font-medium">9:30 AM - 6:30 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Saturday</span>
                  <span class="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div class="flex justify-between">
                  <span>Sunday</span>
                  <span class="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../ui/BaseButton.vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitSuccess.value = false

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  }

  isSubmitting.value = false
  submitSuccess.value = true

  // Hide success message after 5 seconds
  setTimeout(() => {
    submitSuccess.value = false
  }, 5000)
}
</script>
