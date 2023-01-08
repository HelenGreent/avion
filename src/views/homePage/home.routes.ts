import type { RouteRecordRaw } from 'vue-router'
import HomePage from './HomePage.vue'

export const homeRouteNames = {
  home: 'home'
}

export const homeRoutes: RouteRecordRaw[] = [
  {
    name: homeRouteNames.home,
    path: '/',
    component: HomePage
  }
]
