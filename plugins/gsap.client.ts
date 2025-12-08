import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { DirectiveBinding } from 'vue'

/**
 * Opções disponíveis para a diretiva v-scroll-animate
 * @example v-scroll-animate="{ y: 60, duration: 1, stagger: 0.2 }"
 */
interface ScrollAnimateOptions {
  y?: number
  opacity?: number
  duration?: number
  delay?: number
  stagger?: number
  ease?: string
  start?: string
  once?: boolean
}

// defineNuxtPlugin é auto-importado pelo Nuxt (veja .nuxt/imports.d.ts)
export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)

    // Detectar preferência de movimento reduzido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Configuração global do GSAP
    gsap.config({
      force3D: true,
      nullTargetWarn: false
    })

    // Desabilitar animações se usuário preferir movimento reduzido
    if (prefersReducedMotion) {
      gsap.globalTimeline.timeScale(0.01) // Animações instantâneas
      ScrollTrigger.config({
        autoRefreshEvents: 'none'
      })
    }

    // Diretiva v-scroll-animate
    nuxtApp.vueApp.directive('scroll-animate', {
      mounted(el: HTMLElement, binding: DirectiveBinding<ScrollAnimateOptions>) {
        // Validação de entrada
        if (!el || typeof binding.value !== 'object') {
          return
        }

        const options = binding.value || {}
        const {
          y = 40,
          opacity = 0,
          duration = 0.8,
          delay = 0,
          stagger = 0,
          ease = 'power3.out',
          start = 'top 85%',
          once = true
        } = options

        // Validação de children para stagger
        const targets = stagger > 0 && el.children.length > 0 ? el.children : el

        gsap.from(targets, {
          y,
          opacity,
          duration,
          delay,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once,
            toggleActions: 'play none none none'
          }
        })
      },
      // Cleanup para evitar memory leaks
      unmounted(el: HTMLElement) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === el) {
            trigger.kill()
          }
        })
      }
    })

    // Disponibilizar GSAP globalmente
    return {
      provide: {
        gsap,
        ScrollTrigger
      }
    }
  }
})
