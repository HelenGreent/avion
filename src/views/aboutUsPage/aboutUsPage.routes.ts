import type { RouteRecordRaw } from 'vue-router'
import AboutUs from './AboutUsPage.vue'

export const aboutUsRouteNames = {
  aboutUs: 'aboutUs'
}

export const aboutUsRoutes: RouteRecordRaw[] = [
  {
    name: aboutUsRouteNames.aboutUs,
    path: '/aboutUs',
    component: AboutUs
  }
]
