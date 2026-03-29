import { useLanguage } from "../context/LanguageContext.jsx";

const partners = [
  {
    id: "neo",
    partnerName: "Neo Financial",
    productName: "Secured Credit Card",
    href: "#",
    borderColor: "from-violet-500 to-violet-600",
  },
  {
    id: "eq",
    partnerName: "EQ Bank",
    productName: "Savings Plus Account",
    href: "#",
    borderColor: "from-sky-500 to-sky-600",
  },
  {
    id: "borrowell",
    partnerName: "Borrowell",
    productName: "Free credit score & report",
    href: "#",
    borderColor: "from-emerald-500 to-emerald-600",
  },
  {
    id: "wealthsimple",
    partnerName: "Wealthsimple",
    productName: "Invest (RRSP, TFSA & more)",
    href: "#",
    borderColor: "from-amber-500 to-amber-600",
  },
];

export default function Offers() {
  const { tr, interpolate } = useLanguage();

  return (
    <div className="space-y-8">
      <p className="rounded-xl border border-brand-teal-500/25 bg-brand-teal-500/10 px-4 py-3.5 text-center text-xs leading-relaxed text-slate-700">
        {tr.offers.note}
      </p>

      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-brand-purple-900">
          {tr.offers.title}
        </h1>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
          {tr.offers.subtitle}
        </p>
      </header>

      <ul className="space-y-5">
        {partners.map((p, index) => {
          const localizedPartner = tr.offers.partners?.[p.id];
          const partnerName = tr.offers.partnerNames?.[p.id] ?? p.partnerName;
          const productName = tr.offers.productNames?.[p.id] ?? p.productName;
          const bestForLabel = localizedPartner?.bestFor ?? "";
          const bestForText = interpolate(tr.offers.bestFor, {
            label: bestForLabel,
          });
          return (
            <li key={p.id}>
              <article className="overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-slate-200/80 transition-all hover:shadow-lg">
                <div
                  className={`h-1.5 bg-gradient-to-r ${p.borderColor}`}
                  aria-hidden
                />
                <div className="p-5">
                  {index === 0 && (
                    <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                      <svg width={12} height={12} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                      {tr.offers.recommended ?? "Recommended"}
                    </span>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {partnerName}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    {productName}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {localizedPartner?.description ?? ""}
                  </p>
                  <p className="mt-4 inline-flex rounded-full bg-brand-purple-50 px-3 py-1.5 text-xs font-semibold text-brand-purple-800 ring-1 ring-brand-purple-100">
                    {bestForText}
                  </p>
                  <a
                    href={p.href}
                    onClick={(e) => {
                      if (p.href === "#") e.preventDefault();
                    }}
                    className="pressable mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-teal-500 to-brand-teal-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-teal-500/30 transition-all hover:shadow-xl hover:from-brand-teal-600 hover:to-brand-teal-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tr.offers.applyNow}
                    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
