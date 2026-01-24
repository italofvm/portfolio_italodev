<template>
  <div 
    @click="$emit('open', project)"
    class="project-card group cursor-pointer bg-surface border border-white/5 rounded-hyper overflow-hidden hover:border-brand/40 transition-all duration-500 flex flex-col h-full relative"
  >
    <!-- Card Inner Depth -->
    <div class="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>

    <div class="relative overflow-hidden aspect-[16/10]">
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
          :alt="`Projeto ${project.title} - ${project.type}`" 
          loading="lazy"
          width="640"
          height="400"
          class="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
        >
      </picture>
      
      <!-- Overlay Glass -->
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
        <div class="w-12 h-12 rounded-full bg-brand flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      
      <div class="absolute top-4 left-4">
        <span class="inline-block px-3 py-1 bg-black/60 text-white text-[10px] font-black uppercase tracking-widest rounded-full backdrop-blur-md border border-white/10">
          {{ project.type }}
        </span>
      </div>
    </div>
    
    <div class="p-8 flex-grow flex flex-col relative z-10">
      <h3 class="text-2xl font-black text-white mb-3 group-hover:text-brand transition-colors duration-300 tracking-tight">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow font-medium">
        {{ project.description }}
      </p>
      
      <div class="flex items-center text-white text-xs font-black uppercase tracking-widest mt-auto group/link">
        <span class="mr-2">{{ $t('portfolio.case_study') }}</span>
        <div class="w-8 h-[2px] bg-brand transform origin-left transition-transform duration-300 group-hover/link:scale-x-150"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: Object
})
defineEmits(['open'])
</script>

<style scoped>
.project-card {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.5),
    0 18px 36px -18px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 92, 0, 0.1);
}
</style>
