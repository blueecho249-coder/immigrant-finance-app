export default function LessonCelebration({ 
  lessonTitle, 
  xpEarned, 
  onNextLesson, 
  onBackToLessons 
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600">
      {/* Confetti Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div
              className="w-3 h-3 rounded-full opacity-80"
              style={{
                backgroundColor: ['#fbbf24', '#f87171', '#a78bfa', '#60a5fa', '#34d399'][Math.floor(Math.random() * 5)]
              }}
            />
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-8">
        {/* Big Checkmark Circle */}
        <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 animate-pulse">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center">
            <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        {/* Lesson Complete */}
        <h1 className="text-5xl font-bold mb-4 animate-fadeInUp">
          Complete!
        </h1>
        
        {/* Lesson Title */}
        <h2 className="text-2xl font-semibold mb-6 opacity-90">
          {lessonTitle}
        </h2>

        {/* XP Earned */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center animate-bounce">
            <span className="text-white font-bold text-lg">XP</span>
          </div>
          <span className="text-3xl font-bold">
            +{xpEarned} XP
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onNextLesson}
            className="bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Next Lesson
          </button>
          <button
            onClick={onBackToLessons}
            className="bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/30 transition-all transform hover:scale-105 border-2 border-white/50"
          >
            Back to Lessons
          </button>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </div>
  )
}
