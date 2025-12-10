// data/content.js - Centralizando todo conteúdo
export const services = [
  {
    id: 'criacao-sites',
    title: 'Criação de Sites',
    description: 'Landing pages focadas em conversão, sites institucionais e portfólios modernos.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    features: ['Responsivo', 'SEO Otimizado', 'Alta Performance'],
    priceRange: 'R$ 800 - R$ 2.500'
  },
  {
    id: 'manutencao-seo',
    title: 'Manutenção e SEO',
    description: 'Ajustes em sites existentes, otimização de velocidade e melhorias para o Google.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    features: ['Auditoria SEO', 'Otimização Performance', 'Correções'],
    priceRange: 'R$ 300 - R$ 800'
  },
  {
    id: 'hospedagem-dominio',
    title: 'Hospedagem & Domínio',
    description: 'Configuração completa do seu domínio e hospedagem segura (Vercel/Netlify).',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    features: ['SSL Gratuito', 'CDN Global', 'Backup Automático'],
    priceRange: 'R$ 200 - R$ 500'
  }
]

export const testimonials = [
  {
    id: 1,
    text: 'Simplesmente incrível! A landing page da minha barbearia ficou pronta em 3 dias e já aumentou meus agendamentos.',
    author: 'Marcos Silva',
    role: 'Barbearia Viking',
    rating: 5,
    date: '2024-01-15',
    verified: true
  },
  {
    id: 2,
    text: 'Entendeu exatamente o que eu precisava. O cardápio digital é rápido e meus clientes adoraram.',
    author: 'Ana Paula',
    role: 'The Grill',
    rating: 5,
    date: '2024-02-20',
    verified: true
  },
  {
    id: 3,
    text: 'Profissionalismo nota 10. O site ficou elegante e superou minhas expectativas. Recomendo muito!',
    author: 'Dra. Juliana',
    role: 'Clínica Renovare',
    rating: 5,
    date: '2024-03-10',
    verified: true
  }
]

export const faqs = [
  {
    id: 1,
    question: 'Quanto tempo leva para criar um site?',
    answer: 'Uma Landing Page Simples geralmente fica pronta em 3 a 5 dias úteis. Projetos mais complexos podem levar de 10 a 15 dias.',
    category: 'prazo',
    priority: 1
  },
  {
    id: 2,
    question: 'Preciso pagar mensalidade?',
    answer: 'Não! Eu entrego o site pronto. Você paga apenas o desenvolvimento e, se necessário, custos anuais de domínio (aprox. R$ 40/ano). Hospedagem simples eu configuro gratuitamente.',
    category: 'pagamento',
    priority: 1
  },
  {
    id: 3,
    question: 'O site funciona no celular?',
    answer: 'Sim, 100% responsivo. Desenvolvo pensando primeiro na experiência mobile, já que a maioria dos acessos vem pelo celular.',
    category: 'tecnico',
    priority: 2
  },
  {
    id: 4,
    question: 'Como funciona o pagamento?',
    answer: 'Geralmente 50% no início para reservar a data e 50% na entrega do projeto aprovado.',
    category: 'pagamento',
    priority: 2
  }
]

// Schema.org estruturado
export const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Italo Vieira',
  jobTitle: 'Desenvolvedor Web Freelancer',
  description: 'Especialista em criação de landing pages e sites de alta conversão',
  url: 'https://italovdev.vercel.app/',
  knowsAbout: ['Web Development', 'Landing Pages', 'Vue.js', 'Nuxt.js', 'SEO'],
  offers: services.map(service => ({
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'Person',
      name: 'Italo Vieira'
    }
  }))
}