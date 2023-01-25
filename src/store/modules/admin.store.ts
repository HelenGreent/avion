import type { IPostProduct, IProduct } from '@/types/products.types'

export const useAdminStore = defineStore('adminStore', () => {
  const adminProducts = ref<IProduct[]>([])
  const postProducts = ref<IPostProduct[]>([])
  const pending = ref(false)

  async function getAdminProducts () {
    adminProducts.value = await adminService.getAdminProducts()
  }

  async function addProduct (product: IPostProduct) {
    try {
      pending.value = true
      await adminService.addProduct(product)
      postProducts.value.push(product)
    } catch (error) {
      console.warn(error)
    } finally {
      pending.value = false
    }
  }

  return {
    adminProducts,
    getAdminProducts,
    addProduct,
    pending
  }
})
