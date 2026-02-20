<template>
  <div>
    <HeroSection class="herosection" id="herosection" />
    <AboutSection class="aboutsection" id="aboutsection" />
    <ServicesSection class="servicessection" id="servicessection" />
    <WhyChooseSection class="whychoose" id="whychoose" />
    <ProcessSection class="process" id="process" />
    <TestimonialsSection class="testimonials" id="testimonials" />
    <CTABanner class="cta" id="cta" />
    <ContactSection class="contact" id="contact" />
  </div>
</template>

<script setup>
import HeroSection from '../components/home/HeroSection.vue'
import AboutSection from '../components/home/AboutSection.vue'
import ServicesSection from '../components/home/ServicesSection.vue'
// import WhyChooseSection from '../components/home/WhyChooseSection.vue'
import ProcessSection from '../components/home/ProcessSection.vue'
import TestimonialsSection from '../components/home/TestimonialsSection.vue'
import CTABanner from '../components/home/CTABanner.vue'
import ContactSection from '../components/home/ContactSection.vue'
</script>
