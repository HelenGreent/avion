import type { IBasketProduct } from '@/types/products.types'

export const useBasketStore = defineStore('basketStore', () => {
  const basketProducts = ref<IBasketProduct[]>([])

  function addProducts (product: IBasketProduct, count: number) {
    basketProducts.value.push({ ...product, count })
  }

  function deleteProduct (index: number) {
    basketProducts.value.splice(index, 1)
  }

  const totalProductsCount = computed(() => basketProducts.value.reduce((total, product) => total + product.count, 0))

  return {
    basketProducts,
    addProducts,
    deleteProduct,
    totalProductsCount
  }
})
