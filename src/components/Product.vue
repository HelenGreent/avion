<template>
  <div>
    <router-link
      v-if="product.id"
      :to="productDetailRoute"
    >
      <div>
        <img
          :src="product.image_url" alt="title" class="scale-img h-[375px] block mb-6"
        >
      </div>
      <p class="md:mb-0 block mb-2 font-clash text-violet-color text-xl hover:underline">
        {{ product.title }}
      </p>
      <span class="md:text-base mb-2 text-violet-color text-lg">£{{ product.price }}</span>
    </router-link>
    <div class="pt-[6px] pr-4 font-normal text-sm">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'
import type { IProduct } from '@/types/products.types'

defineProps<{
  product: IProduct
  productDetailRoute: RouteLocationRaw
}>()
</script>
