<template>
  <div class="container">
    <section>
      <div class="grid-card">
        <Product
          v-for="product in productsStore.productCollection"
          :key="product.id"
          :product="product"
          :product-detail-route="{
            name: $routeNames.productDetail,
            params: { id: product.id }
          }"
        />
      </div>
      <div class="md:px-6 md:pb-[28px] flex justify-center pb-10">
        <router-link
          to="/productList/all"
          class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer
        hover:bg-black-color-opacity ease-in-out duration-300"
        >
          <p class="text-violet-color">View collection</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>

const productsStore = useProductsStore()
const { getProductCollection } = productsStore

const currentProduct = computed(() => productsStore.product)

async function getProducts () {
  const getCollection = currentProduct.value?.type
    ? `&type=fts.%27${currentProduct.value?.type}%27&offset=0&limit=4`
    : '&type=fts.%27chairs%27&offset=0&limit=4'

  try {
    await getProductCollection(`${getCollection}`)
  } catch (error) {
    console.log(error)
  }
}

onMounted(getProducts)
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 64px;
}

@media screen and (max-width: 1024px) {
  .grid-card {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    margin-bottom: 40px;
  }
}
@media screen and (max-width: 639px) {
  .grid-card {
    grid-template-columns: 1fr;
  }
}
</style>
