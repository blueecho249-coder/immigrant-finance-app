export default function XPDisplay({ xpEarned, totalXP, showAnimation = false }) {
  return (
    <div className={`flex items-center space-x-2 ${showAnimation ? 'animate-bounce' : ''}`}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-sm">XP</span>
      </div>
      <div className="flex flex-col">
        {xpEarned > 0 && (
          <span className={`text-green-600 font-bold text-sm ${showAnimation ? 'animate-pulse' : ''}`}>
            +{xpEarned}
          </span>
        )}
        <span className="text-gray-700 font-semibold text-sm">
          {totalXP} Total
        </span>
      </div>
    </div>
  )
}
