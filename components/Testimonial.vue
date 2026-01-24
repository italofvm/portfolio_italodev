<template>
  <div class="testimonial-card bg-surface border border-white/5 p-10 rounded-hyper relative overflow-hidden group">
    <!-- Kinetic Decorator -->
    <div class="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-700"></div>

    <svg class="absolute top-8 left-8 w-12 h-12 text-brand/10 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" fill="currentColor" viewBox="0 0 24 24">
       <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
    </svg>
    
    <p class="text-xl text-gray-300 relative z-10 italic mb-10 pt-12 font-medium leading-[1.6]">
      "{{ text }}"
    </p>

    <div class="flex items-center relative z-10 border-t border-white/5 pt-8">
      <div v-if="image" class="w-14 h-14 rounded-full border-2 border-brand/20 overflow-hidden mr-4">
        <img :src="image" alt="" class="w-full h-full object-cover">
      </div>
      <div v-else class="w-14 h-14 rounded-full bg-brand/10 border border-brand/20 text-brand flex items-center justify-center font-black text-xl mr-4 group-hover:bg-brand group-hover:text-white transition-all duration-500">
        {{ author.charAt(0) }}
      </div>
      <div>
        <h4 class="text-white font-black text-lg tracking-tight">{{ author }}</h4>
        <p class="text-brand font-bold text-sm uppercase tracking-widest">{{ role }}</p>
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
.testimonial-card {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 
    0 30px 60px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 92, 0, 0.1);
}
</style>
