<template>
  <section class="bg-[url('@/assets/image/404BG.jpeg')] h-full bg-no-repeat bg-cover bg-center">
    <div class="flex items-center justify-center h-[90vh]">
      <div class="w-[70vw] flex flex-col items-center">
        <h1 class="text-9xl">
          404
        </h1>
        <span class="py-4 font-semibold text-3xl text-[#1b262c]">Page Not Found</span>
        <span class="font-medium text-white-color text-lg">The page you're looking for does not seem to exist</span>
        <router-link
          class="mt-10 flex items-center h-10 px-8 py-6 font-medium leading-5 bg-[#bbbbbb]
         text-white-color rounded-lg cursor-pointer hover:bg-[#8bbeaa]  active:bg-[#8bbeaac3] ease-in-out duration-300"
          :to="{ name: $routeNames.home }"
        >
          Go Home
        </router-link>
      </div>
    </div>
  </section>
</template>
