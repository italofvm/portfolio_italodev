<template>
  <div class="relative">
    <!-- Navbar Otimizada com Transparência -->
    <nav 
      role="navigation"
      aria-label="Menu principal"
      class="fixed font-sans top-0 w-full z-50 transition-all duration-500 ease-out"
      :class="scrolled ? 'bg-primary-dark/70 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' : 'bg-transparent py-6'"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          class="text-2xl font-bold tracking-tighter text-white hover:scale-105 transition-transform duration-300" 
          aria-label="Italo Vieira - Página inicial"
          @click.prevent="scrollToTop"
        >
          Italo <span class="text-cta">Vieira</span>
        </a>
        
        <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#servicos" class="nav-link">Serviços</a>
          <a href="#portfolio" class="nav-link">Portfólio</a>
          <a href="#depoimentos" class="nav-link">Clientes</a>
          <a href="#faq" class="nav-link">FAQ</a>
        </div>

        <a 
          href="#contato" 
          class="hidden md:block px-5 py-2 rounded-full border-2 border-cta text-cta hover:bg-cta hover:text-primary-dark transition-all duration-300 font-bold text-sm hover:scale-105 hover:shadow-[0_0_20px_rgba(255,204,0,0.4)]"
        >
          Falar no WhatsApp
        </a>

        <!-- Mobile Menu Button -->
        <button 
          class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300" 
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Abrir menu de navegação"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 transition-transform duration-300" 
            :class="{ 'rotate-90': mobileMenuOpen }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Otimizado -->
      <Transition name="mobile-menu">
        <div 
          v-if="mobileMenuOpen" 
          class="md:hidden absolute top-full left-0 w-full bg-primary-dark/95 backdrop-blur-lg border-b border-white/10 shadow-2xl"
        >
          <div class="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.href"
              :href="item.href" 
              @click="closeMobileMenu" 
              class="mobile-nav-link"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <Hero />

    <!-- Services Section -->
    <section id="servicos" class="section-animate py-20 bg-primary-dark relative" aria-labelledby="services-heading">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 id="services-heading" class="section-title text-3xl md:text-5xl font-bold text-white mb-4">
            Como posso ajudar?
          </h2>
          <p class="section-subtitle text-gray-400 max-w-2xl mx-auto">
            Soluções completas para colocar seu negócio na internet com profissionalismo.
          </p>
        </div>
        
        <div class="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            v-for="(service, index) in services" 
            :key="index"
            :title="service.title" 
            :description="service.description"
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
              </svg>
            </template>
          </ServiceCard>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="section-animate py-20 bg-black/20" aria-labelledby="portfolio-heading">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="section-badge text-cta font-bold tracking-widest text-sm uppercase" aria-hidden="true">
            Portfólio
          </span>
          <h2 id="portfolio-heading" class="section-title text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
            Projetos Recentes
          </h2>
          <p class="section-subtitle text-gray-400 max-w-2xl mx-auto">
            Confira alguns trabalhos desenvolvidos para diferentes nichos de mercado.
          </p>
        </div>

        <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id" 
            :project="project"
            @open="openProjectModal"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="depoimentos" class="section-animate py-20 bg-primary-dark" aria-labelledby="testimonials-heading">
      <div class="container mx-auto px-4">
        <h2 id="testimonials-heading" class="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
          O que dizem os clientes
        </h2>
        
        <div class="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :text="testimonial.text"
            :author="testimonial.author"
            :role="testimonial.role"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="section-animate py-20 bg-black/20" aria-labelledby="faq-heading">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 id="faq-heading" class="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Perguntas Frequentes
        </h2>
        <div class="faq-container space-y-4">
          <FaqItem 
            v-for="(faq, index) in faqs"
            :key="index"
            :question="faq.question" 
            :answer="faq.answer"
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="section-animate py-20 bg-primary-dark relative overflow-hidden" aria-labelledby="contact-heading">
      <!-- Decorator -->
      <div class="absolute right-0 bottom-0 pointer-events-none opacity-20 transform translate-x-1/2 translate-y-1/2" aria-hidden="true">
        <div class="w-[500px] h-[500px] bg-accent blur-[100px] rounded-full"></div>
      </div>

      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <!-- Badge de Prova Social -->
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-cta/10 border border-cta/30 rounded-full mb-4 animate-pulse-soft">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-cta" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="text-cta font-bold text-sm">50+ Sites Entregues</span>
            </div>

            <h2 id="contact-heading" class="contact-title text-4xl md:text-6xl font-bold text-white mb-4">
              Seu Site Pronto em 5 Dias
            </h2>
            
            <p class="contact-subtitle text-lg text-gray-300 mb-6">
              Receba uma proposta personalizada em minutos, sem custo e sem compromisso:
            </p>
            
            <!-- Bullet Points Otimizados -->
            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cta flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">Proposta em 24h</h4>
                  <p class="text-gray-400 text-sm">Resposta rápida com preço e prazo definidos</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cta flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">Entrega em 3-5 dias</h4>
                  <p class="text-gray-400 text-sm">Seu site no ar mais rápido que a concorrência</p>
                </div>
              </div>

              <div class="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group">
                <div class="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-cta flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-white mb-1">Sem compromisso</h4>
                  <p class="text-gray-400 text-sm">Orçamento gratuito, você decide se aprova</p>
                </div>
              </div>
            </div>

            <!-- Elemento de Urgência -->
            <div class="flex items-center gap-2 text-sm text-gray-400 mb-6 animate-fade-in">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-cta animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Última proposta enviada há <strong class="text-white">2 horas</strong></span>
            </div>

            <!-- Contatos -->
            <div class="contact-info space-y-3 pt-6 border-t border-white/10">
              <a 
                :href="`mailto:${contactInfo.email}`" 
                class="flex items-center text-gray-300 hover:text-cta transition-colors duration-300 group text-sm"
                rel="noopener"
              >
                <span class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mr-3 text-cta group-hover:bg-cta/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>{{ contactInfo.email }}</span>
              </a>
              <a 
                :href="`tel:${contactInfo.phone.replace(/\D/g, '')}`" 
                class="flex items-center text-gray-300 hover:text-cta transition-colors duration-300 group text-sm"
                rel="noopener"
              >
                <span class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center mr-3 text-cta group-hover:bg-cta/20 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>{{ contactInfo.phone }}</span>
              </a>
            </div>
          </div>

          <div class="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>

    <TheFooter />
    <WhatsAppButton />
    
    <ProjectModal 
      v-if="modalOpen"
      :isOpen="modalOpen" 
      :project="selectedProject" 
      @close="closeProjectModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { projects } from '~/data/projects'

