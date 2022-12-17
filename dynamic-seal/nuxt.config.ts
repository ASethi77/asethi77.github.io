// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
    ],
    content: {
        // https://content.nuxtjs.org/api/configuration
        documentDriven: true
    },
    css: [
        '@/assets/css/main.scss',
        '@fortawesome/fontawesome-svg-core/styles.css'
    ],
    router: {
        base: '/asethi77.github.io/'
    }
})
