import { motion } from 'framer-motion'
import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'
import DesktopNav from './DesktopNav.jsx'

export default function Layout({ children, onLanguageChange }) {
  return (
    <>
      {/* Desktop Navigation - visible on screens 768px and wider */}
      <div className="hidden md:block">
        <DesktopNav onLanguageChange={onLanguageChange} />
        <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#eef2ff] pt-28 relative overflow-hidden">
          {/* Floating background shapes for desktop */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div 
              animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-32 left-[10%] w-[30rem] h-[30rem] bg-purple-500/5 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ y: [0, 50, 0], rotate: [0, -15, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-[5%] w-[35rem] h-[35rem] bg-teal-500/5 rounded-full blur-3xl"
            />
            <motion.div 
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[40%] right-[25%] w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"
            />
          </div>
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
            <div className="animate-fadeInUp glass-card rounded-3xl p-6 sm:p-8">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Layout - visible on screens smaller than 768px */}
      <div className="md:hidden">
        <div className="mx-auto min-h-dvh w-full max-w-phone px-0 sm:px-1">
          <div className="relative flex min-h-dvh flex-col overflow-hidden bg-gradient-to-b from-[#f8fafc] to-[#eef2ff] shadow-2xl sm:min-h-[min(100dvh,920px)] sm:rounded-3xl sm:shadow-3xl">
            {/* Floating shapes for mobile */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 -left-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"
              />
              <motion.div 
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-40 -right-20 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"
              />
            </div>
            
            <Header onLanguageChange={onLanguageChange} />
            <main className="flex-1 overflow-y-auto px-4 pb-36 pt-6 sm:px-5 sm:pb-36 sm:pt-8 min-[375px]:px-5 relative z-10">
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
