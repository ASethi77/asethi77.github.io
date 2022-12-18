<template>
<nav class="flex items-center justify-between bg-background-50 text-foreground-50 pt-6"
    :class="{'flex-wrap': isMobile }">
  <div class="flex items-center flex-shrink-0 mx-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight mr-8">Dynamic Seal</span>
    <button class="text-foreground-50 text-3xl" type="button" @click=nightwind.toggle()><font-awesome-icon icon="fa-solid fa-moon" /></button>
  </div>
  <div class="flex flex-wrap ml-auto">
    <div class="block lg:hidden pr-6" >
      <button @click=toggleMenu() class="flex items-center px-3 py-2 border rounded border-cyan-400 hover:text-cyan-500 hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  </div>
  <div class="text-center lg:text-left lg:items-center lg:w-auto">
    <div class="lg:flex"
        :class="{ hidden: isMobile && showMenu, 'w-screen': isMobile }"
    >
      <a v-for="link in linkList" :href="link.linkUrl" className="text-xl lg:text-2xl block mx-8 mt-4 lg:inline-block lg:mt-0 hover:text-cyan-500">{{link.linkText}}</a>
    </div>
  </div>

</nav>
</template>

<script>
import nightwind from "nightwind/helper"

export default {
  data() {
    return {
      nightwind,
      linkList: [
        { linkText: 'Home', linkUrl: '/' },
        { linkText: 'About', linkUrl: '/about' },
        { linkText: 'Blog', linkUrl: '/blog' },
      ],

      showMenu: false,
      windowWidth: window.innerWidth
    }
  },

  computed: {
    isMobile() {
        return this.windowWidth < 1024;
    }
  },
  
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth) 
  },

  methods: {
    toggleMenu() {
        // if (this.isMobile()) {
            this.showMenu = !this.showMenu;
    },

    updateWindowWidth() {
        this.windowWidth = window.innerWidth;
    }
  }
}
</script>