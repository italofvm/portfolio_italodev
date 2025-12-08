<template>
  <div class="testimonial-card bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 p-8 rounded-2xl relative hover-lift">
    <svg class="absolute top-6 left-6 w-10 h-10 text-white/10" fill="currentColor" viewBox="0 0 24 24">
       <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
    <p class="text-gray-300 relative z-10 italic mb-6 pt-8">
      "{{ text }}"
    </p>
    <div class="flex items-center">
      <div v-if="image" class="w-10 h-10 rounded-full bg-white/20 overflow-hidden mr-3">
        <img :src="image" alt="" class="w-full h-full object-cover">
      </div>
      <div v-else class="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold mr-3">
        {{ author.charAt(0) }}
      </div>
      <div>
        <h4 class="text-white font-bold">{{ author }}</h4>
        <p class="text-cta text-xs">{{ role }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: String,
  author: String,
  role: String,
  image: String
})
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  border-color: rgba(255, 204, 0, 0.2);
}
</style>
