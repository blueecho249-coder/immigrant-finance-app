/**
 * Maps a stored score (0 = none yet, otherwise typical FICO-style 300–850)
 * to UI: label, bar colors, and three tips.
 */

/** Visual fill on the bar: 0 = empty; otherwise 0–100 along 300→850 scale. */
export function scoreToBarPercent(score) {
  if (score <= 0) return 0;
  const clamped = Math.min(850, Math.max(300, score));
  return Math.round(((clamped - 300) / (850 - 300)) * 100);
}

/**
 * Scores 1–299: treat as “building / poor” for color and tips (not gray).
 */
export function getCreditScoreUi(score, tr) {
  const s = typeof score === "number" && !Number.isNaN(score) ? score : 0;
  const clamped = Math.min(850, Math.max(0, Math.round(s)));

  if (clamped === 0) {
    const range = tr?.score?.scoreRanges?.none;
    return {
      scoreDisplay: 0,
      label: range?.label ?? "No score yet",
      subtitle: range?.subtitle ?? "Building your history",
      rangeKey: "none",
      barPercent: 0,
      trackClass: "bg-slate-200",
      fillClass: "bg-slate-400",
      tips: range?.tips ?? [],
    };
  }

  if (clamped < 300) {
    const range = tr?.score?.scoreRanges?.poor;
    return {
      scoreDisplay: clamped,
      label: range?.label ?? "Poor",
      subtitle: range?.subtitle ?? "Early range—focus on on-time payments",
      rangeKey: "poor",
      barPercent: Math.max(4, Math.round((clamped / 300) * 12)),
      trackClass: "bg-red-100",
      fillClass: "bg-red-500",
      tips: range?.tips ?? [],
    };
  }

  if (clamped <= 579) {
    const range = tr?.score?.scoreRanges?.poor;
    return {
      scoreDisplay: clamped,
      label: range?.label ?? "Poor",
      subtitle: range?.subtitle ?? "There is room to grow with steady habits",
      rangeKey: "poor",
      barPercent: scoreToBarPercent(clamped),
      trackClass: "bg-red-100",
      fillClass: "bg-red-500",
      tips: range?.tips ?? [],
    };
  }

  if (clamped <= 669) {
    const range = tr?.score?.scoreRanges?.fair;
    return {
      scoreDisplay: clamped,
      label: range?.label ?? "Fair",
      subtitle: range?.subtitle ?? "You are on the right track",
      rangeKey: "fair",
      barPercent: scoreToBarPercent(clamped),
      trackClass: "bg-orange-100",
      fillClass: "bg-orange-500",
      tips: range?.tips ?? [],
    };
  }

  if (clamped <= 739) {
    const range = tr?.score?.scoreRanges?.good;
    return {
      scoreDisplay: clamped,
      label: range?.label ?? "Good",
      subtitle: range?.subtitle ?? "Solid credit for many goals",
      rangeKey: "good",
      barPercent: scoreToBarPercent(clamped),
      trackClass: "bg-yellow-100",
      fillClass: "bg-yellow-500",
      tips: range?.tips ?? [],
    };
  }

  if (clamped <= 799) {
    const range = tr?.score?.scoreRanges?.veryGood;
    return {
      scoreDisplay: clamped,
      label: range?.label ?? "Very good",
      subtitle: range?.subtitle ?? "Lenders usually see you as low risk",
      rangeKey: "veryGood",
      barPercent: scoreToBarPercent(clamped),
      trackClass: "bg-violet-100",
      fillClass: "bg-violet-600",
      tips: range?.tips ?? [],
    };
  }

  const range = tr?.score?.scoreRanges?.excellent;
  return {
    scoreDisplay: clamped,
    label: range?.label ?? "Excellent",
    subtitle:
      range?.subtitle ?? "Top-tier range—keep protecting your record",
    rangeKey: "excellent",
    barPercent: scoreToBarPercent(clamped),
    trackClass: "bg-teal-100",
    fillClass: "bg-teal-500",
    tips: range?.tips ?? [],
  };
}

export const SCORE_SLIDER_MIN = 0;
export const SCORE_SLIDER_MAX = 850;
