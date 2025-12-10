// composables/useContact.js
export const useContact = () => {
  // Dados sensíveis vêm do servidor ou variáveis de ambiente
  const config = useRuntimeConfig()
  
  const contactInfo = computed(() => ({
    email: config.public.contactEmail || 'contato@exemplo.com',
    phone: config.public.contactPhone || '(61) 98602-1032',
    whatsapp: config.public.whatsappNumber || '5561986021032'
  }))

  // Sanitização de entrada para formulários
  const sanitizeInput = (input) => {
    return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  }

  // Validação de telefone brasileiro
  const validatePhone = (phone) => {
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/
    return phoneRegex.test(phone)
  }

  // Rate limiting para formulários (client-side básico)
  const rateLimiter = {
    attempts: 0,
    lastAttempt: 0,
    maxAttempts: 3,
    cooldown: 60000, // 1 minuto
    
    canSubmit() {
      const now = Date.now()
      if (now - this.lastAttempt > this.cooldown) {
        this.attempts = 0
      }
      return this.attempts < this.maxAttempts
    },
    
    recordAttempt() {
      this.attempts++
      this.lastAttempt = Date.now()
    }
  }

  return {
    contactInfo,
    sanitizeInput,
    validatePhone,
    rateLimiter
  }
}