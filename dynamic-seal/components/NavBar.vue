<template>
<nav class="px-[10vw] text-2xl lg:text-3xl pb-12" :class="{ 'menu-selected': menuActive }">
    <div class="pt-6 flex items-center justify-between" :class="{'flex-wrap': isMobile }">
  <div class="flex items-center flex-shrink-0">
    <button class="hidden text-2xl lg:text-3xl" type="button" @click=nightwind.toggle()><font-awesome-icon icon="far fa-moon" /></button>
    <RouterLink :to="'/'"><span class="tracking-tight">Dynamic Seal</span></RouterLink>
  </div>
  <div class="flex flex-wrap ml-auto">
    <div class="lg:hidden block" >
      <button id="menu-toggle" @click=toggleMenu() class="flex items-center px-3 py-2 border-2 border-transparent rounded hover:border-foreground-50">
        <svg :class="{ 'menu-selected': menuActive }" class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
  </div>
  <div id="nav-menu" ref="menuContainer" :class="{ 'menu-selected': menuActive,'pb-9': menuActive }" class="w-full lg:text-center lg:flex lg:grow lg:text-left lg:justify-end lg:w-auto">
    <div v-for="link in linkList"
        :class="{ hidden: ((isMobile && !showMenu) || (!isMobile && hideAllNavLinks)) }"
    >
      <RouterLink :to="link.linkUrl" class="block md:text-2xl mx-2 mt-4 px-10 lg:inline-block lg:mt-0 bg-foreground-50 text-foreground-900 border-2 border-transparent">{{link.linkText}}</RouterLink>
    </div>
  </div>
  </div>

</nav>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  #menu-toggle svg {
    @apply fill-foreground-50;
  }

  #menu-toggle svg.menu-selected {
    @apply fill-background-50;
  }

  .menu-selected {
    @apply bg-foreground-50;
    @apply text-background-50;
  }

  #nav-menu a {
    transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  }

  #nav-menu a:hover {
    @apply border-foreground-50;
    @apply bg-background-50;
    @apply text-foreground-50;
  }
}
</style>

<script>
import nightwind from "nightwind/helper"

export default {
  props: {
    hideAllNavLinks: {
      type: Boolean,
      default: false
    }
  },
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