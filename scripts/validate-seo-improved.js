#!/usr/bin/env node

/**
 * Script de Validação de SEO
 * Verifica se sitemap.xml, robots.txt e meta tags estão acessíveis após o deploy
 * 
 * Uso:
 *   node scripts/validate-seo.js
 *   node scripts/validate-seo.js https://outro-site.com
 *   SITE_URL=https://staging.site.com node scripts/validate-seo.js
 */

import https from 'https';

// Configuração
const SITE_URL = process.env.SITE_URL || process.argv[2] || 'https://italovdev.vercel.app';
const TIMEOUT = 10000; // 10 segundos
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

let hasErrors = false;

/**
 * Valida se uma string é uma URL válida
 */
function isValidUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Faz requisição HTTP com timeout
 */
function checkUrl(url, timeout = TIMEOUT) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          data: data,
          headers: res.headers
        });
      });
    }).on('error', (err) => {
      reject(err);
    });

    req.setTimeout(timeout, () => {
      req.destroy();
      reject(new Error(`Timeout após ${timeout}ms`));
    });
  });
}

/**
 * Valida sitemap.xml
 */
async function validateSitemap() {
  console.log(`\n${YELLOW}🔍 Validando Sitemap...${RESET}`);
  
  try {
    const result = await checkUrl(`${SITE_URL}/sitemap.xml`);
    
    if (result.statusCode === 200) {
      console.log(`${GREEN}✅ Sitemap acessível (Status: ${result.statusCode})${RESET}`);
      
      // Verificar se é XML válido
      if (result.data.includes('<?xml') && result.data.includes('<urlset')) {
        console.log(`${GREEN}✅ Formato XML válido${RESET}`);
        
        // Contar URLs
        const urlCount = (result.data.match(/<url>/g) || []).length;
        console.log(`${GREEN}✅ Total de URLs: ${urlCount}${RESET}`);
        
        // Verificar se contém a URL principal
        if (result.data.includes(SITE_URL)) {
          console.log(`${GREEN}✅ URL principal encontrada${RESET}`);
        } else {
          console.log(`${RED}❌ URL principal não encontrada${RESET}`);
          hasErrors = true;
        }
      } else {
        console.log(`${RED}❌ Formato XML inválido${RESET}`);
        hasErrors = true;
      }
    } else {
      console.log(`${RED}❌ Sitemap não acessível (Status: ${result.statusCode})${RESET}`);
      hasErrors = true;
    }
  } catch (error) {
    console.log(`${RED}❌ Erro ao acessar sitemap: ${error.message}${RESET}`);
    hasErrors = true;
  }
}

/**
 * Valida robots.txt
 */
async function validateRobots() {
  console.log(`\n${YELLOW}🔍 Validando Robots.txt...${RESET}`);
  
  try {
    const result = await checkUrl(`${SITE_URL}/robots.txt`);
    
    if (result.statusCode === 200) {
      console.log(`${GREEN}✅ Robots.txt acessível (Status: ${result.statusCode})${RESET}`);
      
      // Verificar conteúdo essencial
      if (result.data.includes('User-agent:')) {
        console.log(`${GREEN}✅ User-agent definido${RESET}`);
      }
      
      if (result.data.includes('Sitemap:')) {
        console.log(`${GREEN}✅ Sitemap referenciado${RESET}`);
      } else {
        console.log(`${YELLOW}⚠️  Sitemap não referenciado no robots.txt${RESET}`);
      }
      
      if (result.data.includes('Allow:') || result.data.includes('Disallow:')) {
        console.log(`${GREEN}✅ Regras de crawling definidas${RESET}`);
      }
    } else {
      console.log(`${RED}❌ Robots.txt não acessível (Status: ${result.statusCode})${RESET}`);
      hasErrors = true;
    }
  } catch (error) {
    console.log(`${RED}❌ Erro ao acessar robots.txt: ${error.message}${RESET}`);
    hasErrors = true;
  }
}

/**
 * Valida imagem Open Graph
 */
