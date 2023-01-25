import type { IProduct } from '@/types/products.types'

export const useAdminStore = defineStore('adminStore', () => {
  const adminProducts = ref<IProduct[]>([])

  async function getAdminProducts () {
    adminProducts.value = await adminService.getAdminProducts()
  }

  return {
    adminProducts,
    getAdminProducts
  }
})
