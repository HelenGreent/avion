import { homeRouteNames } from '@/views/homePage/home.routes'
import { productListRouteNames } from '@/views/productList/productList.routes'
import { productDetailRouteNames } from '@/views/productDetail/productDetail.routes'
import { aboutUsRouteNames } from '@/views/aboutUsPage/aboutUsPage.routes'
import { authRoutesNames } from '@/views/auth/auth.routes'

export const routeNames = {
  ...homeRouteNames,
  ...productListRouteNames,
  ...productDetailRouteNames,
  ...aboutUsRouteNames,
  ...authRoutesNames
}
