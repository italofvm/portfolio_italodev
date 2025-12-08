<template>
  <div class="faq-item border-b border-white/10 last:border-0">
    <button 
      @click="toggle" 
      class="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
    >
      <span class="text-lg font-medium text-white group-hover:text-cta transition-colors">{{ question }}</span>
      <span class="ml-4 flex-shrink-0 text-highlight">
        <svg 
          :class="{'rotate-180': isOpen}" 
          class="w-6 h-6 transform transition-transform duration-200" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </button>
    <Transition name="accordion">
      <div 
        v-show="isOpen" 
        class="pb-6 text-gray-400 leading-relaxed"
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
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 500px;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
  transform: translateY(-10px);
}

.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
}
</style>
