import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useAnimations = () => {
  const initHeroAnimations = () => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({ delay: 0.3 })
      
      // Badge
      tl.from('.hero-badge', {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'back.out(1.7)'
      })
      
      // Título com stagger nas palavras
      tl.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3')
      
      // Subtítulo
      tl.from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.5')
      
      // Botões com stagger
      tl.from('.hero-buttons > *', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      }, '-=0.4')

      // Parallax suave no background glow
      gsap.to('.hero-glow-1', {
        y: -50,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      })

      gsap.to('.hero-glow-2', {
        y: -30,
        scrollTrigger: {
          trigger: '.hero-section',
          start: 'top top',
          end: 'bottom top',
          scrub: 2
        }
      })
    }
  }

  const initServiceCardsAnimation = () => {
    if (typeof window !== 'undefined') {
      gsap.from('.service-card', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
          once: true
        }
      })
    }
  }

  const initProjectCardsAnimation = () => {
    if (typeof window !== 'undefined') {
      gsap.from('.project-card', {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%',
          once: true
        }
      })
    }
  }

  const initSectionTitles = () => {
    if (typeof window !== 'undefined') {
      gsap.utils.toArray('.section-title').forEach((title: any) => {
        gsap.from(title, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: title,
            start: 'top 85%',
            once: true
          }
        })
      })
    }
  }

  const initTestimonials = () => {
    if (typeof window !== 'undefined') {
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 40,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 80%',
          once: true
        }
      })
    }
  }

  const initFaqItems = () => {
    if (typeof window !== 'undefined') {
      gsap.from('.faq-item', {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-container',
          start: 'top 80%',
          once: true
        }
      })
    }
  }

  const initContactSection = () => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#contato',
          start: 'top 70%',
          once: true
        }
      })

      tl.from('.contact-title', {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from('.contact-subtitle', {
        opacity: 0,
        x: -30,
        duration: 0.7,
        ease: 'power2.out'
      }, '-=0.5')
      .from('.contact-info > *', {
        opacity: 0,
        x: -20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out'
      }, '-=0.4')
      .from('.contact-form', {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.8')
    }
  }

  const initFooter = () => {
    if (typeof window !== 'undefined') {
      gsap.from('.footer-content', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 90%',
          once: true
        }
      })
    }
  }

  return {
    initHeroAnimations,
    initServiceCardsAnimation,
    initProjectCardsAnimation,
    initSectionTitles,
    initTestimonials,
    initFaqItems,
    initContactSection,
    initFooter
  }
}
