import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/pages/index.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexPage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/about.vue'),
    },
  ],
})
