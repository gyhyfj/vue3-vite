import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home/home.vue'),
  },
]

if (process.env.NODE_ENV === 'development') {
  routes.push({
    path: '/svg',
    component: () => import('@/assets/svg/svg-preview.vue'),
  })
}

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