// Estado reativo
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const modalOpen = ref(false)
const selectedProject = ref(null)

// Dados estruturados (melhor para manutenção e segurança)
const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#depoimentos', label: 'Clientes' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contato', label: 'Falar no WhatsApp' }
]

const services = [
  {
    title: 'Criação de Sites',
    description: 'Landing pages focadas em conversão, sites institucionais e portfólios modernos.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Manutenção e SEO',
    description: 'Ajustes em sites existentes, otimização de velocidade e melhorias para o Google.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Hospedagem & Domínio',
    description: 'Configuração completa do seu domínio e hospedagem segura (Vercel/Netlify).',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01'
  }
]

const testimonials = [
  {
    text: 'Simplesmente incrível! A landing page da minha barbearia ficou pronta em 3 dias e já aumentou meus agendamentos.',
    author: 'Marcos Silva',
    role: 'Barbearia Viking'
  },
  {
    text: 'Entendeu exatamente o que eu precisava. O cardápio digital é rápido e meus clientes adoraram.',
    author: 'Ana Paula',
    role: 'The Grill'
  },
  {
    text: 'Profissionalismo nota 10. O site ficou elegante e superou minhas expectativas. Recomendo muito!',
    author: 'Dra. Juliana',
    role: 'Clínica Renovare'
  }
]

const faqs = [
  {
    question: 'Quanto tempo leva para criar um site?',
    answer: 'Uma Landing Page Simples geralmente fica pronta em 3 a 5 dias úteis. Projetos mais complexos podem levar de 10 a 15 dias.'
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer: 'Não! Eu entrego o site pronto. Você paga apenas o desenvolvimento e, se necessário, custos anuais de domínio (aprox. R$ 40/ano). Hospedagem simples eu configuro gratuitamente.'
  },
  {
    question: 'O site funciona no celular?',
    answer: 'Sim, 100% responsivo. Desenvolvo pensando primeiro na experiência mobile, já que a maioria dos acessos vem pelo celular.'
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Geralmente 50% no início para reservar a data e 50% na entrega do projeto aprovado.'
  }
]

const contactInfo = {
  email: 'italo_dev@email.com',
  phone: '(11) 99999-9999'
}

// Métodos otimizados
const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const openProjectModal = (project) => {
  if (!project) return
  selectedProject.value = project
  modalOpen.value = true
  // Prevenir scroll do body
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closeProjectModal = () => {
  modalOpen.value = false
  selectedProject.value = null
  // Restaurar scroll do body
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Cleanup: garantir que o scroll seja restaurado
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
})

