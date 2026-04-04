export default function Offers({ language = 'en' }) {
  const offers = [
    {
      id: 1,
      title: {
        en: "Premium Bank Account",
        es: "Cuenta Bancaria Premium",
        hi: "प्रीमियम बैंक खाता"
      },
      description: {
        en: "No monthly fees, free international transfers, and higher interest rates",
        es: "Sin cuotas mensuales, transferencias internacionales gratuitas y tasas de interés más altas",
        hi: "कोई मासिक शुल्क नहीं, मुफ्त अंतर्राष्ट्रीय हस्तांतरण, और उच्च ब्याज दरें"
      },
      partner: "Global Bank",
      logo: "🏦",
      cta: "Learn More",
      link: "#"
    },
    {
      id: 2,
      title: {
        en: "Credit Builder Card",
        es: "Tarjeta para Construir Crédito",
        hi: "क्रेडिट बिल्डर कार्ड"
      },
      description: {
        en: "Build your credit history with no annual fee and cash back rewards",
        es: "Construye tu historial de crédito sin cuota anual y recompensas de cashback",
        hi: "कोई वार्षिक शुल्क और कैशबैक रिवॉर्ड के साथ अपना क्रेडिट इतिहास बनाएं"
      },
      partner: "Credit Plus",
      logo: "💳",
      cta: "Apply Now",
      link: "#"
    },
    {
      id: 3,
      title: {
        en: "Student Loan Help",
        es: "Ayuda con Préstamos Estudiantiles",
        hi: "छात्र ऋण सहायता"
      },
      description: {
        en: "Refinance your student loans with lower interest rates and flexible payments",
        es: "Refinancia tus préstamos estudiantiles con tasas de interés más bajas y pagos flexibles",
        hi: "कम ब्याज दरों और लचीले भुगतान के साथ अपने छात्र ऋण का पुनर्वित्त करें"
      },
      partner: "EduFinance",
      logo: "🎓",
      cta: "Get Quote",
      link: "#"
    },
    {
      id: 4,
      title: {
        en: "Insurance Protection",
        es: "Procción de Seguros",
        hi: "बीमा सुरक्षा"
      },
      description: {
        en: "Affordable health, auto, and home insurance for newcomers",
        es: "Seguro de salud, auto y hogar asequible para recién llegados",
        hi: "नए आने वालों के लिए सस्ती स्वास्थ्य, ऑटो और होम बीमा"
      },
      partner: "SafeGuard",
      logo: "🛡️",
      cta: "Get Quote",
      link: "#"
    }
  ]

  const content = {
    en: {
      title: "Special Offers",
      subtitle: "Exclusive deals for newcomers",
      featured: "Featured",
      allOffers: "All Offers"
    },
    es: {
      title: "Ofertas Especiales",
      subtitle: "Tratos exclusivos para recién llegados",
      featured: "Destacado",
      allOffers: "Todas las Ofertas"
    },
    hi: {
      title: "विशेष ऑफ़र",
      subtitle: "नए आने वालों के लिए अनन्य सौदे",
      featured: "विशेष",
      allOffers: "सभी ऑफ़र"
    }
  }

  const t = content[language] || content.en

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="space-y-4">
        {offers.map(offer => (
          <div key={offer.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{offer.logo}</div>
              <div className="flex-1">
                <div className="mb-1">
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-700">
                    {offer.partner}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {offer.title[language] || offer.title.en}
                </h3>
                <p className="mb-3 text-sm text-gray-600">
                  {offer.description[language] || offer.description.en}
                </p>
                <button className="rounded-lg gradient-header px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
                  {offer.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
