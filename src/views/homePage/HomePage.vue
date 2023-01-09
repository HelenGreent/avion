<template>
  <section class="bg-[url('@/assets/image/hero.jpg')] h-[704px] bg-cover pr-20 flex items-center justify-end">
    <div class="flex flex-col justify-between h-[444px] max-w-[630px] pl-[56px] pr-[61px] py-[47px] bg-white-color">
      <div>
        <h2 class="mb-5 font-clash font-normal text-dark-violet text-[32px] leading-10">
          Luxury homeware for people who love timeless design quality
        </h2>
        <span class="text-[18px] text-middle-violet">Shop the new Spring 2022 collection today</span>
      </div>
      <div>
        <router-link to="/" class="text-violet-color hover:underline">View collection</router-link>
      </div>
    </div>
  </section>
  <AboutBrand />
  <ProductsCollection />
  <section class="grid-card">
    <div
      class="flex flex-col justify-between h-[478px] max-w-[630px] pl-[56px] pr-[61px] py-[47px]
      bg-violet-color text-white-color">
      <div>
        <h2 class="mb-5 font-clash font-normal text-[32px] leading-10">
          It started with a small idea
        </h2>
        <span class="text-[18px]">A global brand with local beginnings,
          our story begain in a small studio in South London in early 2014
        </span>
      </div>
      <div class="w-[170px] h-[56px] flex justify-center items-center bg-violet-opacity cursor-pointer">
        <router-link to="/" class="hover:underline">View collection</router-link>
      </div>
    </div>
    <img src="@/assets/image/livingRoom.jpg" alt="livingRoom" class="max-w-[630px]">
  </section>
  <Subscribe />
</template>

<style scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  padding: 0 80px;
  margin-bottom: 60px;
}
</style>
