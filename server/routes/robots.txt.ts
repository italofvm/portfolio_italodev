import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  // Headers HTTP corretos
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=86400, s-maxage=86400') // Cache de 24 horas
  
  const robots = `# Robots.txt para italovdev.vercel.app
# Gerado automaticamente

# Permitir todos os bots de busca
User-agent: *
Allow: /

# Bloquear arquivos e pastas desnecessários
Disallow: /api/
Disallow: /_nuxt/
Disallow: /.nuxt/
Disallow: /.output/
Disallow: /node_modules/
Disallow: /*.json$
Disallow: /*.config.*$

# Permitir explicitamente recursos importantes
Allow: /favicon.svg
Allow: /images/
Allow: /assets/

# Sitemap
Sitemap: https://italovdev.vercel.app/sitemap.xml

# Bots específicos (opcional - configuração avançada)
User-agent: Googlebot
Allow: /

User-agent: Googlebot-Image
Allow: /images/
Allow: /assets/

# Bloquear bots maliciosos conhecidos
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: DotBot
Disallow: /`

  return robots
})
