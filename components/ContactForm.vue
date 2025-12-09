<template>
  <form @submit.prevent="handleSubmit" class="bg-white/5 border border-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <!-- Name -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Seu Nome</label>
        <input 
          v-model="form.name"
          id="name" 
          type="text" 
          required 
          placeholder="Ex: João Silva"
          :aria-invalid="errors.name ? 'true' : 'false'"
          class="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
          :class="{'border-red-500': errors.name}"
        >
        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      </div>
      
      <!-- Company -->
      <div>
        <label for="company" class="block text-sm font-medium text-gray-300 mb-2">Nome do Negócio</label>
        <input 
          v-model="form.company"
          id="company" 
          type="text" 
          placeholder="Ex: Barbearia do João"
          class="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
        >
      </div>

      <!-- Phone -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">Seu WhatsApp</label>
        <input 
          v-model="form.phone"
          id="phone" 
          type="tel" 
          required 
          placeholder="(11) 99999-9999"
          :aria-invalid="errors.phone ? 'true' : 'false'"
          class="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
          :class="{'border-red-500': errors.phone}"
        >
        <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
      </div>

      <!-- Niche -->
      <div>
        <label for="niche" class="block text-sm font-medium text-gray-300 mb-2">Ramo de Atuação</label>
        <select 
          v-model="form.niche"
          id="niche" 
          class="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
        >
          <option value="" disabled>Selecione...</option>
          <option>Comércio Local</option>
          <option>Saúde / Estética</option>
          <option>Serviços Profissionais</option>
          <option>Alimentação / Delivery</option>
          <option>Infoproduto / Curso</option>
          <option>Outro</option>
        </select>
      </div>
    </div>

    <!-- Objective -->
    <div class="mb-6">
      <label for="objective" class="block text-sm font-medium text-gray-300 mb-2">O que você precisa?</label>
      <select 
        v-model="form.objective"
        id="objective" 
        class="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
      >
        <option value="Landing Page Simples">Landing Page Simples (Rápida)</option>
        <option value="Landing Page Profissional">Landing Page Profissional (Design Exclusivo)</option>
        <option value="Manutenção / Ajustes">Manutenção ou Ajustes</option>
        <option value="Apenas Dúvida">Apenas tirar uma dúvida</option>
      </select>
    </div>

    <!-- Message -->
    <div class="mb-8">
      <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Mensagem (Opcional)</label>
      <textarea 
        v-model="form.message"
        id="message" 
        rows="4" 
        placeholder="Descreva melhor seu projeto..."
        class="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cta focus:ring-1 focus:ring-cta transition-colors"
      ></textarea>
    </div>

    <!-- Success/Error Message -->
    <div 
      v-if="statusMessage" 
      role="alert" 
      aria-live="polite"
      class="mb-6 p-4 rounded-lg"
      :class="statusMessage.type === 'success' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'"
    >
      {{ statusMessage.text }}
    </div>

    <!-- Submit -->
    <button 
      type="submit" 
      :disabled="loading"
      class="submit-button w-full bg-cta text-primary-dark font-bold py-4 rounded-lg transition-all shadow-[0_4px_14px_0_rgba(255,204,0,0.39)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
    >
      <span v-if="!loading">Enviar Solicitação via WhatsApp</span>
      <span v-else>Processando...</span>
      <svg v-if="!loading" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const config = useRuntimeConfig()
// Garantir que whatsappNumber seja sempre uma string
const whatsappNumber = String(config.public.whatsappNumber || '5511999999999')

const loading = ref(false)
const statusMessage = ref(null)

const form = reactive({
  name: '',
  company: '',
  phone: '',
  niche: '',
  objective: 'Landing Page Simples',
  message: ''
})

const errors = reactive({
  name: '',
  phone: ''
})

/**
 * Valida formato de telefone brasileiro
 * Aceita: (11) 99999-9999 ou 11999999999
 */
const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 11
}

/**
 * Sanitiza input removendo caracteres potencialmente perigosos
 */
const sanitizeInput = (text) => {
  return text.replace(/[<>]/g, '').trim()
}

/**
 * Valida todos os campos do formulário
 */
const validateForm = () => {
  let isValid = true
  
  // Reset errors
  errors.name = ''
  errors.phone = ''
  
  // Validar nome
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Nome deve ter pelo menos 2 caracteres'
    isValid = false
  }
  
  // Validar telefone
  if (!validatePhone(form.phone)) {
    errors.phone = 'Telefone inválido. Use formato: (11) 99999-9999'
    isValid = false
  }
  
  return isValid
}

/**
 * Reseta o formulário para estado inicial
 */
const resetForm = () => {
  Object.assign(form, {
    name: '',
    company: '',
    phone: '',
    niche: '',
    objective: 'Landing Page Simples',
    message: ''
  })
}

function handleSubmit() {
  // Limpar mensagem anterior
  statusMessage.value = null
  
  // Validar formulário
  if (!validateForm()) {
    return
  }
  
  loading.value = true
  
  // Simular delay para UX
  setTimeout(() => {
    const success = sendToWhatsApp()
    loading.value = false
    
    if (success) {
      statusMessage.value = {
        type: 'success',
        text: '✓ Redirecionando para o WhatsApp...'
      }
      // Reset após 2 segundos
      setTimeout(() => {
        resetForm()
        statusMessage.value = null
      }, 2000)
    } else {
      statusMessage.value = {
        type: 'error',
        text: '✗ Erro ao abrir WhatsApp. Verifique se pop-ups estão permitidos.'
      }
    }
  }, 800)
}

function sendToWhatsApp() {
  try {
    // Sanitizar todos os inputs
    const safeName = sanitizeInput(form.name)
    const safeCompany = sanitizeInput(form.company)
    const safeMessage = sanitizeInput(form.message)
    
    const template = `Olá! Meu nome é *${safeName}*.
Sou do negócio: *${safeCompany || 'Não informado'}* (${form.niche || 'Nicho não inf.'}).
Gostaria de: *${form.objective}*.

*Contato:* ${form.phone}
*Mensagem:* ${safeMessage || 'Sem mensagem adicional.'}`

    const encoded = encodeURIComponent(template)
    const cleanNumber = whatsappNumber.replace(/\D/g, '')
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`
    
    // Tentar abrir popup
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    
    // Verificar se popup foi bloqueado
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      console.warn('Popup bloqueado pelo navegador')
      return false
    }
    
    return true
  } catch (error) {
    console.error('Erro ao abrir WhatsApp:', error)
    return false
  }
}
</script>

<style scoped>
input, select, textarea {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

input:focus, select:focus, textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 204, 0, 0.15);
}

.submit-button {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.02);
  background: #ffd700;
  box-shadow: 0 8px 25px rgba(255, 204, 0, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0) scale(0.98);
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  display: block;
}
</style>
