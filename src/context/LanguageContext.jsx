import { createContext, useContext, useEffect, useMemo, useState } from "react";
import translations, {
  SUPPORTED_LANGUAGES,
} from "../data/translations.js";

const STORAGE_KEY = "newcomer-finance-language";

const LanguageContext = createContext(null);

function safeReadLanguage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return "en";
    const isSupported = SUPPORTED_LANGUAGES.some((l) => l.code === raw);
    return isSupported ? raw : "en";
  } catch {
    return "en";
  }
}

function interpolate(template, vars) {
  if (typeof template !== "string") return template;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const v = vars?.[key];
    return v === undefined || v === null ? `{${key}}` : String(v);
  });
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() =>
    typeof window === "undefined" ? "en" : safeReadLanguage(),
  );

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const tr = translations[language] ?? translations.en;

  const setLanguage = (next) => {
    const isSupported = SUPPORTED_LANGUAGES.some((l) => l.code === next);
    setLanguageState(isSupported ? next : "en");
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      tr,
      t: tr, // alias for convenience
      interpolate: (template, vars) => interpolate(template, vars),
    }),
    [language, tr],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}

