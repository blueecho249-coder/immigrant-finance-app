export default function Offers({ language }) {
  const content = {
    en: {
      title: 'Recommended For You',
      subtitle: 'Trusted by newcomers across Canada and the US',
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
      applyNow: 'Apply Now',
      whyRecommend: 'Why we recommend these — We earn a small referral fee which helps keep the app free for everyone'
    },
    es: {
      title: 'Recomendado Para Ti',
      subtitle: 'Confiado por recién llegados en Canadá y Estados Unidos',
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
      applyNow: 'Aplicar Ahora',
      whyRecommend: 'Por qué recomendamos estos — Ganamos una pequeña tarifa de referencia que ayuda a mantener la aplicación gratuita para todos'
    },
    hi: {
      title: 'आपके लिए अनुशंसित',
      subtitle: 'कनाडा और यूएस में नए आने वालों द्वारा विश्वसनीय',
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
      applyNow: 'अभी आवेदन करें',
      whyRecommend: 'हम इन्हें क्यों अनुशंसित करते हैं — हम एक छोटी रेफरल फीस कमाते हैं जो ऐप को सभी के लिए मुफ्त रखने में मदद करती है'
    },
    tl: {
      title: 'Inirerekomenda Para Sa Iyo',
      subtitle: 'Pinagkakati ng mga bagong sa Canada at US',
      disclaimer: 'Maaari tayo ng isang maliit na referral fee — tumutulong na panatiliin ang libre ang app para sa lahat',
      securedCreditCard: 'Naka-secure na Credit Card',
      securedDescription: 'Magbuo ng credit nang walang kailangang credit history',
      securedBestFor: 'Walang credit history',
      savingsAccount: 'Savings Plus Account',
      savingsDescription: 'Mataas na savings na walang buwanang bayad',
      savingsBestFor: 'Paglago ng iyong savings',
      creditScore: 'Libreng Credit Score',
      creditDescription: 'Suriin ang iyong credit score nang libre',
      creditBestFor: 'Pagsubay sa credit',
      investingAccount: 'Libreng Investing Account',
      investingDescription: 'Magsimula sa pag-iinvest na halagang $1',
      investingBestFor: 'Mga unang investor',
      mostPopular: 'Pinakasikat-Popular',
      applyNow: 'Mag-apply Ngayon',
      whyRecommend: 'Bakit namin irekomenda ito — Nakakukuha kami ng isang maliit na referral fee na tumutulong na panatiliin ang libre ang app para sa lahat'
    }
  }

  const t = content[language] || content['en']

  const offers = [
    {
      id: 1,
      product: t.securedCreditCard,
      description: t.securedDescription,
      bestFor: t.securedBestFor,
      color: "purple",
      badge: t.mostPopular,
      link: "https://www.neofinancial.com",
      partner: "Neo Financial",
      rating: 4.5
    },
    {
      id: 2,
      product: t.savingsAccount,
      description: t.savingsDescription,
      bestFor: t.savingsBestFor,
      color: "teal",
      badge: null,
      link: "https://www.eqbank.ca",
      partner: "EQ Bank",
      rating: 4.5
    },
    {
      id: 3,
      product: t.creditScore,
      description: t.creditDescription,
      bestFor: t.creditBestFor,
      color: "amber",
      badge: null,
      link: "https://www.borrowell.com",
      partner: "Borrowell",
      rating: 4.5
    },
    {
      id: 4,
      product: t.investingAccount,
      description: t.investingDescription,
      bestFor: t.investingBestFor,
      color: "blue",
      badge: null,
      link: "https://www.wealthsimple.com",
      partner: "Wealthsimple",
      rating: 4.5
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-500',
        text: 'text-purple-700',
        lightBg: 'bg-purple-50',
        badgeBg: 'bg-gradient-to-r from-purple-500 to-purple-600'
      },
      teal: {
        border: 'border-teal-500',
        bg: 'bg-teal-500',
        text: 'text-teal-700',
        lightBg: 'bg-teal-50',
        badgeBg: 'bg-gradient-to-r from-teal-500 to-teal-600'
      },
      amber: {
        border: 'border-amber-500',
        bg: 'bg-amber-500',
        text: 'text-amber-700',
        lightBg: 'bg-amber-50',
        badgeBg: 'bg-gradient-to-r from-amber-500 to-amber-600'
      },
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-500',
        text: 'text-blue-700',
        lightBg: 'bg-blue-50',
        badgeBg: 'bg-gradient-to-r from-blue-500 to-blue-600'
      }
    }
    return colors[color] || colors.purple
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    )
  }

  return (
    <div className="px-4 py-6">
      {/* Page Header with Gradient Banner */}
      <div className="mb-8 bg-gradient-to-r from-purple-600 to-teal-500 -mx-4 px-4 py-8 rounded-b-2xl">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-white">{t.title}</h1>
        <p className="text-white opacity-90 text-lg">{t.subtitle}</p>
      </div>

      {/* Enhanced Disclaimer Banner */}
      <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-xl flex items-start gap-3">
        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className="text-sm text-blue-800">
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
            <div key={offer.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">
              {/* Thicker Top border */}
              <div className={`h-4 ${colors.bg}`}></div>
              
              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {offer.product}
                    </h3>
                    <p className="text-base font-semibold text-gray-700 mb-2">
                      {offer.partner}
                    </p>
                    {renderStars(offer.rating)}
                  </div>
                  {offer.badge && (
                    <span className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-bold text-white ${colors.badgeBg} shadow-md`}>
                      {offer.badge}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-base mb-4 leading-relaxed">
                  {offer.description}
                </p>

                {/* Best for */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${colors.lightBg} ${colors.text} border-2 ${colors.border}`}>
                    Best for: {offer.bestFor}
                  </span>
                </div>

                {/* Enhanced CTA Button */}
                <a
                  href={offer.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full ${colors.bg} text-white font-bold py-4 px-6 rounded-xl text-center transition-all hover:opacity-90 shadow-md`}
                >
                  {t.applyNow}
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Why We Recommend Section */}
      <div className="mt-12 text-center">
        <div className="inline-block p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-gray-700 text-sm leading-relaxed">
            {t.whyRecommend}
          </p>
        </div>
      </div>
    </div>
  )
}