async function validateOGImage() {
  console.log(`\n${YELLOW}🔍 Validando Imagem Open Graph...${RESET}`);
  
  try {
    const result = await checkUrl(`${SITE_URL}/og-image.jpg`);
    
    if (result.statusCode === 200) {
      console.log(`${GREEN}✅ Imagem OG acessível (Status: ${result.statusCode})${RESET}`);
      
      // Verificar tipo de conteúdo
      if (result.headers['content-type']?.includes('image')) {
        console.log(`${GREEN}✅ Tipo de conteúdo correto: ${result.headers['content-type']}${RESET}`);
      }
      
      // Verificar tamanho via Content-Length (mais eficiente)
      const contentLength = parseInt(result.headers['content-length'] || result.data.length);
      const sizeKB = Math.round(contentLength / 1024);
      console.log(`${GREEN}✅ Tamanho: ${sizeKB} KB${RESET}`);
      
      if (sizeKB > 1024) {
        console.log(`${YELLOW}⚠️  Imagem muito grande (> 1 MB). Considere otimizar.${RESET}`);
      }
    } else if (result.statusCode === 404) {
      console.log(`${YELLOW}⚠️  Imagem OG não encontrada (Status: 404)${RESET}`);
      console.log(`${YELLOW}   Crie a imagem seguindo: CREATE-OG-IMAGE.md${RESET}`);
    } else {
      console.log(`${RED}❌ Erro ao acessar imagem OG (Status: ${result.statusCode})${RESET}`);
    }
  } catch (error) {
    console.log(`${YELLOW}⚠️  Imagem OG não encontrada: ${error.message}${RESET}`);
    console.log(`${YELLOW}   Crie a imagem seguindo: CREATE-OG-IMAGE.md${RESET}`);
  }
}

/**
 * Valida página principal e meta tags
 */
async function validateHomePage() {
  console.log(`\n${YELLOW}🔍 Validando Página Principal...${RESET}`);
  
  try {
    const result = await checkUrl(SITE_URL);
    
    if (result.statusCode === 200) {
      console.log(`${GREEN}✅ Página principal acessível (Status: ${result.statusCode})${RESET}`);
      
      // Verificar meta tags essenciais
      const checks = [
        { tag: '<title>', name: 'Title tag' },
        { tag: 'meta name="description"', name: 'Meta description' },
        { tag: 'meta property="og:title"', name: 'OG Title' },
        { tag: 'meta property="og:image"', name: 'OG Image' },
        { tag: 'link rel="canonical"', name: 'Canonical URL' },
        { tag: 'application/ld+json', name: 'Schema.org JSON-LD' }
      ];
      
      checks.forEach(check => {
        if (result.data.includes(check.tag)) {
          console.log(`${GREEN}✅ ${check.name} presente${RESET}`);
        } else {
          console.log(`${RED}❌ ${check.name} ausente${RESET}`);
          hasErrors = true;
        }
      });
    } else {
      console.log(`${RED}❌ Página principal não acessível (Status: ${result.statusCode})${RESET}`);
      hasErrors = true;
    }
  } catch (error) {
    console.log(`${RED}❌ Erro ao acessar página principal: ${error.message}${RESET}`);
    hasErrors = true;
  }
}

/**
 * Função principal
 */
async function main() {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${YELLOW}🚀 Validação de SEO - ${SITE_URL}${RESET}`);
  console.log(`${'='.repeat(60)}`);
  
  // Validar URL antes de começar
  if (!isValidUrl(SITE_URL)) {
    console.log(`\n${RED}❌ URL inválida: ${SITE_URL}${RESET}`);
    console.log(`${YELLOW}Uso: node scripts/validate-seo.js [URL]${RESET}\n`);
    process.exit(1);
  }
  
  await validateSitemap();
  await validateRobots();
  await validateOGImage();
  await validateHomePage();
  
  console.log(`\n${'='.repeat(60)}`);
  
  if (hasErrors) {
    console.log(`${RED}⚠️  Validação concluída com erros${RESET}`);
    console.log(`${'='.repeat(60)}\n`);
    process.exit(1);
  }
  
  console.log(`${GREEN}✅ Validação concluída com sucesso!${RESET}`);
  console.log(`${'='.repeat(60)}\n`);
  
  console.log(`${YELLOW}📊 Próximos passos:${RESET}`);
  console.log(`1. Envie o sitemap no Google Search Console`);
  console.log(`2. Teste com: https://search.google.com/test/rich-results`);
  console.log(`3. Verifique performance: https://pagespeed.web.dev/`);
  console.log(`4. Teste OG tags: https://developers.facebook.com/tools/debug/\n`);
}

main();
