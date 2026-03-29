import { Link } from "react-router-dom";
import { lessons, LESSON_COUNT } from "../data/lessons.js";
import { useLessonProgress } from "../context/LessonProgressContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const categoryStyles = {
  Credit: "bg-violet-100 text-violet-800 ring-violet-200",
  Banking: "bg-sky-100 text-sky-800 ring-sky-200",
  Housing: "bg-amber-100 text-amber-900 ring-amber-200",
  Taxes: "bg-emerald-100 text-emerald-900 ring-emerald-200",
  Saving: "bg-teal-100 text-teal-900 ring-teal-200",
};

const categoryBorder = {
  Credit: "border-l-[5px] border-l-violet-500",
  Banking: "border-l-[5px] border-l-sky-500",
  Housing: "border-l-[5px] border-l-amber-500",
  Taxes: "border-l-[5px] border-l-emerald-500",
  Saving: "border-l-[5px] border-l-teal-500",
};

function categoryClass(category) {
  return categoryStyles[category] ?? "bg-slate-100 text-slate-700 ring-slate-200";
}

function categoryBorderClass(category) {
  return categoryBorder[category] ?? "border-l-slate-400";
}

export default function Learn() {
  const { completedCount, isComplete } = useLessonProgress();
  const { tr, interpolate } = useLanguage();
  const pct = Math.round((completedCount / LESSON_COUNT) * 100);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-brand-purple-900">
          {tr.learn.title}
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {tr.learn.subtitle}
        </p>
      </header>

      <section
        className="rounded-2xl border border-brand-purple-100/80 bg-white p-5 shadow-card"
        aria-labelledby="progress-heading"
      >
        <h2
          id="progress-heading"
          className="text-base font-semibold text-slate-900"
        >
          {tr.learn.progressTitle}
        </h2>
        <p className="mt-2 text-sm font-medium text-slate-700">
          {interpolate(tr.learn.progressText, {
            completedCount,
            lessonCount: LESSON_COUNT,
          })}
        </p>
        <div
          className="mt-4 h-3.5 overflow-hidden rounded-full bg-slate-100 shadow-inner"
          role="progressbar"
          aria-valuenow={completedCount}
          aria-valuemin={0}
          aria-valuemax={LESSON_COUNT}
          aria-label={`${completedCount} of ${LESSON_COUNT} lessons completed`}
        >
          <div
            key={completedCount}
            className="animate-progress-shine h-full rounded-full bg-gradient-to-r from-brand-purple-500 to-brand-teal-500 transition-[width] duration-700 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
      </section>

      <section aria-labelledby="lessons-list-heading" className="space-y-4">
        <h2
          id="lessons-list-heading"
          className="text-xs font-semibold uppercase tracking-wider text-slate-500"
        >
          {tr.learn.allLessonsTitle}
        </h2>
        <ul className="space-y-4">
          {lessons.map((lesson) => {
            const done = isComplete(lesson.id);
            const localized = tr.lessons?.[lesson.id];
            return (
              <li key={lesson.id}>
                <Link
                  to={`/learn/${lesson.id}`}
                  className={`pressable-subtle block rounded-2xl border border-y border-r border-slate-200/90 bg-white py-4 pl-5 pr-4 shadow-sm transition hover:border-brand-purple-200 hover:shadow-md ${categoryBorderClass(lesson.category)}`}
                >
                  <div className="flex gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset ${categoryClass(lesson.category)}`}
                        >
                          {lesson.category}
                        </span>
                      </div>
                      <h3 className="mt-2.5 font-semibold leading-snug text-slate-900">
                        {localized?.title ?? lesson.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {localized?.subtitle ?? lesson.subtitle}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end justify-start pt-0.5">
                      {done ? (
                        <span
                          key={`${lesson.id}-done`}
                          className="animate-check-pop flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white shadow-md shadow-emerald-500/25"
                          aria-label={tr.common.completed}
                          title={tr.common.completed}
                        >
                          <svg
                            width={22}
                            height={22}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2.5}
                            aria-hidden
                          >
                            <path
                              d="M20 6L9 17l-5-5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="mt-1 text-lg text-slate-300"
                          aria-hidden
                        >
                          →
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
