function getBlogRoutes() {
    var glob = require('glob');
    var ALL_ROUTES = [];
    const ROUTE_STRIP_PREFIX = /\.\/content/;

    // Blog posts (*.md)
    var blogFiles = glob.sync('./content/blog/**/*.md');
    var routes = blogFiles.map(file => {
        var route = file.replace(ROUTE_STRIP_PREFIX, '');
        return route.replace(/\.[^/.]+$/, '');
    })
    console.log("Generating routes for ");
    console.log(routes);
    ALL_ROUTES.push(...routes);

    return ALL_ROUTES;
}


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: false,
        experimental: {
            search: true
        },
        highlight: {
            // Theme used in all color schemes.
            theme: {
                default: 'one-dark-pro',
                dark: 'github-dark'
            },

            preload: [
                'c',
                'cpp',
                'asm',
                'javascript',
                'python',
                'bash',
                'rust'
            ]
        }
    },
    css: [
        '@/assets/css/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    router: {
        base: '/'
    },
    head: {
        meta: [
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ]
    },
    target: 'static',
    // Getting Nuxt v3 (Nuxt content v2) to pre-render dynamic routes is a pain in the ass...
    // https://github.com/nuxt/framework/issues/4919#issuecomment-1124349857 suggests
    // using a nitro hook but I still can't use `useAsyncData` outside of Nuxt
    // so I can't really query this. 
    hooks: {
        'nitro:config' (nitroConfig) {
            if (nitroConfig.dev) { return }
            const blogRoutes = getBlogRoutes();
            nitroConfig.prerender.routes.push(...blogRoutes)
        }
    },
    // generate: {
    //     routes: getBlogRoutes()
    // }

    // See https://github.com/nuxt/framework/discussions/3823#discussioncomment-2477885
    build: {
        transpile: [
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
            "@fortawesome/free-regular-svg-icons",
            "@fortawesome/free-solid-svg-icons",
            "@fortawesome/vue-fontawesome",
            "vue3-excel-editor"
        ]
    }
})
