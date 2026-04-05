export default function Offers({ language }) {
  const content = {
    en: {
      title: 'Financial Partners',
      subtitle: 'Recommended products for newcomers',
      disclaimer: 'We may earn a referral fee — this helps keep the app free',
      securedCreditCard: 'Secured Credit Card',
      securedDescription: 'Build credit with no credit history required',
      securedBestFor: 'No credit history',
      savingsAccount: 'Savings Plus Account',
      savingsDescription: 'High interest savings with no monthly fees',
      savingsBestFor: 'Growing your savings',
      creditScore: 'Free Credit Score',
      creditDescription: 'Check your credit score for free instantly',
      creditBestFor: 'Monitoring credit',
      investingAccount: 'Free Investing Account',
      investingDescription: 'Start investing with as little as $1',
      investingBestFor: 'First time investors',
      mostPopular: 'Most Popular',
      applyNow: 'Apply Now'
    },
    es: {
      title: 'Socios Financieros',
      subtitle: 'Productos recomendados para recién llegados',
      disclaimer: 'Podemos ganar una tarifa de referencia — esto ayuda a mantener la aplicación gratuita',
      securedCreditCard: 'Tarjeta de Crédito Asegurada',
      securedDescription: 'Construye crédito sin historial de crédito requerido',
      securedBestFor: 'Sin historial de crédito',
      savingsAccount: 'Cuenta de Ahorro Plus',
      savingsDescription: 'Ahorros de alto interés sin cuotas mensuales',
      savingsBestFor: 'Hacer crecer tus ahorros',
      creditScore: 'Puntuación de Crédito Gratuita',
      creditDescription: 'Verifica tu puntuación de crédito gratis instantáneamente',
      creditBestFor: 'Monitoreando crédito',
      investingAccount: 'Cuenta de Inversión Gratuita',
      investingDescription: 'Comienza a invertir con tan solo $1',
      investingBestFor: 'Primeros inversores',
      mostPopular: 'Más Popular',
      applyNow: 'Aplicar Ahora'
    },
    hi: {
      title: 'वित्तीय साझेदार',
      subtitle: 'नए आने वालों के लिए अनुशंसित उत्पाद',
      disclaimer: 'हम रेफरल शुल्क कमा सकते हैं — यह ऐप को मुफ्त रखने में मदद करता है',
      securedCreditCard: 'सिक्योर्ड क्रेडिट कार्ड',
      securedDescription: 'बिना क्रेडिट इतिहास के क्रेडिट बनाएं',
      securedBestFor: 'कोई क्रेडिट इतिहास नहीं',
      savingsAccount: 'बचत प्लस खाता',
      savingsDescription: 'बिना मासिक शुल्क के उच्च ब्याज बचत',
      savingsBestFor: 'अपनी बचत बढ़ाना',
      creditScore: 'मुफ्त क्रेडिट स्कोर',
      creditDescription: 'तुरंत मुफ्त में अपना क्रेडिट स्कोर जांचें',
      creditBestFor: 'क्रेडिट मॉनिटरिंग',
      investingAccount: 'मुफ्त निवेश खाता',
      investingDescription: 'मात्र $1 से निवेश शुरू करें',
      investingBestFor: 'पहली बार निवेशकर्ता',
      mostPopular: 'सबसे लोकप्रिय',
      applyNow: 'अभी आवेदन करें'
    }
  }

  const t = content[language] || content.en

  const offers = [
    {
      id: 1,
      product: t.securedCreditCard,
      description: t.securedDescription,
      bestFor: t.securedBestFor,
      color: "purple",
      badge: t.mostPopular,
      link: "https://www.neofinancial.com",
      partner: "Neo Financial"
    },
    {
      id: 2,
      product: t.savingsAccount,
      description: t.savingsDescription,
      bestFor: t.savingsBestFor,
      color: "teal",
      badge: null,
      link: "https://www.eqbank.ca",
      partner: "EQ Bank"
    },
    {
      id: 3,
      product: t.creditScore,
      description: t.creditDescription,
      bestFor: t.creditBestFor,
      color: "amber",
      badge: null,
      link: "https://www.borrowell.com",
      partner: "Borrowell"
    },
    {
      id: 4,
      product: t.investingAccount,
      description: t.investingDescription,
      bestFor: t.investingBestFor,
      color: "blue",
      badge: null,
      link: "https://www.wealthsimple.com",
      partner: "Wealthsimple"
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-500',
        text: 'text-purple-700',
        lightBg: 'bg-purple-50'
      },
      teal: {
        border: 'border-teal-500',
        bg: 'bg-teal-500',
        text: 'text-teal-700',
        lightBg: 'bg-teal-50'
      },
      amber: {
        border: 'border-amber-500',
        bg: 'bg-amber-500',
        text: 'text-amber-700',
        lightBg: 'bg-amber-50'
      },
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-500',
        text: 'text-blue-700',
        lightBg: 'bg-blue-50'
      }
    }
    return colors[color] || colors.purple
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Disclaimer */}
      <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-sm text-amber-800">
          {t.disclaimer}
        </p>
      </div>

      <div className={`grid gap-6 ${
        offers.length === 1 
          ? 'grid-cols-1' 
          : 'grid-cols-1 lg:grid-cols-2'
      }`}>
        {offers.map(offer => {
          const colors = getColorClasses(offer.color)
          return (
            <div key={offer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Top border */}
              <div className={`h-1 ${colors.bg}`}></div>
              
              <div className="p-4 lg:p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {offer.product}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {offer.partner}
                    </p>
                  </div>
                  {offer.badge && (
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${colors.lightBg} ${colors.text}`}>
                      {offer.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-3">
                  {offer.description}
                </p>

                {/* Best for */}
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.lightBg} ${colors.text}`}>
                    Best for: {offer.bestFor}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block w-full ${colors.bg} text-white font-semibold py-3 px-4 rounded-xl text-center transition-all hover:opacity-90`}
                >
                  {t.applyNow}
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
