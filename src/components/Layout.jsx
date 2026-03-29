import { Outlet, useLocation } from "react-router-dom";
import { CreditScoreProvider } from "../context/CreditScoreContext.jsx";
import { LessonProgressProvider } from "../context/LessonProgressContext.jsx";
import { LanguageProvider } from "../context/LanguageContext.jsx";
import BottomNav from "./BottomNav.jsx";
import LanguageSelector from "./LanguageSelector.jsx";

export default function Layout() {
  const location = useLocation();

  return (
    <LessonProgressProvider>
      <CreditScoreProvider>
        <LanguageProvider>
          <div className="mx-auto min-h-dvh w-full max-w-phone px-0 sm:px-1">
            <div
              className="relative flex min-h-dvh flex-col overflow-hidden bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_12px_48px_-16px_rgba(91,33,182,0.18),0_8px_32px_-12px_rgba(15,23,42,0.12)] sm:min-h-[min(100dvh,920px)] sm:rounded-2xl sm:shadow-[0_0_0_1px_rgba(15,23,42,0.06),0_16px_56px_-20px_rgba(91,33,182,0.2),0_10px_40px_-16px_rgba(15,23,42,0.14)]"
            >
              <div className="sticky top-0 z-40">
                <LanguageSelector />
              </div>

              <main
                key={location.pathname}
                className="animate-page-in flex-1 overflow-y-auto px-4 pb-32 pt-5 sm:px-5 sm:pb-32 sm:pt-6 min-[375px]:px-5"
              >
                <Outlet />
              </main>

              <BottomNav />
            </div>
          </div>
        </LanguageProvider>
      </CreditScoreProvider>
    </LessonProgressProvider>
  );
}
