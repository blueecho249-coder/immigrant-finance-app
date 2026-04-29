import { Link, useLocation } from 'react-router-dom'
import LanguageSelector from './LanguageSelector.jsx'

const navItems = [
  { path: '/learn', label: 'Learn' },
  { path: '/score', label: 'Score' },
  { path: '/tools', label: 'Tools' },
  { path: '/offers', label: 'Offers' },
  { path: '/account', label: 'Account' }
]

export default function DesktopNav({ onLanguageChange }) {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-gray-200/40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-teal-500 flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              <svg className="h-7 w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors tracking-tight">NewFinance</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-semibold transition-all duration-300 hover:scale-105 px-6 py-3 rounded-xl tracking-wide ${
                    isActive 
                      ? 'text-indigo-600 bg-indigo-50/80 shadow-lg border border-indigo-200 transform scale-105' 
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50/60 border border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Language Selector */}
          <div className="ml-4">
            <LanguageSelector onLanguageChange={onLanguageChange} />
          </div>
        </div>
      </div>
    </nav>
  )
}
