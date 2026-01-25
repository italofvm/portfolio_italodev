<template>
  <section class="relative min-h-[75vh] md:min-h-screen flex items-center bg-primary-dark pt-32 pb-8 md:pb-20 overflow-hidden">
    <!-- Kinetic Background elements - Simplified for performance -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Massive Background Text -->
      <div 
        ref="bgText"
        class="absolute -top-10 -left-20 text-[20vw] font-black text-white/[0.02] select-none leading-none tracking-tighter hidden md:block"
        aria-hidden="true"
      >
        DESIGN
      </div>
      <!-- Signal Glow - Optimized blur -->
      <div 
        ref="glow"
        class="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] bg-brand/10 rounded-full blur-[80px] md:blur-[120px]"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-[1200px] mx-auto">
        <!-- Asymmetric Tension Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          <div class="lg:col-span-8">
            <div class="hero-badge-container mb-8 overflow-hidden">
              <span 
                ref="badge"
                class="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold text-xs uppercase tracking-[0.2em]"
              >
                <span class="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                {{ $t('hero.badge') }}
              </span>
            </div>
            
            <h1 
              ref="title"
              class="text-5xl md:text-7xl lg:text-[100px] font-black text-white leading-[0.9] tracking-tighter mb-6 md:mb-8"
            >
              <span class="sr-only">Italo Vieira | {{ $t('nav.title') }}</span>
              {{ $t('hero.title_part1') }} <br/>
              <span class="text-brand">{{ $t('hero.title_highlight') }}</span> <br/>
              {{ $t('hero.title_part2') }}
            </h1>
          </div>

          <div class="lg:col-span-4 lg:mb-12">
            <p 
              ref="subtitle"
              class="text-lg md:text-xl text-gray-400 font-medium leading-relaxed mb-8 md:mb-10 border-l-2 border-brand/30 pl-6"
            >
              <span v-html="$t('hero.subtitle', { strategy: `<span class='text-white'>${$t('hero.strategy')}</span>`, aesthetic: `<span class='text-white'>${$t('hero.aesthetic')}</span>` })"></span>
            </p>
            
            <div ref="ctas" class="flex flex-col sm:flex-row items-stretch gap-4 opacity-0">
              <a 
                href="#contato" 
                class="group relative px-6 md:px-8 py-4 md:py-5 bg-brand text-white font-black rounded-hyper overflow-hidden transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_40px_-15px_rgba(255,92,0,0.5)] flex items-center justify-center gap-3 text-sm md:text-base"
              >
                <span class="relative z-10">{{ $t('hero.cta_proposal') }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              
              <a 
                href="#portfolio" 
                class="px-6 md:px-8 py-4 md:py-5 bg-white/5 border border-white/10 text-white font-bold rounded-hyper hover:bg-white/10 transition-all duration-300 text-center text-sm md:text-base"
              >
                {{ $t('hero.cta_projects') }}
              </a>
            </div>
          </div>

        </div>

        <!-- Horizontal Scroll Narrative (Fragment) -->
        <div 
          ref="narrative"
          class="mt-12 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-wrap gap-6 md:gap-12 text-gray-500 font-bold text-xs tracking-widest uppercase opacity-0"
        >
          <div class="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all cursor-default">
            <span>#HIGH_PERFORMANCE</span>
          </div>
          <div class="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all cursor-default">
            <span>#USER_CENTRIC</span>
          </div>
          <div class="flex items-center gap-2 grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all cursor-default">
            <span>#KINETIC_FLOW</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { animate } from 'motion'

const bgText = ref(null)
const glow = ref(null)
const badge = ref(null)
const title = ref(null)
const subtitle = ref(null)
const ctas = ref(null)
const narrative = ref(null)

onMounted(() => {
  // Kinetic Background Entrances
  animate(bgText.value, { opacity: [0, 0.02], x: [-100, 0] }, { duration: 2, easing: [0.16, 1, 0.3, 1] })
  animate(glow.value, { opacity: [0, 1], scale: [0.8, 1] }, { duration: 3, delay: 0.5 })

  // Sequential Stagger Reveal
  const springOptions = { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
  
  animate(badge.value, { opacity: [0, 1], y: [20, 0] }, springOptions)
  animate(title.value, { opacity: [0, 1], y: [40, 0] }, { ...springOptions, delay: 0.1 })
  animate(subtitle.value, { opacity: [0, 1], x: [-20, 0] }, { ...springOptions, delay: 0.2 })
  animate(ctas.value, { opacity: [0, 1], y: [20, 0] }, { ...springOptions, delay: 0.3 })
  animate(narrative.value, { opacity: [0, 1] }, { duration: 0.8, delay: 0.5 })
})
</script>

<style scoped>
::selection {
  background: theme('colors.brand');
  color: white;
}
</style>
