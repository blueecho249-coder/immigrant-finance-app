import { Link } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector.jsx'
import { useState, useEffect } from 'react'

export default function LandingPage({ language, onLanguageChange }) {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [showTimePopup, setShowTimePopup] = useState(false)
  const [hasShownTimePopup, setHasShownTimePopup] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true)
      }
    }

    const handleTimePopup = () => {
      if (!hasShownTimePopup) {
        const timer = setTimeout(() => {
          setShowTimePopup(true)
          setHasShownTimePopup(true)
        }, 15000)
        return () => clearTimeout(timer)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    const timeTimer = handleTimePopup()

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (timeTimer) timeTimer()
    }
  }, [hasShownTimePopup])

  const content = {
    en: {
      title: "Master Your Financial Future",
      subtitle: "Essential money skills for newcomers to Canada and the US",
      cta: "Start Learning Free",
      features: [
        "20 comprehensive lessons in your language",
        "Credit score building guide", 
        "Banking and tax basics",
        "Financial calculators and tools"
      ],
      trust: "Join 10,000+ newcomers building financial confidence",
      social: ["5,000+ reviews", "4.8/5 rating"],
      exitPopup: {
        title: "Wait! Don't miss this opportunity",
        subtitle: "Get started today and take control of your financial future",
        cta: "Continue Learning"
      },
      timePopup: {
        title: "Ready to take the next step?",
        subtitle: "Thousands have already started their journey to financial success",
        cta: "Start Now"
      }
    },
    es: {
      title: "Domina Tu Futuro Financiero",
      subtitle: "Habilidades esenciales de dinero para recién llegados a Canadá y EE. UU.",
      cta: "Comenzar Aprender Gratis",
      features: [
        "20 lecciones integrales en tu idioma",
        "Guía para construir crédito",
        "Conceptos bancarios y fiscales básicos",
        "Calculadoras y herramientas financieras"
      ],
      trust: "Únete a más de 10,000 recién llegados construyendo confianza financiera",
      social: ["5,000+ reseñas", "4.8/5 calificación"],
      exitPopup: {
        title: "¡Espera! No te pierdas esta oportunidad",
        subtitle: "Comienza hoy y toma el control de tu futuro financiero",
        cta: "Continuar Aprendiendo"
      },
      timePopup: {
        title: "¿Listo para dar el siguiente paso?",
        subtitle: "Miles ya han comenzado su camino hacia el éxito financiero",
        cta: "Comenzar Ahora"
      }
    },
    hi: {
      title: "अपने वित्तीय भविष्य पर मास्टर करें",
      subtitle: "कनाडा और यूएस में नए आने वालों के लिए आवश्यक धन कौशल",
      cta: "मुफ्त में सीखना शुरू करें",
      features: [
        "अपनी भाषा में 20 व्यापक पाठ",
        "क्रेडिट स्कोर बनाने की गाइड",
        "बैंकिंग और टैक्स की बुनियादी बातें",
        "वित्तीय कैलकुलेटर और उपकरण"
      ],
      trust: "10,000+ नए आने वालों के साथ वित्तीय आत्मविश्वास बनाने में शामिल हों",
      social: ["5,000+ समीक्षाएं", "4.8/5 रेटिंग"],
      exitPopup: {
        title: "रुकिए! यह अवसर न चूकें",
        subtitle: "आज शुरू करें और अपने वित्तीय भविष्य पर नियंत्रण करें",
        cta: "सीखना जारी रखें"
      },
      timePopup: {
        title: "अगला कदम उठाने के लिए तैयार हैं?",
        subtitle: "हजारों ने अपनी वित्तीय सफलता की यात्रा शुरू कर दी है",
        cta: "अभी शुरू करें"
      }
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
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
              <div className="text-center">
                <div className="mb-8">
                  <div className="mx-auto h-20 w-20 rounded-2xl gradient-header flex items-center justify-center mb-6 shadow-lg">
                    <svg className="h-10 w-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h1 className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl leading-tight">
                    {t.title}
                  </h1>
                  <p className="mb-8 text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
                    {t.subtitle}
                  </p>
                </div>

                {/* Social Proof */}
                <div className="mb-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-cyan-50 border border-indigo-200 p-6">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-base font-semibold text-gray-800">{t.social[0]}</div>
                    <div className="text-lg text-indigo-600 font-bold">{t.social[1]}</div>
                  </div>
                </div>

                {/* Main CTA */}
                <Link
                  to="/learn"
                  className="mb-8 inline-block w-full btn-primary text-lg py-4"
                >
                  {t.cta}
                </Link>

                {/* Trust Badge */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-6 py-3 border border-green-200">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base font-semibold text-green-700">100% Free</span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                  What You'll Learn
                </h2>
                <div className="grid gap-4">
                  {t.features.map((feature, index) => (
                    <div key={index} className="card p-4 hover:shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 h-12 w-12 rounded-xl gradient-header flex items-center justify-center shadow-md">
                          <span className="text-white text-lg font-bold">{index + 1}</span>
                        </div>
                        <span className="text-gray-800 font-semibold text-base">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Trust */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="mx-auto h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-100 to-cyan-100 flex items-center justify-center shadow-lg">
                    <svg className="h-10 w-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-base text-gray-600 font-medium max-w-sm mx-auto">
                  {t.trust}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {t.exitPopup.title}
            </h3>
            <p className="mb-6 text-gray-600 text-base">
              {t.exitPopup.subtitle}
            </p>
            <div className="flex gap-3">
              <Link
                to="/learn"
                className="flex-1 btn-primary"
              >
                {t.exitPopup.cta}
              </Link>
              <button
                onClick={() => setShowExitPopup(false)}
                className="flex-1 btn-secondary"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Time-based Popup */}
      {showTimePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl">
            <h3 className="mb-3 text-2xl font-bold text-gray-900">
              {t.timePopup.title}
            </h3>
            <p className="mb-6 text-gray-600 text-base">
              {t.timePopup.subtitle}
            </p>
            <div className="flex gap-3">
              <Link
                to="/learn"
                className="flex-1 btn-primary"
              >
                {t.timePopup.cta}
              </Link>
              <button
                onClick={() => setShowTimePopup(false)}
                className="flex-1 btn-secondary"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
