<template>
  <router-view />
</template>

<script lang="ts" setup>
const productsStore = useProductsStore()
const authStore = useAuthStore()

async function getProductsListRange () {
  const query = '&offset=0&limit=10'
  try {
    await productsStore.getProducts(query)
  } catch (error) {
    console.log(error)
  }
}

async function getUserData () {
  const id = computed(() => authStore.userId)
  console.log(id)
  try {
    await authStore.getUser(id)
    console.log(id)
  } catch (error) {
    console.log(error)
  }
}

onMounted(getProductsListRange)
onMounted(getUserData)
</script>
