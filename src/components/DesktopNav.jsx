import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
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
                  className="relative text-base font-semibold transition-all duration-300 px-6 py-3 rounded-xl tracking-wide group"
                >
                  <motion.span 
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive ? 'text-indigo-600' : 'text-gray-600 group-hover:text-indigo-600'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Hover background */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl ${isActive ? 'bg-indigo-50/80' : 'bg-gray-50/60'}`}
                    initial={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                    animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Active indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Subtle shadow on active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 rounded-xl shadow-lg shadow-indigo-500/10 -z-10"
                    />
                  )}
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
