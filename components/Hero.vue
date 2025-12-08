<template>
  <section class="hero-section relative bg-primary-dark pt-32 pb-20 overflow-hidden">
    <!-- Background glow -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
      <div class="hero-glow-1 absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
      <div class="hero-glow-2 absolute top-40 right-10 w-96 h-96 bg-highlight/20 rounded-full blur-3xl mix-blend-screen"></div>
    </div>

    <div class="container mx-auto px-4 relative z-10 text-center">
      <span class="hero-badge inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-cta font-medium text-sm mb-6 backdrop-blur-sm">
        🚀 Desenvolvedor Freelancer Especialista
      </span>
      
      <h1 class="hero-title text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 mb-6 tracking-tight leading-tight">
        Transformo Ideias em <br class="hidden md:block"/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-highlight to-accent">Sites de Alta Conversão</span>
      </h1>
      
      <p class="hero-subtitle text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        Criação de Landing Pages, Portfólios e Sistemas Web rápidos, modernos e otimizados para vender mais.
      </p>
      
      <div class="hero-buttons flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#contato" class="cta-button px-8 py-4 bg-cta text-primary-dark font-bold rounded-lg shadow-[0_0_20px_rgba(255,204,0,0.3)] w-full sm:w-auto">
          Solicitar Orçamento
        </a>
        <a href="#portfolio" class="cta-button-secondary px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-lg w-full sm:w-auto">
          Ver Projetos
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (process.client) {
    const { initHeroAnimations } = useAnimations()
    initHeroAnimations()
  }
})
</script>

<style scoped>
.cta-button {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button:hover {
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 0 30px rgba(255, 204, 0, 0.5);
  background: #ffd700;
}

.cta-button:active {
  transform: translateY(0) scale(0.98);
}

.cta-button-secondary {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-button-secondary:hover {
  transform: translateY(-2px) scale(1.02);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 204, 0, 0.5);
}
</style>
