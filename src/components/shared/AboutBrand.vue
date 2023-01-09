<template>
  <section class="p-20 text-violet-color">
    <h3 class="mb-9 font-normal text-center text-2xl">What makes our brand different</h3>
    <div class="grid-card">
      <div v-for="(item, index) in aboutBrands" :key="index">
        <div>
          <img :src="item.img" :alt="item.alt" class="block mb-3">
        </div>
        <h4 class="mb-3 text-xl"> {{ item.title }}</h4>
        <span class="leading-4"> {{ item.description }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface IAboutBrand {
  img: string
  alt: string
  title: string
  description: string
}

const aboutBrands: IAboutBrand[] = [{
  img: '/src/assets/icons/delivery.svg',
  alt: 'delivery icon',
  title: 'Next day as standard',
  description: 'Order before 3pm and get your order the next day as standard'
},
{
  img: '/src/assets/icons/checkmark.svg',
  alt: 'checkmark icon',
  title: 'Made by true artisans',
  description: 'Handmade crafted goods made with real passion and craftsmanship'
},
{
  img: '/src/assets/icons/purchase.svg',
  alt: 'purchase icon',
  title: 'Unbeatable prices',
  description: 'For our materials and quality you won’t find better prices anywhere'
},
{
  img: '/src/assets/icons/plant.svg',
  alt: 'plant icon',
  title: 'Recycled packaging',
  description: 'We use 100% recycled to ensure our footprint is more manageable'
}
]
</script>

<style lang="scss" scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(4, 210px);
  justify-content: space-between;
}
</style>
