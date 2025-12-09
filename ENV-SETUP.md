# 🔧 Configuração de Variáveis de Ambiente

## 📋 Variáveis Disponíveis

### WhatsApp
```env
NUXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```
**Formato:** Código do país + DDD + número (sem espaços, hífens ou parênteses)

**Exemplos:**
- Brasil (SP): `5511999999999`
- Brasil (RJ): `5521999999999`
- Portugal: `351912345678`

### Email de Contato
```env
NUXT_PUBLIC_CONTACT_EMAIL=seu@email.com
```

### URL do Site
```env
NUXT_PUBLIC_SITE_URL=https://seudominio.com
```

## 🚀 Como Configurar

### 1. Desenvolvimento Local

Copie o arquivo de exemplo:
```bash
cp .env.example .env
```

Edite o `.env` com seus dados:
```env
NUXT_PUBLIC_WHATSAPP_NUMBER=5511987654321
NUXT_PUBLIC_CONTACT_EMAIL=italo@seudominio.com
NUXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Produção (Vercel)

No painel da Vercel:
1. Vá em **Settings** → **Environment Variables**
2. Adicione cada variável:
   - `NUXT_PUBLIC_WHATSAPP_NUMBER` = `5511987654321`
   - `NUXT_PUBLIC_CONTACT_EMAIL` = `italo@seudominio.com`
   - `NUXT_PUBLIC_SITE_URL` = `https://italovdev.vercel.app`

### 3. Produção (Netlify)

No painel da Netlify:
1. Vá em **Site settings** → **Environment variables**
2. Clique em **Add a variable**
3. Adicione cada variável

## 🔍 Como Usar no Código

### No componente Vue:
```vue
<script setup>
const config = useRuntimeConfig()

// Acessar variáveis
const whatsapp = config.public.whatsappNumber
const email = config.public.contactEmail
const siteUrl = config.public.siteUrl
</script>
```

### Exemplo prático:
```vue
<template>
  <a :href="`https://wa.me/${config.public.whatsappNumber}`">
    Falar no WhatsApp
  </a>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
```

## ⚠️ Importante

### Segurança
- ✅ Variáveis `NUXT_PUBLIC_*` são **públicas** (visíveis no cliente)
- ✅ Use apenas para dados não sensíveis
- ❌ **NUNCA** coloque API keys secretas em variáveis públicas
- ❌ **NUNCA** commite o arquivo `.env` no Git

### Nomenclatura
- Variáveis públicas: `NUXT_PUBLIC_*`
- Variáveis privadas (server-only): `NUXT_*`

## 🧪 Testar Configuração

```bash
# Reiniciar o servidor após alterar .env
npm run dev
```

Verifique no console se não há mais avisos sobre `PUBLIC_WHATSAPP_NUMBER`.

## 📝 Checklist

- [ ] Arquivo `.env` criado
- [ ] Variáveis configuradas
- [ ] `.env` no `.gitignore`
- [ ] Servidor reiniciado
- [ ] Sem avisos no console
- [ ] WhatsApp funcionando
- [ ] Email funcionando

## 🔄 Atualizar Número de WhatsApp

1. Edite o `.env`:
   ```env
   NUXT_PUBLIC_WHATSAPP_NUMBER=5511NOVONUMERO
   ```

2. Reinicie o servidor:
   ```bash
   # Ctrl+C para parar
   npm run dev
   ```

3. Teste o botão de WhatsApp

## 🌐 Deploy

### Vercel
As variáveis são lidas automaticamente do painel.

### Netlify
As variáveis são lidas automaticamente do painel.

### Outros
Configure as variáveis de ambiente no painel do seu provedor.

---

**Status:** ✅ Configuração completa e segura!
