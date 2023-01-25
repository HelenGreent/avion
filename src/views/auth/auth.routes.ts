import type { RouteRecordRaw } from 'vue-router'
import BlankLayout from '@/layouts/BlankLayout.vue'

export const authRouteNames = {
  auth: 'auth',
  login: 'login',
  registration: 'registration',
  accessDenied: 'accessDenied',
  error: 'error',
  forgotPassword: 'forgotPassword'
  // adminPanel: 'adminPanel'
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
      path: '/error',
      name: authRouteNames.error,
      component: () => import('@/views/error-page/ErrorPage.vue')
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
    }
    // {
    //   path: '/adminPanel',
    //   name: authRouteNames.adminPanel,
    //   component: () => import('@/views/admin-panel/AdminPanel.vue')
    // }
  ]
}
