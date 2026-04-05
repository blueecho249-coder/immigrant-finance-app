import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Score({ language = 'en' }) {
  const [creditScore, setCreditScore] = useState(650)
  const [targetScore, setTargetScore] = useState(750)
  const [showTips, setShowTips] = useState(false)

  const getScoreColor = (score) => {
    if (score >= 750) return { bg: 'bg-green-500', text: 'text-green-700', border: 'border-green-500', light: 'bg-green-50' }
    if (score >= 700) return { bg: 'bg-blue-500', text: 'text-blue-700', border: 'border-blue-500', light: 'bg-blue-50' }
    if (score >= 650) return { bg: 'bg-yellow-500', text: 'text-yellow-700', border: 'border-yellow-500', light: 'bg-yellow-50' }
    if (score >= 600) return { bg: 'bg-orange-500', text: 'text-orange-700', border: 'border-orange-500', light: 'bg-orange-50' }
    return { bg: 'bg-red-500', text: 'text-red-700', border: 'border-red-500', light: 'bg-red-50' }
  }

  const getScoreRating = (score) => {
    if (score >= 750) return 'Excellent'
    if (score >= 700) return 'Good'
    if (score >= 650) return 'Fair'
    if (score >= 600) return 'Poor'
    return 'Very Poor'
  }

  const getScoreProgress = (score) => {
    return Math.min((score / 850) * 100, 100)
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
        "Check your credit report regularly",
        "Set up automatic payments",
        "Dispute errors on your credit report"
      ],
      factors: "Key Factors",
      factorsList: [
        { name: "Payment History", impact: "High", description: "On-time payments build credit history" },
        { name: "Credit Utilization", impact: "High", description: "Keep balances below 30% of limits" },
        { name: "Credit Age", impact: "Medium", description: "Longer credit history helps scores" },
        { name: "Credit Mix", impact: "Medium", description: "Different types of credit show responsibility" },
        { name: "New Credit", impact: "High", description: "Too many applications can lower scores" }
      ],
      nextSteps: "Next Steps",
      nextStepsList: [
        "Continue paying all bills on time",
        "Reduce credit card balances",
        "Keep oldest credit cards open",
        "Avoid applying for new credit temporarily"
      ],
      history: "Score History",
      noHistory: "No score history available",
      trackProgress: "Track your progress over time"
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
        "Mantén los saldos de tarjetas por debajo del 30%",
        "No cierres tarjetas de crédito antiguas",
        "Revisa tu informe de crédito regularmente",
        "Configura pagos automáticos"
      ],
      factors: "Factores Clave",
      factorsList: [
        { name: "Historial de Pagos", impact: "Alto", description: "Los pagos a tiempo construyen historial crediticio" },
        { name: "Utilización de Crédito", impact: "Alto", description: "Mantén saldos por debajo del 30% de los límites" },
        { name: "Antigüedad del Crédito", impact: "Medio", description: "Un historial más largo ayuda las puntuaciones" },
        { name: "Mezcla de Crédito", impact: "Medio", description: "Diferentes tipos de crédito muestran responsabilidad" },
        { name: "Crédito Nuevo", impact: "Alto", description: "Demasiadas solicitudes pueden bajar las puntuaciones" }
      ],
      nextSteps: "Próximos Pasos",
      nextStepsList: [
        "Continúa pagando todas las facturas a tiempo",
        "Reduce los saldos de las tarjetas de crédito",
        "Mantén abiertas las tarjetas de crédito más antiguas",
        "Evita solicitar nuevo crédito temporalmente"
      ],
      history: "Historial de Puntuación",
      noHistory: "No hay historial de puntuación disponible",
      trackProgress: "Rastrea tu progreso con el tiempo"
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
        "नियमित रूप से क्रेडिट रिपोर्ट जांचें",
        "स्वचालित भुगतान सेट करें"
      ],
      factors: "मुख्य तत्व",
      factorsList: [
        { name: "भुगतान इतिहास", impact: "उच्च", description: "समय पर भुगतान क्रेडिट इतिहास बनाती है" },
        { name: "क्रेडिट उपयोग", impact: "उच्च", description: "सीमा के 30% से नीचे रखें" },
        { name: "क्रेडिट आयु", impact: "मध्यम", description: "लंबा क्रेडिट इतिहास स्कोर में मदद देती है" },
        { name: "नया क्रेडिट", impact: "उच्च", description: "बहुत अधिक अनुरोग रेटिंग स्कोर कम कर सकते हैं" }
      ],
      nextSteps: "अगले कदम",
      nextStepsList: [
        "सभी बिल समय पर चुकाना जारी रखें",
        "क्रेडिट कार्ड बैलेंस कम करें",
        "सबसे पुराने क्रेडिट कार्ड खुल रखें",
        "अस्थायी नया क्रेडिट लेने से बचें"
      ],
      history: "स्कोर इतिहास",
      noHistory: "कोई स्कोर इतिहास उपलब्ध नहीं है",
      trackProgress: "समय के साथ अपनी प्रगति ट्रैक करें"
    }
  }

  const t = content[language] || content.en

  const scoreColor = getScoreColor(creditScore)
  const scoreProgress = getScoreProgress(creditScore)

  return (
    <div className="px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {/* Main Score Display */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Current Score Card */}
        <div className="lg:col-span-2">
          <div className={'bg-white rounded-2xl shadow-lg border-2 ' + scoreColor.border + ' overflow-hidden'}>
            {/* Score Header */}
            <div className={scoreColor.bg + ' p-6 text-white'}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{t.currentScore}</h2>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">{creditScore}</span>
                  <span className={'text-lg font-medium ' + scoreColor.light}>{getScoreRating(creditScore)}</span>
                </div>
              </div>
              
              {/* Score Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>{scoreProgress}% Complete</span>
                  <span>Target: {targetScore}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div 
                    className={'h-3 rounded-full transition-all duration-500 ' + scoreColor.bg}
                    style={{ width: scoreProgress + '%' }}
                  ></div>
                </div>
              </div>

              {/* Score Meter */}
              <div className="grid grid-cols-5 gap-1">
                {[300, 450, 550, 650, 750].map((level, index) => (
                  <div key={index} className="text-center">
                    <div className={'h-2 ' + (level <= creditScore ? scoreColor.bg : 'bg-gray-200')}></div>
                    <div className="text-xs text-gray-600 mt-1">{level}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Target Score Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.targetScore}</h2>
          <div className="mb-4">
            <div className={'text-3xl font-bold ' + getScoreColor(targetScore).text}>{targetScore}</div>
            <div className={'text-sm ' + getScoreColor(targetScore).light}>{getScoreRating(targetScore)}</div>
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
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button
          onClick={() => setShowTips(!showTips)}
          className={'flex-1 py-3 px-6 rounded-xl font-semibold transition-all ' + (showTips ? 'bg-gray-200 text-gray-700' : scoreColor.bg + ' text-white hover:opacity-90')}
        >
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </button>
        <Link
          to="/learn"
          className="flex-1 btn-primary py-3 px-6 text-center"
        >
          View Lessons
        </Link>
      </div>

      {/* Tips Section */}
      {showTips && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Improvement Tips */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
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

          {/* Key Factors */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.factors}</h2>
            <div className="space-y-4">
              {t.factorsList.map((factor, index) => {
                const impactColors = factor.impact === 'High' ? 'text-red-600' :
                                   factor.impact === 'Medium' ? 'text-yellow-600' : 'text-green-600'
                return (
                  <div key={index} className="border-l-2 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{factor.name}</h3>
                        <p className="text-sm text-gray-600">{factor.description}</p>
                      </div>
                      <span className={'text-sm font-semibold ' + impactColors}>
                        {factor.impact}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
            <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.nextSteps}</h2>
            <ul className="space-y-3">
              {t.nextStepsList.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 text-blue-600">→</span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Score History Section */}
      <div className="mt-8">
        <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl p-6 text-white">
          <h2 className="text-xl font-bold mb-4">{t.history}</h2>
          <p className="mb-4 opacity-90">{t.trackProgress}</p>
          <Link
            to="/tools"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-6 rounded-xl hover:bg-gray-50 transition-all"
          >
            Use Credit Score Tool
          </Link>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm opacity-75">{t.noHistory}</p>
        </div>
      </div>
    </div>
  )
}
