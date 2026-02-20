import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/services/grant',
      name: 'grant',
      component: () => import('../components/services/grant.vue'),
    },
    {
      path: '/services/loan',
      name: 'loan',
      component: () => import('../components/services/loan.vue'),
    },
    {
      path: '/services/certifications',
      name: 'certifications',
      component: () => import('../components/services/certifications.vue'),
    },
    {
      path: '/services/digital',
      name: 'digital',
      component: () => import('../components/services/digital.vue'),
    },
    {
      path: '/services/complainces',
      name: 'complainces',
      component: () => import('../components/services/complainces.vue'),
    },
    {
      path: '/services/consulting',
      name: 'consulting',
      component: () => import('../components/services/consulting.vue'),
    },
  ],
})

export default router