// SEO Otimizado
useHead({
  title: 'Italo Vieira | Desenvolvedor Web & Landing Pages de Alta Conversão',
  meta: [
    { name: 'description', content: 'Desenvolvedor freelancer especializado em criar landing pages, sites institucionais e portfólios modernos. Projetos rápidos, otimizados para SEO e focados em conversão.' },
    { name: 'keywords', content: 'desenvolvedor web, landing page, criação de sites, freelancer, desenvolvedor frontend, sites responsivos, SEO, Nuxt, Vue' },
    { property: 'og:title', content: 'Italo Vieira | Desenvolvedor Web & Landing Pages' },
    { property: 'og:description', content: 'Crio sites profissionais, rápidos e otimizados para converter visitantes em clientes.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'pt_BR' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Italo Vieira | Desenvolvedor Web' },
    { name: 'twitter:description', content: 'Landing pages e sites profissionais focados em conversão' },
    { name: 'robots', content: 'index, follow' },
    { name: 'author', content: 'Italo Vieira' },
    { name: 'referrer', content: 'strict-origin-when-cross-origin' }
  ],
  link: [
    { rel: 'canonical', href: 'https://italovdev.vercel.app/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Italo Vieira',
        jobTitle: 'Desenvolvedor Web Freelancer',
        description: 'Especialista em criação de landing pages e sites de alta conversão',
        url: 'https://italovdev.vercel.app/',
        knowsAbout: ['Web Development', 'Landing Pages', 'Vue.js', 'Nuxt.js', 'SEO']
      })
    }
  ]
})
</script>

<style scoped>
/* Navbar Links com animação suave */
.nav-link {
  @apply relative hover:text-white transition-all duration-300;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-cta transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

/* Mobile menu transitions */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.mobile-nav-link {
  @apply text-gray-300 hover:text-cta transition-all duration-300 py-2 px-4 rounded-lg hover:bg-white/5;
  animation: slideInLeft 0.4s ease-out forwards;
  opacity: 0;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Animações suaves e otimizadas */
.section-animate {
  animation: fadeIn 0.8s ease-out forwards;
}

.section-title,
.section-subtitle {
  animation: fadeInUp 0.8s ease-out forwards;
}

.section-title {
  animation-delay: 0.1s;
}

.section-subtitle {
  animation-delay: 0.2s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger otimizado para cards */
.service-card:nth-child(1) { animation: fadeInUp 0.6s ease-out 0.2s forwards; opacity: 0; }
.service-card:nth-child(2) { animation: fadeInUp 0.6s ease-out 0.3s forwards; opacity: 0; }
.service-card:nth-child(3) { animation: fadeInUp 0.6s ease-out 0.4s forwards; opacity: 0; }

.project-card:nth-child(1) { animation: fadeInUp 0.6s ease-out 0.1s forwards; opacity: 0; }
.project-card:nth-child(2) { animation: fadeInUp 0.6s ease-out 0.2s forwards; opacity: 0; }
.project-card:nth-child(3) { animation: fadeInUp 0.6s ease-out 0.3s forwards; opacity: 0; }
.project-card:nth-child(4) { animation: fadeInUp 0.6s ease-out 0.4s forwards; opacity: 0; }
.project-card:nth-child(5) { animation: fadeInUp 0.6s ease-out 0.5s forwards; opacity: 0; }
.project-card:nth-child(6) { animation: fadeInUp 0.6s ease-out 0.6s forwards; opacity: 0; }

.testimonial-card:nth-child(1) { animation: fadeInUp 0.6s ease-out 0.2s forwards; opacity: 0; }
.testimonial-card:nth-child(2) { animation: fadeInUp 0.6s ease-out 0.3s forwards; opacity: 0; }
.testimonial-card:nth-child(3) { animation: fadeInUp 0.6s ease-out 0.4s forwards; opacity: 0; }

.faq-item { animation: fadeInUp 0.5s ease-out forwards; opacity: 0; }
.faq-item:nth-child(1) { animation-delay: 0.1s; }
.faq-item:nth-child(2) { animation-delay: 0.2s; }
.faq-item:nth-child(3) { animation-delay: 0.3s; }
.faq-item:nth-child(4) { animation-delay: 0.4s; }

.contact-title { animation: fadeInUp 0.8s ease-out 0.1s forwards; opacity: 0; }
.contact-subtitle { animation: fadeInUp 0.8s ease-out 0.2s forwards; opacity: 0; }
.contact-info { animation: fadeInUp 0.8s ease-out 0.3s forwards; opacity: 0; }
.contact-form { animation: fadeInUp 0.8s ease-out 0.4s forwards; opacity: 0; }

/* Performance: usar will-change apenas durante animação */
.section-animate,
.section-title,
.section-subtitle,
.service-card,
.project-card,
.testimonial-card,
.faq-item,
.contact-title,
.contact-subtitle,
.contact-info,
.contact-form {
  will-change: opacity, transform;
}

/* Remover will-change após animação */
@media (prefers-reduced-motion: no-preference) {
  .section-animate,
  .section-title,
  .section-subtitle,
  .service-card,
  .project-card,
  .testimonial-card,
  .faq-item,
  .contact-title,
  .contact-subtitle,
  .contact-info,
  .contact-form {
    animation-fill-mode: forwards;
  }
}

/* Animação de pulse suave para badge */
@keyframes pulse-soft {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.02);
  }
}

.animate-pulse-soft {
  animation: pulse-soft 3s ease-in-out infinite;
}

/* Fade in com delay para elemento de urgência */
.animate-fade-in {
  animation: fadeIn 1s ease-out 2s forwards;
  opacity: 0;
}

/* Respeitar preferência de movimento reduzido */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
