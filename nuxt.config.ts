// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/animations.css'],
    
    runtimeConfig: {
        public: {
            PUBLIC_WHATSAPP_NUMBER: (process.env.PUBLIC_WHATSAPP_NUMBER || '5511999999999') as string
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
                { hid: 'description', name: 'description', content: 'Desenvolvedor freelancer especializado em landing pages e sites de alta conversão. Projetos rápidos, modernos e otimizados para SEO.' },
                { name: 'theme-color', content: '#090040' },
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }
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
        minify: true
    },

    // Build optimizations
    vite: {
        build: {
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: {
                        gsap: ['gsap']
                    }
                }
            }
        }
    }
})
