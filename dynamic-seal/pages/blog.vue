<template>
    <NavBar class="bg-background-50"></NavBar>
    <div class="p-12 md:p-24 bg-background-50 min-h-screen min-w-screen">
        <div class="mx-auto w-full md:w-2/3">
            <h1 class="text-center text-4xl lg:text-7xl text-foreground-50">Posts</h1>
            <!-- <pre>
                {{postList['data']}}
            </pre> -->
            <div class="post min-h-24 bg-slate-100 hover:bg-slate-200 my-12 w-full rounded-lg p-6" v-for="post in postList['data']">
                <RouterLink :to="post['_path']">
                <div class="flex flex-col md:flex-row justify-between" >
                    <h2 class="text-2xl text-amber-700 font-semibold">{{post['title']}}</h2>
                    <h3 class="text-xl text-rose-800 md:text-right grow align-bottom"><font-awesome-icon class="mr-2" :icon="['fa', 'fa-calendar']" />{{format(parseISO(post['date']), 'MM/dd/yyyy')}}</h3>
                </div>
                <div class="mt-4 text-foreground-50">
                    <p>{{post['description']}}</p>
                </div>
            </RouterLink>
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
                parseISO
            }
        },
        async setup() {
            const postList = ref([]);
            onMounted(async () => {
                const res = await useAsyncData('post-list', () => {
                    return queryContent('posts')
                    .only([
                        'title',
                        '_path',
                        '_draft',
                        'description',
                        'date'
                    ])
                    .find();
                });
                console.log(res['data']);
                postList.value = res;
            })

            return {
                postList
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