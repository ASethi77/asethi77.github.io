<template>
  <div class="bg-background-50 min-h-screen">
    <NavBar></NavBar>
    <div class="font-blog-post mx-auto w-full md:w-2/3 p-12">
      <ContentDoc v-slot="{ doc }" class="">
          <h1 class="my-12 xl:mt-24 xl:mb-16 text-4xl xl:text-6xl text-red-500 font-semibold font-heading">{{  doc.title  }}</h1>
          <div id="post-content">
            <ContentRenderer class="lg:w-2/3" :value="doc"></ContentRenderer>
          </div>
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

  #post-content {

    p, li, ul, ol, td, tr, th {
      @apply text-foreground-50; 
      @apply text-xl;
      @apply font-medium;
      @screen lg {
        @apply text-2xl;
      }
    }

    ul, ol {
      @apply mb-7;
      @apply ml-6;
    }

    ul {
      @apply list-disc;
    }

    ol {
      @apply list-decimal;
    }

    li {
      @apply ml-3;
      @apply pl-3;
    }

    p {
      @apply mb-7;
    }

    h1,h2,h3,h4,h5,h6 {
      @apply my-4;
      // @apply pl-3;
      @apply text-rose-700;
      @apply decoration-solid;
      @apply hover:underline;
      // @apply bg-foreground-50;
    }

    h1 {
      @apply text-5xl;
    }

    h2 {
      @apply text-4xl;
    }

    h3 {
      @apply text-3xl;
    }

    h4, h5, h6 {
      @apply text-2xl
    }

    blockquote {
      @apply pl-6;
      @apply border-solid;
      @apply border-l-4;
    }

         hr::before {
          display: table;
          content: "";
        }
    
         hr::after {
          display: table;
          clear: both;
          content: "";
        }

        table {
          @apply shadow-[background-neutral-800];
          @apply shadow-xl;
          @apply p-6;
          @apply rounded-lg;
          @apply bg-neutral-100;
          border-spacing: 0;
          border-collapse: collapse;
          display: block;
          width: max-content;
          max-width: 100%;
          overflow: auto;
          // box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
          margin: 25px 0;

          thead {
            @apply border-solid;
            @apply border-b;
            @apply border-sky-700;
            width: 80%;
            // border-bottom: theme('text.foreground.50') 2px solid;
          }

          tbody {
            tr:first-child td {
              @apply pt-6;
            }
          }

          td, th {
            padding-right: 2rem;
          }

          td {
            @apply py-2;
          }

            td:nth-child(1) {
              padding-left: 2rem;
            }
          // }
        }
    


  }
}
</style>

<script>
export default defineNuxtComponent({
});
</script>
