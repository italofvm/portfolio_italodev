<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="$emit('close')"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="project ? `modal-title-${project.id}` : undefined"
      >
        <div 
          class="bg-primary-dark border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          @click.stop
        >
          <!-- Header -->
          <div class="sticky top-0 bg-primary-dark/95 backdrop-blur-md border-b border-white/10 p-6 flex items-center justify-between z-10">
            <h2 
              v-if="project" 
              :id="`modal-title-${project.id}`"
              class="text-2xl font-bold text-white"
            >
              {{ project.title }}
            </h2>
            <button 
              @click="$emit('close')"
              class="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              aria-label="Fechar modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div v-if="project" class="p-6 space-y-6">
            <!-- Image -->
            <div class="relative aspect-video rounded-xl overflow-hidden">
              <picture>
                <source 
                  media="(max-width: 640px)" 
                  :srcset="`/assets/optimized/${project.image}-mobile.webp`"
                  type="image/webp"
                >
                <source 
                  media="(max-width: 1024px)" 
                  :srcset="`/assets/optimized/${project.image}-tablet.webp`"
                  type="image/webp"
                >
                <source 
                  :srcset="`/assets/optimized/${project.image}-desktop.webp`"
                  type="image/webp"
                >
                <img 
                  :src="`/assets/optimized/${project.image}.webp`"
                  :alt="`Screenshot do projeto ${project.title} - ${project.type}`"
                  loading="lazy"
                  width="1024"
                  height="576"
                  class="w-full h-full object-cover object-top"
                >
              </picture>
            </div>

            <!-- Info Grid -->
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                <p class="text-gray-400 text-sm mb-1">Nicho</p>
                <p class="text-white font-semibold">{{ project.niche }}</p>
              </div>
              <div class="bg-white/5 p-4 rounded-lg border border-white/10">
                <p class="text-gray-400 text-sm mb-1">Tipo</p>
                <p class="text-cta font-semibold">{{ project.type }}</p>
              </div>
              <div class="bg-white/5 p-4 rounded-lg border border-white/10 col-span-2 md:col-span-1">
                <p class="text-gray-400 text-sm mb-1">Tags</p>
                <div class="flex flex-wrap gap-1 mt-2">
                  <span 
                    v-for="tag in project.tags" 
                    :key="tag"
                    class="text-xs bg-accent/20 text-highlight px-2 py-1 rounded"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div>
              <h3 class="text-lg font-bold text-white mb-2">Sobre o Projeto</h3>
              <p class="text-gray-300 leading-relaxed">{{ project.description }}</p>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                v-if="project.demoLink"
                :href="project.demoLink" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex-1 px-6 py-3 bg-cta text-primary-dark font-bold rounded-lg text-center hover:bg-cta/90 transition-all hover:scale-105 hover:shadow-lg"
              >
                Ver Demo ao Vivo
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a 
                href="#contato"
                @click="$emit('close')"
                class="flex-1 px-6 py-3 bg-white/5 border border-white/20 text-white font-medium rounded-lg text-center hover:bg-white/10 transition-all"
              >
                Solicitar Projeto Similar
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean,
  project: Object
})

const emit = defineEmits(['close'])

// Prevenir scroll do body quando modal está aberto
watch(() => props.isOpen, (newVal) => {
  if (process.client) {
    if (newVal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

// Cleanup ao desmontar
onUnmounted(() => {
  if (process.client) {
    document.body.style.overflow = ''
  }
})

// Fechar com ESC
onMounted(() => {
  if (process.client) {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && props.isOpen) {
        emit('close')
      }
    }
    window.addEventListener('keydown', handleEscape)
    onUnmounted(() => {
      window.removeEventListener('keydown', handleEscape)
    })
  }
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95) translateY(20px);
}
</style>
