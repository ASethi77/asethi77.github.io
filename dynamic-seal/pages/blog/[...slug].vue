<template>
  <div>
    <pre>{{$route}}</pre>
    <!-- <pre>{{params}}</pre> -->
    <!-- <pre>{{$route}}</pre> -->
    <!-- <h1>{{ page.title }}</h1> -->
    <!-- <p>{{ page.description }}</p> -->
    <ContentDoc />
  </div>
</template>

<script>
export default {  
  async asyncData({ $content, params, error }) {
    console.log("entered asyncData");
    console.log($content);
    console.log(params);
    const slug = params.slug || "index";
    const page = await $content(slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page,
      params
    };
  }
};
</script>
