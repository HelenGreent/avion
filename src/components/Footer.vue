<template>
  <footer class="w-full bg-violet-color text-white-color">
    <div class="md:py-10 md:px-6 pt-[58px] m-auto max-w-[1440px] px-[82px] pb-[25px]">
      <div class="footer-top">
        <div class="footer-menu">
          <div>
            <span class="menu-title">Menu</span>
            <router-link to="/" class="menu__link">New arrivals</router-link>
            <router-link to="/" class="menu__link">Best sellers</router-link>
            <router-link to="/" class="menu__link">Recently viewed</router-link>
            <router-link to="/" class="menu__link">Popular this week</router-link>
            <router-link to="/" class="menu__link">All products</router-link>
          </div>
          <div>
            <span class="menu-title">Categories</span>
            <router-link to="/" class="menu__link">Crockery</router-link>
            <router-link to="/" class="menu__link">Homeware</router-link>
            <router-link to="/" class="menu__link">Plant pots</router-link>
            <router-link to="/" class="menu__link">Chairs</router-link>
            <router-link to="/" class="menu__link">Crockery</router-link>
          </div>
          <div>
            <span class="menu-title">Our company</span>
            <router-link to="/aboutUs" class="menu__link">About us</router-link>
            <router-link to="/" class="menu__link">Vacancies</router-link>
            <router-link to="/" class="menu__link">Contact us</router-link>
            <router-link to="/" class="menu__link">Privacy</router-link>
            <router-link to="/" class="menu__link">Returns policy</router-link>
          </div>
        </div>
        <div class="md:mt-10">
          <span class="font-clash">Join our mailing list</span>
          <div class="w-full flex justify-center mt-[72px] pb-[54px]">
            <el-input
              v-model="input"
              type="text"
              placeholder="your@email.com"
              class="md:w-full md:max-w-[350px] h-[53px] grow bg-white-opacity  text-base  border-none"
            />
            <el-button
              :type="$elComponentType.primary"
              class="xs:w-[123px] w-[143px] flex-none bg-white-color font-normal text-violet-color text-base
              hover:bg-white-light-opacity-hover hover:text-violet-color active:bg-white-light-opacity-active"
              @click="onSent"
            >
              Sign up
            </el-button>
          </div>
        </div>
      </div>
      <div class="md:block md:text-center md:pt-5 flex justify-between pt-6">
        <span class="font-sm">Copyright 2023 Avion LTD</span>
        <div class="md:hidden  md:mt-2 flex items-center">
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/linkedin.svg" alt="linkedin">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/facebook.svg" alt="facebook">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/instagram.svg" alt="instagram">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/skype.svg" alt="skype">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/twitter.svg" alt="twitter">
          </a>
          <a href="#" class="mx-3 hover:opacity-80">
            <img src="@/assets/icons/pinterest.svg" alt="pinterest">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')

const onSent = () => {
  ElNotification({
    title: 'Your email has been sent',
    message: 'Welcome to the club. Sincerely yours, Avion',
    type: 'success'
  })
}
</script>

<style scoped>
.footer-top {
  display: grid;
  grid-template-columns: 540px 1fr;
  column-gap: 110px;
  padding-bottom: 48px;
  border-bottom: 1px solid #4E4D93;
}

@media screen and (max-width: 1150px) {
  .footer-top {
    grid-template-columns: 450px 1fr;
    column-gap: 10px;
  }
}
@media screen and (max-width: 1024px) {
  .footer-top {
    grid-template-columns: repeat(2,1fr);
  }
}
@media screen and (max-width: 767px) {
  .footer-top {
    grid-template-columns: 1fr;
    padding-bottom: 16px;
  }
}

.footer-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
@media screen and (max-width: 1024px) {
  .footer-menu {
    grid-template-columns: repeat(2, 1fr);
  }
}

.menu-title {
  display: block;
  margin-bottom: 12px;
  font-family: 'Clash Display', sans-serif;
}

.menu__link {
  display: block;
  color: white;
  font-size: 14px;
  margin-bottom: 12px;
}

.menu__link:last-child {
  margin-bottom: 0;
}

.menu__link:hover {
  text-decoration: underline;
}
</style>
