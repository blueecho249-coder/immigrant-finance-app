import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons.js'
import Header from '../components/Header.jsx'
import SEO from '../components/SEO.jsx'
import XPDisplay from '../components/XPDisplay.jsx'
import StreakCounter from '../components/StreakCounter.jsx'
import { progressTracker } from '../utils/progressTracker.js'

export default function Learn({ language }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [totalXP, setTotalXP] = useState(0)
  const [streak, setStreak] = useState(0)
  
  const categories = ['All', 'Credit', 'Banking', 'Housing', 'Taxes', 'Saving']
  
  const filteredLessons = selectedCategory === 'All' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)
  const safeLanguage = ['en', 'es', 'hi', 'tl', 'zh', 'ar', 'fr', 'pa'].includes(language) ? language : 'en'

  useEffect(() => {
    // Load progress data
    setTotalXP(progressTracker.getTotalXP())
    setStreak(progressTracker.getStreak())
  }, [])

  const content = {
    en: {
      title: "Financial Lessons",
      subtitle: "Learn at your own pace in your language",
      startLesson: "Start Lesson",
      upgradeToPremium: "Upgrade to Premium",
      premiumRequired: "Premium Required",
      categories: "Categories",
      noLessons: "No lessons found in this category.",
      progressBanner: "0 of 20 lessons complete",
      motivationalMessage: "Start your financial journey today",
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            q: "Are these financial lessons really free?",
            a: "Yes! All basic lessons are completely free. Only premium lessons require a small one-time payment to unlock advanced content."
          },
          {
            q: "How long does each lesson take to complete?",
            a: "Most lessons take 15-30 minutes to complete, including the quiz. You can learn at your own pace and return anytime."
          },
          {
            q: "Can I access lessons in multiple languages?",
            a: "Absolutely! All lessons are available in 8 languages: English, Spanish, Hindi, Tagalog, Mandarin, Arabic, French, and Punjabi."
          },
          {
            q: "Do I get a certificate after completing lessons?",
            a: "While we don't provide formal certificates, your progress is tracked and you can see your completed lessons in your account."
          }
        ]
      }
    },
    es: {
      title: "Lecciones Financieras",
      subtitle: "Aprende a tu propio ritmo en tu idioma",
      startLesson: "Comenzar Lección",
      upgradeToPremium: "Actualizar a Premium",
      premiumRequired: "Premium Requerido",
      categories: "Categorías",
      noLessons: "No se encontraron lecciones en esta categoría.",
      progressBanner: "0 de 20 lecciones completadas",
      motivationalMessage: "Start your financial journey today"
    },
    hi: {
      title: "वित्तीय पाठ",
      subtitle: "अपनी भाषा में अपनी गति से सीखें",
      startLesson: "पाठ शुरू करें",
      upgradeToPremium: "प्रीमियम में अपग्रेड करें",
      premiumRequired: "प्रीमियम आवश्यक",
      categories: "श्रेणियां",
      noLessons: "इस श्रेणी में कोई पाठ नहीं मिला।",
      progressBanner: "0 कुल 20 पाठों में से पूरी",
      motivationalMessage: "Start your financial journey today"
    },
    tl: {
      title: "Mga Aralin sa Pananalapi",
      subtitle: "Matuto sa sariling mong sarili mong iyong wika sa iyong wika",
      startLesson: "Simulan ang Aralin",
      upgradeToPremium: "I-Upgrade sa Premium",
      premiumRequired: "Kailangan ang Premium",
      categories: "Mga Kategorya",
      noLessons: "Walang araling na nakita sa kategoryang ito.",
      progressBanner: "0 sa 20 na aralin ang kumpleto",
      motivationalMessage: "Simulan ang iyong paglalakbay sa pananalapi ngayon"
    },
    zh: {
      title: "金融课程",
      subtitle: "用自己的语言按自己的节奏学习",
      startLesson: "开始课程",
      upgradeToPremium: "升级到高级版",
      premiumRequired: "需要高级版",
      categories: "分类",
      noLessons: "此类别中未找到课程。",
      progressBanner: "20个课程中完成0个",
      motivationalMessage: "今天开始您的财务之旅"
    },
    ar: {
      title: "الدروس المالية",
      subtitle: "تعلم بالسرعة التي تناسبك بلغتك",
      startLesson: "ابدأ الدرس",
      upgradeToPremium: "ترقية إلى بريميوم",
      premiumRequired: "مطلوب بريميوم",
      categories: "الفئات",
      noLessons: "لم يتم العثور على دروس في هذه الفئة.",
      progressBanner: "0 من 20 درس مكتمل",
      motivationalMessage: "ابدأ رحلتك المالية اليوم"
    },
    fr: {
      title: "Leçons financières",
      subtitle: "Apprenez à votre propre rythme dans votre langue",
      startLesson: "Commencer la leçon",
      upgradeToPremium: "Passer à Premium",
      premiumRequired: "Premium Requis",
      categories: "Catégories",
      noLessons: "Aucune leçon trouvée dans cette catégorie.",
      progressBanner: "0 sur 20 leçons terminées",
      motivationalMessage: "Commencez votre voyage financier aujourd'hui"
    },
    pa: {
      title: "ਵਿੱਤੀ ਪਾਠ",
      subtitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਆਪਣੀ ਗਤੀ ਨਾਲ ਸਿੱਖੋ",
      startLesson: "ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ",
      upgradeToPremium: "ਪ੍ਰੀਮੀਅਮ ਵਿੱਚ ਅਪਗ੍ਰੇਡ ਕਰੋ",
      premiumRequired: "ਪ੍ਰੀਮੀਅਮ ਲੋੜੀਂਦਾ ਹੈ",
      categories: "ਸ਼੍ਰੇਣੀਆਂ",
      noLessons: "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੋਈ ਪਾਠ ਨਹੀਂ ਲੱਭਿਆ।",
      progressBanner: "20 ਪਾਠਾਂ ਵਿੱਚੋਂ 0 ਪੂਰੇ ਹੋਏ",
      motivationalMessage: "ਅੱਜ ਹੀ ਆਪਣਾ ਵਿੱਤੀ ਸਫ਼ਰ ਸ਼ੁਰੂ ਕਰੋ"
    }
  }

  const t = content[safeLanguage] || content.en
  const faq = t.faq || { title: 'Frequently Asked Questions', questions: [] }

  const getCategoryColor = (category) => {
    const colors = {
      'Credit': { bg: '#7C3AED', border: '#7C3AED', text: 'white', hoverBg: '#6D28D9' },
      'Banking': { bg: '#0D9488', border: '#0D9488', text: 'white', hoverBg: '#0F766E' },
      'Housing': { bg: '#F59E0B', border: '#F59E0B', text: 'white', hoverBg: '#F59E0B' },
      'Taxes': { bg: '#3B82F6', border: '#3B82F6', text: 'white', hoverBg: '#2563EB' },
      'Saving': { bg: '#10B981', border: '#10B981', text: 'white', hoverBg: '#059669' },
      'All': { bg: '#7C3AED', border: '#7C3AED', text: 'white', hoverBg: '#6D28D9' }
    }
    return colors[category] || colors['All']
  }

  return (
    <>
      <SEO 
        title="Financial Lessons - Learn Banking, Credit, Housing | NewStart Finance"
        description="Learn financial literacy with expert-led lessons on banking, credit, housing, taxes, and saving. Available in 8 languages for newcomers to Canada and USA."
        keywords="financial lessons, banking courses, credit education, housing finance, tax education, saving lessons, newcomer finance, multilingual financial education"
        canonicalUrl="https://newstart-finance.com/learn"
        ogImage="https://newstart-finance.com/og-learn.jpg"
      />
      <div>
        <Header onLanguageChange={language} />
        <div className="px-4 py-6">
        {/* Progress Banner */}
        <div className="mb-8 bg-gradient-to-r from-indigo-50 to-teal-50 border-2 border-indigo-200/60 rounded-3xl p-8 shadow-lg animate-fadeInUp">
          <div className="flex items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-indigo-900 mb-3">{t.progressBanner}</h3>
              <div className="w-full bg-indigo-200/60 rounded-full h-4 shadow-inner">
                <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-4 rounded-full shadow-lg" style={{ width: '0%' }}></div>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-2">
              <StreakCounter streak={streak} />
              <XPDisplay xpEarned={0} totalXP={totalXP} showAnimation={false} />
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 p-8 text-white shadow-2xl animate-fadeInUp">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-bold uppercase tracking-wide">
                NewStart Finance Premium
              </div>
              <h3 className="mb-3 text-3xl font-bold">Unlock deeper lessons, tools, and faster progress</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Get premium financial lessons, advanced calculators, and exclusive learning content designed for newcomers who want to move faster.
              </p>
            </div>
            <a
              href="https://blueecho3.gumroad.com/l/btyknk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-bold text-amber-600 shadow-xl transition-transform hover:scale-105"
            >
              Upgrade to Premium
            </a>
          </div>
        </div>

      <div className="mb-8 animate-fadeIn">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold text-gray-900">{t.title}</h1>
        <div className="relative inline-block pb-3">
          <p className="text-xl text-gray-700 pr-2 font-medium">{t.subtitle}</p>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full"></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-10 animate-fadeInUp">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">{t.categories}</h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => {
            const colors = getCategoryColor(category)
            const isActive = selectedCategory === category
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-2xl px-8 py-4 text-base font-bold transition-all transform hover:scale-105 shadow-md ${
                  isActive
                    ? `text-white shadow-xl`
                    : `bg-white text-gray-700 border-2 hover:border-gray-400 hover:bg-gray-50/80`
                }`}
                style={{
                  backgroundColor: isActive ? colors.bg : 'transparent',
                  borderColor: isActive ? colors.border : 'transparent',
                  color: isActive ? colors.text : 'inherit'
                }}
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className={`grid gap-10 px-4 sm:px-0 ${
        filteredLessons.length === 0 
          ? 'grid-cols-1' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson, index) => {
            const colors = getCategoryColor(lesson.category)
            const isPremiumLesson = lesson.isPremium
            
            return (
              <div key={lesson.id} className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fadeInUp relative border border-gray-200/70 bg-white/95" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Premium Badge */}
                {isPremiumLesson && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {t.premiumRequired}
                    </div>
                  </div>
                )}
                
                {/* Top border */}
                <div className="h-3" style={{ background: `linear-gradient(90deg, ${colors.border} 0%, rgba(255,255,255,0.35) 100%)` }}></div>
                
                <div className="p-8 bg-gradient-to-b from-white to-gray-50/40">
                  {/* Faint Grey Lock Overlay for Premium Lessons */}
                  {isPremiumLesson && (
                    <div className="absolute top-12 right-12 opacity-30">
                      <svg className="h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span 
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2 shadow-sm"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        borderColor: colors.border
                      }}
                    >
                      {lesson.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-2xl font-bold text-gray-900 leading-tight group-hover:text-gray-950">
                    {lesson.title?.[safeLanguage] || lesson.title?.en || lesson.title || 'Lesson'}
                  </h3>
                  <p className="mb-6 text-lg text-gray-700 leading-relaxed font-medium">
                    {lesson.subtitle?.[safeLanguage] || lesson.subtitle?.en || lesson.subtitle || ''}
                  </p>
                  <div className="mb-6 flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <span className="rounded-full bg-gray-100 px-3 py-1">{lesson.category}</span>
                    <span>•</span>
                    <span>{isPremiumLesson ? t.premiumRequired : t.startLesson}</span>
                  </div>
                  
                  {isPremiumLesson ? (
                    <a
                      href="https://blueecho3.gumroad.com/l/btyknk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl font-bold transition-all hover:opacity-90 transform hover:scale-105 shadow-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white`}
                    >
                      <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      {t.upgradeToPremium}
                    </a>
                  ) : (
                    <Link
                      to={`/lesson/${lesson.id}`}
                      className={`inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl font-bold transition-all hover:opacity-90 transform hover:scale-105 shadow-lg ring-1 ring-black/5`}
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text
                      }}
                    >
                      {t.startLesson}
                      <svg className="ml-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <div className="col-span-full text-center py-16 animate-fadeInUp">
            <div className="mx-auto h-20 w-20 rounded-3xl bg-gray-100/80 flex items-center justify-center mb-6 border-2 border-gray-200/60">
              <svg className="h-10 w-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 00-5.656 0l-6.836 6.836a4 4 0 005.656 0l6.836-6.836a4 4 0 00-5.656 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No lessons found</h3>
            <p className="text-gray-600 text-lg font-medium">{t.noLessons}</p>
          </div>
        )}
      </div>
      
      {/* FAQ Section */}
      <div className="mt-16 mb-8 animate-fadeInUp">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{faq.title}</h2>
          <div className="space-y-6">
            {faq.questions.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <button
                  className="w-full text-left group"
                  onClick={() => {
                    const element = document.getElementById(`faq-${index}`)
                    if (element) {
                      element.classList.toggle('hidden')
                    }
                  }}
                >
                  <div className="flex items-center justify-between py-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {item.q || item.question || ''}
                    </h3>
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div id={`faq-${index}`} className="hidden">
                  <p className="text-gray-600 leading-relaxed pt-4 pb-2">
                    {item.a || item.answer || ''}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}
