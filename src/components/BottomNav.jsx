import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/learn', label: 'Learn', icon: '📚' },
  { path: '/score', label: 'Score', icon: '📊' },
  { path: '/tools', label: 'Tools', icon: '🔧' },
  { path: '/offers', label: 'Offers', icon: '🎁' },
  { path: '/account', label: 'Account', icon: '👤' }
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-phone">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center px-3 py-2 text-xs transition-colors ${
                location.pathname === item.path
                  ? 'text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
