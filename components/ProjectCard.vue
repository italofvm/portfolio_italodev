<template>
  <div 
    @click="$emit('open', project)"
    class="project-card group cursor-pointer bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cta/50 transition-all duration-300 flex flex-col h-full"
  >
    <div class="relative overflow-hidden aspect-video">
      <img 
        :src="project.image" 
        :alt="`Projeto ${project.title} - ${project.type}`" 
        loading="lazy"
        class="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-500"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-60"></div>
      
      <div class="absolute bottom-4 left-4">
        <span class="inline-block px-2 py-1 bg-accent/80 text-white text-xs font-bold rounded mb-1 backdrop-blur-md">
          {{ project.type }}
        </span>
      </div>
    </div>
    
    <div class="p-6 flex-grow flex flex-col">
      <h3 class="text-xl font-bold text-white mb-2 group-hover:text-cta transition-colors">
        {{ project.title }}
      </h3>
      <p class="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">
        {{ project.description }}
      </p>
      
      <div class="flex items-center text-highlight text-sm font-medium mt-auto">
        Ver Detalhes
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
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
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 204, 0, 0.15);
}
</style>
