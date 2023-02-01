<template>
  <section class="container md:p-6 md:pt-36 p-20 text-violet-color">
    <h3 class="sm:text-left md:text-xl mb-9 font-clash font-normal text-center text-2xl">
      What makes our brand different
    </h3>
    <div class="grid-card">
      <div class="md:px-6 md:py-9 bg-light-grey p-12">
        <div class="block mb-3">
          <IconDelivery />
        </div>
        <h4 class="mb-3 text-xl">Next day as standard</h4>
        <span class="text-base">Order before 3pm and get your order the next day as standard</span>
      </div>

      <div class="md:px-6 md:py-9 bg-light-grey p-12">
        <div class="block mb-3">
          <IconCheck />
        </div>
        <h4 class="mb-3 text-xl">Made by true artisans</h4>
        <span class="text-base">Handmade crafted goods made with real passion and craftsmanship
        </span>
      </div>

      <div class="md:px-6 md:py-9 bg-light-grey p-12">
        <div class="block mb-3">
          <IconPurchase />
        </div>
        <h4 class="mb-3 text-xl">Unbeatable prices</h4>
        <span class="text-base">For our materials and quality you won’t find better prices anywhere</span>
      </div>

      <div class="md:px-6 md:py-9 bg-light-grey p-12">
        <div class="block mb-3">
          <IconPlant />
        </div>
        <h4 class="mb-3 text-xl">Recycled packaging</h4>
        <span class="text-base">We use 100% recycled to ensure our footprint is more manageable</span>
      </div>
    </div>
  </section>
</template>

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
