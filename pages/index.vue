<template>
  <div class="relative">
    <!-- Navbar -->
    <nav 
      class="fixed font-sans top-0 w-full z-40 transition-all duration-300 border-b border-transparent"
      :class="{'bg-primary-dark/90 backdrop-blur-md border-white/10 py-4': scrolled, 'py-6 bg-transparent': !scrolled}"
    >
      <div class="container mx-auto px-4 flex justify-between items-center">
        <div class="text-2xl font-bold tracking-tighter text-white">
          Italo <span class="text-cta">Vieira</span>
        </div>
        
        <div class="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          <a href="#servicos" class="hover:text-white transition-colors">Serviços</a>
          <a href="#portfolio" class="hover:text-white transition-colors">Portfólio</a>
          <a href="#depoimentos" class="hover:text-white transition-colors">Clientes</a>
          <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
        </div>

        <a 
          href="#contato" 
          class="hidden md:block px-5 py-2 rounded-full border border-cta text-cta hover:bg-cta hover:text-primary-dark transition-all font-bold text-sm"
        >
          Falar no WhatsApp
        </a>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white" @click="mobileMenuOpen = !mobileMenuOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-primary-dark border-b border-white/10 p-4 flex flex-col space-y-4 shadow-xl">
        <a href="#servicos" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-white">Serviços</a>
        <a href="#portfolio" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-white">Portfólio</a>
        <a href="#depoimentos" @click="mobileMenuOpen = false" class="text-gray-300 hover:text-white">Clientes</a>
        <a href="#contato" @click="mobileMenuOpen = false" class="text-cta font-bold">Falar no WhatsApp</a>
      </div>
    </nav>

    <Hero />

    <!-- Services Section -->
    <section id="servicos" class="py-20 bg-primary-dark relative">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="section-title text-3xl md:text-5xl font-bold text-white mb-4">Como posso ajudar?</h2>
          <p class="section-subtitle text-gray-400 max-w-2xl mx-auto">Soluções completas para colocar seu negócio na internet com profissionalismo.</p>
        </div>
        
        <div class="services-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Criação de Sites" 
            description="Landing pages focadas em conversão, sites institucionais e portfólios modernos."
          >
             <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
             </template>
          </ServiceCard>
          
          <ServiceCard 
            title="Manutenção e SEO" 
            description="Ajustes em sites existentes, otimização de velocidade e melhorias para o Google."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </template>
          </ServiceCard>

          <ServiceCard 
            title="Hospedagem & Domínio" 
            description="Configuração completa do seu domínio e hospedagem segura (Vercel/Netlify)."
          >
            <template #icon>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </template>
          </ServiceCard>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-20 bg-black/20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="section-badge text-cta font-bold tracking-widest text-sm uppercase">Portfólio</span>
          <h2 class="section-title text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Projetos Recentes</h2>
          <p class="section-subtitle text-gray-400 max-w-2xl mx-auto">Confira alguns trabalhos desenvolvidos para diferentes nichos de mercado.</p>
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
    <section id="depoimentos" class="py-20 bg-primary-dark">
      <div class="container mx-auto px-4">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">O que dizem os clientes</h2>
        
        <div class="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimonial 
            text="Simplesmente incrível! A landing page da minha barbearia ficou pronta em 3 dias e já aumentou meus agendamentos."
            author="Marcos Silva"
            role="Barbearia Viking"
          />
          <Testimonial 
            text="Entendeu exatamente o que eu precisava. O cardápio digital é rápido e meus clientes adoraram."
            author="Ana Paula"
            role="The Grill"
          />
          <Testimonial 
            text="Profissionalismo nota 10. O site ficou elegante e superou minhas expectativas. Recomendo muito!"
            author="Dra. Juliana"
            role="Clínica Renovare"
          />
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section id="faq" class="py-20 bg-black/20">
      <div class="container mx-auto px-4 max-w-3xl">
        <h2 class="section-title text-3xl md:text-4xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
        <div class="faq-container space-y-4">
          <FaqItem 
            question="Quanto tempo leva para criar um site?" 
            answer="Uma Landing Page Simples geralmente fica pronta em 3 a 5 dias úteis. Projetos mais complexos podem levar de 10 a 15 dias."
          />
          <FaqItem 
            question="Preciso pagar mensalidade?" 
            answer="Não! Eu entrego o site pronto. Você paga apenas o desenvolvimento e, se necessário, custos anuais de domínio (aprox. R$ 40/ano). Hospedagem simples eu configuro gratuitamente."
          />
          <FaqItem 
            question="O site funciona no celular?" 
            answer="Sim, 100% responsivo. Desenvolvo pensando primeiro na experiência mobile, já que a maioria dos acessos vem pelo celular."
          />
          <FaqItem 
            question="Como funciona o pagamento?" 
            answer="Geralmente 50% no início para reservar a data e 50% na entrega do projeto aprovado."
          />
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contato" class="py-20 bg-primary-dark relative overflow-hidden">
      <!-- Decorator -->
      <div class="absolute right-0 bottom-0 pointer-events-none opacity-20 transform translate-x-1/2 translate-y-1/2">
        <div class="w-[500px] h-[500px] bg-accent blur-[100px] rounded-full"></div>
      </div>

      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="contact-title text-4xl md:text-6xl font-bold text-white mb-6">Vamos tirar sua ideia do papel?</h2>
            <p class="contact-subtitle text-xl text-gray-300 mb-8">
              Preencha o formulário ao lado e receba uma proposta personalizada diretamente no seu WhatsApp. Sem compromisso!
            </p>
            
            <div class="contact-info space-y-4">
              <div class="flex items-center text-gray-300">
                <span class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 text-cta">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>italo_dev@email.com</span>
              </div>
              <div class="flex items-center text-gray-300">
                <span class="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mr-4 text-cta">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </span>
                <span>(11) 99999-9999</span>
              </div>
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
      :isOpen="modalOpen" 
      :project="selectedProject" 
      @close="closeProjectModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from '~/data/projects'
// Auto-imported components by Nuxt

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const modalOpen = ref(false)
const selectedProject = ref(null)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const openProjectModal = (project) => {
  selectedProject.value = project
  modalOpen.value = true
}

const closeProjectModal = () => {
  modalOpen.value = false
  selectedProject.value = null
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Inicializar animações
onMounted(() => {
  if (process.client) {
    const { 
      initServiceCardsAnimation,
      initProjectCardsAnimation,
      initSectionTitles,
      initTestimonials,
      initFaqItems,
      initContactSection,
      initFooter
    } = useAnimations()

    // Pequeno delay para garantir que o DOM está pronto
    setTimeout(() => {
      initSectionTitles()
      initServiceCardsAnimation()
      initProjectCardsAnimation()
      initTestimonials()
      initFaqItems()
      initContactSection()
      initFooter()
    }, 100)
  }
})

// SEO
useHead({
  title: 'Italo Vieira | Desenvolvedor Frontend & Landing Pages',
  meta: [
    { name: 'description', content: 'Crio sites profissionais, rápidos e otimizados para converter visitantes em clientes. Portfólio de Italo Vieira.' }
  ]
})
</script>

<style scoped>
/* Estilos específicos da página */
</style>
