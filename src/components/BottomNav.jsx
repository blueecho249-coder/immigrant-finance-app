import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const tabs = [
  { to: "/learn", labelKey: "learn", emoji: "📖", end: false },
  { to: "/score", labelKey: "score", emoji: "📊", end: true },
  { to: "/tools", labelKey: "tools", emoji: "🔧", end: true },
  { to: "/offers", labelKey: "offers", emoji: "🎁", end: true },
];

export default function BottomNav() {
  const { tr } = useLanguage();
  return (
    <nav
      className="fixed bottom-0 left-1/2 z-50 w-full max-w-phone -translate-x-1/2 border-t border-slate-200/90 bg-white/98 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_32px_-12px_rgba(15,23,42,0.1)] backdrop-blur-md"
      aria-label="Main navigation"
    >
      <ul className="flex items-stretch justify-around gap-1">
        {tabs.map(({ to, labelKey, emoji, end }) => (
          <li key={to} className="min-w-0 flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                [
                  "pressable flex min-h-[56px] flex-col items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-[11px] font-semibold leading-tight transition-all min-[375px]:text-xs",
                  isActive
                    ? "bg-gradient-to-b from-brand-purple-600 to-brand-purple-700 text-white shadow-md shadow-brand-purple-600/30 ring-2 ring-brand-purple-300/20"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-700",
                ].join(" ")
              }
            >
              <span className="text-xl leading-none" aria-hidden>
                {emoji}
              </span>
              <span className="break-words">{tr.nav[labelKey]}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
