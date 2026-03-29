import BudgetCalculator from "../components/BudgetCalculator.jsx";
import CreditCardPayoffCalculator from "../components/CreditCardPayoffCalculator.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Tools() {
  const { tr } = useLanguage();
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-brand-purple-900">
          {tr.tools.title}
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {tr.tools.subtitle}
        </p>
      </header>

      <section className="space-y-4" aria-labelledby="budget-calculator-title">
        <div className="space-y-1.5">
          <h2
            id="budget-calculator-title"
            className="text-lg font-semibold text-slate-900"
          >
            {tr.tools.budget.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            {tr.tools.budget.description}
          </p>
        </div>
        <BudgetCalculator />
      </section>

      <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <section
        className="space-y-4"
        aria-labelledby="payoff-calculator-title"
      >
        <div className="space-y-1.5">
          <h2
            id="payoff-calculator-title"
            className="text-lg font-semibold text-slate-900"
          >
            {tr.tools.payoff.title}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600">
            {tr.tools.payoff.description}
          </p>
        </div>
        <CreditCardPayoffCalculator />
      </section>
    </div>
  );
}
