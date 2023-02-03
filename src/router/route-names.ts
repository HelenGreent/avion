import { authRouteNames } from '@/views/auth/auth.routes'
import { adminRouteNames } from '@/views/admin-panel/admin.routes'

export const routeNames = {
  rootPage: 'rootPage',

  home: 'home',
  productList: 'product-list',
  productDetail: 'product-detail',
  aboutUs: 'about-us',
  productBasket: 'product-basket',
  error: 'error',
  ...authRouteNames,
  ...adminRouteNames
}
