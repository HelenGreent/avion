<template>
  <div>
    <router-link to="/productDetail">
      <img :src="img" alt="title" class="block mb-6">
    </router-link>
    <router-link to="/productDetail" class="md:mb-0 block mb-2 font-clash text-violet-color text-xl hover:underline">
      {{ title }}
    </router-link>
    <span class="md:text-base mb-2 text-violet-color text-lg">{{ price }}</span>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{
  id: number
  img: string
  title: string
  price: string
}>()

console.log(props)
</script>
