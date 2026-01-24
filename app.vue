<template>
  <div class="bg-primary-dark min-h-screen text-white font-sans selection:bg-brand selection:text-white">
    <!-- Global Kinetic UX Layer -->
    <CustomCursor />
    <GrainOverlay />
    
    <NuxtPage />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  * {
    cursor: none !important;
  }
}

html {
  scroll-behavior: smooth;
  background-color: #050505;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
