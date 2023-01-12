<template>
  <div class="max-w-[1440px] m-auto">
    <Header />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { router, useRouter } from '@/router'

const currentRoute = useRouter()
console.log(router, currentRoute)
</script>
