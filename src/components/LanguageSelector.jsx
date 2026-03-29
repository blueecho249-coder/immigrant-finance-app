import { useLanguage } from "../context/LanguageContext.jsx";
import { SUPPORTED_LANGUAGES } from "../data/translations.js";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-brand-purple-600 via-brand-purple-500 to-brand-teal-500 px-4 py-4 shadow-lg">
      <div className="flex items-center justify-between gap-3 mx-auto max-w-phone">
        <div className="text-white font-bold text-xl tracking-tight drop-shadow-sm">
          NewStart Finance
        </div>
        <div className="flex items-center gap-1.5">
          {SUPPORTED_LANGUAGES.map((l) => {
            const active = l.code === language;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={[
                  "pressable-subtle min-h-[32px] min-w-[40px] rounded-full px-2.5 text-[11px] font-semibold transition-all duration-200",
                  active
                    ? "bg-white text-brand-purple-700 shadow-md scale-105"
                    : "bg-white/15 text-white/90 hover:bg-white/25 hover:text-white",
                ].join(" ")}
                aria-pressed={active}
                aria-label={l.label}
                title={l.label}
              >
                {l.buttonText}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

