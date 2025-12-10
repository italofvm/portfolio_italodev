// composables/useNavigation.js
export const useNavigation = () => {
  const scrolled = ref(false)
  const mobileMenuOpen = ref(false)

  const navItems = [
    { href: '#servicos', label: 'Serviços', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
    { href: '#portfolio', label: 'Portfólio', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { href: '#depoimentos', label: 'Clientes', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { href: '#faq', label: 'FAQ', icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
  ]

  // Throttled scroll handler para performance
  let scrollTimeout = null
  const handleScroll = () => {
    if (scrollTimeout) return
    
    scrollTimeout = setTimeout(() => {
      scrolled.value = window.scrollY > 50
      scrollTimeout = null
    }, 16) // ~60fps
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    
    // Prevenir scroll quando menu aberto
    if (process.client) {
      document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : ''
    }
  }

  const closeMobileMenu = () => {
    mobileMenuOpen.value = false
    if (process.client) {
      document.body.style.overflow = ''
    }
  }

  const scrollToSection = (href) => {
    if (process.client) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    closeMobileMenu()
  }

  const scrollToTop = () => {
    if (process.client) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Cleanup automático
  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  })

  onUnmounted(() => {
    if (process.client) {
      window.removeEventListener('scroll', handleScroll)
      document.body.style.overflow = ''
    }
  })

  return {
    scrolled,
    mobileMenuOpen,
    navItems,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToSection,
    scrollToTop
  }
}