import type { IProducts } from '@/types/products.types'

export const useBasketStore = defineStore('basketStore', () => {
  const basketProducts = ref<IProducts[]>([])

  // check same product
  function addProducts (product: any, count: number) {
    const basketIndex = basketProducts.value.findIndex(el => el.id === product.id)
    if (basketIndex === -1) {
      basketProducts.value.push({ ...product, count })
    }
  }

  return {
    basketProducts,
    addProducts
  }
})
