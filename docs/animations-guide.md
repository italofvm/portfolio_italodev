# 🎨 Guia de Animações - Landing Page Premium

## 📦 Bibliotecas Instaladas

- **GSAP 3.x** - Animações JavaScript de alta performance
- **ScrollTrigger** - Plugin GSAP para animações baseadas em scroll

## 🎯 Animações Implementadas

### 1. Hero Section
**Localização:** `components/Hero.vue`

- ✅ Badge de entrada com efeito `back.out` (bounce suave)
- ✅ Título com fade-in + slide-up
- ✅ Subtítulo com delay sequencial
- ✅ Botões com stagger (0.15s entre cada)
- ✅ Parallax suave nos glows de fundo (scrub 1.5 e 2)

**Microinterações:**
- Hover nos botões: `translateY(-2px) + scale(1.03)` + glow aumentado
- Active state: `scale(0.98)` para feedback tátil

---

### 2. Service Cards
**Localização:** `components/ServiceCard.vue`

- ✅ Fade-up com stagger de 0.2s entre cards
- ✅ Trigger: quando a grid entra em 80% do viewport
- ✅ Animação única (once: true)

**Microinterações:**
- Hover: `translateY(-4px) + scale(1.02)`
- Box-shadow progressivo com glow amarelo
- Ícone muda de cor (accent → cta)

---

### 3. Project Cards
**Localização:** `components/ProjectCard.vue`

- ✅ Fade-up com Y: 60px
- ✅ Stagger de 0.15s
- ✅ Trigger: 75% do viewport

**Microinterações:**
- Hover: `translateY(-6px) + scale(1.02)`
- Imagem com zoom suave (scale 1.1)
- Seta "Ver Detalhes" com translateX
- Shadow dramático + glow amarelo

---

### 4. Testimonials
**Localização:** `components/Testimonial.vue`

- ✅ Fade-up com stagger de 0.2s
- ✅ Trigger: 80% do viewport

**Microinterações:**
- Hover: `translateY(-4px)` + shadow aumentado
- Borda com leve glow amarelo

---

### 5. FAQ Items
**Localização:** `components/FaqItem.vue`

- ✅ Fade-in com slide-left (x: -30px)
- ✅ Stagger de 0.1s entre perguntas
- ✅ Accordion animado com Transition Vue

**Microinterações:**
- Ícone rotaciona 180° quando aberto
- Conteúdo com fade-in + slide-up
- Max-height animado para smooth expand

---

### 6. Contact Section
**Localização:** `pages/index.vue` + `components/ContactForm.vue`

- ✅ Título com slide-left (x: -40px)
- ✅ Subtítulo com delay
- ✅ Info items com stagger
- ✅ Formulário com slide-right (x: 40px)

**Microinterações:**
- Inputs: `translateY(-1px)` no focus + glow amarelo
- Botão submit: `translateY(-2px) + scale(1.02)` + shadow aumentado
- Active state: `scale(0.98)`

---

### 7. WhatsApp Button
**Localização:** `components/WhatsAppButton.vue`

- ✅ Animação heartbeat contínua (2s loop)
- ✅ Pulsa suavemente: scale(1) → scale(1.08) → scale(1)

**Microinterações:**
- Hover: `scale(1.15)` + shadow verde aumentado
- Animação heartbeat para quando hover
- Active: `scale(1.05)`

---

### 8. Footer
**Localização:** `components/TheFooter.vue`

- ✅ Fade-up quando entra em 90% do viewport
- ✅ Duração: 0.8s

---

### 9. Section Titles
**Aplicado globalmente em todas as seções**

- ✅ Fade-up com Y: 40px
- ✅ Trigger: 85% do viewport
- ✅ Classe: `.section-title`

---

## 🛠️ Arquivos Criados

### 1. `composables/useAnimations.ts`
Composable com todas as funções de animação GSAP:
- `initHeroAnimations()`
- `initServiceCardsAnimation()`
- `initProjectCardsAnimation()`
- `initSectionTitles()`
- `initTestimonials()`
- `initFaqItems()`
- `initContactSection()`
- `initFooter()`

### 2. `plugins/gsap.client.ts`
Plugin Nuxt que:
- Registra ScrollTrigger
- Configura GSAP globalmente
- Cria diretiva `v-scroll-animate` (opcional)
- Disponibiliza `$gsap` e `$ScrollTrigger`

### 3. `assets/css/animations.css`
CSS global com:
- Keyframes reutilizáveis
- Classes utilitárias (`.fade-in`, `.slide-up`, `.hover-glow`)
- Transições suaves
- Efeitos de hover
- Animações de loading (shimmer)

---

## 🎬 Como Usar

### Inicialização Automática
As animações são inicializadas automaticamente no `onMounted` de `pages/index.vue`:

```javascript
onMounted(() => {
  if (process.client) {
    const { 
      initServiceCardsAnimation,
      initProjectCardsAnimation,
      // ... outras funções
    } = useAnimations()

    setTimeout(() => {
      initSectionTitles()
      initServiceCardsAnimation()
      // ... outras inicializações
    }, 100)
  }
})
```

### Diretiva v-scroll-animate (Opcional)
Você pode usar a diretiva em qualquer elemento:

```vue
<div v-scroll-animate="{ y: 50, opacity: 0, duration: 0.8 }">
  Conteúdo animado
</div>
```

---

## 📱 Performance & Mobile

### Otimizações Implementadas:
- ✅ `force3D: true` - Usa aceleração GPU
- ✅ `once: true` - Animações executam apenas uma vez
- ✅ `will-change` implícito via GSAP
- ✅ Transições CSS para hover (mais leve que JS)
- ✅ Animações só iniciam quando elemento entra no viewport

### Mobile-First:
- ✅ Todas as animações testadas para touch devices
- ✅ Sem hover states problemáticos em mobile
- ✅ Durações ajustadas para não travar
- ✅ ScrollTrigger com `scrub` suave

---

## 🎨 Paleta de Easing

- **Entrada suave:** `power3.out`
- **Saída suave:** `power2.out`
- **Bounce sutil:** `back.out(1.7)`
- **Linear (parallax):** `none` (com scrub)
- **Cubic-bezier CSS:** `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 🔧 Customização

### Ajustar velocidade das animações:
Edite os valores de `duration` em `composables/useAnimations.ts`

### Adicionar nova animação:
1. Crie função no composable
2. Adicione classe CSS no componente
3. Chame a função no `onMounted` da página

### Desabilitar animação específica:
Comente a chamada da função no `onMounted`

---

## ✅ Checklist de Implementação

- [x] GSAP instalado
- [x] Plugin GSAP configurado
- [x] Composable de animações criado
- [x] CSS global de animações
- [x] Hero com parallax
- [x] Service cards com stagger
- [x] Project cards com hover
- [x] Testimonials animados
- [x] FAQ accordion suave
- [x] Contact section sequencial
- [x] WhatsApp heartbeat
- [x] Footer fade-in
- [x] Botões com microinterações
- [x] Inputs com feedback visual
- [x] Mobile-friendly

---

## 🚀 Próximos Passos (Opcional)

- [ ] Adicionar Motion One para animações CSS mais complexas
- [ ] Criar variantes de animação (rápida/lenta)
- [ ] Adicionar prefers-reduced-motion
- [ ] Criar animações de loading states
- [ ] Adicionar page transitions

---

**Desenvolvido com ❤️ usando GSAP + ScrollTrigger**
