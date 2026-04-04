import { Outlet } from 'react-router-dom'
import Header from './Header.jsx'
import BottomNav from './BottomNav.jsx'

export default function Layout({ children }) {
  return (
    <div className="mx-auto min-h-dvh w-full max-w-phone px-0 sm:px-1">
      <div className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-phone sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-phone-sm">
        <Header />
        <main className="flex-1 overflow-y-auto px-4 pb-32 pt-5 sm:px-5 sm:pb-32 sm:pt-6 min-[375px]:px-5">
          <Outlet />
        </main>
        <BottomNav />
      </div>
    </div>
  )
}
