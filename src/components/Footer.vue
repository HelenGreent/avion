<template>
  <footer class="bg-violet-color text-white-color">
    <div class="pt-[58px] px-[82px] pb-[25px]">
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
            <router-link to="/" class="menu__link">Furniture</router-link>
            <router-link to="/" class="menu__link">Homeware</router-link>
            <router-link to="/" class="menu__link">Plant pots</router-link>
            <router-link to="/" class="menu__link">Chairs</router-link>
            <router-link to="/" class="menu__link">Crockery</router-link>
          </div>
          <div>
            <span class="menu-title">Our company</span>
            <router-link to="/" class="menu__link">About us</router-link>
            <router-link to="/" class="menu__link">Vacancies</router-link>
            <router-link to="/" class="menu__link">Contact us</router-link>
            <router-link to="/" class="menu__link">Privacy</router-link>
            <router-link to="/" class="menu__link">Returns policy</router-link>
          </div>
        </div>
        <div>
          <span class="font-clash">Join our mailing list</span>
          <form class="flex justify-center mt-4">
            <input type="text" placeholder="your@email.com" class="h-[56px] grow bg-white-opacity px-8 border-none">
            <div class="w-[118px] h-[56px] flex justify-center items-center bg-white-color cursor-pointer">
              <button type="submit" class="text-violet-color">Sign up</button>
            </div>
          </form>
        </div>
      </div>
      <div class="flex justify-between pt-[24px]">
        <span class="font-sm">Copyright 2022 Avion LTD</span>
        <div class="flex items-center">
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

<style scoped>
.footer-top {
  display: grid;
  grid-template-columns: 540px 1fr;
  column-gap: 110px;
  padding-bottom: 48px;
  border-bottom: 1px solid #4E4D93;
}

.footer-menu {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
