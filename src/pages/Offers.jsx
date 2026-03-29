import { useLanguage } from "../context/LanguageContext.jsx";

const partners = [
  {
    id: "neo",
    partnerName: "Neo Financial",
    productName: "Secured Credit Card",
    href: "#",
  },
  {
    id: "eq",
    partnerName: "EQ Bank",
    productName: "Savings Plus Account",
    href: "#",
  },
  {
    id: "borrowell",
    partnerName: "Borrowell",
    productName: "Free credit score & report",
    href: "#",
  },
  {
    id: "wealthsimple",
    partnerName: "Wealthsimple",
    productName: "Invest (RRSP, TFSA & more)",
    href: "#",
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
          const bestForLabel = localizedPartner?.bestFor ?? "";
          const bestForText = interpolate(tr.offers.bestFor, {
            label: bestForLabel,
          });
          return (
            <li key={p.partnerName}>
              <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-card">
                <div
                  className="h-1.5 bg-gradient-to-r from-brand-purple-500 to-brand-teal-500"
                  aria-hidden
                />
                <div className="p-5">
                  {index === 0 && (
                    <span className="mb-3 inline-block rounded-full bg-brand-purple-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                      {tr.offers.mostPopular}
                    </span>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {p.partnerName}
                  </p>
                  <h2 className="mt-1 text-lg font-bold text-slate-900">
                    {p.productName}
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
                    className="animate-pulse-soft pressable mt-5 flex min-h-[48px] w-full items-center justify-center rounded-xl bg-brand-teal-600 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-teal-600/20 transition hover:bg-brand-teal-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {tr.offers.applyNow}
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
