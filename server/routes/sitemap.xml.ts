import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  // Headers HTTP corretos
  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600') // Cache de 1 hora
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

  <!-- 
    SITEMAP OTIMIZADO PARA SITE ONE-PAGE
    
    ⚠️ IMPORTANTE: URLs com âncoras (#) NÃO são indexáveis pelo Google
    
    Para site one-page, incluímos apenas a página principal.
    O Google indexará todo o conteúdo da página automaticamente.
    
    Se você criar páginas separadas no futuro (/servicos, /portfolio, etc.),
    adicione-as aqui sem o símbolo #.
  -->

  <!-- Página Principal (One-Page com todo o conteúdo) -->
  <url>
    <loc>https://italovdev.vercel.app/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

</urlset>`

  return sitemap
})
