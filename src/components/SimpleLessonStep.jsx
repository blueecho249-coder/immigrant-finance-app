import { useState } from 'react'

export default function SimpleLessonStep({ 
  step, 
  language, 
  onNext, 
  stepNumber, 
  totalSteps,
  lessonId,
  onLessonComplete
}) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null)
  const [showQuizResult, setShowQuizResult] = useState(false)

  // Simple lesson content that will build successfully
  const lessonContent = [
    {
      type: "paragraph",
      content: "Building good credit takes time and consistency. Start with small steps like getting a secured credit card."
    },
    {
      type: "question",
      question: "What's the best way to start building credit?",
      options: [
        "Get a secured credit card",
        "Take out a large loan",
        "Avoid all credit completely"
      ],
      correct: 0,
      explanation: "A secured credit card is the safest way to start building credit."
    },
    {
      type: "paragraph",
      content: "Pay your bills on time every month. This is the most important factor in building good credit."
    },
    {
      type: "question",
      question: "What's the most important factor for good credit?",
      options: [
        "High income",
        "Paying bills on time",
        "Having many credit cards"
      ],
      correct: 1,
      explanation: "Payment history is the biggest factor in your credit score."
    }
  ]

  const currentContent = lessonContent[currentContentIndex]

  const handleContinue = () => {
    if (currentContentIndex < lessonContent.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
      setSelectedQuizAnswer(null)
      setShowQuizResult(false)
    } else {
      setShowQuiz(true)
    }
  }

  const handleQuizAnswer = (answerIndex) => {
    setSelectedQuizAnswer(answerIndex)
    setShowQuizResult(true)
    
    if (answerIndex === currentContent.correct) {
      setTimeout(() => {
        handleContinue()
      }, 2000)
    }
  }

  const handleFinalQuizComplete = () => {
    if (onLessonComplete) {
      onLessonComplete()
    }
  }

  if (showQuiz) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-purple-600">FINAL QUIZ</span>
              <span className="text-sm text-gray-600">Step {currentContentIndex + 1} of {lessonContent.length + 1}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Final Quiz
          </h2>

          <div className="mb-8">
            <p className="text-xl text-gray-800 mb-6 text-center">
              Based on what you learned, what's the most important takeaway?
            </p>

            <div className="space-y-3">
              <button
                onClick={handleFinalQuizComplete}
                className="w-full p-4 rounded-2xl text-left transition-all bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-400"></div>
                  <span className="font-medium">Building good credit takes time and consistency</span>
                </div>
              </button>
              <button
                className="w-full p-4 rounded-2xl text-left transition-all bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-400"></div>
                  <span className="font-medium">You should avoid all debt</span>
                </div>
              </button>
              <button
                className="w-full p-4 rounded-2xl text-left transition-all bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-400"></div>
                  <span className="font-medium">Credit scores don't matter in Canada</span>
                </div>
              </button>
              <button
                className="w-full p-4 rounded-2xl text-left transition-all bg-gradient-to-r from-purple-100 to-blue-100 hover:from-purple-200 hover:to-blue-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full border-2 border-purple-400"></div>
                  <span className="font-medium">Only rich people need financial literacy</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-red-600">
              Step {currentContentIndex + 1} of {lessonContent.length + 1}
            </span>
            <span className="text-sm text-gray-600">Building Credit from Zero</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
            <div 
              className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((currentContentIndex + 1) / (lessonContent.length + 1)) * 100}%` }}
            />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Building Credit from Zero
        </h2>

        <div className="mb-8">
          {currentContent.type === "paragraph" ? (
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.content}
              </p>
            </div>
          ) : currentContent.type === "question" ? (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {currentContent.question}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {currentContent.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => !showQuizResult && handleQuizAnswer(index)}
                    disabled={showQuizResult}
                    className={`py-6 px-4 rounded-2xl font-semibold text-lg transition-all ${
                      showQuizResult
                        ? index === currentContent.correct
                          ? 'bg-green-500 text-white'
                          : index === selectedQuizAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                        : 'bg-gradient-to-r from-indigo-100 to-teal-100 text-gray-800 hover:from-indigo-200 hover:to-teal-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showQuizResult && (
                <div className={`p-4 rounded-2xl text-center ${
                  selectedQuizAnswer === currentContent.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  <p className="font-semibold">
                    {selectedQuizAnswer === currentContent.correct ? 'Correct! Great job!' : currentContent.explanation}
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div className="flex justify-center">
          {currentContent.type === "paragraph" && (
            <button
              onClick={handleContinue}
              className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
