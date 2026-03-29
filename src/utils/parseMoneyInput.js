/** Parses a loose numeric string (allows commas); returns 0 if empty/invalid. */
export function parseMoneyInput(raw) {
  if (raw === "" || raw === null || raw === undefined) return 0;
  const cleaned = String(raw).replace(/,/g, "").trim();
  const n = Number.parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}
