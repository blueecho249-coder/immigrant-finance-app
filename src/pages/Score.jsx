import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Score({ language }) {
  const [creditScore, setCreditScore] = useState(650)

  const getScoreColor = (score) => {
    if (score >= 800) return { ring: '#0D9488', text: 'text-teal-600', bg: 'bg-teal-50' }
    if (score >= 740) return { ring: '#7C3AED', text: 'text-purple-600', bg: 'bg-purple-50' }
    if (score >= 670) return { ring: '#EAB308', text: 'text-yellow-600', bg: 'bg-yellow-50' }
    if (score >= 580) return { ring: '#F97316', text: 'text-orange-600', bg: 'bg-orange-50' }
    if (score >= 300) return { ring: '#EF4444', text: 'text-red-600', bg: 'bg-red-50' }
    return { ring: '#6B7280', text: 'text-gray-600', bg: 'bg-gray-50' }
  }

  const getScoreRating = (score) => {
    if (score >= 800) return 'Excellent'
    if (score >= 740) return 'Very Good'
    if (score >= 670) return 'Good'
    if (score >= 580) return 'Fair'
    if (score >= 300) return 'Poor'
    return 'Very Poor'
  }

  const getScoreMessage = (score) => {
    if (score >= 800) return 'Excellent — Great job!'
    if (score >= 740) return 'Very Good — Almost there!'
    if (score >= 670) return 'Good — Keep building!'
    if (score >= 580) return 'Fair — Room to improve'
    if (score >= 300) return 'Poor — Start improving'
    return 'Very Poor — Start building'
  }

  const getRingProgress = (score) => {
    return Math.min(Math.max((score - 300) / 550 * 100, 0), 100)
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
      ],
      pointsToTarget: "points to reach your target"
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
        "Revisa tu informe de crédito regularmente"
      ],
      pointsToTarget: "puntos para alcanzar tu objetivo"
    },
    tl: {
      title: "Tagap ng Puntos ng Kredito",
      subtitle: "Bantayan at ayusin ang iyong credit score mo",
      currentScore: "Kasalang Score",
      targetScore: "Target na Score",
      rating: "Rating",
      tips: "Mga Tips sa Pagpapabuti",
      tipsList: [
        "Bayaran lahat ang lahat ng bayad",
        "Panatiliin ang credit card balances sa ibaba 30%",
        "Huwag pansarilin ang mga lumang credit card",
        "Suriin ang iyong credit report nang regular"
      ],
      pointsToTarget: "mga puntos para maabot sa iyong target"
    },
    zh: {
      title: "信用评分追踪器",
      subtitle: "监控和改善您的信用评分",
      currentScore: "当前评分",
      targetScore: "目标评分",
      rating: "评级",
      tips: "改进技巧",
      tipsList: [
        "按时支付所有账单",
        "保持信用卡余额低于30%",
        "不要关闭旧信用卡",
        "定期检查您的信用报告"
      ],
      pointsToTarget: "分达到您的目标"
    },
    ar: {
      title: "متتبع درجة الائتمان",
      subtitle: "راقب وحسن درجة الائتمان الخاصة بك",
      currentScore: "الدرجة الحالية",
      targetScore: "الدرجة المستهدفة",
      rating: "التقييم",
      tips: "نصائح التحسين",
      tipsList: [
        "ادفع جميع الفواتير في الوقت المحدد",
        "حافظ على أرصدة بطاقات الائتمان أقل من 30%",
        "لا تغلق بطاقات الائتمان القديمة",
        "تحقق من تقرير الائتمان الخاص بك بانتظام"
      ],
      pointsToTarget: "نقطة للوصول إلى هدفك"
    },
    fr: {
      title: "Suivi du score de crédit",
      subtitle: "Surveillez et améliorez votre score de crédit",
      currentScore: "Score actuel",
      targetScore: "Score cible",
      rating: "Évaluation",
      tips: "Conseils d'amélioration",
      tipsList: [
        "Payez toutes les factures à temps",
        "Gardez les soldes de cartes de crédit en dessous de 30%",
        "Ne fermez pas les anciennes cartes de crédit",
        "Vérifiez votre rapport de crédit régulièrement"
      ],
      pointsToTarget: "points pour atteindre votre objectif"
    },
    pa: {
      title: "ਕਰਡਿਟ ਸਕੋਰ ਟਰੈਕਰ",
      subtitle: "ਆਪਣਾ ਕਰਡਿਟ ਸਕੋਰ ਦੇਖੋ ਅਤੇ ਸੁਧਾਰੋ",
      currentScore: "ਮੌਜੂਦਾ ਸਕੋਰ",
      targetScore: "ਟੀਚਾ ਸਕੋਰ",
      rating: "ਰੇਟਿੰਗ",
      tips: "ਸੁਧਾਰ ਦੀਆਂ ਟਿਪਾਂ",
      tipsList: [
        "ਸਾਰੇ ਬਿੱਲ ਸਮੇਂ ਤੇ ਦਿਓ",
        "ਕਰਡਿਟ ਕਾਰਡ ਬੈਲੇਂਸ 30% ਤੋਂ ਹੇਠਾਂ ਰੱਖੋ",
        "ਪੁਰਾਣੇ ਕਰਡਿਟ ਕਾਰਡ ਬੰਦ ਨਾ ਕਰੋ",
        "ਆਪਣਾ ਕਰਡਿਟ ਰਿਪੋਰਟ ਨਿਯਮਿਤ ਚੈੱਕ ਕਰੋ"
      ],
      pointsToTarget: "ਆਪਣੇ ਟੀਚੇ ਤੱਕ ਪੁਆਇੰਟ"
    }
  }

  const t = content[language] || content['en']
  const scoreColor = getScoreColor(creditScore)
  const ringProgress = getRingProgress(creditScore)
  const targetScore = 750
  const pointsToTarget = Math.max(targetScore - creditScore, 0)

  return (
    <div className="px-4 py-6">
      {/* Page Header with Gradient Banner */}
      <div className="mb-8 bg-gradient-to-r from-purple-600 to-teal-500 -mx-4 px-4 py-8 rounded-b-2xl">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-white">{t.title}</h1>
        <p className="text-white opacity-90 text-lg">{t.subtitle}</p>
      </div>

      <div className="space-y-6">
        {/* Current Score Card with Ring */}
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
          <h2 className="mb-6 text-lg font-semibold text-gray-900">{t.currentScore}</h2>
          <div className="flex flex-col items-center">
            {/* Circular Ring */}
            <div className="relative w-48 h-48 mb-4">
              <svg className="transform -rotate-90 w-48 h-48">
                {/* Background circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#E5E7EB"
                  strokeWidth="12"
                  fill="none"
                />
                {/* Progress circle */}
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke={scoreColor.ring}
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - ringProgress / 100)}`}
                  className="transition-all duration-500"
                />
              </svg>
              {/* Score in center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className={`text-4xl font-bold ${scoreColor.text}`}>{creditScore}</div>
                <div className={`text-sm ${scoreColor.text} opacity-75`}>{getScoreRating(creditScore)}</div>
              </div>
            </div>
            {/* Score range label */}
            <div className={`text-center px-4 py-2 rounded-lg ${scoreColor.bg}`}>
              <span className={`font-medium ${scoreColor.text}`}>{getScoreMessage(creditScore)}</span>
            </div>
          </div>
        </div>

        {/* Colorful Slider */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>300</span>
              <span className="font-semibold text-gray-900">Current: {creditScore}</span>
              <span>850</span>
            </div>
            <div className="relative">
              <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-purple-500 to-teal-500 rounded-full"></div>
              <input
                type="range"
                min="300"
                max="850"
                value={creditScore}
                onChange={(e) => setCreditScore(parseInt(e.target.value))}
                className="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
              />
              {/* Thumb */}
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-purple-600 rounded-full shadow-lg border-2 border-white"
                style={{ left: `calc(${((creditScore - 300) / 550) * 100}% - 12px)` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Target Score Card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg border-l-4 border-l-teal-500">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.targetScore}</h2>
          <div className="mb-4">
            <div className="text-3xl font-bold text-teal-600">{targetScore}</div>
            <div className="text-sm text-gray-600">Very Good</div>
          </div>
          
          {/* Progress Indicator */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Progress</span>
              <span>{Math.round((creditScore / targetScore) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min((creditScore / targetScore) * 100, 100)}%` }}
              ></div>
            </div>
          </div>
          
          {/* Points to target message */}
          <div className="text-center px-4 py-3 bg-teal-50 rounded-lg">
            <span className="text-teal-700 font-semibold">
              {pointsToTarget} {t.pointsToTarget}
            </span>
          </div>
        </div>

        {/* Improvement Tips Cards */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">{t.tips}</h2>
          <div className="space-y-3">
            {t.tipsList.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium text-base leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced View Lessons Button */}
      <div className="mt-8">
        <Link 
          to="/learn" 
          className="flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-teal-500 text-white font-bold py-4 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg"
        >
          View Lessons
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
