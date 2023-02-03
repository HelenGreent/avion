import 'vue-router'
import { routeNames } from '@/router/route-names'
import { globalProperties, portalNames } from '@/plugins'
import type { EpPropFinalized, EpPropMergeType } from 'element-plus/es/utils'

declare module 'vue-router' {
  interface RouteMeta {
    isProtected: boolean
    label?: string
    parentName?: string
    requireAuth?: boolean
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $portalNames: typeof portalNames
    $routeNames: typeof routeNames

    $elComponentSize: Record<keyof typeof globalProperties.$elComponentSize, EpPropMergeType<StringConstructor, keyof typeof globalProperties.$elComponentSize>>
    $elComponentType: Record<keyof typeof globalProperties.$elComponentType, EpPropFinalized<StringConstructor, keyof typeof globalProperties.$elComponentType>>
  }
}

export { }
