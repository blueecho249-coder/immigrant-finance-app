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
        className="flex items-center gap-2 rounded-lg border border-white/60 bg-white/10 backdrop-blur-sm px-4 py-2.5 text-white transition-all hover:bg-white/20 hover:border-white/80 shadow-md"
      >
        {/* Globe Icon */}
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9 9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0118 0z" />
        </svg>
        
        {/* Current Language Flag and Name */}
        <span className="text-sm font-semibold">{selectedLanguage.flag} {selectedLanguage.name}</span>
        
        {/* Down Arrow */}
        <svg 
          className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-lg bg-white shadow-xl border border-gray-200 overflow-hidden z-50">
          <div className="py-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-4 py-2 border-b border-gray-100">
              Select Language
            </div>
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.code)}
                  className={`flex w-full items-center gap-4 px-4 py-3 text-sm transition-colors hover:bg-gray-50 ${
                    lang.code === currentLang ? 'text-purple-700 font-medium bg-purple-50' : 'text-gray-700'
                  }`}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="flex flex-col text-left">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-xs text-gray-500">{lang.code.toUpperCase()}</span>
                  </div>
                  {lang.code === currentLang && (
                    <svg className="h-5 w-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
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
