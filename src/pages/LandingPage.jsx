import { Link } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector.jsx'
import { useState, useEffect } from 'react'

export default function LandingPage({ language, onLanguageChange }) {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [hasShownExitPopup, setHasShownExitPopup] = useState(false)

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
          icon: "📚"
        },
        {
          title: "Learn in Your Language", 
          description: "Available in 8 languages including Spanish, Hindi, and Tagalog",
          icon: "🌍"
        },
        {
          title: "Practical Tools",
          description: "Financial calculators and templates for real-world application",
          icon: "🔧"
        },
        {
          title: "Community Support",
          description: "Join thousands of newcomers on the same financial journey",
          icon: "👥"
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
          name: "Maria Rodriguez",
          location: "Toronto, Canada",
          text: "This platform helped me understand Canadian banking. I finally built my credit score!",
          rating: 5
        },
        {
          name: "Raj Patel",
          location: "New York, USA", 
          text: "The tax basics section saved me thousands. Clear, simple, and in my language.",
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
          icon: "📚"
        },
        {
          title: "Aprende en tu Idioma",
          description: "Disponible en 8 idiomas incluyendo español, hindi y tagalo",
          icon: "🌍"
        },
        {
          title: "Herramientas Prácticas",
          description: "Calculadoras financieras y plantillas para aplicación real",
          icon: "🔧"
        },
        {
          title: "Apoyo Comunitario",
          description: "Únete a miles de recién llegados en el mismo viaje financiero",
          icon: "👥"
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
          name: "Ana García",
          location: "Toronto, Canadá",
          text: "Esta plataforma me ayudó a entender la banca canadiense. ¡Finalmente construí mi puntaje de crédito!",
          rating: 5
        },
        {
          name: "Carlos Méndez",
          location: "Nueva York, EE. UU.",
          text: "La sección de impuestos básicos me ahorró miles. Claro, simple y en mi idioma.",
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
          icon: "📚"
        },
        {
          title: "अपनी भाषा में सीखें",
          description: "स्पैनिश, हिंदी और टैगालोग सहित 8 भाषाओं में उपलब्ध",
          icon: "🌍"
        },
        {
          title: "व्यावहारिक उपकरण",
          description: "वास्तविक दुनिया अनुप्रयोग के लिए वित्तीय कैलकुलेटर और टेम्पलेट",
          icon: "🔧"
        },
        {
          title: "सामुदायिक समर्थन",
          description: "उसी वित्तीय यात्रा पर हजारों नए आने वालों के साथ शामिल हों",
          icon: "👥"
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
          name: "प्रिया शर्मा",
          location: "टोरंटो, कनाडा",
          text: "इस प्लेटफॉर्म ने मुझे कनाडाई बैंकिंग समझने में मदद की। मैंने आखिरकार अपना क्रेडिट स्कोर बनाया!",
          rating: 5
        },
        {
          name: "राहुल वर्मा",
          location: "न्यूयॉर्क, यूएस",
          text: "टैक्स बेसिक्स सेक्शन ने मुझे हजारों बचाए। स्पष्ट, सरल, और मेरी भाषा में।",
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="mx-auto max-w-phone px-4 sm:px-5">
          <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
            <div className="sticky top-0 z-40">
              <div className="gradient-header px-4 py-4 sm:px-5">
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
              </div>
            </div>
            
            <main className="flex-1 overflow-y-auto">
              <div className="px-4 py-8 sm:px-5">
                {/* Hero Section */}
                <div className="text-center mb-12">
                  <div className="mb-8">
                    <div className="mx-auto h-24 w-24 rounded-3xl gradient-header flex items-center justify-center mb-8 shadow-2xl">
                      <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold text-gray-900 sm:text-6xl leading-tight">
                      {t.title}
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 leading-relaxed max-w-lg mx-auto">
                      {t.subtitle}
                    </p>
                  </div>

                  {/* Stats Section */}
                  <div className="mb-10 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                    {t.stats.map((stat, index) => (
                      <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-center items-center min-h-[80px]">
                        <div className="text-lg md:text-xl font-bold text-indigo-600 text-center leading-tight">{stat.number}</div>
                        <div className="text-xs md:text-sm text-gray-600 font-medium text-center leading-tight mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Main CTA */}
                  <div className="mb-8 space-y-3">
                    <Link
                      to="/learn"
                      className="block w-full btn-primary text-lg py-4 shadow-xl"
                    >
                      {t.cta}
                    </Link>
                    <Link
                      to="/learn"
                      className="block w-full btn-secondary text-lg py-4"
                    >
                      {t.secondaryCta}
                    </Link>
                  </div>

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

                {/* Features Section */}
                <div className="mb-12">
                  <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                    Everything You Need to Succeed
                  </h2>
                  <div className="grid gap-6">
                    {t.features.map((feature, index) => (
                      <div key={index} className="card p-6 hover:shadow-xl transition-all">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 h-16 w-16 rounded-2xl gradient-header flex items-center justify-center shadow-lg">
                            <span className="text-2xl">{feature.icon}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonials Section */}
                <div className="mb-12">
                  <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                    Success Stories
                  </h2>
                  <div className="space-y-6">
                    {t.testimonials.map((testimonial, index) => (
                      <div key={index} className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-6 border border-indigo-200">
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
                            <p className="text-gray-800 font-medium mb-2">"{testimonial.text}"</p>
                            <div className="text-sm text-gray-600">
                              <div className="font-semibold">{testimonial.name}</div>
                              <div>{testimonial.location}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Final CTA Section */}
                <div className="text-center mb-8">
                  <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                    <h2 className="mb-4 text-3xl font-bold">
                      Start Your Financial Journey Today
                    </h2>
                    <p className="mb-6 text-lg opacity-90 max-w-md mx-auto">
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
        <div className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <h1 className="mb-6 text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  {t.title}
                </h1>
                <p className="mb-8 text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                  {t.subtitle}
                </p>

                {/* Stats Section */}
                <div className="mb-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
                  {t.stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden flex flex-col justify-center items-center min-h-[100px]">
                      <div className="text-xl md:text-2xl lg:text-3xl font-bold text-indigo-600 text-center leading-tight">{stat.number}</div>
                      <div className="text-xs md:text-sm text-gray-600 font-medium text-center leading-tight mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Main CTA */}
                <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/learn"
                    className="btn-primary text-lg py-4 px-8 shadow-xl"
                  >
                    {t.cta}
                  </Link>
                  <Link
                    to="/learn"
                    className="btn-secondary text-lg py-4 px-8"
                  >
                    {t.secondaryCta}
                  </Link>
                </div>

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
              <div className="relative">
                <div className="relative mx-auto max-w-sm">
                  {/* Phone Frame */}
                  <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl">
                    <div className="bg-white rounded-2xl overflow-hidden">
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
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-20">
              <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
                Everything You Need to Succeed
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.features.map((feature, index) => (
                  <div key={index} className="card p-6 hover:shadow-xl transition-all">
                    <div className="text-center">
                      <div className="mx-auto h-20 w-20 rounded-2xl gradient-header flex items-center justify-center mb-6 shadow-lg">
                        <span className="text-3xl">{feature.icon}</span>
                      </div>
                      <h3 className="mb-4 text-xl font-bold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials Section */}
            <div className="mt-20">
              <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
                Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {t.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-2xl p-8 border border-indigo-200">
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
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA Section */}
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl">
                <h2 className="mb-6 text-4xl font-bold">
                  Start Your Financial Journey Today
                </h2>
                <p className="mb-8 text-xl opacity-90 max-w-2xl mx-auto">
                  {t.trust}
                </p>
                <Link
                  to="/learn"
                  className="inline-block bg-white text-indigo-600 font-bold py-4 px-12 rounded-xl text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
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
  )
}
