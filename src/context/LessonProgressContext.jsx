import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "newcomer-finance-completed-lessons";

const LessonProgressContext = createContext(null);

function readStoredIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed)
      ? parsed.filter((id) => typeof id === "string")
      : [];
  } catch {
    return [];
  }
}

function writeStoredIds(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

export function LessonProgressProvider({ children }) {
  const [completedIds, setCompletedIds] = useState(readStoredIds);

  const isComplete = useCallback(
    (lessonId) => completedIds.includes(lessonId),
    [completedIds],
  );

  const markComplete = useCallback((lessonId) => {
    setCompletedIds((prev) => {
      if (prev.includes(lessonId)) return prev;
      const next = [...prev, lessonId];
      writeStoredIds(next);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      completedIds,
      completedCount: completedIds.length,
      isComplete,
      markComplete,
    }),
    [completedIds, isComplete, markComplete],
  );

  return (
    <LessonProgressContext.Provider value={value}>
      {children}
    </LessonProgressContext.Provider>
  );
}

export function useLessonProgress() {
  const ctx = useContext(LessonProgressContext);
  if (!ctx) {
    throw new Error(
      "useLessonProgress must be used within LessonProgressProvider",
    );
  }
  return ctx;
}
