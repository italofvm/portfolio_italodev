<template>
  <footer class="bg-primary-dark pt-32 pb-16 border-t border-white/5">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <div class="text-white text-2xl font-black tracking-tighter">
          ITALO <span class="text-brand">VIEIRA</span>
        </div>
        
        <div class="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
          <a href="#servicos" class="hover:text-brand transition-colors">{{ $t('nav.services') }}</a>
          <a href="#portfolio" class="hover:text-brand transition-colors">{{ $t('nav.portfolio') }}</a>
          <a href="#contato" class="hover:text-brand transition-colors">{{ $t('nav.badge') || 'CONTATO' }}</a>
        </div>
      </div>
      
      <div class="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
        <p class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          {{ $t('footer.rights') }}
        </p>
        <p class="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
          {{ $t('footer.built_with') }}
        </p>
      </div>
    </div>
  </footer>
</template>

