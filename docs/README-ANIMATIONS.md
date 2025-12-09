# 🎬 Animações Premium Implementadas

## ✨ O que foi adicionado

Sua landing page agora possui animações profissionais e suaves usando **GSAP + ScrollTrigger**, sem alterar nenhuma estrutura de layout existente.

## 🚀 Como testar

```bash
npm run dev
```

Acesse `http://localhost:3000` e role a página para ver as animações em ação.

## 📦 Arquivos Criados

1. **`composables/useAnimations.ts`** - Todas as animações GSAP
2. **`plugins/gsap.client.ts`** - Plugin Nuxt + diretiva v-scroll-animate
3. **`assets/css/animations.css`** - Animações CSS globais
4. **`docs/animations-guide.md`** - Documentação completa

## 🎯 Animações por Seção

### Hero
- Entrada sequencial: badge → título → subtítulo → botões
- Parallax suave nos glows de fundo
- Botões com hover scale + glow

### Service Cards
- Fade-up com stagger quando entram no viewport
- Hover: elevação + scale + shadow progressivo

### Project Cards
- Reveal suave com opacidade e Y
- Hover: elevação maior + zoom na imagem
- Shadow dramático com glow amarelo

### Testimonials
- Entrada em sequência (stagger)
- Hover com elevação suave

### FAQ
- Accordion animado com height auto + opacity
- Ícone rotaciona ao abrir

### Contact Section
- Título e subtítulo com slide-left
- Formulário com slide-right
- Inputs com feedback visual no focus

### WhatsApp Button
- Animação heartbeat contínua (pulso sutil)
- Hover com scale aumentado

### Footer
- Fade-in quando aparece na tela

## 🎨 Microinterações

Todos os elementos interativos possuem:
- Transições suaves (0.3-0.35s)
- Easing profissional: `cubic-bezier(0.4, 0, 0.2, 1)`
- Feedback visual em hover e active states
- Scale + translateY para sensação de profundidade

## 📱 Mobile-First

- Todas as animações são leves e não travam
- Performance otimizada com GPU acceleration
- Animações só executam quando elementos entram no viewport
- Compatível com touch devices

## 🛠️ Customização

Para ajustar velocidades ou efeitos, edite:
- **Animações JS:** `composables/useAnimations.ts`
- **Estilos hover:** Seção `<style scoped>` de cada componente
- **Animações globais:** `assets/css/animations.css`

## 📚 Documentação Completa

Veja `docs/animations-guide.md` para detalhes técnicos completos.

---

**Pronto para impressionar! 🎉**
