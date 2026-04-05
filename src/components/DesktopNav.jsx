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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-600 to-teal-500 flex items-center justify-center">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white">NewFinance</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-600 pb-1 ${
                    isActive ? 'text-indigo-600 border-indigo-600' : 'text-gray-700'
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
