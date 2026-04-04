import { useState } from 'react'
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
    },
    tl: {
      title: "Mga Aralin sa Pananalapi",
      subtitle: "Mag-aral sa iyong sariling bilis sa iyong wika",
      startLesson: "Simulang Aralin",
      categories: "Mga Kategorya",
      noLessons: "Walang aralin ang nahanap sa kategoryang ito."
    },
    zh: {
      title: "金融课程",
      subtitle: "用您的语言按自己的节奏学习",
      startLesson: "开始课程",
      categories: "分类",
      noLessons: "此类别中未找到课程。"
    },
    ar: {
      title: "الدروس المالية",
      subtitle: "تعلم بالسرعة التي تناسبك بلغتك",
      startLesson: "ابدأ الدرس",
      categories: "الفئات",
      noLessons: "لم يتم العثور على دروس في هذه الفئة."
    },
    fr: {
      title: "Leçons Financières",
      subtitle: "Apprenez à votre propre rythme dans votre langue",
      startLesson: "Commencer la Leçon",
      categories: "Catégories",
      noLessons: "Aucune leçon trouvée dans cette catégorie."
    },
    pa: {
      title: "ਵਿੱਤੀ ਪਾਠ",
      subtitle: "ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ ਆਪਣੀ ਗਤੀ ਨਾਲ ਸਿੱਖੋ",
      startLesson: "ਪਾਠ ਸ਼ੁਰੂ ਕਰੋ",
      categories: "ਸ਼੍ਰੇਣੀਆਂ",
      noLessons: "ਇਸ ਸ਼੍ਰੇਣੀ ਵਿੱਚ ਕੋਈ ਪਾਠ ਨਹੀਂ ਲੱਭਾ।"
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
      <div className="mb-8">
        <h1 className="mb-3 text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-lg text-gray-600">{t.subtitle}</p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-lg font-semibold text-gray-700">{t.categories}</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(category => (
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

      <div className="space-y-4">
        {filteredLessons.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto h-16 w-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-500 font-medium">{t.noLessons}</p>
          </div>
        ) : (
          filteredLessons.map(lesson => (
            <div key={lesson.id} className="card p-6 hover:shadow-lg transition-all">
              <div className="mb-4">
                <span className={`badge ${getCategoryColor(lesson.category)}`}>
                  {lesson.category}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {lesson.title[language] || lesson.title.en}
              </h3>
              <p className="mb-6 text-base text-gray-600 leading-relaxed">
                {lesson.subtitle[language] || lesson.subtitle.en}
              </p>
              <button className="btn-primary">
                {t.startLesson}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
