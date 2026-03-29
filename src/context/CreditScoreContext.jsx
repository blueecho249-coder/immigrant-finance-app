import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  SCORE_SLIDER_MAX,
  SCORE_SLIDER_MIN,
} from "../utils/creditScoreRanges.js";

const STORAGE_KEY = "newcomer-finance-credit-score";

const CreditScoreContext = createContext(null);

function readStoredScore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null || raw === "") return 0;
    const n = Number.parseInt(raw, 10);
    if (Number.isNaN(n)) return 0;
    return Math.min(SCORE_SLIDER_MAX, Math.max(SCORE_SLIDER_MIN, n));
  } catch {
    return 0;
  }
}

function writeStoredScore(value) {
  localStorage.setItem(STORAGE_KEY, String(value));
}

export function CreditScoreProvider({ children }) {
  const [score, setScoreState] = useState(readStoredScore);

  const setScore = useCallback((next) => {
    setScoreState((prev) => {
      const raw = typeof next === "function" ? next(prev) : next;
      const n = Number(raw);
      const clamped = Number.isNaN(n)
        ? prev
        : Math.min(SCORE_SLIDER_MAX, Math.max(SCORE_SLIDER_MIN, Math.round(n)));
      writeStoredScore(clamped);
      return clamped;
    });
  }, []);

  const value = useMemo(() => ({ score, setScore }), [score, setScore]);

  return (
    <CreditScoreContext.Provider value={value}>
      {children}
    </CreditScoreContext.Provider>
  );
}

export function useCreditScore() {
  const ctx = useContext(CreditScoreContext);
  if (!ctx) {
    throw new Error("useCreditScore must be used within CreditScoreProvider");
  }
  return ctx;
}
