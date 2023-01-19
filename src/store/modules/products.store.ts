import type { IProducts } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProducts[]>([])

  async function getProducts () {
    products.value = await productsService.getProducts()
  }

  return {
    products,
    getProducts
  }
})
