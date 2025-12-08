# Portfólio Italo Vieira

Projeto desenvolvido com **Nuxt 3** e **Tailwind CSS**.

## 🚀 Como Iniciar

### 1. Instalação
```bash
npm install
```

### 2. Configuração
Crie um arquivo `.env` na raiz (opcional para desenvolvimento, obrigatório para produção se quiser mudar o número sem build):
```bash
PUBLIC_WHATSAPP_NUMBER=5511999999999
```

### 3. Rodar Localmente
```bash
npm run dev
```
Acesse `http://localhost:3000`.

## 📁 Estrutura

- `components/`: Componentes UI reutilizáveis.
- `pages/`: Arquivos de rotas (apenas `index.vue`).
- `data/`: Dados estáticos (projetos).
- `public/`: Assets (imagens).

## 🛠️ Build e Deploy (Vercel)

Este projeto está pronto para Vercel.
1. Importe o repositório no Vercel.
2. Nas configurações do projeto (Environment Variables), adicione:
   - `PUBLIC_WHATSAPP_NUMBER`: Seu número (ex: 5511...)
3. Clique em **Deploy**.

## 🎨 Cores

- **Primary Dark**: `#090040`
- **Accent**: `#471396`
- **Highlight**: `#B13BFF`
- **CTA**: `#FFCC00`
