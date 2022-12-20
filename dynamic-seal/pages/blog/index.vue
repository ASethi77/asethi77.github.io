<template>
    <div>
    <NavBar class="bg-background-50"></NavBar>
    <div class="p-12 md:p-24 bg-background-50 min-h-screen min-w-screen">
        <div class="mx-auto w-full md:w-2/3">
            <h1 class="text-center text-4xl lg:text-7xl text-foreground-50">Posts</h1>
            <div class="post min-h-24 bg-slate-100 hover:bg-slate-200 my-12 w-full rounded-lg p-6" v-for="post in postList">
                <RouterLink :to="post['_path']">
                    <div class="flex flex-col md:flex-row justify-between" >
                        <h2 class="text-2xl text-amber-700 font-semibold">{{post['title']}}</h2>
                        <h3 class="text-xl text-rose-800 md:text-right grow align-bottom">
                            {{ post['date'] }}
                            <font-awesome-icon class="ml-2" icon="fa-regular fa-calendar"></font-awesome-icon>
                        </h3>
                    </div>
                    <div class="mt-4 text-foreground-50">
                        <p>{{post['description']}}</p>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { format, parseISO } from "date-fns";
    export default {
        data() {
            return {
                format,
                parseISO,
            }
        },
        async setup() {
            const postList = ref([]);
            var blogPosts = await queryContent('/blog').find()
            blogPosts.forEach(function(post) {
                post['date'] = format(parseISO(post['date']), 'MM/dd/yyyy');
            });
            postList.value = blogPosts;

            return {
                postList
            }
        },
        methods: {
            updatePath(newPath) {
                this.$router.push(newPath);
            }
        }
}
</script>

<!-- <script>
    export default {
        data() {
            return {
                postList: []
            }
        },

        async mounted() {
            this.postList = await queryContent('/posts').find();
        },
//         async asyncData({ $content, params, error }) {
//             // const slug = params.slug || "index";
//             const page = await $content('posts')
//             .fetch()
//             .catch(err => {
//                 error({ statusCode: 404, message: "Page not found" });
//             });

//             this.postList = page;
//             console.log(page);
//             return {
//                 page
//             };
//   }
    }
</script> -->