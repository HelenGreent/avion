import type { IProduct } from '@/types/products.types'

class ProductsService {
  getProducts () {
    return useHttp.get<IProduct[]>('rest/v1/products?select=*')
  }

  filterProducts (query: string) {
    return useHttp.get<IProduct[]>(`rest/v1/products?select=*${query}`)
  }
}

export const productsService = new ProductsService()
