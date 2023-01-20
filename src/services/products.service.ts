import type { IProduct } from '@/types/products.types'

class ProductsService {
  getProducts () {
    return useHttp.get<IProduct[]>('rest/v1/products?select=*')
  }
}

export const productsService = new ProductsService()
