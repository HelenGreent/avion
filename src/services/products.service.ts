import type { IProducts } from '@/types/products.types'

class ProductsService {
  // https://klhjdamxbbfthsakhpxe.supabase.co/rest/v1/chairs?select=*'
  getProducts () {
    return useHttp.get<IProducts[]>('rest/v1/chairs?select=*')
  }
}

export const productsService = new ProductsService()
