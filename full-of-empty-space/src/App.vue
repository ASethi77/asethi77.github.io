<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import Hero from "./components/Hero.vue";

document.firstElementChild.setAttribute('color-scheme', 'light');
</script>

<template>
  <div id="blog-container">
    <Hero/>    
  </div>

  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<style scoped>
.wrapper  {
  display: flex;
  align-items: center;
  justify-items: center;
}
</style>
