import { homeRouteNames } from '@/views/homePage/home.routes'
import { productListRouteNames } from '@/views/productListPage/productListPage.routes'
import { productDetailRouteNames } from '@/views/productDetailPage/productDetailPage.routes'
import { aboutUsRouteNames } from '@/views/aboutUsPage/aboutUsPage.routes'

export const routeNames = {
  ...homeRouteNames,
  ...productListRouteNames,
  ...productDetailRouteNames,
  ...aboutUsRouteNames
}
