import { useLanguage } from "../context/LanguageContext.jsx";
import { SUPPORTED_LANGUAGES } from "../data/translations.js";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-brand-purple-600 to-brand-teal-600 px-4 py-3 shadow-md">
      <div className="flex items-center justify-between gap-3 mx-auto max-w-phone">
        <div className="text-white font-bold text-lg tracking-tight">
          NewStart Finance
        </div>
        <div className="flex items-center gap-2">
          {SUPPORTED_LANGUAGES.map((l) => {
            const active = l.code === language;
            return (
              <button
                key={l.code}
                type="button"
                onClick={() => setLanguage(l.code)}
                className={[
                  "pressable-subtle min-h-[36px] min-w-[44px] rounded-full px-3 text-xs font-bold transition",
                  active
                    ? "bg-white/95 text-brand-purple-700 shadow-md"
                    : "bg-white/20 text-white hover:bg-white/30",
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

