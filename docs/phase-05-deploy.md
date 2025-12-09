# Phase 5: Deploy & Observabilidade

## Checklist de Pré-Deploy
- [ ] Verificar Tags SEO em `nuxt.config.ts` e `index.vue`.
- [ ] Testar fluxo do WhatsApp no mobile.
- [ ] Verificar performance (Lighthouse).

## Deploy na Vercel
A Vercel é a plataforma recomendada para Nuxt 3.

### Passos:
1. Instale a Vercel CLI ou conecte via Git.
2. Comando: `vercel` (ou push para branch main).
3. Configuração de Build:
   - Framework Preset: Nuxt.js
   - Build Command: `nuxt build`
   - Output Directory: `.output`

## Variáveis de Ambiente
Certifique-se de configurar `PUBLIC_WHATSAPP_NUMBER` no painel da Vercel para garantir que o contact form funcione corretamente.

## Observabilidade (Sugestões)
- **Vercel Analytics**: Ative no dashboard para ver visitas.
- **Speed Insights**: Para monitorar CLS/LCP.
