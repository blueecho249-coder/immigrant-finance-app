import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'
import DesktopNav from './DesktopNav.jsx'

export default function Layout({ children, onLanguageChange }) {
  return (
    <>
      {/* Desktop Navigation - visible on screens 768px and wider */}
      <div className="hidden md:block">
        <DesktopNav onLanguageChange={onLanguageChange} />
        <main className="min-h-screen bg-gray-50 pt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Layout - visible on screens smaller than 768px */}
      <div className="md:hidden">
        <div className="mx-auto min-h-dvh w-full max-w-phone px-0 sm:px-1">
          <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
            <Header onLanguageChange={onLanguageChange} />
            <main className="flex-1 overflow-y-auto px-4 pb-32 pt-5 sm:px-5 sm:pb-32 sm:pt-6 min-[375px]:px-5">
              {children}
            </main>
            <BottomNav />
          </div>
        </div>
      </div>
    </>
  )
}
