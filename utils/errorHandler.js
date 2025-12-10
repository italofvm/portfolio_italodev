// utils/errorHandler.js
export class AppError extends Error {
  constructor(message, statusCode = 500, isOperational = true) {
    super(message)
    this.statusCode = statusCode
    this.isOperational = isOperational
    this.timestamp = new Date().toISOString()
    
    Error.captureStackTrace(this, this.constructor)
  }
}

export const errorHandler = {
  // Log de erros (em produção, enviar para serviço de monitoramento)
  logError(error, context = {}) {
    const errorLog = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context,
      userAgent: process.client ? navigator.userAgent : 'server',
      url: process.client ? window.location.href : 'server'
    }
    
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Error Log:', errorLog)
    } else {
      // Em produção: enviar para Sentry, LogRocket, etc.
      // this.sendToMonitoring(errorLog)
    }
  },

  // Handler global para erros não capturados
  handleGlobalError(error, errorInfo) {
    this.logError(error, { type: 'global', errorInfo })
    
    // Notificar usuário de forma amigável
    if (process.client) {
      this.showUserFriendlyError()
    }
  },

  // Feedback amigável para o usuário
  showUserFriendlyError(message = 'Ops! Algo deu errado. Tente novamente em alguns instantes.') {
    if (process.client) {
      // Implementar toast/notification
      console.warn('User Error:', message)
    }
  },

  // Validação robusta de formulários
  validateContactForm(data) {
    const errors = {}
    
    // Nome
    if (!data.name || data.name.trim().length < 2) {
      errors.name = 'Nome deve ter pelo menos 2 caracteres'
    }
    
    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Email inválido'
    }
    
    // Telefone brasileiro
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/
    if (data.phone && !phoneRegex.test(data.phone)) {
      errors.phone = 'Formato: (11) 99999-9999'
    }
    
    // Mensagem
    if (!data.message || data.message.trim().length < 10) {
      errors.message = 'Mensagem deve ter pelo menos 10 caracteres'
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    }
  }
}

// Plugin para capturar erros Vue
export const errorPlugin = {
  install(app) {
    app.config.errorHandler = (error, instance, info) => {
      errorHandler.handleGlobalError(error, { instance, info })
    }
  }
}