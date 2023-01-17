import type { IProducts } from '@/types/products.types'

export const useProductsStore = defineStore('productsStore', () => {
  const products = ref<IProducts[]>([])

  const getProducts = () => {
    if (products.value.length) return

    return productsService.getProducts()
      .then(res => {
        products.value = res
      })
  }

  return {
    products,
    getProducts
  }
})
