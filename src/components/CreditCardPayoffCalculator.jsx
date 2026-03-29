import { useMemo, useState } from "react";
import { parseMoneyInput } from "../utils/parseMoneyInput.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const inputClass =
  "mt-2 block w-full min-h-[48px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none ring-brand-purple-500 placeholder:text-slate-400 focus:border-brand-purple-300 focus:ring-2";

function computePayoff(balance, aprPercent, monthlyPayment) {
  const b0 = balance;
  const aprSafe = Math.max(0, aprPercent);
  const mr = aprSafe / 12 / 100;

  if (b0 <= 0) {
    return {
      months: 0,
      totalInterest: 0,
      totalPaid: 0,
      paymentTooLow: false,
    };
  }

  if (monthlyPayment <= 0) {
    return {
      months: null,
      totalInterest: null,
      totalPaid: null,
      paymentTooLow: true,
    };
  }

  const firstMonthInterest = b0 * mr;
  if (monthlyPayment <= firstMonthInterest + 1e-9) {
    return {
      months: null,
      totalInterest: null,
      totalPaid: null,
      paymentTooLow: true,
    };
  }

  let bal = b0;
  let totalInterest = 0;
  let totalPaid = 0;
  let months = 0;
  const maxMonths = 1200;

  while (bal > 0.005 && months < maxMonths) {
    const interest = bal * mr;
    totalInterest += interest;
    const pay = Math.min(monthlyPayment, bal + interest);
    if (pay <= interest + 1e-9) {
      return {
        months: null,
        totalInterest: null,
        totalPaid: null,
        paymentTooLow: true,
      };
    }
    totalPaid += pay;
    bal = bal + interest - pay;
    months += 1;
  }

  if (months >= maxMonths) {
    return {
      months: null,
      totalInterest: null,
      totalPaid: null,
      paymentTooLow: true,
    };
  }

  return {
    months,
    totalInterest,
    totalPaid,
    paymentTooLow: false,
  };
}

export default function CreditCardPayoffCalculator() {
  const { tr } = useLanguage();
  const [balanceRaw, setBalanceRaw] = useState("");
  const [aprRaw, setAprRaw] = useState("19.99");
  const [paymentRaw, setPaymentRaw] = useState("");

  const result = useMemo(() => {
    const balance = parseMoneyInput(balanceRaw);
    const apr = parseMoneyInput(aprRaw);
    const payment = parseMoneyInput(paymentRaw);
    return computePayoff(balance, apr, payment);
  }, [balanceRaw, aprRaw, paymentRaw]);

  const fmt = (n) =>
    n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const balanceNum = parseMoneyInput(balanceRaw);

  return (
    <article className="rounded-2xl border border-brand-teal-500/25 bg-white p-6 shadow-card">
      <div className="grid gap-5">
        <div>
          <label
            className="block text-sm font-semibold text-slate-800 mb-1"
            htmlFor="payoff-balance"
          >
            {tr.tools.payoff.fields.balance}
          </label>
          <input
            id="payoff-balance"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            enterKeyHint="done"
            placeholder="0"
            value={balanceRaw}
            onChange={(e) => setBalanceRaw(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-slate-800 mb-1"
            htmlFor="payoff-apr"
          >
            {tr.tools.payoff.fields.apr}
          </label>
          <input
            id="payoff-apr"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            enterKeyHint="done"
            placeholder="19.99"
            value={aprRaw}
            onChange={(e) => setAprRaw(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label
            className="block text-sm font-semibold text-slate-800 mb-1"
            htmlFor="payoff-payment"
          >
            {tr.tools.payoff.fields.payment}
          </label>
          <input
            id="payoff-payment"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            enterKeyHint="done"
            placeholder="0"
            value={paymentRaw}
            onChange={(e) => setPaymentRaw(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      {result.paymentTooLow && balanceNum > 0 && (
        <p
          className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800"
          role="alert"
        >
          {tr.tools.payoff.warning}.{" "}
          <span className="font-normal">{tr.tools.payoff.warningDetail}</span>
        </p>
      )}

      <div className="mt-7 space-y-3 rounded-xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-emerald-50/50 p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-800">
          {tr.tools.payoff.results.heading}
        </h3>
        {!result.paymentTooLow && result.months !== null ? (
          <>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                {tr.tools.payoff.results.months}
              </span>
              <span className="tabular-nums text-base font-semibold text-slate-900">
                {result.months}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                {tr.tools.payoff.results.interest}
              </span>
              <span className="tabular-nums text-base font-semibold text-slate-900">
                ${fmt(result.totalInterest)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">
                {tr.tools.payoff.results.totalPaid}
              </span>
              <span className="tabular-nums text-base font-semibold text-slate-900">
                ${fmt(result.totalPaid)}
              </span>
            </div>
          </>
        ) : (
          <p className="text-sm text-slate-500">
            {balanceNum <= 0
              ? tr.tools.payoff.results.emptyBalance
              : result.paymentTooLow
                ? tr.tools.payoff.results.tooLow
                : tr.tools.payoff.results.default}
          </p>
        )}
      </div>
    </article>
  );
}
