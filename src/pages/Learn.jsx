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
      noLessons: "No lessons found in this category."
    },
    es: {
      title: "Lecciones Financieras",
      subtitle: "Aprende a tu propio ritmo en tu idioma",
      startLesson: "Comenzar Lección",
      categories: "Categorías",
      noLessons: "No se encontraron lecciones en esta categoría."
    },
    hi: {
      title: "वित्तीय पाठ",
      subtitle: "अपनी भाषा में अपनी गति से सीखें",
      startLesson: "पाठ शुरू करें",
      categories: "श्रेणियां",
      noLessons: "इस श्रेणी में कोई पाठ नहीं मिला।"
    }
  }

  const t = content[language] || content.en

  const getCategoryColor = (category) => {
    const colors = {
      'Credit': 'badge-primary',
      'Banking': 'badge-success',
      'Housing': 'badge-warning',
      'Taxes': 'badge-primary',
      'Saving': 'badge-success',
      'All': 'badge-primary'
    }
    return colors[category] || 'badge-primary'
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl md:text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.categories}</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all transform hover:scale-105 ${
                selectedCategory === category
                  ? 'gradient-header text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Lessons Grid */}
      <div className={`grid gap-6 ${
        filteredLessons.length === 0 
          ? 'grid-cols-1' 
          : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
      }`}>
        {filteredLessons.length > 0 ? (
          filteredLessons.map((lesson) => (
            <div key={lesson.id} className="card p-6 hover:shadow-lg transition-all">
              <span className={`badge ${getCategoryColor(lesson.category)}`}>
                {lesson.category}
              </span>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {lesson.title[language] || lesson.title.en}
              </h3>
              <p className="mb-6 text-base text-gray-600 leading-relaxed">
                {lesson.subtitle[language] || lesson.subtitle.en}
              </p>
              <Link
                to={`/lesson/${lesson.id}`}
                className="btn-primary w-full text-center"
              >
                {t.startLesson}
              </Link>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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
