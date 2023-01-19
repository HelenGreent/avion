import type { IProducts } from '@/types/products.types'

class ProductsService {
  getProducts () {
    return useHttp.get<IProducts[]>('rest/v1/products?select=*')
  }
}

export const productsService = new ProductsService()
