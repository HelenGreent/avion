<template>
  <section
    class="md:h-auto md:bg-none md:p-0 md:justify-center bg-[url('@/assets/image/hero.jpg')] h-[704px] bg-cover
    pr-20 flex items-center justify-end"
  >
    <div
      class="sm:px-6 md:pb-8 md:pt-0 md:min-h-0 md:block  md:p-0 flex flex-col justify-between items-start
      h-[444px] max-w-[630px] pl-[56px] pr-[61px] py-[47px] bg-white-color"
    >
      <div class="md:mb-5">
        <h2 class="mb-5 md:text-2xl font-clash font-normal text-dark-violet text-[32px] leading-10">
          Luxury homeware for people who love timeless design quality
        </h2>
        <span class="md:mb-8 md:text-base text-[18px] text-middle-violet">
          Shop the new Spring 2022 collection today
        </span>
      </div>
      <router-link
        to="/productList"
        class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-light-grey cursor-pointer"
      >
        <p class="text-violet-color hover:underline">View collection</p>
      </router-link>
      <img src="@/assets/image/hero.jpg" alt="hero image" class="md:block md:mt-8 h-[304px] object-cover hidden">
    </div>
  </section>

  <AboutBrand />
  <div class="lg:px-5 px-20">
    <ProductsCollection />
  </div>

  <section class="grid-card">
    <div
      class="md:px-8 md:pt-9 md:h-auto flex flex-col justify-between h-[478px] max-w-[630px]
      pl-[56px] pr-[61px] py-[47px] bg-violet-color text-white-color"
    >
      <div class="md:pb-14">
        <h2 class="md:text-xl mb-5 font-clash font-normal text-[32px] leading-10">
          It started with a small idea
        </h2>
        <span class="md:text-sm text-lg">A global brand with local beginnings,
          our story begain in a small studio in South London in early 2014
        </span>
      </div>
      <router-link
        to="/aboutUs"
        class="md:w-full w-[170px] h-[56px] flex justify-center items-center bg-violet-opacity cursor-pointer"
      >
        <p class="hover:underline">View collection</p>
      </router-link>
    </div>
    <div class="overflow-hidden">
      <img
        src="@/assets/image/livingRoom.jpg"
        alt="livingRoom"
        class="md:mt-6 md:mb-8 md:h-auto h-full object-cover transition-transform hover:scale-110"
      >
    </div>
  </section>

  <Subscribe />
</template>

<style scoped>
.grid-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 16px;
  padding: 0 80px;
  margin: 60px 0 60px 0;
}
@media screen and (max-width: 767px) {
  .grid-card {
    grid-template-columns: 1fr;
    margin: 28px 0 24px 0;
    padding: 20px 24px 0 24px;
  }
}
</style>
