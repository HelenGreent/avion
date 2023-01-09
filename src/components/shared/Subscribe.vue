<template>
  <section class="bg-[url('@/assets/image/subscribeBG.jpg')] bg-cover pt-[97px] pb-[86px]">
    <div class="max-w-[500px] m-auto text-white-color text-center">
      <h3 class="block mb-3 font-normal text-3xl font-clash">Join the club and get the benefits</h3>
      <span class="block text-lg mb-[30px]">
        Sign up for our newsletter and receive exclusive offers on new ranges,
        sales, pop up stores and more
      </span>
      <div class="flex justify-center mb-[40px]">
        <div class="subscribe-check">
          <img src="@/assets/icons/check.svg" alt="check icon" class="subscribe-check-icon">
          <span>Exclusive offers</span>
        </div>
        <div class="subscribe-check mx-9">
          <img src="@/assets/icons/check.svg" alt="check icon" class="subscribe-check-icon">
          <span>Free events</span>
        </div>
        <div class="subscribe-check">
          <img src="@/assets/icons/check.svg" alt="check icon" class="subscribe-check-icon">
          <span>Large discounts</span>
        </div>
      </div>
      <form class="flex justify-center">
        <input type="text" placeholder="your@email.com" class="h-[56px] grow px-8 border-none">
        <div class="w-[118px] h-[56px] flex justify-center items-center bg-violet-color cursor-pointer">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.subscribe-check {
  display: flex;
  align-items: center;

  &-icon {
    margin-right: 9px;
  }
}
</style>
