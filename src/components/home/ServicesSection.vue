<template>
  <section id="services" class="section-padding bg-white">
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
            Our <span class="gradient-text">Services</span>
          </h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to accelerate your business growth and navigate regulatory
            landscapes with confidence
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            v-for="(service, index) in services"
            :key="service.title"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :link="service.link"
            :delay="index * 100"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'
import ServiceCard from '../ui/ServiceCard.vue'

const services = [
  {
    title: 'Business Loans',
    description:
      'Access quick and affordable financing options tailored to your business needs. We help you secure loans from banks and financial institutions.',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        }),
      ],
    ),
    link: '/services/loan',
  },
  {
    title: 'Government Grants',
    description:
      'Unlock government funding opportunities. Our experts help you identify and apply for grants that match your business profile.',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
        }),
      ],
    ),
    link: '/services/grant',
  },
  {
    title: 'Certifications',
    description:
      'Get industry-recognized certifications for your business. ISO, MSME, startup certifications and more to boost credibility.',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
        }),
      ],
    ),
    link: '/services/certifications',
  },
  {
    title: 'Startup & Compliance',
    description:
      'Complete startup registration and compliance support. From incorporation to tax filings, we handle all regulatory requirements.',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
        }),
      ],
    ),
    link: 'services/complainces',
  },
  {
    title: 'Digital Business Support',
    description:
      'Transform your business digitally. We provide guidance on digital marketing, e-commerce setup, and online presence.',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25',
        }),
      ],
    ),
    link: '/services/digital',
  },
  {
    title: 'Business Consulting',
    description:
      'Strategic business consulting to optimize operations, improve efficiency, and drive sustainable growth for your enterprise.',
    icon: h(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        fill: 'none',
        viewBox: '0 0 24 24',
        strokeWidth: '2',
        stroke: 'currentColor',
      },
      [
        h('path', {
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          d: 'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z',
        }),
      ],
    ),
    link: '/services/consulting',
  },
]
</script>
