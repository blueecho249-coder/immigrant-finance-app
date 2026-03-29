import { useMemo, useState } from "react";
import { parseMoneyInput } from "../utils/parseMoneyInput.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const fieldConfig = [
  { key: "income" },
  { key: "rent" },
  { key: "groceries" },
  { key: "transport" },
  { key: "phone" },
  { key: "other" },
];

const expenseKeys = ["rent", "groceries", "transport", "phone", "other"];

/** Hex colors for gradient bar (match Tailwind palette) */
const barHex = {
  rent: "#8b5cf6",
  groceries: "#14b8a6",
  transport: "#f59e0b",
  phone: "#0ea5e9",
  other: "#94a3b8",
};

const inputClass =
  "mt-2 block w-full min-h-[48px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-brand-purple-500 placeholder:text-slate-400 focus:border-brand-purple-300 focus:ring-2";

function buildIncomeBarGradient(segments, barTotalPct) {
  const positive = segments.filter((s) => s.amount > 0);
  if (positive.length === 0 || barTotalPct <= 0) return null;
  const cap = Math.max(barTotalPct, 0.0001);
  let acc = 0;
  const stops = [];
  for (const seg of positive) {
    const share = (seg.pctOfIncome / cap) * 100;
    const c = barHex[seg.key];
    stops.push(`${c} ${acc}%`, `${c} ${acc + share}%`);
    acc += share;
  }
  return `linear-gradient(to right, ${stops.join(", ")})`;
}

export default function BudgetCalculator() {
  const { tr } = useLanguage();
  const [raw, setRaw] = useState({
    income: "",
    rent: "",
    groceries: "",
    transport: "",
    phone: "",
    other: "",
  });

  const numbers = useMemo(() => {
    const income = parseMoneyInput(raw.income);
    const rent = parseMoneyInput(raw.rent);
    const groceries = parseMoneyInput(raw.groceries);
    const transport = parseMoneyInput(raw.transport);
    const phone = parseMoneyInput(raw.phone);
    const other = parseMoneyInput(raw.other);
    const expensesByKey = { rent, groceries, transport, phone, other };
    const totalExpenses = expenseKeys.reduce(
      (s, k) => s + expensesByKey[k],
      0,
    );
    const leftOver = income - totalExpenses;
    return { income, expensesByKey, totalExpenses, leftOver };
  }, [raw]);

  const { income, expensesByKey, totalExpenses, leftOver } = numbers;

  const barSegments = useMemo(() => {
    if (income <= 0) return [];
    return expenseKeys.map((key) => ({
      key,
      label: tr.tools.budget.fields[key],
      amount: expensesByKey[key],
      pctOfIncome: (expensesByKey[key] / income) * 100,
    }));
  }, [income, expensesByKey, tr.tools.budget.fields]);

  const barTotalPct =
    income > 0
      ? expenseKeys.reduce((s, k) => s + (expensesByKey[k] / income) * 100, 0)
      : 0;

  const barBackground = useMemo(
    () => buildIncomeBarGradient(barSegments, barTotalPct),
    [barSegments, barTotalPct],
  );

  function updateField(key, value) {
    setRaw((prev) => ({ ...prev, [key]: value }));
  }

  const fmt = (n) =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });

  return (
    <article className="rounded-2xl border border-brand-purple-100 bg-white p-5 shadow-card">
      <div className="grid gap-5">
        {fieldConfig.map(({ key }) => (
          <div key={key}>
            <label
              className="block text-sm font-semibold text-slate-800"
              htmlFor={`budget-${key}`}
            >
              {tr.tools.budget.fields[key]}
            </label>
            <input
              id={`budget-${key}`}
              type="text"
              inputMode="decimal"
              autoComplete="off"
              enterKeyHint="done"
              placeholder="0"
              value={raw[key]}
              onChange={(e) => updateField(key, e.target.value)}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 space-y-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            {tr.tools.budget.results.totalExpenses}
          </span>
          <span className="tabular-nums text-base font-semibold text-slate-900">
            ${fmt(totalExpenses)}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-600">
            {tr.tools.budget.results.leftOver}
          </span>
          <span
            className={[
              "tabular-nums text-base font-bold",
              leftOver >= 0 ? "text-emerald-600" : "text-red-600",
            ].join(" ")}
          >
            ${fmt(leftOver)}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-semibold text-slate-800">
          {tr.tools.budget.breakdown.title}
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          {tr.tools.budget.breakdown.description}
        </p>
        {income <= 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            {tr.tools.budget.breakdown.empty}
          </p>
        ) : (
          <>
            <div
              className="mt-3 h-4 w-full overflow-hidden rounded-full bg-slate-200 shadow-inner"
              style={
                barBackground
                  ? { backgroundImage: barBackground }
                  : undefined
              }
              role="img"
              aria-label={tr.tools.budget.breakdown.description}
            />
            {barTotalPct > 100 && (
              <p className="mt-2 text-xs font-medium text-amber-800">
                {tr.tools.budget.breakdown.over100}
              </p>
            )}
            <ul className="mt-4 space-y-2">
              {barSegments.map((seg) => (
                <li
                  key={seg.key}
                  className="flex items-center justify-between gap-2 text-sm"
                >
                  <span className="flex min-w-0 items-center gap-2 text-slate-700">
                    <span
                      className="h-2.5 w-2.5 shrink-0 rounded-sm"
                      style={{ backgroundColor: barHex[seg.key] }}
                      aria-hidden
                    />
                    <span className="truncate">{seg.label}</span>
                  </span>
                  <span className="shrink-0 tabular-nums font-medium text-slate-900">
                    {seg.pctOfIncome.toFixed(1)}%
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}
