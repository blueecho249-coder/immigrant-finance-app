export default function Offers() {
  const offers = [
    {
      id: 1,
      product: "Secured Credit Card",
      description: "Build credit with no credit history required",
      bestFor: "No credit history",
      color: "purple",
      badge: "Most Popular",
      link: "https://www.neofinancial.com",
      partner: "Neo Financial"
    },
    {
      id: 2,
      product: "Savings Plus Account",
      description: "High interest savings with no monthly fees",
      bestFor: "Growing your savings",
      color: "teal",
      badge: null,
      link: "https://www.eqbank.ca",
      partner: "EQ Bank"
    },
    {
      id: 3,
      product: "Free Credit Score",
      description: "Check your credit score for free instantly",
      bestFor: "Monitoring credit",
      color: "amber",
      badge: null,
      link: "https://www.borrowell.com",
      partner: "Borrowell"
    },
    {
      id: 4,
      product: "Free Investing Account",
      description: "Start investing with as little as $1",
      bestFor: "First time investors",
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
        <h1 className="mb-2 text-2xl font-bold text-gray-900">Financial Partners</h1>
        <p className="text-gray-600">Recommended products for newcomers</p>
      </div>

      {/* Disclaimer */}
      <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-xl">
        <p className="text-sm text-amber-800">
          We may earn a referral fee — this helps keep the app free
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
                  Apply Now
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
