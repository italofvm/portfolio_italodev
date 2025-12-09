<template>
  <picture>
    <source 
      v-if="sizes.mobile"
      media="(max-width: 640px)" 
      :srcset="`/assets/optimized/${imageName}-mobile.webp`"
      type="image/webp"
    >
    <source 
      v-if="sizes.tablet"
      media="(max-width: 1024px)" 
      :srcset="`/assets/optimized/${imageName}-tablet.webp`"
      type="image/webp"
    >
    <source 
      v-if="sizes.desktop"
      :srcset="`/assets/optimized/${imageName}-desktop.webp`"
      type="image/webp"
    >
    <img 
      :src="`/assets/optimized/${imageName}.webp`"
      :alt="alt"
      :loading="loading"
      :width="width"
      :height="height"
      :class="imgClass"
      :fetchpriority="fetchpriority"
    >
  </picture>
</template>

<script setup>
defineProps({
  imageName: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  imgClass: {
    type: String,
    default: ''
  },
  fetchpriority: {
    type: String,
    default: 'auto',
    validator: (value) => ['high', 'low', 'auto'].includes(value)
  },
  sizes: {
    type: Object,
    default: () => ({
      mobile: true,
      tablet: true,
      desktop: true
    })
  }
})
</script>
