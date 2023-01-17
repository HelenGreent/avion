import type { RouteRecordRaw } from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout.vue'

export const authRouteNames = {
  auth: 'auth',
  login: 'login',
  registration: 'registration',
  accessDenied: 'accessDenied',
  page404: 'page404',
  forgotPassword: 'forgotPassword',
  resetPassword: 'resetPassword'
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
    },
    {
      path: '/404',
      name: authRouteNames.page404,
      component: () => import('@/views/404-page/404Page.vue')
    },
    {
      path: '/accessDenied',
      name: authRouteNames.accessDenied,
      component: () => import('@/views/access-denied/AccessDenied.vue')
    },
    {
      path: '/forgotPassword',
      name: authRouteNames.forgotPassword,
      component: () => import('./ForgotPassword.vue')
    },
    {
      path: '/resetPassword',
      name: authRouteNames.resetPassword,
      component: () => import('./ResetPassword.vue')
    }
  ]
}
