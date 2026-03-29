import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  getLessonById,
  getNextLessonId,
  LESSON_COUNT,
} from "../data/lessons.js";
import { useLessonProgress } from "../context/LessonProgressContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function LessonDetail() {
  const { lessonId } = useParams();
  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const { isComplete, markComplete } = useLessonProgress();
  const { tr, interpolate } = useLanguage();

  const alreadyDone = lesson ? isComplete(lesson.id) : false;
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    setSelectedIndex(null);
  }, [lessonId]);

  const answeredCorrectly = useMemo(() => {
    if (!lesson) return false;
    if (alreadyDone) return true;
    if (selectedIndex === null) return false;
    return selectedIndex === lesson.quiz.correctIndex;
  }, [alreadyDone, lesson, selectedIndex]);

  if (!lesson) {
    return <Navigate to="/learn" replace />;
  }

  const nextId = getNextLessonId(lesson.id);
  const localizedLesson = tr.lessons?.[lesson.id];
  const correctIndex = lesson.quiz.correctIndex;
  const question = localizedLesson?.quiz?.question ?? lesson.quiz.question;
  const options = localizedLesson?.quiz?.options ?? lesson.quiz.options;

  const wrongChoice =
    selectedIndex !== null &&
    !alreadyDone &&
    selectedIndex !== lesson.quiz.correctIndex;

  function handleOptionClick(index) {
    if (answeredCorrectly) return;
    setSelectedIndex(index);
    if (index === lesson.quiz.correctIndex) {
      markComplete(lesson.id);
    }
  }

  return (
    <div className="space-y-8">
      <Link
        to="/learn"
        className="pressable-subtle inline-flex items-center gap-1 text-sm font-medium text-brand-purple-700 hover:text-brand-purple-900"
      >
        <span aria-hidden>←</span> {tr.learn.detailLinkAllLessons}
      </Link>

      <header className="overflow-hidden rounded-2xl border border-brand-purple-100 bg-gradient-to-r from-brand-purple-600 to-brand-teal-600 p-5 text-white shadow-card">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide">
            {lesson.category}
          </span>
          {alreadyDone && (
            <span className="rounded-full bg-emerald-400/30 px-2.5 py-0.5 text-xs font-semibold">
              {tr.common.completed}
            </span>
          )}
        </div>
        <h1 className="mt-3 text-xl font-bold leading-tight">
          {localizedLesson?.title ?? lesson.title}
        </h1>
        <p className="mt-2 text-sm text-white/90">
          {localizedLesson?.subtitle ?? lesson.subtitle}
        </p>
      </header>

      <article className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-card">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          {tr.learn.detailInPlainEnglish}
        </h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
          {(localizedLesson?.content ?? lesson.content).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section
        className="rounded-2xl border border-brand-teal-500/20 bg-brand-teal-500/5 p-5"
        aria-labelledby="lesson-quiz-heading"
      >
        <h2
          id="lesson-quiz-heading"
          className="text-sm font-semibold text-brand-purple-900"
        >
          {tr.learn.detailQuickCheck}
        </h2>
        <p className="mt-3 text-sm text-slate-800">{question}</p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          {options.map((label, index) => {
            const isSelected = selectedIndex === index;
            const isCorrectOption = index === correctIndex;
            const showAsCorrect = answeredCorrectly && isCorrectOption;
            const showAsWrong =
              isSelected && wrongChoice && index === selectedIndex;
            const fadedWrongSibling =
              answeredCorrectly && !isCorrectOption && !showAsWrong;

            return (
              <button
                key={label}
                type="button"
                disabled={answeredCorrectly}
                onClick={() => handleOptionClick(index)}
                className={[
                  "pressable min-h-[48px] flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition disabled:cursor-default disabled:active:scale-100",
                  showAsCorrect
                    ? "bg-brand-teal-600 text-white ring-2 ring-brand-teal-400"
                    : showAsWrong
                      ? "border-2 border-amber-400 bg-amber-50 text-amber-950"
                      : fadedWrongSibling
                        ? "border-2 border-slate-200 bg-slate-50 text-slate-500"
                        : isSelected
                          ? "border-2 border-brand-purple-300 bg-brand-purple-50 text-brand-purple-900"
                          : "border-2 border-brand-purple-200 bg-white text-brand-purple-800 hover:border-brand-purple-300 hover:bg-brand-purple-50/80",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>

        {answeredCorrectly && (
          <div className="mt-4 space-y-4">
            <p
              className="rounded-lg bg-brand-teal-600/15 px-3 py-3 text-center text-sm font-semibold text-brand-teal-900"
              role="status"
              aria-live="polite"
            >
              <span className="text-brand-teal-800">{tr.common.correct}</span>{" "}
              {tr.common.correctSuffix}
            </p>
            {nextId ? (
              <Link
                to={`/learn/${nextId}`}
                className="pressable flex min-h-[48px] w-full items-center justify-center rounded-xl bg-brand-purple-600 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-purple-700"
              >
                {tr.learn.detailNextLesson}
              </Link>
            ) : (
              <Link
                to="/learn"
                className="pressable flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-brand-purple-200 bg-white py-3 text-sm font-semibold text-brand-purple-800 transition hover:bg-brand-purple-50"
              >
                {interpolate(tr.learn.detailBackToAllLessons, {
                  lessonCount: LESSON_COUNT,
                })}
              </Link>
            )}
          </div>
        )}

        {wrongChoice && (
          <p
            className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-center text-sm text-amber-950"
            role="status"
            aria-live="polite"
          >
            {tr.common.wrongTryOther}
          </p>
        )}
      </section>
    </div>
  );
}
