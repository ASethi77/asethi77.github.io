<template>
    <div>
        <NavBar></NavBar>
        <div class="bg-background-50 min-h-screen p-[10vw]">
            <div class="mx-auto w-full lg:w-1/2">
                <h1 class="font-heading text-4xl lg:text-6xl text-foreground-50 mt-12 mb-12">Posts</h1>
                <div class="post min-h-24 my-12 w-full rounded-lg" v-for="post in postList">
                    <RouterLink v-if="post['published']" :to="post['_path']">
                        <div class="flex flex-col leading-[4rem] md:flex-row justify-between items-start" >
                            <h2 class="inline my-auto text-2xl lg:text-3xl text-red-500 font-semibold">
                                <span class="leading-none align-bottom ">
                                    {{post['title']}}
                                </span>
                            </h2>
                            <h3 class="my-auto text-xl lg:text-2xl text-red-700 md:text-right">
                                <span class="leading-none align-center md:align-bottom ">
                                    {{ post['date'] }}
                                    <font-awesome-icon class="ml-2" icon="fa-regular fa-calendar"></font-awesome-icon>
                                </span>
                            </h3>
                        </div>
                        <div class="mt-4 text-foreground-50">
                            <p class="font-normal text-lg lg:text-xl">{{post['description']}}</p>
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
                let isoDate = parseISO(post['date']);
                post["isoDate"] = isoDate;
                post['date'] = format(isoDate, 'MM/dd/yyyy');
            });
            blogPosts.sort(function(d1, d2) {
                return d2['isoDate'] - d1["isoDate"];
            })
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