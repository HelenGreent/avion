<template>
  <section class="container md:p-6 md:pt-36 p-20 text-violet-color">
    <h3 class="sm:text-left md:text-xl mb-9 font-clash font-normal text-center text-2xl">
      What makes our brand different
    </h3>
    <div class="grid-card">
      <div v-for="(item, index) in aboutBrands" :key="index" class="md:px-6 md:py-9 bg-light-grey p-12">
        <div>
          <img :src="item.img" :alt="item.alt" class="block mb-3">
        </div>
        <h4 class="mb-3 text-xl"> {{ item.title }}</h4>
        <span class="text-base"> {{ item.description }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const aboutBrands = [{
  img: '@/assets/icons/delivery.svg',
  alt: 'delivery icon',
  title: 'Next day as standard',
  description: 'Order before 3pm and get your order the next day as standard'
},
{
  img: '@/assets/icons/checkmark.svg',
  alt: 'checkmark icon',
  title: 'Made by true artisans',
  description: 'Handmade crafted goods made with real passion and craftsmanship'
},
{
  img: '@/assets/icons/purchase.svg',
  alt: 'purchase icon',
  title: 'Unbeatable prices',
  description: 'For our materials and quality you won’t find better prices anywhere'
},
{
  img: '@/assets/icons/plant.svg',
  alt: 'plant icon',
  title: 'Recycled packaging',
  description: 'We use 100% recycled to ensure our footprint is more manageable'
}
]
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: space-between;
  column-gap: 18px;
}
@media screen and (max-width: 1024px) {
  .grid-card {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
}
@media screen and (max-width: 767px) {
  .grid-card {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
}
</style>
