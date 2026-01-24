<template>
  <div class="service-card group p-10 rounded-hyper bg-surface border border-white/5 hover:border-brand/40 transition-all duration-500 relative overflow-hidden h-full">
    <!-- Corner Signal -->
    <div class="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full translate-x-12 -translate-y-12 group-hover:scale-150 transition-transform duration-700"></div>

    <div class="w-16 h-16 rounded-modern bg-brand/10 flex items-center justify-center text-brand mb-8 group-hover:bg-brand group-hover:text-white transition-all duration-500 transform group-hover:rotate-[10deg]">
      <slot name="icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </slot>
    </div>
    
    <h3 class="text-3xl font-black text-white mb-4 tracking-tight">{{ title }}</h3>
    <p class="text-gray-400 leading-relaxed font-medium group-hover:text-gray-200 transition-colors duration-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
.service-card {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 138, 0, 0.1);
}
</style>
