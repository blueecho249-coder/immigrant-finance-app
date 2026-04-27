import { Link } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector.jsx'
import SEO from '../components/SEO.jsx'
import { useState, useEffect, useRef } from 'react'
import { Book, Globe, Calculator, Users } from 'lucide-react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

export default function LandingPage({ language, onLanguageChange }) {
  console.log('📄 LandingPage component rendered - language:', language)
  
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShownExitPopup) {
        setShowExitPopup(true)
        setHasShownExitPopup(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShownExitPopup])

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animated counter component
  function AnimatedCounter({ value, suffix = '' }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    const count = useMotionValue(0)
    const rounded = useTransform(count, latest => {
      if (value.includes('.')) {
        return latest.toFixed(1)
      }
      return Math.round(latest).toLocaleString()
    })

    useEffect(() => {
      if (isInView) {
        const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''))
        const controls = animate(count, numericValue, {
          duration: 1.5,
          ease: 'easeOut'
        })
        return controls.stop
      }
    }, [isInView, value, count])

    return (
      <span ref={ref}>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    )
  }

  const content = {
    en: {
      title: "Build Your Financial Future in North America",
      subtitle: "Master essential money skills designed specifically for newcomers to Canada and the US",
      cta: "Start Learning Free",
      secondaryCta: "View Lessons",
      features: [
        {
          title: "20 Expert-Led Lessons",
          description: "Comprehensive courses covering banking, credit, taxes, and more",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        {
          title: "Learn in Your Language", 
          description: "Available in 8 languages including Spanish, Hindi, and Tagalog",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 8 15.75m0 0c.09.01.19.01.28 0" />
            </svg>
          )
        },
        {
          title: "Practical Tools",
          description: "Financial calculators and templates for real-world application",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        {
          title: "Community Support",
          description: "Join thousands of newcomers on the same financial journey",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ],
      stats: [
        { number: "10,000+", label: "Newcomers Helped" },
        { number: "4.8/5", label: "Average Rating" },
        { number: "8", label: "Languages Available" },
        { number: "20", label: "Expert Lessons" }
      ],
      testimonials: [
        {
          name: "Priya S.",
          location: "India → Toronto",
          text: "This app helped me understand credit scores in Canada in Hindi. Life changing!",
          rating: 5
        },
        {
          name: "Maria R.",
          location: "Philippines → Vancouver",
          text: "Finally an app that explains banking in Tagalog. My whole family uses it now.",
          rating: 5
        },
        {
          name: "Ahmed K.",
          location: "Egypt → Calgary",
          text: "The budget calculator helped me save my first $1000 in Canada.",
          rating: 5
        }
      ],
      trust: "Join 10,000+ newcomers building financial confidence",
      exitPopup: {
        title: "Wait! Your Financial Journey Starts Here",
        subtitle: "Don't miss this opportunity to learn essential money skills that will help you succeed in North America",
        cta: "Continue Learning"
      }
    },
    es: {
      title: "Construye Tu Futuro Financiero en América del Norte",
      subtitle: "Domina habilidades esenciales de dinero diseñadas específicamente para recién llegados a Canadá y EE. UU.",
      cta: "Comenzar Aprender Gratis",
      secondaryCta: "Ver Lecciones",
      features: [
        {
          title: "20 Lecciones con Expertos",
          description: "Cursos integrales que cubren banca, crédito, impuestos y más",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        {
          title: "Aprende en tu Idioma",
          description: "Disponible en 8 idiomas incluyendo español, hindi y tagalo",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 8 15.75m0 0c.09.01.19.01.28 0" />
            </svg>
          )
        },
        {
          title: "Herramientas Prácticas",
          description: "Calculadoras financieras y plantillas para aplicación real",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        {
          title: "Apoyo Comunitario",
          description: "Únete a miles de recién llegados en el mismo viaje financiero",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ],
      stats: [
        { number: "10,000+", label: "Recién Llegados Ayudados" },
        { number: "4.8/5", label: "Calificación Promedio" },
        { number: "8", label: "Idiomas Disponibles" },
        { number: "20", label: "Lecciones de Expertos" }
      ],
      testimonials: [
        {
          name: "Priya S.",
          location: "India → Toronto",
          text: "This app helped me understand credit scores in Canada in Hindi. Life changing!",
          rating: 5
        },
        {
          name: "Maria R.",
          location: "Philippines → Vancouver",
          text: "Finally an app that explains banking in Tagalog. My whole family uses it now.",
          rating: 5
        },
        {
          name: "Ahmed K.",
          location: "Egypt → Calgary",
          text: "The budget calculator helped me save my first $1000 in Canada.",
          rating: 5
        }
      ],
      trust: "Únete a más de 10,000 recién llegados construyendo confianza financiera",
      exitPopup: {
        title: "¡Espera! Tu Viaje Financiero Comienza Aquí",
        subtitle: "No te pierdas esta oportunidad de aprender habilidades esenciales de dinero que te ayudarán a tener éxito en América del Norte",
        cta: "Continuar Aprendiendo"
      }
    },
    hi: {
      title: "उत्तरी अमेरिका में अपना वित्तीय भविष्य बनाएं",
      subtitle: "कनाडा और यूएस में नए आने वालों के लिए विशेष रूप से डिज़ाइन की गई आवश्यक धन कौशल में महारत हासिल करें",
      cta: "मुफ्त में सीखना शुरू करें",
      secondaryCta: "पाठ देखें",
      features: [
        {
          title: "20 विशेषज्ञ-नेतृत्व वाले पाठ",
          description: "बैंकिंग, क्रेडिट, टैक्स और अधिक को कवर करने वाले व्यापक कोर्स",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          )
        },
        {
          title: "अपनी भाषा में सीखें",
          description: "स्पैनिश, हिंदी और टैगालोग सहित 8 भाषाओं में उपलब्ध",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 8 15.75m0 0c.09.01.19.01.28 0" />
            </svg>
          )
        },
        {
          title: "व्यावहारिक उपकरण",
          description: "वास्तविक दुनिया अनुप्रयोग के लिए वित्तीय कैलकुलेटर और टेम्पलेट",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          )
        },
        {
          title: "सामुदायिक समर्थन",
          description: "उसी वित्तीय यात्रा पर हजारों नए आने वालों के साथ शामिल हों",
          icon: (
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        }
      ],
      stats: [
        { number: "10,000+", label: "नए आने वालों की मदद की" },
        { number: "4.8/5", label: "औसत रेटिंग" },
        { number: "8", label: "उपलब्ध भाषाएं" },
        { number: "20", label: "विशेषज्ञ पाठ" }
      ],
      testimonials: [
        {
          name: "Priya S.",
          location: "India → Toronto",
          text: "This app helped me understand credit scores in Canada in Hindi. Life changing!",
          rating: 5
        },
        {
          name: "Maria R.",
          location: "Philippines → Vancouver",
          text: "Finally an app that explains banking in Tagalog. My whole family uses it now.",
          rating: 5
        },
        {
          name: "Ahmed K.",
          location: "Egypt → Calgary",
          text: "The budget calculator helped me save my first $1000 in Canada.",
          rating: 5
        }
      ],
      trust: "10,000+ नए आने वालों के साथ वित्तीय आत्मविश्वास बनाने में शामिल हों",
      exitPopup: {
        title: "रुकिए! आपका वित्तीय यात्रा यहां शुरू होती है",
        subtitle: "उत्तरी अमेरिका में सफल होने में मदद करने वाले आवश्यक धन कौशल सीखने का अवसर न चूकें",
        cta: "सीखना जारी रखें"
      }
    }
  }

  const t = content[language] || content.en

  return (
    <>
      <SEO 
        title="NewStart Finance — Financial Literacy for Newcomers | Learn Banking, Credit"
        description="Learn financial literacy for newcomers to Canada and USA. Master banking, credit, housing, taxes, and saving with free expert-led courses in 8 languages. Start your financial journey today."
        keywords="financial literacy, newcomer finance, Canada banking, US credit, housing, taxes, saving, immigrant finance, financial education, multilingual finance, expert-led courses"
        canonicalUrl="https://newstart-finance.com"
        ogImage="https://newstart-finance.com/og-home.jpg"
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-teal-50">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="mx-auto max-w-phone px-4 sm:px-5">
          <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
            <div className="sticky top-0 z-40">
              <motion.div
                initial={{ y: 0 }}
                animate={{
                  boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : '0 0 0 0 rgba(0, 0, 0, 0)'
                }}
                transition={{ duration: 0.3 }}
                className="gradient-header px-4 py-4 sm:px-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h1 className="text-xl font-bold text-white">NewFinance</h1>
                  </div>
                  <LanguageSelector onLanguageChange={onLanguageChange} />
                </div>
              </motion.div>
            </div>
            
            <main className="flex-1 overflow-y-auto">
              <div className="px-4 py-8 sm:px-5">
                {/* Hero Section */}
                <div className="text-center mb-12 bg-gradient-to-br from-purple-600 to-teal-500 -mx-4 sm:mx-0 px-4 py-12 sm:px-5 sm:py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-8"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="mx-auto h-24 w-24 rounded-3xl gradient-header flex items-center justify-center mb-8 shadow-2xl"
                    >
                      <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="mb-6 text-5xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
                    >
                      Build Your <span className="text-yellow-300">Financial</span> Future in North America
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="mb-10 text-xl sm:text-2xl text-white/90 leading-relaxed max-w-lg mx-auto font-medium"
                    >
                      {t.subtitle}
                    </motion.p>
                  </motion.div>

                  {/* Stats Section */}
                  <div className="mb-12 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    {t.stats.map((stat, index) => {
                      const colors = index === 0 ? { gradient: 'from-purple-500 to-indigo-600', bg: 'bg-purple-50', border: 'border-purple-200' } :
                                   index === 1 ? { gradient: 'from-teal-500 to-emerald-600', bg: 'bg-teal-50', border: 'border-teal-200' } :
                                   index === 2 ? { gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200' } :
                                   { gradient: 'from-blue-500 to-cyan-600', bg: 'bg-blue-50', border: 'border-blue-200' }
                      const suffix = stat.number.includes('+') ? '+' : stat.number.includes('/') ? '/5' : ''
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className={`bg-white rounded-3xl p-5 shadow-xl ${colors.border} border-l-4 overflow-hidden flex flex-col justify-center items-center min-h-[100px]`}
                        >
                          <div className="text-2xl sm:text-3xl font-extrabold text-center leading-tight">
                            <AnimatedCounter value={stat.number} suffix={suffix} />
                          </div>
                          <div className="text-sm sm:text-base text-gray-500 font-semibold text-center leading-tight mt-1">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </div>

                  {/* Main CTA */}
                  <div className="mb-8 space-y-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="space-y-3"
                    >
                      <motion.div
                        whileHover={{ y: -4, scale: 1.03, boxShadow: "0 20px 40px -10px rgba(147, 51, 234, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Link
                          to="/learn"
                          className="block w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white text-lg py-4 px-6 rounded-xl shadow-xl hover:opacity-90 transition-all"
                        >
                          {t.cta}
                          <svg className="ml-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </motion.div>
                      <motion.div
                        whileHover={{ y: -4, scale: 1.03, boxShadow: "0 20px 40px -10px rgba(20, 184, 166, 0.3)" }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <Link
                          to="/learn"
                          className="block w-full border-2 border-purple-500 text-purple-600 text-lg py-4 px-6 rounded-xl hover:bg-purple-50 transition-all"
                        >
                          {t.secondaryCta}
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Trust Badge */}
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-8 py-4 border-2 border-green-200 shadow-lg">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg font-bold text-green-800">100% Free • No Credit Card Required</span>
                    </div>
                  </div>
                </div>

                {/* Features Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16 mt-16"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-10 text-center text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
                  >
                    Everything You Need to <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Succeed</span>
                  </motion.h2>
                  <div className="grid gap-6">
                    {t.features.map((feature, index) => {
                      const iconComponents = [Book, Globe, Calculator, Users]
                      const bgColors = ['bg-purple-100 text-purple-600', 'bg-teal-100 text-teal-600', 'bg-orange-100 text-orange-600', 'bg-blue-100 text-blue-600']
                      const IconComponent = iconComponents[index]
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                          className="card p-6 hover:shadow-2xl hover:shadow-purple-500/20 transition-all bg-white border-2 border-gray-200 cursor-pointer"
                        >
                          <div className="flex items-start gap-4">
                            <motion.div
                              whileHover={{ scale: 1.1, y: -4 }}
                              transition={{ type: "spring", stiffness: 500, damping: 20 }}
                              className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center ${bgColors[index]} shadow-lg`}
                            >
                              <IconComponent className="w-6 h-6" />
                            </motion.div>
                            <div className="flex-1">
                              <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                              <p className="text-gray-800 leading-relaxed font-medium">{feature.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="mb-20 mt-20"
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="mb-12 text-center text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
                  >
                    <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Success</span> Stories
                  </motion.h2>
                  <div className="space-y-6">
                    {t.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6 border-2 border-indigo-200"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
                              <span className="text-white font-bold text-lg">
                                {testimonial.name.charAt(0)}
                              </span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                  </svg>
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-900 font-bold mb-2">"{testimonial.text}"</p>
                            <div className="text-sm text-gray-700">
                              <div className="font-bold">{testimonial.name}</div>
                              <div>{testimonial.location}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Final CTA Section */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                    <h2 className="mb-4 text-3xl font-bold">
                      Start Your Financial Journey Today
                    </h2>
                    <p className="mb-6 text-lg text-white/95 max-w-md mx-auto font-medium">
                      {t.trust}
                    </p>
                    <Link
                      to="/learn"
                      className="inline-block bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
                    >
                      {t.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50/80 via-purple-50/50 to-teal-50/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left mb-8 lg:mb-0">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-8 text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 leading-[1.1] tracking-tight"
                >
                  Build Your <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Financial</span> Future in North America
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-10 text-2xl lg:text-3xl text-gray-500 leading-relaxed max-w-2xl font-medium"
                >
                  {t.subtitle}
                </motion.p>

                {/* Stats Section */}
                <div className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
                  {t.stats.map((stat, index) => {
                    const colors = index === 0 ? { gradient: 'from-purple-500 to-indigo-600', bg: 'bg-purple-50', border: 'border-purple-200' } :
                                   index === 1 ? { gradient: 'from-teal-500 to-emerald-600', bg: 'bg-teal-50', border: 'border-teal-200' } :
                                   index === 2 ? { gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200' } :
                                   { gradient: 'from-blue-500 to-cyan-600', bg: 'bg-blue-50', border: 'border-blue-200' }
                    const suffix = stat.number.includes('+') ? '+' : stat.number.includes('/') ? '/5' : ''
                    
                    return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className={`bg-white rounded-3xl p-8 shadow-xl ${colors.border} border-l-4 overflow-hidden flex flex-col justify-center items-center min-h-[120px] hover:shadow-2xl transition-shadow duration-300`}
                        >
                          <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight bg-gradient-to-r ${colors.gradient} bg-clip-text text-transparent">
                            <AnimatedCounter value={stat.number} suffix={suffix} />
                          </div>
                          <div className="text-base md:text-lg text-gray-500 font-semibold text-center leading-tight mt-2">{stat.label}</div>
                        </motion.div>
                      )
                    })}
                  </div>

                {/* Main CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="mb-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      to="/learn"
                      className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-teal-500 text-white text-xl font-bold py-5 px-10 rounded-2xl shadow-2xl shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300"
                    >
                      {t.cta}
                      <svg className="ml-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Link
                      to="/learn"
                      className="inline-flex items-center justify-center bg-white text-gray-700 text-xl font-bold py-5 px-10 rounded-2xl border-2 border-gray-200 shadow-xl hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
                    >
                      {t.secondaryCta}
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Trust Badge */}
                <div className="mb-12">
                  <div className="inline-flex items-center gap-3 rounded-full bg-green-100 px-8 py-4 border-2 border-green-200 shadow-lg">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-lg font-bold text-green-700">100% Free • No Credit Card Required</span>
                  </div>
                </div>
              </div>

              {/* Right Content - App Mockup */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="relative mx-auto max-w-md">
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-teal-500/30 rounded-[3rem] blur-3xl"></div>
                  {/* Phone Frame */}
                  <motion.div 
                    className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-xl"></div>
                    <div className="bg-white rounded-2xl overflow-hidden relative">
                      {/* App Header */}
                      <div className="gradient-header px-4 py-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h1 className="text-xl font-bold text-white">NewFinance</h1>
                          </div>
                          <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm"></div>
                        </div>
                      </div>
                      
                      {/* App Content */}
                      <div className="p-4 space-y-4">
                        <div className="text-center">
                          <div className="mx-auto h-16 w-16 rounded-2xl gradient-header flex items-center justify-center mb-4">
                            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h2 className="text-lg font-bold text-gray-900 mb-2">Welcome to NewFinance</h2>
                          <p className="text-sm text-gray-600 mb-4">Start your financial journey today</p>
                          <div className="bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold">Get Started</div>
                        </div>
                        
                        {/* Sample Lesson Cards */}
                        <div className="space-y-3">
                          <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                                <span className="text-indigo-600 font-bold text-sm">1</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 text-sm">Banking Basics</h3>
                                <p className="text-xs text-gray-600">Learn how to open an account</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-xl p-3 border border-gray-200">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 font-bold text-sm">2</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 text-sm">Credit Score</h3>
                                <p className="text-xs text-gray-600">Build and maintain good credit</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Nav */}
                      <div className="border-t border-gray-200 px-4 py-2">
                        <div className="flex justify-around">
                          <div className="h-8 w-8 rounded-lg bg-indigo-100"></div>
                          <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                          <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                          <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                          <div className="h-8 w-8 rounded-lg bg-gray-200"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Features Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-28 mb-28"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16 text-center text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
              >
                Everything You Need to <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Succeed</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.features.map((feature, index) => {
                  const colors = index === 0 ? { border: 'border-purple-500', bg: 'bg-purple-50', icon: 'text-purple-600' } :
                                   index === 1 ? { border: 'border-teal-500', bg: 'bg-teal-50', icon: 'text-teal-600' } :
                                   index === 2 ? { border: 'border-amber-500', bg: 'bg-amber-50', icon: 'text-amber-600' } :
                                   index === 3 ? { border: 'border-blue-500', bg: 'bg-blue-50', icon: 'text-blue-600' } :
                                   { border: 'border-green-500', bg: 'bg-green-50', icon: 'text-green-600' }
                  
                  const iconComponents = [Book, Globe, Calculator, Users]
                  const bgColors = ['bg-purple-100 text-purple-600', 'bg-teal-100 text-teal-600', 'bg-orange-100 text-orange-600', 'bg-blue-100 text-blue-600']
                  const IconComponent = iconComponents[index]
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      whileHover={{ y: -8, scale: 1.02, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                      className={`card p-6 hover:shadow-2xl hover:shadow-${colors.border.replace('border-', '')}/30 transition-all border-2 ${colors.border} cursor-pointer`}
                    >
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.1, y: -4 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          className={`w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full ${bgColors[index]} shadow-lg`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </motion.div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="mt-28 mb-28"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mb-16 text-center text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Success</span> Stories
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 border border-indigo-200"
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="h-16 w-16 rounded-full bg-indigo-600 flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-800 text-lg font-medium mb-4">"{testimonial.text}"</p>
                        <div className="text-gray-600">
                          <div className="font-semibold text-lg">{testimonial.name}</div>
                          <div>{testimonial.location}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Final CTA Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-3xl p-12 text-white shadow-2xl">
                <h2 className="mb-6 text-4xl font-bold">
                  Get Started For Free
                </h2>
                <p className="mb-8 text-xl opacity-90 max-w-2xl mx-auto">
                  Join thousands of newcomers building their financial future
                </p>
                <Link
                  to="/learn"
                  className="inline-block bg-white text-purple-600 font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popups - shown on both layouts */}
      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl">
            <div className="text-center mb-4">
              <div className="mx-auto h-12 w-12 rounded-2xl gradient-header flex items-center justify-center mb-3">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="mb-3 text-lg font-bold text-gray-900 text-center leading-tight">
              {t.exitPopup.title}
            </h3>
            <p className="mb-4 text-sm text-gray-600 text-center leading-relaxed">
              {t.exitPopup.subtitle}
            </p>
            <div className="flex gap-3">
              <Link
                to="/learn"
                className="flex-1 btn-primary text-sm py-2"
              >
                {t.exitPopup.cta}
              </Link>
              <button
                onClick={() => setShowExitPopup(false)}
                className="flex-1 btn-secondary text-sm py-2"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  )
}
