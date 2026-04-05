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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b-2 border-gray-200/60 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-14 w-14 rounded-2xl gradient-header flex items-center justify-center shadow-xl transform transition-all group-hover:scale-110">
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-3xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors tracking-tight">NewFinance</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-lg font-black transition-all hover:scale-105 px-8 py-4 rounded-2xl tracking-wide ${
                    isActive 
                      ? 'text-indigo-600 bg-indigo-50/80 shadow-xl border-2 border-indigo-300 transform scale-105' 
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50/60 border-2 border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Language Selector */}
          <LanguageSelector onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </nav>
  )
}
