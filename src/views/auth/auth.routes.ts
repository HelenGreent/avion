import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Registration.vue'

export const authRoutesNames = {
  login: 'login',
  registration: 'registration'
}

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: authRoutesNames.login,
    component: Login
  },
  {
    path: '/registration',
    name: authRoutesNames.registration,
    component: Register
  }
]
