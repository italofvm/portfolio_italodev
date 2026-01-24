<template>
  <footer class="bg-primary-dark pt-32 pb-16 border-t border-white/5">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-white text-2xl font-black tracking-tighter">
          ITALO <span class="text-brand">VIEIRA</span>
        </div>
        
        <div class="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <a href="#servicos" class="hover:text-brand transition-colors">Serviços</a>
          <a href="#portfolio" class="hover:text-brand transition-colors">Portfólio</a>
          <a href="#contato" class="hover:text-brand transition-colors">Contato</a>
        </div>
      </div>
      
      <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
        <p class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          © {{ new Date().getFullYear() }} <span class="text-white">ITALO VIEIRA</span>. ALL RIGHTS RESERVED.
        </p>
        <p class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          BUILT BY <span class="text-brand">HIGH-PERFORMANCE ARCHITECT</span>
        </p>
      </div>
    </div>
  </footer>
</template>

