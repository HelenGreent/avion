<template>
  <section class="bg-[url('@/assets/image/accessBG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="flex items-center justify-center h-[90vh]">
      <div class="w-[70vw] flex flex-col items-center">
        <a href="#" class="font-clash text-dark-violet text-2xl text-center cursor-default">Avion</a>
        <img src="@/assets/icons/lock.svg" alt="lock">
        <h1 class="mt-20 md:text-dark-violet sm:text-3xl py-4 text-5xl text-[#e1e1e1] font-medium">
          Access Denied
        </h1>
        <span
          class="font-medium text-white-color text-lg text-center"
        >
          You don't have permission to access this page.
          <br> Login to get permission or go to the
          <span><router-link :to="{ name: $routeNames.home }" class="text-[#5ca1c9] hover:underline">
            home page</router-link>
          </span>
          and browse other pages
        </span>
        <router-link
          class="mt-10 flex items-center h-10 space-x-2 px-8 py-6 font-medium leading-5 bg-[#bbbbbb]
         text-white-color rounded-lg cursor-pointer hover:bg-[#477c9b]  active:bg-[#477c9bc9] ease-in-out duration-300"
          :to="{ name: $routeNames.login }"
        >
          <span>Login</span>
          <img src="@/assets/icons/padlock.svg" alt="padlock" class="w-5 h-5">
        </router-link>
      </div>
    </div>
  </section>
</template>
