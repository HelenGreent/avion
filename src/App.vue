<template>
  <router-view />
</template>

<script lang="ts" setup>
const productsStore = useProductsStore()

async function getProductsListRange () {
  const query = `&offset=0&limit=9`
  try {
    await productsStore.getProducts(query)
  } catch (error) {
    console.log(error)
  }
}

onMounted(getProductsListRange)
</script>
