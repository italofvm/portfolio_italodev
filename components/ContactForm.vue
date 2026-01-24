<template>
  <form @submit.prevent="handleSubmit" class="bg-surface border border-white/5 p-10 rounded-hyper shadow-2xl relative overflow-hidden">
    <!-- Kinetic Decorator -->
    <div class="absolute -top-12 -right-12 w-32 h-32 bg-brand/10 rounded-full blur-2xl"></div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <!-- Name -->
      <div class="space-y-2">
        <label for="name" class="block text-xs font-black uppercase tracking-widest text-gray-500">Seu Nome</label>
        <input 
          v-model="form.name"
          id="name" 
          type="text" 
          required 
          placeholder="Ex: João Silva"
          :aria-invalid="errors.name ? 'true' : 'false'"
          class="w-full bg-white/[0.03] border border-white/10 rounded-modern px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300"
          :class="{'border-red-500': errors.name}"
        >
        <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
      </div>
      
      <!-- Company -->
      <div class="space-y-2">
        <label for="company" class="block text-xs font-black uppercase tracking-widest text-gray-500">Seu Negócio</label>
        <input 
          v-model="form.company"
          id="company" 
          type="text" 
          placeholder="Ex: Barbearia do João"
          class="w-full bg-white/[0.03] border border-white/10 rounded-modern px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300"
        >
      </div>

      <!-- Phone -->
      <div class="space-y-2">
        <label for="phone" class="block text-xs font-black uppercase tracking-widest text-gray-500">WhatsApp</label>
        <input 
          v-model="form.phone"
          id="phone" 
          type="tel" 
          required 
          placeholder="(11) 99999-9999"
          :aria-invalid="errors.phone ? 'true' : 'false'"
          class="w-full bg-white/[0.03] border border-white/10 rounded-modern px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300"
          :class="{'border-red-500': errors.phone}"
        >
        <p v-if="errors.phone" class="error-message">{{ errors.phone }}</p>
      </div>

      <!-- Niche -->
      <div class="space-y-2">
        <label for="niche" class="block text-xs font-black uppercase tracking-widest text-gray-500">Ramo</label>
        <select 
          v-model="form.niche"
          id="niche" 
          class="w-full bg-white/[0.03] border border-white/10 rounded-modern px-5 py-4 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300 appearance-none"
        >
          <option value="" disabled class="bg-surface">Selecione...</option>
          <option class="bg-surface">Comércio Local</option>
          <option class="bg-surface">Saúde / Estética</option>
          <option class="bg-surface">Serviços Profissionais</option>
          <option class="bg-surface">Alimentação / Delivery</option>
          <option class="bg-surface">Infoproduto / Curso</option>
          <option class="bg-surface">Outro</option>
        </select>
      </div>
    </div>

    <!-- Objective -->
    <div class="mb-8 space-y-2">
      <label for="objective" class="block text-xs font-black uppercase tracking-widest text-gray-500">Objetivo Principal</label>
      <select 
        v-model="form.objective"
        id="objective" 
        class="w-full bg-white/[0.03] border border-white/10 rounded-modern px-5 py-[18px] text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300 appearance-none"
      >
        <option value="Landing Page Simples" class="bg-surface">Landing Page Simples (Rápida)</option>
        <option value="Landing Page Profissional" class="bg-surface">Landing Page Profissional (Design Exclusivo)</option>
        <option value="Manutenção / Ajustes" class="bg-surface">Manutenção ou Ajustes</option>
        <option value="Apenas Dúvida" class="bg-surface">Apenas tirar uma dúvida</option>
      </select>
    </div>

    <!-- Message -->
    <div class="mb-10 space-y-2">
      <label for="message" class="block text-xs font-black uppercase tracking-widest text-gray-500">Briefing Rápido (Opcional)</label>
      <textarea 
        v-model="form.message"
        id="message" 
        rows="4" 
        placeholder="Descreva brevemente o que você tem em mente..."
        class="w-full bg-white/[0.03] border border-white/10 rounded-modern px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all duration-300 resize-none"
      ></textarea>
    </div>

    <!-- Success/Error Message -->
    <div 
      v-if="statusMessage" 
      role="alert" 
      aria-live="polite"
      class="mb-8 p-5 rounded-modern font-bold text-sm"
      :class="statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'"
    >
      {{ statusMessage.text }}
    </div>

    <!-- Submit -->
    <button 
      type="submit" 
      :disabled="loading"
      class="submit-button group relative w-full bg-brand text-white font-black py-5 rounded-modern transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(255,92,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 overflow-hidden"
    >
      <span v-if="!loading" class="relative z-10 flex items-center gap-2">
        RECEBER PROPOSTA NO WHATSAPP
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </span>
      <span v-else class="relative z-10">PROCESSANDO...</span>
      <!-- Layer de brilho -->
      <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
    </button>
  </form>
</template>

<script setup>
import { ref, reactive } from 'vue'

const config = useRuntimeConfig()
const whatsappNumber = String(config.public.whatsappNumber || '5561986021032')

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

const validatePhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '')
  return cleaned.length >= 10 && cleaned.length <= 11
}

const sanitizeInput = (text) => {
  return text.replace(/[<>]/g, '').trim()
}

const validateForm = () => {
  let isValid = true
  errors.name = ''
  errors.phone = ''
  
  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = 'Mínimo de 2 caracteres'
    isValid = false
  }
  
  if (!validatePhone(form.phone)) {
    errors.phone = 'Telefone inválido'
    isValid = false
  }
  
  return isValid
}

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
  statusMessage.value = null
  if (!validateForm()) return
  
  loading.value = true
  
  setTimeout(() => {
    const success = sendToWhatsApp()
    loading.value = false
    
    if (success) {
      statusMessage.value = {
        type: 'success',
        text: '✓ Redirecionando...'
      }
      setTimeout(() => {
        resetForm()
        statusMessage.value = null
      }, 2000)
    } else {
      statusMessage.value = {
        type: 'error',
        text: '✗ Tente novamente.'
      }
    }
  }, 800)
}

function sendToWhatsApp() {
  try {
    const safeName = sanitizeInput(form.name)
    const safeCompany = sanitizeInput(form.company)
    const safeMessage = sanitizeInput(form.message)
    
    const template = `Olá! Sou *${safeName}*.
Negócio: *${safeCompany || 'Não inf.'}* (${form.niche || 'Nicho não inf.'}).
Preciso de: *${form.objective}*.

*Contato:* ${form.phone}
*Mensagem:* ${safeMessage || 'Breve briefing enviado via site.'}`

    const encoded = encodeURIComponent(template)
    const cleanNumber = whatsappNumber.replace(/\D/g, '')
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`
    
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    return !!(popup && !popup.closed)
  } catch (error) {
    return false
  }
}
</script>

<style scoped>
input, select, textarea {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

input:focus, select:focus, textarea:focus {
  transform: scale(1.01);
  background: white/[0.05];
}

.error-message {
  color: #ef4444;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  margin-top: 0.5rem;
}
</style>
