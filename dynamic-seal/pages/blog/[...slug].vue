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
      @apply font-medium;
    }

    p, li, ul, ol {
      @apply text-xl;
      @screen lg {
        @apply text-2xl;
      }
    }

    td, tr, th {
      @apply text-lg;
      @screen lg {
        @apply text-xl;
      }
    }

    p, td, li {
      a {
        @apply underline;
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

        table {
          display: block;
          max-width: fit-content;
          margin: 0 auto;
          @apply border-collapse;
          @apply overflow-auto;
          @apply table-auto;
          @apply drop-shadow-lg;
          @apply shadow-[background-neutral-800];
          // @apply shadow-xl;
          @apply rounded-lg;
          @apply bg-neutral-100;

          thead {
            @apply rounded-lg;
            @apply bg-neutral-200;
            @apply border-solid;
            @apply border-b;
            @apply border-sky-700;

            th {
              @apply font-semibold;
            }
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

            th:nth-child(1), td:nth-child(1) {
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
