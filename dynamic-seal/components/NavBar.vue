<template>
<nav class="flex items-center justify-between bg-background-50 text-foreground-50 pt-6 font-heading text-3xl lg:text-4xl"
    :class="{'flex-wrap': isMobile, 'menu-selected': menuActive }">
  <div class="flex items-center flex-shrink-0 mx-6">
    <button class="text-2xl lg:text-3xl mr-8 lg:mr-12" type="button" @click=nightwind.toggle()><font-awesome-icon icon="far fa-moon" /></button>
    <RouterLink :to="'/'"><span class="tracking-tight">Dynamic Seal</span></RouterLink>
  </div>
  <div class="flex flex-wrap ml-auto">
    <div class="lg:hidden block pr-6" >
      <button @click=toggleMenu() class="flex items-center px-3 py-2 border rounded border-cyan-400 hover:text-cyan-500 hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  </div>
  <div ref="menuContainer" :class="{ 'menu-selected': menuActive,'pb-9': menuActive }" class="text-center lg:flex lg:grow lg:text-left lg:items-center lg:w-auto">
    <div v-for="link in linkList"
        :class="{ hidden: (isMobile && !showMenu), 'w-screen': isMobile }"
    >
      <RouterLink :to="link.linkUrl" class="block mx-8 mt-4 lg:inline-block lg:mt-0 hover:text-cyan-500">{{link.linkText}}</RouterLink>
    </div>
  </div>

</nav>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .menu-selected {
    @apply bg-background-900;
    @apply text-foreground-900;
  }

  .router-link-active {
    @apply underline decoration-foreground-900;
  }
}
</style>

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
    }
  },

  setup() {
    const windowWidth = ref(1080);
    return {
      windowWidth
    }
  },

  computed: {
    isMobile() {
        return this.windowWidth < 1024;
    },

    menuActive() {
      return this.isMobile && this.showMenu;
    }
  },
  
  mounted() {
    window.addEventListener('resize', this.updateWindowWidth)
    window.dispatchEvent(new Event('resize'));
  },
  
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth) 
  },

  methods: {
    toggleMenu() {
        this.showMenu = !this.showMenu;
    },

    updateWindowWidth() {
        this.windowWidth = window.innerWidth;
        this.$forceUpdate;
    }
  }
}
</script>