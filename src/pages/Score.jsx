import { useState } from 'react'

export default function Score({ language = 'en' }) {
  const [creditScore, setCreditScore] = useState(650)
  const [targetScore, setTargetScore] = useState(750)

  const getScoreColor = (score) => {
    if (score >= 750) return 'text-green-600'
    if (score >= 700) return 'text-blue-600'
    if (score >= 650) return 'text-yellow-600'
    if (score >= 600) return 'text-orange-600'
    return 'text-red-600'
  }

  const getScoreRating = (score) => {
    if (score >= 750) return 'Excellent'
    if (score >= 700) return 'Good'
    if (score >= 650) return 'Fair'
    if (score >= 600) return 'Poor'
    return 'Very Poor'
  }

  const content = {
    en: {
      title: "Credit Score Tracker",
      subtitle: "Monitor and improve your credit score",
      currentScore: "Current Score",
      targetScore: "Target Score",
      rating: "Rating",
      tips: "Improvement Tips",
      tipsList: [
        "Pay all bills on time",
        "Keep credit card balances below 30%",
        "Don't close old credit cards",
        "Check your credit report regularly"
      ]
    },
    es: {
      title: "Seguimiento de Puntuación de Crédito",
      subtitle: "Monitorea y mejora tu puntuación de crédito",
      currentScore: "Puntuación Actual",
      targetScore: "Puntuación Objetivo",
      rating: "Calificación",
      tips: "Consejos de Mejora",
      tipsList: [
        "Paga todas las facturas a tiempo",
        "Mantén los saldos de tarjetas de crédito por debajo del 30%",
        "No cierres tarjetas de crédito antiguas",
        "Revisa tu informe de crédito regularmente"
      ]
    },
    hi: {
      title: "क्रेडिट स्कोर ट्रैकर",
      subtitle: "अपना क्रेडिट स्कोर मॉनिटर और सुधारें",
      currentScore: "वर्तमान स्कोर",
      targetScore: "लक्ष्य स्कोर",
      rating: "रेटिंग",
      tips: "सुधार के टिप्स",
      tipsList: [
        "सभी बिल समय पर चुकाएं",
        "क्रेडिट कार्ड बैलेंस को 30% से नीचे रखें",
        "पुराने क्रेडिट कार्ड बंद न करें",
        "नियमित रूप से अपनी क्रेडिट रिपोर्ट जांचें"
      ]
    }
  }

  const t = content[language] || content.en

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.currentScore}</h2>
          <div className="mb-4">
            <div className={`text-4xl font-bold ${getScoreColor(creditScore)}`}>
              {creditScore}
            </div>
            <div className="text-sm text-gray-600">{getScoreRating(creditScore)}</div>
          </div>
          <input
            type="range"
            min="300"
            max="850"
            value={creditScore}
            onChange={(e) => setCreditScore(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.targetScore}</h2>
          <div className="mb-4">
            <div className={`text-3xl font-bold ${getScoreColor(targetScore)}`}>
              {targetScore}
            </div>
          </div>
          <input
            type="range"
            min="300"
            max="850"
            value={targetScore}
            onChange={(e) => setTargetScore(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.tips}</h2>
          <ul className="space-y-3">
            {t.tipsList.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 text-green-600">✓</span>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
