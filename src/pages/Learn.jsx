import { useState } from 'react'
import { Link } from 'react-router-dom'
import { lessons } from '../data/lessons.js'

export default function Learn({ language = 'en' }) {
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
      <div className="mb-8 bg-purple-50 border border-purple-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-purple-900 mb-2">{t.progressBanner}</h3>
            <div className="w-full bg-purple-200 rounded-full h-3">
              <div className="bg-purple-600 h-3 rounded-full" style={{ width: '0%' }}></div>
            </div>
          </div>
          <div className="text-purple-700 font-medium">{t.motivationalMessage}</div>
        </div>
      </div>

      <div className="mb-6">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
        <div className="relative inline-block">
          <p className="text-lg text-gray-600 pr-2">{t.subtitle}</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-teal-500"></div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.categories}</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const colors = getCategoryColor(category)
            const isActive = selectedCategory === category
            
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all transform hover:scale-105 ${
                  isActive
                    ? `text-white shadow-lg`
                    : `bg-white text-gray-700 border-2 hover:border-gray-400 hover:bg-gray-50`
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
      <div className={`grid gap-8 px-4 sm:px-0 ${
        filteredLessons.length === 0 
          ? 'grid-cols-1' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson) => {
            const colors = getCategoryColor(lesson.category)
            return (
              <div key={lesson.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden">
                {/* Top border */}
                <div className="h-2" style={{ backgroundColor: colors.border }}></div>
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span 
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: colors.bg,
                        color: colors.text
                      }}
                    >
                      {lesson.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {lesson.title[language] || lesson.title.en}
                  </h3>
                  <p className="mb-6 text-base text-gray-600 leading-relaxed">
                    {lesson.subtitle[language] || lesson.subtitle.en}
                  </p>
                  <Link
                    to={`/lesson/${lesson.id}`}
                    className={`inline-flex items-center justify-center w-full py-3 px-4 rounded-xl font-semibold transition-all hover:opacity-90`}
                    style={{
                      backgroundColor: colors.bg,
                      color: colors.text
                    }}
                  >
                    {t.startLesson}
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 00-5.656 0l-6.836 6.836a4 4 0 005.656 0l6.836-6.836a4 4 0 00-5.656 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No lessons found</h3>
            <p className="text-gray-600">{t.noLessons}</p>
          </div>
        )}
      </div>
    </div>
  )
}
