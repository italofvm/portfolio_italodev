// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/i18n'],

    i18n: {
        locales: [
            { code: 'pt', name: 'Português', iso: 'pt-BR', file: 'pt.json' },
            { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' }
        ],
        defaultLocale: 'pt',
        strategy: 'prefix_except_default',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'pt'
        },
        lazy: true,
        langDir: 'locales/'
    },

    css: [
        '~/assets/css/optimized-animations.css'
    ],

    sitemap: {
        hostname: 'https://italovdev.vercel.app',
        gzip: true,
        exclude: ['/secret']
    },

    // Runtime Config - Variáveis de ambiente
    runtimeConfig: {
        public: {
            whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '5561986021032',
            contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || 'contato@italovdev.com',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://italovdev.vercel.app'
        }
    },

    app: {
        head: {
            htmlAttrs: {
                lang: 'pt-BR'
            },
            title: 'Italo Vieira | High-Performance Digital Architect & Developer',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: '🚀 Projetando o futuro digital com estética radical e alta performance. Especialista em Landing Pages, UI/UX e desenvolvimento web focado em conversão extrema.' },
                { name: 'keywords', content: 'desenvolvedor web, high performance architect, landing page, criação de sites, desenvolvedor freelancer, UI/UX designer, SEO, Nuxt 3, Vue.js, digital design' },
                { name: 'author', content: 'Italo Vieira' },
                { name: 'theme-color', content: '#050505' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'robots', content: 'index, follow, max-image-preview:large' },
                
                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://italovdev.vercel.app/' },
                { property: 'og:title', content: 'Italo Vieira | High-Performance Digital Architect' },
                { property: 'og:description', content: 'Design radical e performance extrema para negócios que buscam o topo do digital.' },
                { property: 'og:image', content: 'https://italovdev.vercel.app/og-image.jpg' },
                { property: 'og:locale', content: 'pt_BR' },
                
                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Italo Vieira | High-Performance Design' },
                { name: 'twitter:description', content: 'Projetando o futuro digital com estética radical e alta performance.' },
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'icon', type: 'image/png', href: '/favicon.png', sizes: '32x32' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
                { rel: 'canonical', href: 'https://italovdev.vercel.app/' }
            ]
        }
    },

    // Otimizações de Performance
    experimental: {
        payloadExtraction: true,
        renderJsonPayloads: true,
        viewTransition: true
    },

    nitro: {
        compressPublicAssets: true,
        minify: true,
        prerender: {
            crawlLinks: true,
            routes: ['/']
        }
    }
})
