<template>
  <section>
    <div class="container 1xl:px-6 sm:text-left md:py-8 pl-6 pr-[51px] pt-[67px] pb-20 text-center">
      <h2 class="md:text-[32px] font-clash text-4xl leading-[50px]">
        A brand built on the love of craftmanship,
        <span class="md:inline block">quality and outstanding customer service</span>
      </h2>
    </div>
    <div>
      <div class="container 1xl:flex-col 1xl:items-center flex justify-between">
        <div
          class="sm:pt-6 sm:px-6 1xl:pt-12 1xl:pl-6 1xl:pb-[36px] flex flex-col justify-between
          items-start max-w-[721px] pt-[72px] pl-[84px] pr-[100px] pb-[54px]"
        >
          <div>
            <h3 class="font-clash text-violet-color text-2xl leading-[34px]">
              From a studio in London to a global brand with
              over 400 outlets
            </h3>
            <p class="mt-[25px] text-grey-violet leading-[22px]">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available
              for the mass market.
              <br>
              <br>
              Handmade, and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for the London interior design
              community.
            </p>
          </div>
          <el-button
            :type="$elComponentType.info"
            class="sm:w-full 1xl:mt-[64px] w-[150px] h-[56px] font-satoshi font-normal text-base"
          >
            Get in touch
          </el-button>
        </div>
        <div class="overflow-hidden max-w-[720px]">
          <img src="@/assets/image/interior1.jpg" alt="interior" class="w-[720px] scale-img">
        </div>
      </div>

      <div class="container 1xl:flex-col 1xl:items-center flex justify-between">
        <div class="overflow-hidden max-w-[720px]">
          <img src="@/assets/image/interior2.jpg" alt="interior" class="w-[720px] scale-img">
        </div>
        <div
          class="sm:pt-6 sm:px-6 1xl:pt-12 1xl:pl-6 1xl:pb-0 flex flex-col justify-between
          items-start max-w-[721px] pt-[72px] pl-[84px] pr-[100px] pb-[54px]"
        >
          <div>
            <h3 class="font-clash text-violet-color text-2xl leading-[34px]">
              Our service isn’t just personal, it’s actually
              hyper personally exquisite
            </h3>
            <p class="mt-[25px] text-grey-violet leading-[22px]">
              When we started Avion, the idea was simple. Make high quality furniture affordable and available
              for the mass market.
              <br>
              <br>
              Handmade, and lovingly crafted furniture and homeware is what we live,
              breathe and design so our Chelsea boutique become the hotbed for the London interior design
              community.
            </p>
          </div>
          <el-button
            :type="$elComponentType.info"
            class="sm:w-full 1xl:mt-[64px] w-[150px] h-[56px] font-satoshi font-normal text-base"
          >
            Get in touch
          </el-button>
        </div>
      </div>
    </div>
    <AboutBrand />
    <Subscribe />
  </section>
</template>
