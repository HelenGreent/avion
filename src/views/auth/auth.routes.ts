import type { RouteRecordRaw } from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout.vue'

export const authRouteNames = {
  auth: 'auth',
  login: 'login',
  registration: 'registration'
}

export const authRoutes: RouteRecordRaw = {
  name: authRouteNames.auth,
  path: '/auth',
  redirect: { name: authRouteNames.login },
  component: BlankLayout,
  children: [
    {
      path: '/login',
      name: authRouteNames.login,
      component: () => import('./Login.vue')
    },
    {
      path: '/registration',
      name: authRouteNames.registration,
      component: () => import('./Registration.vue')
    }
  ]
}
