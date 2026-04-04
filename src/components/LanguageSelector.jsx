import { useState, useEffect } from 'react'

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'tl', name: 'Tagalog', flag: '🇵🇭' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' }
]

export default function LanguageSelector({ onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const selectedLanguage = languages.find(lang => lang.code === currentLang)

  const handleLanguageSelect = (langCode) => {
    setCurrentLang(langCode)
    setIsOpen(false)
    localStorage.setItem('language', langCode)
    if (onLanguageChange) {
      onLanguageChange(langCode)
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.language-selector')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="language-selector relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-xl bg-white/20 backdrop-blur-sm px-4 py-2 text-white transition-all hover:bg-white/30 transform hover:scale-105"
      >
        <span className="text-lg">{selectedLanguage.flag}</span>
        <span className="text-sm font-semibold">{selectedLanguage.name}</span>
        <svg 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-50">
          <div className="max-h-96 overflow-y-auto scrollbar-hide">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-all hover:bg-gray-50 ${
                  lang.code === currentLang ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-gray-700'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="font-medium">{lang.name}</span>
                {lang.code === currentLang && (
                  <svg className="h-4 w-4 ml-auto text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
