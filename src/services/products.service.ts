import type { IProduct } from '@/types/products.types'

class ProductsService {
  getProducts (query: string) {
    return useHttp.get<IProduct[]>(`rest/v1/products?select=*${query}`)
  }

  filterProducts (query: string) {
    return useHttp.get<IProduct[]>(`rest/v1/products?select=*${query}`)
  }

  getMoreProducts () {
    return useHttp.get<IProduct[]>('rest/v1/products?select=*')
  }
}

export const productsService = new ProductsService()
