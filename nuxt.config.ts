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
                { name: 'description', content: '🚀 Crio landing pages e sites profissionais em 3-5 dias. Otimizados para SEO, responsivos e focados em conversão. Orçamento grátis em 24h!' },
                { name: 'keywords', content: 'desenvolvedor web, landing page, criação de sites, desenvolvedor freelancer, desenvolvedor frontend, sites responsivos, SEO, Nuxt, Vue, desenvolvedor são paulo' },
                { name: 'author', content: 'Italo Vieira' },
                { name: 'theme-color', content: '#090040' },
                { name: 'format-detection', content: 'telephone=no' },
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                
                // Google Site Verification - IMPORTANTE: Substitua pelo código real do Google Search Console
                { name: 'google-site-verification', content: 'google9526d7b2a7b539bd' },
                
                // Open Graph / Facebook
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://italovdev.vercel.app/' },
                { property: 'og:title', content: 'Italo Vieira | Desenvolvedor Web & Landing Pages de Alta Conversão' },
                { property: 'og:description', content: '🚀 Crio landing pages e sites profissionais em 3-5 dias. Otimizados para SEO, responsivos e focados em conversão.' },
                { property: 'og:image', content: 'https://italovdev.vercel.app/og-image.jpg' },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:image:alt', content: 'Italo Vieira - Desenvolvedor Web Freelancer' },
                { property: 'og:locale', content: 'pt_BR' },
                { property: 'og:site_name', content: 'Italo Vieira Dev' },
                
                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: 'https://italovdev.vercel.app/' },
                { name: 'twitter:title', content: 'Italo Vieira | Desenvolvedor Web & Landing Pages' },
                { name: 'twitter:description', content: '🚀 Landing pages e sites profissionais em 3-5 dias. Otimizados para SEO e conversão.' },
                { name: 'twitter:image', content: 'https://italovdev.vercel.app/og-image.jpg' },
                
                // Additional SEO
                { name: 'referrer', content: 'strict-origin-when-cross-origin' },
                { name: 'language', content: 'Portuguese' },
                { name: 'revisit-after', content: '7 days' }
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

    // Nitro optimizations + Security Headers
    nitro: {
        compressPublicAssets: true,
        minify: true,
        prerender: {
            crawlLinks: true,
            routes: ['/']
        },
        routeRules: {
            '/**': {
                headers: {
                    'X-Frame-Options': 'DENY',
                    'X-Content-Type-Options': 'nosniff',
                    'Referrer-Policy': 'strict-origin-when-cross-origin',
                    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
                    'X-XSS-Protection': '1; mode=block'
                }
            }
        }
    },

    // Build optimizations
    vite: {
        build: {
            cssCodeSplit: true,
            chunkSizeWarningLimit: 1000,
            rollupOptions: {
                output: {
                    manualChunks: (id: string) => {
                        // Separar componentes pesados em chunks próprios
                        if (id.includes('ProjectModal.vue')) return 'project-modal'
                        if (id.includes('ContactForm.vue')) return 'contact-form'
                        // Vendor chunk para node_modules
                        if (id.includes('node_modules')) {
                            // Separar Vue/Nuxt do resto dos vendors
                            if (id.includes('vue') || id.includes('nuxt')) return 'vue-vendor'
                            return 'vendor'
                        }
                    }
                }
            }
        }
    }
})
