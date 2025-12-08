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
            title: 'Italo Vieira | Desenvolvedor Web e Landing Pages',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Criação de Landing Pages de alta conversão, Sites Institucionais e Manutenção Web.' },
                { name: 'theme-color', content: '#090040' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    }
})
