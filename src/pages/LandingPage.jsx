import { Link } from 'react-router-dom'
import LanguageSelector from '../components/LanguageSelector.jsx'
import SEO from '../components/SEO.jsx'
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
      title: 'Build Your Financial Future in North America',
      subtitle: 'Master essential money skills designed specifically for newcomers to Canada and the US',
      cta: 'Start Learning Free',
      secondaryCta: 'View Lessons',
      trust: 'Join 10,000+ newcomers building financial confidence'
    },
    es: {
      title: 'Construye Tu Futuro Financiero en América del Norte',
      subtitle: 'Domina habilidades esenciales de dinero diseñadas específicamente para recién llegados a Canadá y EE. UU.',
      cta: 'Comenzar Aprender Gratis',
      secondaryCta: 'Ver Lecciones',
      trust: 'Únete a más de 10,000 recién llegados construyendo confianza financiera'
    },
    hi: {
      title: 'उत्तरी अमेरिका में अपना वित्तीय भविष्य बनाएं',
      subtitle: 'कनाडा और यूएस में नए आने वालों के लिए विशेष रूप से डिज़ाइन की गई आवश्यक धन कौशल में महारत हासिल करें',
      cta: 'मुफ्त में सीखना शुरू करें',
      secondaryCta: 'पाठ देखें',
      trust: '10,000+ नए आने वालों के साथ वित्तीय आत्मविश्वास बनाने में शामिल हों'
    },
    tl: {
      title: 'Bumuo ng Iyong Pinansyal na Kinabukasan sa Hilagang Amerika',
      subtitle: 'Matutunan ang mahahalagang kaalaman sa pera para sa mga bagong dating sa Canada at US',
      cta: 'Magsimulang Matuto nang Libre',
      secondaryCta: 'Tingnan ang Mga Aralin',
      trust: 'Sumali sa 10,000+ bagong dating na bumubuo ng kumpiyansa sa pananalapi'
    },
    zh: {
      title: '在北美建立你的财务未来',
      subtitle: '掌握专为加拿大和美国新移民设计的必要理财技能',
      cta: '免费开始学习',
      secondaryCta: '查看课程',
      trust: '加入10,000+ 位新移民，一起建立财务信心'
    },
    ar: {
      title: 'ابنِ مستقبلك المالي في أمريكا الشمالية',
      subtitle: 'أتقن المهارات المالية الأساسية المصممة خصيصًا للقادمين الجدد إلى كندا والولايات المتحدة',
      cta: 'ابدأ التعلم مجانًا',
      secondaryCta: 'عرض الدروس',
      trust: 'انضم إلى أكثر من 10,000 قادم جديد يبنون الثقة المالية'
    },
    fr: {
      title: 'Construisez Votre Avenir Financier en Amérique du Nord',
      subtitle: 'Maîtrisez les compétences financières essentielles conçues pour les nouveaux arrivants au Canada et aux États-Unis',
      cta: 'Commencer Gratuitement',
      secondaryCta: 'Voir les Leçons',
      trust: 'Rejoignez plus de 10 000 nouveaux arrivants qui renforcent leur confiance financière'
    },
    pa: {
      title: 'ਉੱਤਰੀ ਅਮਰੀਕਾ ਵਿੱਚ ਆਪਣਾ ਵਿੱਤੀ ਭਵਿੱਖ ਬਣਾਓ',
      subtitle: 'ਕੈਨੇਡਾ ਅਤੇ ਅਮਰੀਕਾ ਵਿੱਚ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਲਈ ਬਣਾਈਆਂ ਗਈਆਂ ਜ਼ਰੂਰੀ ਪੈਸੇ ਵਾਲੀਆਂ ਹੁਨਰਾਂ ਸਿੱਖੋ',
      cta: 'ਮੁਫ਼ਤ ਸਿੱਖਣਾ ਸ਼ੁਰੂ ਕਰੋ',
      secondaryCta: 'ਪਾਠ ਵੇਖੋ',
      trust: '10,000+ ਨਵੇਂ ਆਏ ਲੋਕਾਂ ਨਾਲ ਵਿੱਤੀ ਵਿਸ਼ਵਾਸ ਬਣਾਉਣ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋਵੋ'
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
        <div className="md:hidden">
          <div className="mx-auto max-w-phone px-4 sm:px-5">
            <div className="relative flex min-h-dvh flex-col overflow-hidden glass-card shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
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
                  <div className="text-center mb-12 bg-gradient-to-br from-purple-600 to-teal-500 -mx-4 sm:mx-0 px-4 py-12 sm:px-5 sm:py-16 rounded-3xl shadow-2xl">
                    <div className="mb-8">
                      <div className="mx-auto h-24 w-24 rounded-3xl gradient-header flex items-center justify-center mb-8 shadow-2xl">
                        <svg className="h-12 w-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h1 className="mb-6 text-5xl sm:text-6xl font-bold text-white leading-tight">
                        Build Your <span className="text-yellow-300">Financial</span> Future in North America
                      </h1>
                      <p className="mb-8 text-xl text-white/95 leading-relaxed max-w-lg mx-auto font-medium">{t.subtitle}</p>
                    </div>
                    <div className="mb-10 grid grid-cols-2 gap-4 max-w-sm mx-auto">
                      {[
                        ['10,000+', 'Newcomers Helped'],
                        ['4.8/5', 'Average Rating'],
                        ['8', 'Languages Available'],
                        ['20', 'Expert Lessons']
                      ].map((stat, index) => (
                        <div key={index} className="bg-white rounded-2xl p-4 shadow-lg border border-white/60 overflow-hidden flex flex-col justify-center items-center min-h-[80px]">
                          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-center leading-tight text-gray-900">{stat[0]}</div>
                          <div className="text-sm md:text-base text-gray-800 font-bold text-center leading-tight mt-1">{stat[1]}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mb-8 space-y-3">
                      <Link to="/learn" className="block w-full bg-white text-purple-700 text-lg py-4 px-6 rounded-xl shadow-xl hover:opacity-95 transition-all font-bold">{t.cta}</Link>
                      <Link to="/learn" className="block w-full border-2 border-white/80 text-white text-lg py-4 px-6 rounded-xl hover:bg-white/10 transition-all font-bold">{t.secondaryCta}</Link>
                    </div>
                    <div className="mb-12">
                      <div className="inline-flex items-center gap-3 rounded-full bg-white/15 px-8 py-4 border border-white/30 shadow-lg backdrop-blur-sm">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-lg font-bold text-white">100% Free • No Credit Card Required</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Everything You Need to Succeed</h2>
                    <div className="grid gap-6">
                      {[
                        ['20 Expert-Led Lessons', 'Comprehensive courses covering banking, credit, taxes, and more'],
                        ['Learn in Your Language', 'Available in 8 languages including Spanish, Hindi, and Tagalog'],
                        ['Practical Tools', 'Financial calculators and templates for real-world application'],
                        ['Community Support', 'Join thousands of newcomers on the same financial journey']
                      ].map((feature, index) => (
                        <div key={index} className="card p-6 hover:shadow-xl transition-all bg-white border border-gray-200/80">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 h-16 w-16 rounded-2xl gradient-header flex items-center justify-center shadow-lg">
                              <span className="text-2xl text-white">{index + 1}</span>
                            </div>
                            <div className="flex-1">
                              <h3 className="mb-2 text-xl font-bold text-gray-900">{feature[0]}</h3>
                              <p className="text-gray-800 leading-relaxed font-medium">{feature[1]}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-12">
                    <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Success Stories</h2>
                    <div className="space-y-6">
                      {[
                        ['Priya S.', 'India → Toronto', 'This app helped me understand credit scores in Canada in Hindi. Life changing!'],
                        ['Maria R.', 'Philippines → Vancouver', 'Finally an app that explains banking in Tagalog. My whole family uses it now.'],
                        ['Ahmed K.', 'Egypt → Calgary', 'The budget calculator helped me save my first $1000 in Canada.']
                      ].map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 border border-indigo-200 shadow-md">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0">
                              <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{testimonial[0].charAt(0)}</span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="text-gray-900 font-bold mb-2">"{testimonial[2]}"</p>
                              <div className="text-sm text-gray-700">
                                <div className="font-bold">{testimonial[0]}</div>
                                <div>{testimonial[1]}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white shadow-2xl">
                      <h2 className="mb-4 text-3xl font-bold">Start Your Financial Journey Today</h2>
                      <p className="mb-6 text-lg text-white/95 max-w-md mx-auto font-medium">{t.trust}</p>
                      <Link to="/learn" className="inline-block bg-white text-indigo-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">{t.cta}</Link>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left mb-6 lg:mb-8">
                  <h1 className="mb-6 text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                    Build Your <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Financial</span> Future in North America
                  </h1>
                  <p className="mb-8 text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">{t.subtitle}</p>
                  <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link to="/learn" className="btn-primary text-lg py-4 px-8 shadow-xl">{t.cta}</Link>
                    <Link to="/learn" className="btn-secondary text-lg py-4 px-8">{t.secondaryCta}</Link>
                  </div>
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/80 px-8 py-4 border border-gray-200 shadow-lg">
                      <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-lg font-bold text-green-700">100% Free • No Credit Card Required</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative mx-auto max-w-sm">
                    <div className="bg-gray-900 rounded-3xl p-2 shadow-2xl relative">
                      <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-xl"></div>
                      <div className="bg-white rounded-2xl overflow-hidden relative">
                        <div className="gradient-header px-4 py-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              </div>
                              <h1 className="text-xl font-bold text-white">NewFinance</h1>
                            </div>
                            <div className="h-8 w-8 rounded-lg bg-white/20 backdrop-blur-sm"></div>
                          </div>
                        </div>
                        <div className="p-4 space-y-4">
                          <div className="text-center">
                            <div className="mx-auto h-16 w-16 rounded-2xl gradient-header flex items-center justify-center mb-4">
                              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-lg font-bold text-gray-900 mb-2">Welcome to NewFinance</h2>
                            <p className="text-sm text-gray-600 mb-4">Start your financial journey today</p>
                            <div className="bg-indigo-600 text-white py-3 px-6 rounded-xl font-semibold">Get Started</div>
                          </div>
                          <div className="space-y-3">
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-indigo-100 flex items-center justify-center"><span className="text-indigo-600 font-bold text-sm">1</span></div><div className="flex-1"><h3 className="font-semibold text-gray-900 text-sm">Banking Basics</h3><p className="text-xs text-gray-600">Learn how to open an account</p></div></div></div>
                            <div className="bg-gray-50 rounded-xl p-3 border border-gray-200"><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center"><span className="text-green-600 font-bold text-sm">2</span></div><div className="flex-1"><h3 className="font-semibold text-gray-900 text-sm">Credit Score</h3><p className="text-xs text-gray-600">Build and maintain good credit</p></div></div></div>
                          </div>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-2"><div className="flex justify-around"><div className="h-8 w-8 rounded-lg bg-indigo-100"></div><div className="h-8 w-8 rounded-lg bg-gray-200"></div><div className="h-8 w-8 rounded-lg bg-gray-200"></div><div className="h-8 w-8 rounded-lg bg-gray-200"></div><div className="h-8 w-8 rounded-lg bg-gray-200"></div></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
