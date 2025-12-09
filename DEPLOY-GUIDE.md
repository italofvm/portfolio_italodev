# 🚀 GUIA DE DEPLOY - Otimizações Implementadas

## ✅ PRÉ-REQUISITOS

Antes de fazer o deploy, certifique-se de que:

- [x] Build local executado com sucesso (`npm run build`)
- [x] Todas as imagens WebP foram geradas (24 arquivos)
- [x] Arquivo `vercel.json` está no root do projeto
- [x] Variáveis de ambiente configuradas no `.env`

---

## 🔄 PASSO A PASSO PARA DEPLOY

### Opção 1: Deploy via Git (Recomendado)

```bash
# 1. Adicionar arquivos ao Git
git add .

# 2. Commit com mensagem descritiva
git commit -m "feat: otimizações de performance - imagens WebP, code splitting, acessibilidade"

# 3. Push para o repositório
git push origin main
```

O Vercel detectará automaticamente as mudanças e fará o deploy.

---

### Opção 2: Deploy via CLI do Vercel

```bash
# 1. Instalar Vercel CLI (se não tiver)
npm i -g vercel

# 2. Login no Vercel
vercel login

# 3. Deploy de produção
vercel --prod
```

---

## 🔍 VALIDAÇÃO PÓS-DEPLOY

### 1. Verificar Imagens WebP

Abra o DevTools (F12) → Network → Img:

```
✓ Verificar se arquivos .webp estão sendo carregados
✓ Verificar tamanhos (mobile: ~40-100KB, tablet: ~70-150KB)
✓ Testar em diferentes resoluções
```

### 2. Executar Lighthouse Audit

```
1. Abrir Chrome DevTools (F12)
2. Ir para aba "Lighthouse"
3. Selecionar:
   - Mode: Navigation
   - Device: Mobile e Desktop
   - Categories: Performance, Accessibility, Best Practices, SEO
4. Clicar em "Analyze page load"
```

**Metas esperadas:**
- Performance Mobile: 75-85
- Performance Desktop: 85-95
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 100

### 3. Verificar Cache Headers

Abra DevTools → Network → Selecione uma imagem WebP:

```
✓ Cache-Control: public, max-age=31536000, immutable
✓ Content-Type: image/webp
✓ Content-Encoding: gzip ou br (brotli)
```

### 4. Testar Core Web Vitals

Use [PageSpeed Insights](https://pagespeed.web.dev/):

```
1. Acessar: https://pagespeed.web.dev/
2. Inserir URL: https://italovdev.vercel.app
3. Clicar em "Analyze"
```

**Metas esperadas:**
- LCP: < 2.5s (bom) ou < 4s (aceitável)
- FID: < 100ms
- CLS: < 0.1

---

## 🐛 TROUBLESHOOTING

### Problema: Imagens não carregam

**Solução:**
```bash
# Verificar se as imagens foram geradas
ls -la public/assets/optimized/

# Se não existirem, executar:
npm run optimize:images
```

### Problema: Build falha no Vercel

**Solução:**
```bash
# Verificar build local primeiro
npm run build

# Se funcionar local mas falhar no Vercel:
# 1. Verificar Node version no vercel.json
# 2. Verificar variáveis de ambiente no Vercel Dashboard
```

### Problema: Cache não funciona

**Solução:**
```bash
# Verificar se vercel.json está no root
ls -la vercel.json

# Verificar conteúdo do arquivo
cat vercel.json
```

### Problema: Performance ainda baixa

**Checklist:**
- [ ] Imagens WebP estão sendo servidas?
- [ ] Cache headers estão presentes?
- [ ] JavaScript está minificado?
- [ ] CSS está consolidado?
- [ ] Compressão gzip/brotli está ativa?

---

## 📊 MONITORAMENTO CONTÍNUO

### Ferramentas Recomendadas

1. **Google Search Console**
   - Monitorar Core Web Vitals
   - Verificar indexação
   - Acompanhar erros

2. **Vercel Analytics**
   - Monitorar performance real
   - Acompanhar Web Vitals
   - Ver métricas de usuários reais

3. **Lighthouse CI**
   - Automatizar audits
   - Monitorar regressões
   - Integrar com CI/CD

---

## 🎯 CHECKLIST FINAL

Antes de considerar o deploy concluído:

### Funcionalidade
- [ ] Página inicial carrega corretamente
- [ ] Todas as imagens aparecem
- [ ] Formulário de contato funciona
- [ ] WhatsApp button funciona
- [ ] Modal de projetos abre/fecha
- [ ] Menu mobile funciona
- [ ] Navegação por âncoras funciona

### Performance
- [ ] Lighthouse Performance > 75 (mobile)
- [ ] Lighthouse Performance > 85 (desktop)
- [ ] LCP < 4s
- [ ] TBT < 600ms
- [ ] Payload total < 5MB

### Acessibilidade
- [ ] Lighthouse Accessibility > 95
- [ ] Contraste adequado
- [ ] Navegação por teclado funciona
- [ ] Leitores de tela funcionam

### SEO
- [ ] Meta tags presentes
- [ ] Schema.org implementado
- [ ] Sitemap gerado
- [ ] robots.txt configurado

---

## 📞 SUPORTE

Se encontrar problemas:

1. **Verificar logs do Vercel:**
   - Dashboard → Deployments → Selecionar deploy → View Logs

2. **Verificar console do navegador:**
   - F12 → Console → Procurar erros

3. **Testar localmente:**
   ```bash
   npm run build
   npm run preview
   ```

---

## 🎉 SUCESSO!

Se todos os checks passaram:

✅ **Deploy concluído com sucesso!**
✅ **Performance otimizada**
✅ **Acessibilidade melhorada**
✅ **Pronto para produção**

**Próximo passo:** Monitorar métricas reais e fazer ajustes finos se necessário.

---

**Última atualização:** 9 de Dezembro de 2025  
**Versão:** 1.0.0
