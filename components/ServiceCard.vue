<template>
  <div class="service-card group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cta/50 transition-all duration-300">
    <div class="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center text-highlight mb-6 group-hover:bg-cta group-hover:text-primary-dark transition-all duration-300">
      <slot name="icon">
        <!-- Default icon placeholder -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </slot>
    </div>
    <h3 class="text-2xl font-bold text-white mb-3">{{ title }}</h3>
    <p class="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
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
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.service-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 204, 0, 0.1);
}
</style>
