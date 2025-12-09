// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },

    modules: ['@nuxtjs/tailwindcss'],

    css: [
        '~/assets/css/optimized-animations.css'
    ],

    // Runtime Config - Variáveis de ambiente
    // IMPORTANTE: Configure os valores reais no arquivo .env
    // Exemplo: NUXT_PUBLIC_WHATSAPP_NUMBER=5511986021032
    runtimeConfig: {
        public: {
            // Valores padrão vazios - SEMPRE configure no .env
            whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '',
            contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || '',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://italovdev.vercel.app'
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
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'google-site-verification', content: 'google9526d7b2a7b539bd' }
            ],
            link: [
                // SVG favicon (navegadores modernos)
                { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
                // Preconnect para recursos externos (se houver)
                { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' }
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
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    manualChunks: (id) => {
                        // Separar componentes pesados em chunks próprios
                        if (id.includes('ProjectModal.vue')) return 'project-modal'
                        if (id.includes('ContactForm.vue')) return 'contact-form'
                        // Vendor chunk para node_modules
                        if (id.includes('node_modules')) {
                            return 'vendor'
                        }
                    }
                }
            }
        }
    }
})
