import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home/home.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
