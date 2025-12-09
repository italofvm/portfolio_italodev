# Phase 6: Manutenção Contínua

## Adicionar Novos Projetos
Para adicionar um projeto ao portfólio:
1. Adicione a imagem em `public/assets/`.
2. Edite `data/projects.js`:
   ```javascript
   {
     id: 7,
     title: 'Novo Projeto',
     description: '...',
     niche: '...',
     type: 'Profissional',
     tags: ['Tag1'],
     image: '/assets/novo-img.png',
     demoLink: 'https://...'
   }
   ```
3. Commit e Push.

## Atualizar Número do WhatsApp
Altere a variável de ambiente `NUXT_PUBLIC_WHATSAPP_NUMBER` na Vercel e faça um Redeploy (ou apenas promova a env se usar Edge config).

## Atualização de Dependências
Mantenha o Nuxt atualizado:
```bash
npx nuxi upgrade
npm install
```
