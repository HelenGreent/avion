<template>
  <div>
    <Header />
    <main class="scroll-smooth">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
