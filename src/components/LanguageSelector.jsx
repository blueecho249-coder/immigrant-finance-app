import { useLanguage } from "../context/LanguageContext.jsx";
import { SUPPORTED_LANGUAGES } from "../data/translations.js";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center justify-between gap-3 px-2">
      <div className="flex items-center gap-2">
        {SUPPORTED_LANGUAGES.map((l) => {
          const active = l.code === language;
          return (
            <button
              key={l.code}
              type="button"
              onClick={() => setLanguage(l.code)}
              className={[
                "pressable-subtle min-h-[38px] min-w-[46px] rounded-xl border px-3 text-sm font-bold transition",
                active
                  ? "border-brand-purple-200 bg-brand-purple-50 text-brand-purple-700 ring-2 ring-brand-purple-200/70"
                  : "border-slate-200 bg-white/70 text-slate-600 hover:bg-white",
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
  );
}

