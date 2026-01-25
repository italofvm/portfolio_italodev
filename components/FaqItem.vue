<template>
  <div class="faq-item border-b border-white/5 last:border-0 overflow-hidden">
    <button 
      @click="toggle" 
      class="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
    >
      <span class="text-lg md:text-xl font-bold text-white group-hover:text-brand transition-colors duration-300 leading-tight pr-8">
        {{ question }}
      </span>
      <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 flex-shrink-0">
        <svg 
          :class="{'rotate-180': isOpen}" 
          class="w-4 h-4 md:w-5 md:h-5 transform transition-transform duration-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </button>
    <Transition name="accordion">
      <div 
        v-show="isOpen" 
        class="pb-6 md:pb-8 text-base md:text-lg text-gray-400 font-medium leading-relaxed pl-2 border-l-2 border-brand/20 ml-1"
      >
        {{ answer }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  question: String,
  answer: String
})

const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  max-height: 800px;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateX(-10px);
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 800px;
  transform: translateX(0);
}
</style>
