<template>
    <div>
        <NavBar></NavBar>
        <div class="bg-background-50 min-h-screen p-12">
            <div class="mx-auto w-full md:w-2/3">
                <h1 class="font-heading text-6xl lg:text-7xl text-foreground-50 mt-24 mb-12">Posts</h1>
                <div class="post min-h-24 my-12 w-full rounded-lg" v-for="post in postList">
                    <RouterLink :to="post['_path']">
                        <div class="flex flex-col leading-[4rem] md:flex-row justify-between items-start" >
                            <h2 class="inline my-auto text-4xl text-red-500 font-semibold">
                                <span class="leading-none align-bottom ">
                                    {{post['title']}}
                                </span>
                            </h2>
                            <h3 class="my-auto text-xl text-rose-800 md:text-right">
                                <span class="leading-none align-center md:align-bottom ">
                                    {{ post['date'] }}
                                    <font-awesome-icon class="ml-2" icon="fa-regular fa-calendar"></font-awesome-icon>
                                </span>
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