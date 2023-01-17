<template>
  <div>
    <router-link to="/">
      <img :src="product.image_url" alt="title" class="h-[375px] block mb-6">
    </router-link>
    <router-link to="/" class="md:mb-0 block mb-2 font-clash text-violet-color text-xl hover:underline">
      {{ product.title }}
    </router-link>
    <span class="md:text-base mb-2 text-violet-color text-lg">£{{ product.price }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { IProducts } from '@/types/products.types'

const props = defineProps<{
  product: IProducts
}>()

console.log(props)
</script>
