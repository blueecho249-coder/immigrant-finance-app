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
        className="flex items-center gap-3 rounded-xl bg-white/20 backdrop-blur-sm px-5 py-3 text-white transition-all hover:bg-white/30 transform hover:scale-105 border border-white/30 shadow-lg"
      >
        <span className="text-xl">{selectedLanguage.flag}</span>
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium opacity-75">Language</span>
          <span className="text-sm font-bold">{selectedLanguage.name}</span>
        </div>
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
        <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-50">
          <div className="p-2 border-b border-gray-100">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2">Select Language</div>
          </div>
          <div className="max-h-96 overflow-y-auto scrollbar-hide">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`flex w-full items-center gap-4 px-4 py-4 text-left transition-all hover:bg-gray-50 ${
                  lang.code === currentLang ? 'bg-purple-50 text-purple-700 font-semibold' : 'text-gray-700'
                }`}
              >
                <span className="text-2xl">{lang.flag}</span>
                <div className="flex-1">
                  <div className="font-medium">{lang.name}</div>
                  <div className="text-xs opacity-75">{lang.code.toUpperCase()}</div>
                </div>
                {lang.code === currentLang && (
                  <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
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
