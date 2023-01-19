<template>
  <router-view />
</template>

<script lang="ts" setup>
const productsStore = useProductsStore()
const { getProducts } = productsStore

async function getProductsList () {
  try {
    await getProducts()
  } catch (error) {
    console.log(error)
  }
}

onMounted(getProductsList)
</script>
