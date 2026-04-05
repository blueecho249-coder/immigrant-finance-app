import { useState } from 'react'
import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons.js'

export default function Learn({ language }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Credit', 'Banking', 'Housing', 'Taxes', 'Saving']
  
  const filteredLessons = selectedCategory === 'All' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)

  const content = {
    en: {
      title: "Financial Lessons",
      subtitle: "Learn at your own pace in your language",
      startLesson: "Start Lesson",
      categories: "Categories",
      noLessons: "No lessons found in this category.",
      progressBanner: "0 of 20 lessons complete",
      motivationalMessage: "Start your financial journey today"
    },
    es: {
      title: "Lecciones Financieras",
      subtitle: "Aprende a tu propio ritmo en tu idioma",
      startLesson: "Comenzar Lección",
      categories: "Categorías",
      noLessons: "No se encontraron lecciones en esta categoría.",
      progressBanner: "0 de 20 lecciones completadas",
      motivationalMessage: "Start your financial journey today"
    },
    hi: {
      title: "वित्तीय पाठ",
      subtitle: "अपनी भाषा में अपनी गति से सीखें",
      startLesson: "पाठ शुरू करें",
      categories: "श्रेणियां",
      noLessons: "इस श्रेणी में कोई पाठ नहीं मिला।",
      progressBanner: "0 कुल 20 पाठों में से पूरी",
      motivationalMessage: "आज अपनी वित्तीय यात्रा शुरू करें"
    },
    tl: {
      title: "Mga Aralin sa Pananalapi",
      subtitle: "Matuto sa sariling mong sarili mong iyong wika sa iyong wika",
      startLesson: "Simulan ang Aralin",
      categories: "Mga Kategorya",
      noLessons: "Walang araling na nakita sa kategoryang ito.",
      progressBanner: "0 sa 20 na aralin ang kumpleto",
      motivationalMessage: "Simulan ang iyong paglalakbay sa pananalapi ngayon"
    },
    zh: {
      title: "金融课程",
      subtitle: "用自己的语言按自己的节奏学习",
      startLesson: "开始课程",
      categories: "分类",
      noLessons: "此类别中未找到课程。",
      progressBanner: "20个课程中完成0个",
      motivationalMessage: "今天开始您的财务之旅"
    },
    ar: {
      title: "الدروس المالية",
      subtitle: "تعلم بالسرعة التي تناسبك بلغتك",
      startLesson: "ابدأ الدرس",
      categories: "الفئات",
      noLessons: "لم يتم العثور على دروس في هذه الفئة.",
      progressBanner: "0 من 20 درس مكتمل",
      motivationalMessage: "ابدأ رحلتك المالية اليوم"
    },
    fr: {
      title: "Leçons financières",
      subtitle: "Apprenez à votre propre rythme dans votre langue",
      startLesson: "Commencer la leçon",
      categories: "Catégories",
      noLessons: "Aucune leçon trouvée dans cette catégorie.",
      progressBanner: "0 sur 20 leçons terminées",
      motivationalMessage: "Commencez votre voyage financier aujourd'hui"
    },
    pa: {
      title: "ਵਿੱਤੀ ਪਾਠ",
      subtitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਆਪਣੀ ਗਤੀ ਨਾਲ ਸਿੱਖੋ",
      startLesson: "ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ",
      categories: "ਸ਼੍ਰੇਣੀਆਂ",
      noLessons: "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੋਈ ਪਾਠ ਨਹੀਂ ਮਿਲਿਆ।",
      progressBanner: "20 ਪਾਠਾਂ ਵਿੱਚੋਂ 0 ਪੂਰੇ ਹੋਏ",
      motivationalMessage: "ਅੱਜ ਆਪਣਾ ਵਿੱਤੀ ਸਫ਼ਰ ਸ਼ੁਰੂ ਕਰੋ"
    }
  }

  const t = content[language] || content.en

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
    <div className="px-4 py-6">
      {/* Progress Banner */}
      <div className="mb-8 bg-gradient-to-r from-indigo-50 to-teal-50 border-2 border-indigo-200/60 rounded-3xl p-8 shadow-lg animate-fadeInUp">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-indigo-900 mb-3">{t.progressBanner}</h3>
            <div className="w-full bg-indigo-200/60 rounded-full h-4 shadow-inner">
              <div className="bg-gradient-to-r from-indigo-500 to-teal-500 h-4 rounded-full shadow-lg" style={{ width: '0%' }}></div>
            </div>
          </div>
          <div className="text-indigo-700 font-bold text-lg bg-white/80 px-4 py-2 rounded-2xl shadow-md">{t.motivationalMessage}</div>
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
            return (
              <div key={lesson.id} className="card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fadeInUp" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Top border */}
                <div className="h-3" style={{ backgroundColor: colors.border }}></div>
                
                <div className="p-8">
                  {/* Category Badge */}
                  <div className="mb-6">
                    <span 
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text,
                        borderColor: colors.border
                      }}
                    >
                      {lesson.category}
                    </span>
                  </div>

                  <h3 className="mb-4 text-2xl font-bold text-gray-900 leading-tight">
                    {lesson.title[language] || lesson.title.en}
                  </h3>
                  <p className="mb-8 text-lg text-gray-700 leading-relaxed font-medium">
                    {lesson.subtitle[language] || lesson.subtitle.en}
                  </p>
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className={`inline-flex items-center justify-center w-full py-4 px-6 rounded-2xl font-bold transition-all hover:opacity-90 transform hover:scale-105 shadow-lg`}
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
    </div>
  )
}
