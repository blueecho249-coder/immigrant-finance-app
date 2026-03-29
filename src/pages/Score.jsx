import { useEffect, useRef, useState } from "react";
import { useCreditScore } from "../context/CreditScoreContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import {
  getCreditScoreUi,
  SCORE_SLIDER_MAX,
  SCORE_SLIDER_MIN,
} from "../utils/creditScoreRanges.js";

const TIP_ICONS = [
  // Lightbulb
  <svg key="bulb" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.75V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.25A7 7 0 0 0 12 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  // Target
  <svg key="target" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>,
  // Star
  <svg key="star" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

// Score-based color mapping per requirements
function getScoreColors(score) {
  if (score <= 0) return { ring: "#94a3b8", track: "#e2e8f0", icon: "bg-slate-100 text-slate-500" }; // gray
  if (score < 580) return { ring: "#ef4444", track: "#fee2e2", icon: "bg-red-100 text-red-600" }; // red
  if (score < 670) return { ring: "#f97316", track: "#ffedd5", icon: "bg-orange-100 text-orange-600" }; // orange  
  if (score < 740) return { ring: "#eab308", track: "#fef9c3", icon: "bg-yellow-100 text-yellow-600" }; // yellow
  if (score < 800) return { ring: "#7c3aed", track: "#ede9fe", icon: "bg-violet-100 text-violet-600" }; // purple
  return { ring: "#14b8a6", track: "#ccfbf1", icon: "bg-teal-100 text-teal-600" }; // teal
}

function getCircleColor(ui, score) {
  return getScoreColors(score).ring;
}

function getTrackColor(ui, score) {
  return getScoreColors(score).track;
}

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

      <div className="flex flex-col items-center">
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-brand-teal-700 mb-6">
          {tr.score.cardLabel}
        </p>

        <div className="relative h-64 w-64">
          <svg className="absolute inset-0 h-full w-full drop-shadow-lg" viewBox="0 0 200 200">
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke={getTrackColor(ui, score)}
              strokeWidth="18"
            />
            <circle
              cx="100"
              cy="100"
              r="85"
              fill="none"
              stroke={getCircleColor(ui, score)}
              strokeWidth="18"
              strokeDasharray={`${(ui.barPercent / 100) * 534.07} 534.07`}
              strokeLinecap="round"
              className="transition-all duration-700 ease-out"
              style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p
              className={`text-7xl font-bold tabular-nums leading-none tracking-tight ${
                ui.scoreDisplay === 0 ? "text-slate-400" : "text-brand-purple-900"
              }`}
            >
              {ui.scoreDisplay === 0 ? "—" : displayScore}
            </p>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {ui.label}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm leading-relaxed text-slate-600 max-w-[280px]">
          {ui.subtitle}
        </p>
      </div>

      <section aria-labelledby="personalized-tips-heading" className="space-y-4">
        <h2
          id="personalized-tips-heading"
          className="text-xs font-semibold uppercase tracking-wider text-slate-500"
        >
          {tr.score.tipsHeading}
        </h2>
        <ul className="space-y-3">
          {ui.tips.map((tip, i) => {
            const colors = getScoreColors(score);
            return (
              <li
                key={tip}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 transition-all hover:shadow-md hover:ring-slate-300"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.icon}`}
                  aria-hidden
                >
                  {TIP_ICONS[i % TIP_ICONS.length]}
                </span>
                <span className="text-sm leading-relaxed text-slate-700 pt-2">
                  {tip}
                </span>
              </li>
            );
          })}
        </ul>
      </section>

      <section
        className="rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm"
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
            className="block text-sm font-semibold text-slate-800"
            htmlFor="credit-score-slider"
          >
            {tr.score.scoreInputLabel}{" "}
            <span className="tabular-nums text-brand-purple-700 font-bold">{score}</span>
          </label>
          <input
            id="credit-score-slider"
            type="range"
            min={SCORE_SLIDER_MIN}
            max={SCORE_SLIDER_MAX}
            step={1}
            value={score}
            onChange={(e) => setScore(Number(e.target.value))}
            className="mt-3 h-3 w-full cursor-pointer rounded-full accent-brand-purple-600"
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
