// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss'],

    css: [
        '~/assets/css/animations.css',
        '~/assets/css/simple-animations.css'
    ],

    // Runtime Config - Variáveis de ambiente type-safe
    // Runtime Config - Variáveis de ambiente
    // Valores padrão funcionais, sobrescritos por NUXT_PUBLIC_* no .env
    runtimeConfig: {
        public: {
            whatsappNumber: '5511999999999',
            contactEmail: 'italo_dev@email.com',
            siteUrl: 'https://italovdev.vercel.app'
        }
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'pt-BR'
            },
            title: 'Italo Vieira | Desenvolvedor Web e Landing Pages',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Desenvolvedor freelancer especializado em landing pages e sites de alta conversão. Projetos rápidos, modernos e otimizados para SEO.' },
                { name: 'theme-color', content: '#090040' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                // SVG favicon (navegadores modernos)
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
                // Adicione outros formatos quando converter os SVGs para PNG
                // { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                // { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
            ]
        }
    },

    // Otimizações de Performance
    experimental: {
        payloadExtraction: true,
        renderJsonPayloads: true,
        viewTransition: true
    },

    // Nitro optimizations
    nitro: {
        compressPublicAssets: true,
        minify: true,
        prerender: {
            crawlLinks: true,
            routes: ['/']
        }
    },

    // Build optimizations
    vite: {
        build: {
            cssCodeSplit: true,
            chunkSizeWarningLimit: 1000
        }
    }
})
