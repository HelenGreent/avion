import type { IPostProduct, IProduct } from '@/types/products.types'

export const useAdminStore = defineStore('adminStore', () => {
  const adminProducts = ref<IProduct[]>([])
  const postProducts = ref<IPostProduct[]>([])

  async function getAdminProducts () {
    adminProducts.value = await adminService.getAdminProducts()
  }

  async function addProduct (product: IPostProduct) {
    try {
      await adminService.addProduct(product)
      console.log(postProducts)
      postProducts.value.push(product)
    } catch (error) {
      console.warn(error)
    }
  }

  return {
    adminProducts,
    getAdminProducts,
    addProduct
  }
})
