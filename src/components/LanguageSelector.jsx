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
    // Force reload to ensure all content updates properly
    window.location.reload()
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
        className="flex items-center gap-3 rounded-2xl border-2 border-white/30 bg-white/20 backdrop-blur-sm px-4 py-3 text-white transition-all hover:bg-white/30 hover:border-white/50 shadow-lg animate-fadeIn"
      >
        {/* Globe Icon */}
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9 9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0118 0z" />
        </svg>
        
        {/* Current Language Flag and Name */}
        <div className="flex items-center">
          <span className="text-3xl">{selectedLanguage.flag}</span>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <span className="text-base font-semibold">{selectedLanguage.name}</span>
        </div>
        
        {/* Current Language Name in Black Circle */}
        <div className="ml-2 h-6 w-6 rounded-full bg-gray-900 flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">{selectedLanguage.code.toUpperCase()}</span>
        </div>
        
        {/* Down Arrow */}
        <svg 
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-3 w-72 rounded-2xl bg-white shadow-2xl border border-gray-200/60 overflow-hidden z-50 animate-slideInRight backdrop-blur-xl">
          <div className="py-2">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wider px-5 py-3 border-b border-gray-100 bg-gray-50/50">
              Select Language
            </div>
            <div className="py-2 max-h-96 overflow-y-auto scrollbar-hide">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`flex w-full items-center gap-4 px-5 py-4 text-base transition-all hover:bg-gray-50/80 ${
                    lang.code === currentLang 
                      ? 'text-indigo-700 font-bold bg-indigo-50/80 border-l-4 border-indigo-500' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <span className="text-3xl">{lang.flag}</span>
                  <div className="flex flex-col text-left flex-1">
                    <span className="font-bold">{lang.name}</span>
                    <span className="text-sm text-gray-500 font-medium">{lang.code.toUpperCase()}</span>
                  </div>
                  {lang.code === currentLang && (
                    <div className="h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center">
                      <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
