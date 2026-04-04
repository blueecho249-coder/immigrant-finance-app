import { Link } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector.jsx'

export default function LandingPage({ language, onLanguageChange }) {
  const content = {
    en: {
      title: "Understand money in your new country",
      subtitle: "Learn banking, credit, and financial basics in your language",
      cta: "Start Learning",
      features: [
        "20+ lessons in 8 languages",
        "Credit score guidance", 
        "Banking basics",
        "Financial tools"
      ]
    },
    es: {
      title: "Entiende el dinero en tu nuevo país",
      subtitle: "Aprende banca, crédito y conceptos financieros básicos en tu idioma",
      cta: "Comenzar a aprender",
      features: [
        "20+ lecciones en 8 idiomas",
        "Guía de puntuación de crédito",
        "Conceptos bancarios básicos", 
        "Herramientas financieras"
      ]
    },
    hi: {
      title: "अपने नए देश में पैसे समझें",
      subtitle: "अपनी भाषा में बैंकिंग, क्रेडिट और वित्तीय बुनियादी बातें सीखें",
      cta: "सीखना शुरू करें",
      features: [
        "8 भाषाओं में 20+ पाठ",
        "क्रेडिट स्कोर मार्गदर्शन",
        "बैंकिंग बुनियादी बातें",
        "वित्तीय उपकरण"
      ]
    }
  }

  const t = content[language] || content.en

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-phone px-4 sm:px-5">
        <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
          <div className="sticky top-0 z-40">
            <div className="gradient-header px-4 py-4 sm:px-5">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-white">New Finance</h1>
                <LanguageSelector />
              </div>
            </div>
          </div>
          
          <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-5">
            <div className="text-center">
              <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                {t.title}
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                {t.subtitle}
              </p>
              
              <div className="mb-8">
                <div className="mx-auto h-48 w-48 rounded-lg bg-gradient-to-br from-purple-100 to-teal-100 flex items-center justify-center">
                  <span className="text-6xl">💰</span>
                </div>
              </div>

              <Link
                to="/learn"
                className="mb-8 inline-block rounded-lg gradient-header px-8 py-4 text-lg font-semibold text-white transition-transform hover:scale-105"
              >
                {t.cta}
              </Link>

              <div className="grid gap-4 text-left">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-lg bg-gray-50 p-4">
                    <span className="text-2xl">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
