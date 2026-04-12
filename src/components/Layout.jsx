import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'
import DesktopNav from './DesktopNav.jsx'

export default function Layout({ children, onLanguageChange }) {
  return (
    <>
      {/* Desktop Navigation - visible on screens 768px and wider */}
      <div className="hidden md:block">
        <DesktopNav onLanguageChange={onLanguageChange} />
        <main className="min-h-screen bg-gradient-to-br from-gray-50/50 to-gray-100/50 pt-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="animate-fadeInUp glass-card rounded-3xl p-6 sm:p-8">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Layout - visible on screens smaller than 768px */}
      <div className="md:hidden">
        <div className="mx-auto min-h-dvh w-full max-w-phone px-0 sm:px-1">
          <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-2xl sm:min-h-[min(100dvh,920px)] sm:rounded-3xl sm:shadow-3xl">
            <Header onLanguageChange={onLanguageChange} />
            <main className="flex-1 overflow-y-auto px-4 pb-36 pt-6 sm:px-5 sm:pb-36 sm:pt-8 min-[375px]:px-5 bg-gradient-to-b from-white to-gray-50/30">
              <div className="animate-fadeInUp">
                {children}
              </div>
            </main>
            <BottomNav />
          </div>
        </div>
      </div>
    </>
  )
}
