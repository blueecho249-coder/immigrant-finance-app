import { useState } from 'react'
import { lessons } from '../data/lessons.js'

export default function Learn({ language = 'en' }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  
  const categories = ['All', 'Credit', 'Banking', 'Housing']
  
  const filteredLessons = selectedCategory === 'All' 
    ? lessons 
    : lessons.filter(lesson => lesson.category === selectedCategory)

  const content = {
    en: {
      title: "Financial Lessons",
      subtitle: "Learn at your own pace in your language",
      startLesson: "Start Lesson",
      categories: "Categories"
    },
    es: {
      title: "Lecciones Financieras",
      subtitle: "Aprende a tu propio ritmo en tu idioma",
      startLesson: "Comenzar Lección",
      categories: "Categorías"
    },
    hi: {
      title: "वित्तीय पाठ",
      subtitle: "अपनी भाषा में अपनी गति से सीखें",
      startLesson: "पाठ शुरू करें",
      categories: "श्रेणियां"
    }
  }

  const t = content[language] || content.en

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="mb-6">
        <h2 className="mb-3 text-sm font-semibold text-gray-700">{t.categories}</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'gradient-header text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredLessons.map(lesson => (
          <div key={lesson.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2">
              <span className="inline-block rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                {lesson.category}
              </span>
            </div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900">
              {lesson.title[language] || lesson.title.en}
            </h3>
            <p className="mb-4 text-sm text-gray-600">
              {lesson.subtitle[language] || lesson.subtitle.en}
            </p>
            <button className="rounded-lg gradient-header px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
              {t.startLesson}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
