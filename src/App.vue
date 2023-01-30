<template>
  <router-view v-if="!isProductLoading" />
</template>

<script lang="ts" setup>
const productsStore = useProductsStore()
const isProductLoading = ref(true)

async function getProductsListRange () {
  const query = '&offset=0&limit=10'
  try {
    await productsStore.getProducts(query)
  } catch (error) {
    console.log(error)
  } finally {
    isProductLoading.value = false
  }
}

onMounted(getProductsListRange)
</script>
