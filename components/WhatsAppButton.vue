<template>
  <a
    :href="whatsappLink"
    target="_blank"
    rel="noopener noreferrer"
    class="whatsapp-button fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center group"
    :class="{ 'opacity-50 cursor-not-allowed': whatsappLink === '#' }"
    :aria-label="whatsappLink === '#' ? 'WhatsApp não configurado' : 'Fale conosco no WhatsApp'"
    :aria-disabled="whatsappLink === '#'"
  >
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      class="w-8 h-8"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    <div class="absolute right-full mr-3 bg-white text-gray-800 px-3 py-1 rounded shadow-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
      {{ whatsappLink === '#' ? 'WhatsApp não configurado' : 'Fale Conosco' }}
    </div>
  </a>
</template>

<script setup>
const config = useRuntimeConfig()

/**
 * Valida e formata número de WhatsApp
 * @returns {string} Link válido do WhatsApp ou '#' se inválido
 */
const getWhatsAppLink = () => {
  try {
    // Garantir que seja string e limpar
    const rawPhone = String(config.public.whatsappNumber || '')
    const cleanPhone = rawPhone.replace(/\D/g, '')
    
    // Validar formato (mínimo 10 dígitos, máximo 15)
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 15) {
      if (process.dev) {
        console.warn('⚠️ WhatsApp: Número inválido ou não configurado:', rawPhone)
      }
      return '#'
    }
    
    return `https://wa.me/${cleanPhone}`
  } catch (error) {
    if (process.dev) {
      console.error('❌ WhatsApp: Erro ao processar número:', error)
    }
    return '#'
  }
}

const whatsappLink = getWhatsAppLink()
</script>

<style scoped>
.whatsapp-button {
  animation: heartbeat 2s ease-in-out infinite;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.whatsapp-button:hover,
.whatsapp-button:focus-visible {
  transform: scale(1.15);
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
  animation: none;
}

.whatsapp-button:focus-visible {
  outline: 2px solid rgba(37, 211, 102, 0.6);
  outline-offset: 2px;
}

.whatsapp-button:active {
  transform: scale(1.05);
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  10%, 30% {
    transform: scale(1.08);
  }
  20%, 40% {
    transform: scale(1);
  }
}
</style>
