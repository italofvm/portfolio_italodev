# 🎬 Exemplos de Uso - Animações

## Diretiva v-scroll-animate

A diretiva `v-scroll-animate` permite adicionar animações facilmente a qualquer elemento.

### Uso Básico

```vue
<div v-scroll-animate>
  Conteúdo animado com configuração padrão
</div>
```

### Configuração Personalizada

```vue
<div v-scroll-animate="{ 
  y: 60, 
  opacity: 0, 
  duration: 1, 
  ease: 'power3.out' 
}">
  Animação customizada
</div>
```

### Stagger em Filhos

```vue
<div v-scroll-animate="{ stagger: 0.2 }">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Opções Disponíveis

| Opção | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| `y` | number | 40 | Deslocamento vertical inicial |
| `x` | number | 0 | Deslocamento horizontal inicial |
| `opacity` | number | 0 | Opacidade inicial |
| `duration` | number | 0.8 | Duração da animação (segundos) |
| `delay` | number | 0 | Delay antes de iniciar |
| `stagger` | number | 0 | Delay entre filhos |
| `ease` | string | 'power3.out' | Curva de easing |
| `start` | string | 'top 85%' | Quando iniciar (ScrollTrigger) |
| `once` | boolean | true | Animar apenas uma vez |

## Exemplos Práticos

### Card com Entrada Suave

```vue
<div v-scroll-animate="{ y: 50, duration: 0.7 }" 
     class="card">
  <h3>Título do Card</h3>
  <p>Conteúdo...</p>
</div>
```

### Lista com Stagger

```vue
<ul v-scroll-animate="{ y: 30, stagger: 0.1 }">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>
```

### Entrada Lateral

```vue
<div v-scroll-animate="{ x: -50, y: 0, duration: 0.9 }">
  Entra da esquerda
</div>

<div v-scroll-animate="{ x: 50, y: 0, duration: 0.9 }">
  Entra da direita
</div>
```

### Fade Simples

```vue
<div v-scroll-animate="{ y: 0, opacity: 0, duration: 1 }">
  Apenas fade-in, sem movimento
</div>
```

### Animação Rápida

```vue
<div v-scroll-animate="{ duration: 0.4, ease: 'power2.out' }">
  Animação mais rápida
</div>
```

### Com Delay

```vue
<div v-scroll-animate="{ delay: 0.3 }">
  Inicia após 0.3s
</div>
```

## Classes CSS Utilitárias

Você também pode usar classes CSS diretamente:

```vue
<!-- Fade in simples -->
<div class="fade-in">Conteúdo</div>

<!-- Slide up -->
<div class="slide-up">Conteúdo</div>

<!-- Hover glow -->
<button class="hover-glow">Botão</button>

<!-- Hover lift -->
<div class="hover-lift">Card</div>

<!-- Float animation -->
<div class="float">Elemento flutuante</div>

<!-- Pulse suave -->
<div class="pulse-soft">Pulsa suavemente</div>
```

## Combinando com Tailwind

```vue
<div v-scroll-animate 
     class="bg-white/5 p-8 rounded-2xl hover-lift">
  Card com animação de entrada + hover
</div>
```

## Animações Programáticas

Se precisar controlar animações via JavaScript:

```vue
<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'

onMounted(() => {
  gsap.from('.meu-elemento', {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power3.out'
  })
})
</script>

<template>
  <div class="meu-elemento">
    Animado programaticamente
  </div>
</template>
```

## Dicas de Performance

1. **Use `once: true`** para animações que só precisam rodar uma vez
2. **Evite animar muitos elementos** ao mesmo tempo (use stagger)
3. **Prefira transform e opacity** (são acelerados por GPU)
4. **Use `will-change` com cuidado** (GSAP já otimiza automaticamente)

## Easings Recomendados

- **Entrada suave:** `power3.out` ou `power2.out`
- **Saída suave:** `power3.in`
- **Bounce sutil:** `back.out(1.7)`
- **Elástico:** `elastic.out(1, 0.5)`
- **Linear:** `none`

## Troubleshooting

### Animação não funciona?

1. Verifique se o elemento tem a classe correta
2. Confirme que o plugin GSAP está carregado
3. Use `once: false` para testar múltiplas vezes
4. Verifique o console para erros

### Animação muito rápida/lenta?

Ajuste o `duration`:
- Rápida: 0.3 - 0.5s
- Normal: 0.6 - 0.8s
- Lenta: 1 - 1.5s

### Stagger não funciona?

Certifique-se de que o elemento pai tem filhos diretos para animar.

---

**Divirta-se criando animações incríveis! 🎨**
