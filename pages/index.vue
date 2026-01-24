<template>
  <div class="relative bg-primary-dark select-none-desktop">
    <!-- Navbar Kinetic Precision -->
    <nav 
      role="navigation"
      aria-label="Menu principal"
      class="fixed font-sans top-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
      :class="scrolled ? 'bg-primary-dark/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'"
    >
      <div class="container mx-auto px-6 flex justify-between items-center">
        <a 
          ref="logoLink"
          href="#" 
          class="text-2xl font-black tracking-[calc(-0.05em)] text-white group flex items-center gap-2" 
          aria-label="Italo Vieira - Página inicial"
          @click.prevent="scrollToTop"
          @mousemove="handleMagneticLogo"
          @mouseleave="resetMagneticLogo"
        >
          <span class="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white text-xs transform group-hover:rotate-[360deg] transition-transform duration-700">IV</span>
          <span>ITALO <span class="text-brand">VIEIRA</span></span>
        </a>
        
        <div class="hidden lg:flex items-center space-x-12 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">
          <a href="#servicos" class="nav-link-new">Serviços</a>
          <a href="#portfolio" class="nav-link-new">Portfólio</a>
          <a href="#depoimentos" class="nav-link-new">Clientes</a>
          <a href="#faq" class="nav-link-new">FAQ</a>
        </div>

        <a 
          href="#contato" 
          class="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-brand hover:border-brand transition-all duration-500 font-black text-[10px] uppercase tracking-[0.2em] group"
        >
          FALAR NO WHATSAPP
          <div class="w-2 h-2 rounded-full bg-brand group-hover:bg-white animate-pulse"></div>
        </a>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden text-white p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all duration-300" 
          @click="toggleMobileMenu"
          :aria-expanded="mobileMenuOpen"
          aria-label="Menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 transition-transform duration-500" 
            :class="{ 'rotate-180': mobileMenuOpen }"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 8h16M4 16h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Otimizado Cinético -->
      <Transition 
        @enter="onMobileMenuEnter"
        @leave="onMobileMenuLeave"
        :css="false"
      >
        <div 
          v-if="mobileMenuOpen" 
          class="lg:hidden absolute top-0 left-0 w-full h-screen bg-primary-dark/98 backdrop-blur-3xl z-[-1] flex flex-col justify-center items-center overflow-hidden"
        >
          <div class="container mx-auto px-8 flex flex-col space-y-8 items-center text-center">
            <a 
              v-for="(item, index) in navItems" 
              :key="item.href"
              :href="item.href" 
              @click="closeMobileMenu" 
              class="mobile-nav-item text-5xl font-black text-white hover:text-brand transition-colors tracking-tighter opacity-0"
            >
              {{ item.label }}
            </a>
            
            <a 
              href="#contato" 
              @click="closeMobileMenu"
              class="mobile-nav-item mt-12 px-8 py-4 bg-brand text-white font-black rounded-full opacity-0"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Main Content -->
    <main id="main-content">
      <Hero />

      <!-- Services Section -->
      <section id="servicos" class="py-32 bg-primary-dark relative overflow-hidden" aria-labelledby="services-heading">
        <div class="container mx-auto px-6">
          <div class="section-reveal grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end opacity-0">
            <div class="lg:col-span-6">
              <span class="text-brand font-black text-xs uppercase tracking-[0.3em] mb-4 block">Especialidades</span>
              <h2 id="services-heading" class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                COMO POSSO <br/> <span class="text-brand">IMPUSIONAR</span> <br/> SEU NEGÓCIO.
              </h2>
            </div>
            <div class="lg:col-span-6 lg:pb-4">
              <p class="text-lg text-gray-500 font-medium max-w-lg">
                Focado em performance e design minimalista, entrego soluções que não apenas parecem bonitas, mas funcionam como máquinas de venda.
              </p>
            </div>
          </div>
          
          <div class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              v-for="(service, index) in services" 
              :key="index"
              class="service-item opacity-0 translate-y-12"
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
      <section id="portfolio" class="py-32 bg-[#080808] border-y border-white/5" aria-labelledby="portfolio-heading">
        <div class="container mx-auto px-6">
          <div class="section-reveal flex flex-col md:flex-row justify-between items-end mb-24 gap-8 opacity-0">
            <div class="max-w-2xl">
              <span class="text-brand font-black text-xs uppercase tracking-[0.3em] mb-4 block">Cases de Sucesso</span>
              <h2 id="portfolio-heading" class="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
                ESTÉTICA EM <br/> <span class="text-brand">MOVIMENTO</span>.
              </h2>
            </div>
            <div class="pb-2">
               <a href="#contato" class="text-xs font-black text-white uppercase tracking-widest flex items-center gap-3 group border-b border-brand pb-2">
                 COMEÇAR MEU PROJETO
                 <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                 </svg>
               </a>
            </div>
          </div>

          <div class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <ProjectCard 
              v-for="project in projects" 
              :key="project.id" 
              class="project-item opacity-0 scale-95"
              :project="project"
              @open="openProjectModal"
            />
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section id="depoimentos" class="py-32 bg-primary-dark" aria-labelledby="testimonials-heading">
        <div class="container mx-auto px-6">
          <div class="section-reveal max-w-3xl mb-24 opacity-0">
            <span class="text-brand font-black text-xs uppercase tracking-[0.3em] mb-4 block">Social Proof</span>
            <h2 id="testimonials-heading" class="text-5xl md:text-6xl font-black text-white tracking-tighter leading-[0.9]">
              O QUE MEUS <br/> PARCEIROS <span class="text-brand">DIZEM</span>.
            </h2>
          </div>
          
          <div class="testimonials-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial 
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="testimonial-item opacity-0 translate-x-8"
              :text="testimonial.text"
              :author="testimonial.author"
              :role="testimonial.role"
            />
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section id="faq" class="py-32 bg-[#080808] border-t border-white/5" aria-labelledby="faq-heading">
        <div class="container mx-auto px-6 max-w-4xl">
          <div class="section-reveal text-center mb-24 opacity-0">
            <span class="text-brand font-black text-xs uppercase tracking-[0.3em] mb-4 block">Transparência</span>
            <h2 id="faq-heading" class="text-5xl md:text-6xl font-black text-white tracking-tighter">FAQ.</h2>
          </div>
          <div class="faq-list space-y-0">
            <FaqItem 
              v-for="(faq, index) in faqs"
              :key="index"
              class="faq-item-anim opacity-0 translate-y-4"
              :question="faq.question" 
              :answer="faq.answer"
            />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contato" class="py-32 bg-primary-dark relative overflow-hidden" aria-labelledby="contact-heading">
        <div class="absolute -bottom-24 -left-24 w-[50vw] h-[50vw] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div class="container mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div class="contact-info-col lg:col-span-12 xl:col-span-5 opacity-0">
              <span class="text-brand font-black text-xs uppercase tracking-[0.3em] mb-4 block">Contato</span>
              <h2 id="contact-heading" class="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-10">
                VAMOS <br/> <span class="text-brand">CRIAR</span> <br/> ALGO REAL.
              </h2>
              
              <div class="space-y-6 pt-10 border-t border-white/5 max-w-lg">
                <div v-for="benefit in contactBenefits" :key="benefit.title" class="flex gap-6 group">
                  <div class="w-12 h-12 rounded-modern bg-brand/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" :d="benefit.icon" />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-lg font-black text-white mb-1 tracking-tight">{{ benefit.title }}</h4>
                    <p class="text-gray-500 font-medium text-sm leading-relaxed">{{ benefit.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-form-col lg:col-span-12 xl:col-span-7 opacity-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>

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
import { ref, onMounted, onUnmounted } from 'vue'
import { animate, inView, stagger } from 'motion'
import { projects } from '~/data/projects'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const modalOpen = ref(false)
const selectedProject = ref(null)
const logoLink = ref(null)

const handleMagneticLogo = (e) => {
  const { currentTarget: target, clientX, clientY } = e
  const { left, top, width, height } = target.getBoundingClientRect()
  const x = clientX - (left + width / 2)
  const y = clientY - (top + height / 2)
  animate(target, { x: x * 0.3, y: y * 0.3 }, { easing: spring({ stiffness: 200, damping: 20 }) })
}

const resetMagneticLogo = () => {
  animate(logoLink.value, { x: 0, y: 0 }, { easing: spring({ stiffness: 200, damping: 20 }) })
}

const navItems = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Portfólio' },
  { href: '#depoimentos', label: 'Clientes' },
  { href: '#faq', label: 'FAQ' }
]

const services = [
  {
    title: 'Landing Pages',
    description: 'Interfaces de alto impacto focadas em tração imediata e ROI.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Brand Experience',
    description: 'Sistemas de design que transformam sua identidade em presença digital.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18'
  },
  {
    title: 'Speed & SEO',
    description: 'Otimização radical para Google e carregamento instantâneo.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
]

const testimonials = [
  { text: 'A landing page triplicou nossos agendamentos no primeiro mês. Design impecável.', author: 'Marcos Silva', role: 'Barbearia Viking' },
  { text: 'Entrega rápida e estética diferenciada. Superou todas as expectativas.', author: 'Ana Paula', role: 'The Grill' },
  { text: 'Profissional raro. Design limpo mas com uma força visual impressionante.', author: 'Dra. Juliana', role: 'Clínica Renovare' }
]

const faqs = [
  { question: 'Qual o tempo de entrega?', answer: 'Landing Pages de alto impacto são entregues em 3 a 5 dias úteis.' },
  { question: 'Como funciona o suporte?', answer: 'Ofereço monitoramento ativo nos primeiros 30 dias após o lançamento.' },
  { question: 'O site será meu?', answer: 'Sim, o código e o domínio são 100% de sua propriedade. Sem taxas ocultas.' }
]

const contactBenefits = [
  { title: 'Entrega Ágil', desc: 'Seu projeto no ar em menos de uma semana.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Foco em Vendas', desc: 'Cada pixel é pensado para converter o lead.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' }
]

const handleScroll = () => { scrolled.value = window.scrollY > 50 }
const toggleMobileMenu = () => { mobileMenuOpen.value = !mobileMenuOpen.value }
const closeMobileMenu = () => { mobileMenuOpen.value = false }
const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

const onMobileMenuEnter = async (el, done) => {
  const springOptions = { duration: 0.8, easing: [0.16, 1, 0.3, 1] }
  
  // Background reveal
  animate(el, { opacity: [0, 1] }, { duration: 0.5 })
  
  // Staggered items
  animate(".mobile-nav-item", { 
    opacity: [0, 1], 
    y: [40, 0],
    scale: [0.9, 1]
  }, { 
    delay: stagger(0.08),
    ...springOptions
  })
  
  done()
}

const onMobileMenuLeave = async (el, done) => {
  await animate(el, { opacity: 0 }, { duration: 0.5 }).finished
  done()
}

const openProjectModal = (project) => {
  selectedProject.value = project
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeProjectModal = () => {
  modalOpen.value = false
  selectedProject.value = null
  document.body.style.overflow = ''
}

onMounted(() => { 
  window.addEventListener('scroll', handleScroll, { passive: true }) 

  // Kinetic Scroll Reveals Logic
  const springConfig = { duration: 0.8, easing: [0.16, 1, 0.3, 1] }

  // Generic section headers reveal
  inView(".section-reveal", (info) => {
    animate(info.target, { opacity: 1, y: [40, 0] }, springConfig)
  }, { margin: "0px 0px -100px 0px" })

  // Staggered Grids
  inView(".services-grid", (info) => {
    animate(".service-item", { opacity: 1, y: 0 }, { delay: stagger(0.1, { start: 0.2 }), ...springConfig })
  })

  inView(".projects-grid", (info) => {
    animate(".project-item", { opacity: 1, scale: 1 }, { delay: stagger(0.1, { start: 0.2 }), ...springConfig })
  })

  inView(".testimonials-grid", (info) => {
    animate(".testimonial-item", { opacity: 1, x: 0 }, { delay: stagger(0.1, { start: 0.2 }), ...springConfig })
  })

  inView(".faq-list", (info) => {
    animate(".faq-item-anim", { opacity: 1, y: 0 }, { delay: stagger(0.05, { start: 0.1 }), ...springConfig })
  })

  inView("#contato", (info) => {
    animate(".contact-info-col", { opacity: 1, x: [-40, 0] }, springConfig)
    animate(".contact-form-col", { opacity: 1, x: [40, 0] }, { ...springConfig, delay: 0.2 })
  })
})

onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Italo Vieira | High-Performance Digital Architect",
  "image": "https://italovdev.vercel.app/og-image.jpg",
  "url": "https://italovdev.vercel.app",
  "telephone": "+5561986021032",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brasília",
    "addressRegion": "DF",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -15.7942,
    "longitude": -47.8822
  },
  "sameAs": [
    "https://linkedin.com/in/italovdev",
    "https://github.com/italovdev"
  ],
  "description": "Desenvolvedor Full-stack e Designer de Interfaces focado em alta performance e estética radical."
}

useHead({
  title: 'Italo Vieira | High-Performance Digital Architect & Developer',
  meta: [
    { name: 'description', content: 'Transformando negócios através de design radical e engenharia de software de alta performance. Especialista em Landing Pages e Sistemas Web escaláveis.' },
    { name: 'keywords', content: 'freelance software engineer, high performance web, digital architect, design radical, conversion focused websites' },
    // GEO / AI Specific
    { name: 'abstract', content: 'Digital architecture and high-end software development by Italo Vieira.' },
    { name: 'topic', content: 'Software Engineering and Digital Design' },
    { name: 'summary', content: 'Portfolio of Italo Vieira, showcasing high-performance digital solutions and radical aesthetic design.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd)
    }
  ]
})
</script>

<style scoped>
.nav-link-new {
  @apply relative transition-colors duration-500 hover:text-white;
}
.nav-link-new::after {
  content: '';
  @apply absolute -bottom-1 left-0 w-0 h-[2px] bg-brand transition-all duration-500 opacity-0;
}
.nav-link-new:hover::after {
  @apply w-full opacity-100;
}

.mobile-menu-enter-active, .mobile-menu-leave-active { transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1); }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; }

.select-none-desktop {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

::selection {
  background: theme('colors.brand');
  color: white;
}
</style>
