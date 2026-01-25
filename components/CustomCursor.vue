<template>
  <div class="hidden lg:block pointer-events-none fixed inset-0 z-[10000]">
    <!-- Main Dot (Hardware Accelerated) -->
    <div 
      ref="cursorDot"
      class="fixed w-2 h-2 bg-brand rounded-full transition-opacity duration-300 pointer-events-none will-change-transform -translate-x-1/2 -translate-y-1/2"
      style="top: 0; left: 0;"
    ></div>
    
    <!-- Outer Ring (GPU Optimized) -->
    <div 
      ref="cursorRing"
      class="fixed w-12 h-12 border-2 border-brand/40 rounded-full pointer-events-none will-change-transform -translate-x-1/2 -translate-y-1/2"
      style="top: 0; left: 0;"
    ></div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { animate, spring } from 'motion'

const cursorDot = ref(null)
const cursorRing = ref(null)
const isHovering = ref(false)

const updateMousePos = (e) => {
  const { clientX: x, clientY: y, target } = e
  
  // Mover ponto central (instântaneo via translate3d para GPU)
  if (cursorDot.value) {
    cursorDot.value.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  // Mover anel externo (mola via animate)
  if (cursorRing.value) {
    animate(cursorRing.value, { 
      x: x, 
      y: y 
    }, { 
      easing: spring({ stiffness: 250, damping: 25, mass: 0.5 }) 
    })
  }

  // Delegação dinâmica de hover
  const interactive = target.closest('a, button, input, textarea, [role="button"], .project-card, .faq-item')
  
  if (interactive && !isHovering.value) {
    isHovering.value = true
    handleEnter()
  } else if (!interactive && isHovering.value) {
    isHovering.value = false
    handleLeave()
  }
}

const handleEnter = () => {
  if (cursorRing.value && cursorDot.value) {
    animate(cursorRing.value, { 
      scale: 1.5, 
      backgroundColor: 'rgba(255, 92, 0, 0.15)',
      borderColor: 'rgba(255, 92, 0, 0.8)' 
    }, { duration: 0.4, easing: [0.16, 1, 0.3, 1] })
    
    animate(cursorDot.value, { scale: 0, opacity: 0 }, { duration: 0.2 })
  }
}

const handleLeave = () => {
  if (cursorRing.value && cursorDot.value) {
    animate(cursorRing.value, { 
      scale: 1, 
      backgroundColor: 'transparent',
      borderColor: 'rgba(255, 92, 0, 0.4)' 
    }, { duration: 0.4, easing: [0.16, 1, 0.3, 1] })
    
    animate(cursorDot.value, { scale: 1, opacity: 1 }, { duration: 0.3 })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePos)
  // Esconder cursor real se ele entrar na janela
  document.documentElement.style.cursor = 'none'
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePos)
  document.documentElement.style.cursor = 'auto'
})
</script>

<style scoped>
/* Garante que o cursor customizado nunca bloqueie cliques */
div {
  pointer-events: none !important;
}
</style>
