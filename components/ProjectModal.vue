<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
        @click.self="$emit('close')"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="project ? `modal-title-${project.id}` : undefined"
      >
        <div 
          class="bg-primary-dark border border-white/5 rounded-hyper max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] relative"
          @click.stop
        >
          <!-- Close Button Corner -->
          <button 
            @click="$emit('close')"
            class="absolute top-6 right-6 z-20 text-gray-500 hover:text-brand transition-all p-3 bg-white/5 rounded-full hover:bg-white/10 hover:rotate-90 duration-500"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div v-if="project" class="p-8 md:p-12">
            <!-- Header -->
            <div class="mb-12">
              <span class="text-brand font-black text-xs uppercase tracking-[0.3em] mb-4 block">{{ project.type }}</span>
              <h2 :id="`modal-title-${project.id}`" class="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                {{ project.title }}
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <!-- Sidebar Info -->
              <div class="lg:col-span-4 space-y-8 order-2 lg:order-1">
                <div class="space-y-6 pt-8 border-t border-white/5">
                  <div>
                    <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Nicho do Negócio</h4>
                    <p class="text-white font-bold">{{ project.niche }}</p>
                  </div>
                  <div>
                    <h4 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Tecnologias</h4>
                    <div class="flex flex-wrap gap-2">
                      <span 
                        v-for="tag in project.tags" 
                        :key="tag"
                        class="text-[10px] font-black uppercase tracking-widest bg-brand/10 text-brand px-3 py-1 rounded-full border border-brand/20"
                      >
                        {{ tag }}
                      </span>
                    </div>
                  </div>
                </div>

                <div class="pt-8">
                   <a 
                    v-if="project.demoLink"
                    :href="project.demoLink" 
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center justify-center gap-3 px-8 py-5 bg-brand text-white font-black rounded-modern hover:scale-[1.03] transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(255,92,0,0.5)]"
                  >
                    VER PROJETO AO VIVO
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              <!-- Content Area -->
              <div class="lg:col-span-8 space-y-10 order-1 lg:order-2">
                <div class="relative aspect-video rounded-modern overflow-hidden border border-white/5 shadow-2xl">
                  <picture>
                    <source media="(max-width: 1024px)" :srcset="`/assets/optimized/${project.image}-tablet.webp`" type="image/webp">
                    <source :srcset="`/assets/optimized/${project.image}-desktop.webp`" type="image/webp">
                    <img :src="`/assets/optimized/${project.image}.webp`" :alt="project.title" class="w-full h-full object-cover">
                  </picture>
                </div>

                <div class="prose prose-invert max-w-none">
                  <h3 class="text-xl font-black text-white uppercase tracking-widest mb-4">A Estratégia</h3>
                  <p class="text-gray-400 text-lg font-medium leading-relaxed">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  project: Object
})

const emit = defineEmits(['close'])

watch(() => props.isOpen, (newVal) => {
  if (process.client) {
    document.body.style.overflow = newVal ? 'hidden' : ''
  }
})

onUnmounted(() => {
  if (process.client) document.body.style.overflow = ''
})

onMounted(() => {
  if (process.client) {
    const handleEscape = (e) => { if (e.key === 'Escape' && props.isOpen) emit('close') }
    window.addEventListener('keydown', handleEscape)
    onUnmounted(() => window.removeEventListener('keydown', handleEscape))
  }
})
</script>

<style scoped>
.modal-enter-active, .modal-leave-active { transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
.modal-enter-from, .modal-leave-to { opacity: 0; }
.modal-enter-from > div, .modal-leave-to > div { transform: scale(0.9) translateY(40px); opacity: 0; }

::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: theme('colors.brand'); border-radius: 10px; }
</style>
