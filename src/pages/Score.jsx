import { useEffect, useRef, useState } from "react";
import { useCreditScore } from "../context/CreditScoreContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import {
  getCreditScoreUi,
  SCORE_SLIDER_MAX,
  SCORE_SLIDER_MIN,
} from "../utils/creditScoreRanges.js";

const TIP_EMOJI = ["💡", "🎯", "✨"];

export default function Score() {
  const { score, setScore } = useCreditScore();
  const { tr } = useLanguage();
  const ui = getCreditScoreUi(score, tr);
  const [scoreInput, setScoreInput] = useState(() => String(score));
  const [displayScore, setDisplayScore] = useState(0);
  const startRef = useRef(0);
  const displayRef = useRef(0);

  useEffect(() => {
    setScoreInput(String(score));
  }, [score]);

  useEffect(() => {
    displayRef.current = displayScore;
  });

  useEffect(() => {
    const target = ui.scoreDisplay;
    if (startRef.current === target) {
      setDisplayScore(target);
      return;
    }
    const start = startRef.current;
    let startTime = null;
    const duration = start === 0 && target > 0 ? 900 : 420;
    let rafId;

    function easeOutCubic(t) {
      return 1 - (1 - t) ** 3;
    }

    function tick(now) {
      if (!startTime) startTime = now;
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      const v = Math.round(start + (target - start) * easeOutCubic(t));
      setDisplayScore(v);
      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        startRef.current = target;
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      startRef.current = displayRef.current;
    };
  }, [ui.scoreDisplay]);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-brand-purple-900">
          {tr.score.title}
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {tr.score.subtitle}
        </p>
      </header>

      <div className="rounded-2xl border border-brand-purple-100/90 bg-white p-6 shadow-card">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-teal-700">
          {tr.score.cardLabel}
        </p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <p
              className={`mt-1 text-5xl font-bold tabular-nums leading-none tracking-tight sm:text-6xl ${
                ui.scoreDisplay === 0 ? "text-slate-400" : "text-brand-purple-900"
              }`}
            >
              {ui.scoreDisplay === 0 ? "0" : displayScore}
            </p>
            <p className="mt-4 text-lg font-semibold text-slate-800">
              {ui.label}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              {ui.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-7">
          <div
            className={`h-3.5 overflow-hidden rounded-full ${ui.trackClass}`}
            role="presentation"
          >
            <div
              className={`h-full rounded-full transition-all duration-500 ease-out ${ui.fillClass}`}
              style={{
                width: `${ui.barPercent}%`,
                minWidth: ui.barPercent > 0 ? "4px" : undefined,
              }}
            />
          </div>
          <div className="mt-2.5 flex justify-between text-[10px] font-medium uppercase tracking-wide text-slate-400">
            <span>300</span>
            <span>850</span>
          </div>
        </div>
      </div>

      <section aria-labelledby="personalized-tips-heading" className="space-y-4">
        <h2
          id="personalized-tips-heading"
          className="text-xs font-semibold uppercase tracking-wider text-slate-500"
        >
          {tr.score.tipsHeading}
        </h2>
        <ul className="space-y-3">
          {ui.tips.map((tip, i) => (
            <li
              key={tip}
              className="flex gap-3 rounded-xl border border-slate-200/80 border-l-4 border-l-brand-teal-500 bg-white py-4 pl-4 pr-3 shadow-sm"
            >
              <span
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-teal-50 text-lg"
                aria-hidden
              >
                {TIP_EMOJI[i % TIP_EMOJI.length]}
              </span>
              <span className="text-sm leading-relaxed text-slate-700">
                {tip}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
        aria-labelledby="score-adjust-heading"
      >
        <h2
          id="score-adjust-heading"
          className="text-sm font-semibold text-slate-900"
        >
          {tr.score.previewHeading}
        </h2>
        <p className="mt-2 text-xs leading-relaxed text-slate-500">
          {tr.score.previewDescription}
        </p>
        <div className="mt-5">
          <label
            className="block text-sm font-medium text-slate-700"
            htmlFor="credit-score-slider"
          >
            {tr.score.scoreInputLabel}{" "}
            <span className="tabular-nums text-brand-purple-700">{score}</span>
          </label>
          <input
            id="credit-score-slider"
            type="range"
            min={SCORE_SLIDER_MIN}
            max={SCORE_SLIDER_MAX}
            step={1}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="mt-3 h-2.5 w-full cursor-pointer accent-brand-purple-600"
          />
        </div>
        <div className="mt-5 flex items-center gap-2">
          <label className="sr-only" htmlFor="credit-score-input">
            {tr.score.scoreInputLabel}
          </label>
          <input
            id="credit-score-input"
            type="number"
            min={SCORE_SLIDER_MIN}
            max={SCORE_SLIDER_MAX}
            value={scoreInput}
            onChange={(e) => {
              const v = e.target.value;
              setScoreInput(v);
              if (v === "") return;
              const n = Number(v);
              if (!Number.isNaN(n)) setScore(n);
            }}
            onBlur={() => {
              const n = Number(scoreInput);
              if (scoreInput === "" || Number.isNaN(n)) {
                setScore(0);
                setScoreInput("0");
                return;
              }
              setScore(n);
            }}
            className="min-h-[48px] w-full min-w-0 rounded-xl border border-slate-200 px-4 py-3 text-base tabular-nums text-slate-800 outline-none ring-brand-purple-500 focus:border-brand-purple-300 focus:ring-2"
          />
          <span className="shrink-0 text-xs text-slate-500">
            {SCORE_SLIDER_MIN}–{SCORE_SLIDER_MAX}
          </span>
        </div>
      </section>
    </div>
  );
}
