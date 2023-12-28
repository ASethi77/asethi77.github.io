<template>
  <div class="bg-background-50 min-h-screen">
    <NavBar></NavBar>
    <div class="font-blog-post mx-auto w-full">
      <ContentDoc v-slot="{ doc }" class="">
          <h1 id="post-title" class="my-12 xl:mt-24 xl:mb-16 text-3xl xl:text-4xl text-red-500 font-semibold font-heading">{{  doc.title  }}</h1>
          <div id="post-content">
            <ContentRenderer class="" :value="doc"></ContentRenderer>
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

  #post-content, #post-title {
    @apply w-2/3;
    @screen lg {
      @apply w-1/2;
    }

    @apply mx-auto;
  }

  #post-content {
    // Stole this from https://css-tricks.com/full-width-containers-limited-width-parents/#aa-no-calc-needed
    .section-highlight {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      @apply bg-neutral-900;
      @apply py-5;
      @apply my-5;
    }

    .section-highlight > * {
      @apply mx-auto;
    }

    p, li, ul, ol, td, tr, th {
      @apply text-foreground-50; 
      @apply font-medium;
    }

    p, li, ul, ol, td, tr, th {
      @apply text-base;
      @screen lg {
        @apply text-base;
      }
      @screen xl {
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
      @apply text-red-600;
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
      @apply shadow-sm;
      @apply border-collapse;
      @apply overflow-auto;
      @apply table-auto;
      @apply bg-background-50;

      thead {
        @apply rounded-lg;
        // @apply bg-gray-800;
        @apply border-solid;
        @apply border-b-2;
        // @apply border-sky-200;

        th {
          @apply font-semibold;
        }
      }

      tbody {
        tr:first-child td {
          @apply pt-6;
        }

        tr:not(:last-child) {
          @apply border-solid;
          @apply border-b-2;
          @apply border-neutral-300;
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

    pre {
      @apply bg-gray-800;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 1rem;
      @apply border;
      @apply border-sky-200;
      @apply rounded-md;
      @apply text-xl;
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    // See https://stackoverflow.com/questions/1132366/selector-for-one-tag-directly-followed-by-another-tag
    p:has(+ img), p:has(+ .section-highlight) {
      margin-bottom: 0;
    }
  }
}
</style>

<script>
export default defineNuxtComponent({
});
</script>
