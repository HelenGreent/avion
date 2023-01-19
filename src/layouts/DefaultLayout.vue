<template>
  <div>
    <Header />
    <main class="max-w-[1440px] m-auto">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
