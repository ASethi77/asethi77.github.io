<template>
  <div class="bg-background-50 min-h-screen">
    <NavBar></NavBar>
    <div class="font-blog-post mx-auto w-full md:w-2/3 p-12">
      <ContentDoc v-slot="{ doc }" class="">
          <h1 class="my-12 xl:mt-24 xl:mb-16 text-4xl xl:text-6xl text-red-500 font-semibold font-heading">{{  doc.title  }}</h1>
          <ContentRenderer :value="doc"></ContentRenderer>
      </ContentDoc>
    </div>
  </div>
</template>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .blog-post {
    @apply bg-background-50;
    @apply text-foreground-50;
  }
}
</style>

<script>
export default defineNuxtComponent({
});
</script>
