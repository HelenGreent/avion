<template>
  <!-- #TODO висить помилка ts -->
  <section>
    <div class="grid-card">
      <Product
        v-for="product in products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
      />
    </div>
    <a href="#" class="block text-center text-violet-color hover:underline" />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface IProducts {
  id: number
  img: string
  title: string
  price: string
}

const products = ref<IProducts[]>([
  {
    id: 1,
    img: '/src/assets/image/product1.jpg',
    title: 'The Dandy chair',
    price: '£250'
  },
  {
    id: 2,
    img: '/src/assets/image/product2.jpg',
    title: 'Rustic Vase Set',
    price: '£115'
  },
  {
    id: 3,
    img: '/src/assets/image/product3.jpg',
    title: 'The Silky Vase',
    price: '£250'
  },
  {
    id: 4,
    img: '/src/assets/image/product4.jpg',
    title: 'The Lucy Lamp',
    price: '£399'
  }
])
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  padding: 0 80px;
  margin-bottom: 64px;
}
</style>
