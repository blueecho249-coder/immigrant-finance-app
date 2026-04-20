export default function StreakCounter({ streak }) {
  return (
    <div className="flex items-center space-x-2 bg-gradient-to-r from-orange-50 to-red-50 px-3 py-2 rounded-full border border-orange-200">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-md">
        <span className="text-white text-sm">🔥</span>
      </div>
      <span className="font-bold text-orange-700 text-sm">
        {streak} day{streak !== 1 ? 's' : ''}
      </span>
    </div>
  )
}
