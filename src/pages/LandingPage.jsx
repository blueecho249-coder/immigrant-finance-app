import { Link } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector.jsx'

export default function LandingPage({ language, onLanguageChange }) {
  const content = {
    en: {
      title: "Master Your Financial Future",
      subtitle: "Essential money skills for newcomers to Canada and the US",
      cta: "Start Learning Free",
      features: [
        "6 essential lessons in your language",
        "Credit score building guide", 
        "Banking and tax basics",
        "Financial calculators and tools"
      ],
      trust: "Join 10,000+ newcomers building financial confidence",
      social: ["⭐⭐⭐⭐⭐", "5,000+ reviews", "4.8/5 rating"]
    },
    es: {
      title: "Domina Tu Futuro Financiero",
      subtitle: "Habilidades esenciales de dinero para recién llegados a Canadá y EE. UU.",
      cta: "Comenzar Aprender Gratis",
      features: [
        "6 lecciones esenciales en tu idioma",
        "Guía para construir crédito",
        "Conceptos bancarios y fiscales básicos",
        "Calculadoras y herramientas financieras"
      ],
      trust: "Únete a más de 10,000 recién llegados construyendo confianza financiera",
      social: ["⭐⭐⭐⭐⭐", "5,000+ reseñas", "4.8/5 calificación"]
    },
    hi: {
      title: "अपने वित्तीय भविष्य पर मास्टर करें",
      subtitle: "कनाडा और यूएस में नए आने वालों के लिए आवश्यक धन कौशल",
      cta: "मुफ्त में सीखना शुरू करें",
      features: [
        "अपनी भाषा में 6 आवश्यक पाठ",
        "क्रेडिट स्कोर बनाने की गाइड",
        "बैंकिंग और टैक्स की बुनियादी बातें",
        "वित्तीय कैलकुलेटर और उपकरण"
      ],
      trust: "10,000+ नए आने वालों के साथ वित्तीय आत्मविश्वास बनाने में शामिल हों",
      social: ["⭐⭐⭐⭐⭐", "5,000+ समीक्षाएं", "4.8/5 रेटिंग"]
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-teal-50">
      <div className="mx-auto max-w-phone px-4 sm:px-5">
        <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
          <div className="sticky top-0 z-40">
            <div className="gradient-header px-4 py-4 sm:px-5">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-white">New Finance</h1>
                <LanguageSelector onLanguageChange={onLanguageChange} />
              </div>
            </div>
          </div>
          
          <main className="flex-1 overflow-y-auto">
            <div className="px-4 py-8 sm:px-5">
              {/* Hero Section */}
              <div className="text-center">
                <div className="mb-6">
                  <div className="mx-auto h-20 w-20 rounded-full gradient-header flex items-center justify-center mb-4">
                    <span className="text-4xl">💰</span>
                  </div>
                  <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl leading-tight">
                    {t.title}
                  </h1>
                  <p className="mb-8 text-lg text-gray-600 leading-relaxed">
                    {t.subtitle}
                  </p>
                </div>

                {/* Social Proof */}
                <div className="mb-8 rounded-lg bg-purple-50 p-4">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-2xl">{t.social[0]}</div>
                    <div className="text-sm font-medium text-gray-700">{t.social[1]}</div>
                    <div className="text-sm text-purple-600 font-semibold">{t.social[2]}</div>
                  </div>
                </div>

                {/* Main CTA */}
                <Link
                  to="/learn"
                  className="mb-8 inline-block w-full rounded-lg gradient-header px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
                >
                  {t.cta}
                </Link>

                {/* Trust Badge */}
                <div className="mb-8 text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-sm font-medium text-green-700">100% Free</span>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-8">
                <h2 className="mb-4 text-center text-lg font-semibold text-gray-900">
                  What You'll Learn
                </h2>
                <div className="grid gap-3">
                  {t.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 rounded-lg bg-gray-50 p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full gradient-header flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Community Trust */}
              <div className="text-center">
                <div className="mb-4">
                  <div className="mx-auto h-16 w-16 rounded-lg bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                    <span className="text-3xl">🌍</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  {t.trust}
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
