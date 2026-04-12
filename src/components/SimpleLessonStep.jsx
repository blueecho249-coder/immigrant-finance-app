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

  const lessonContent = [
    {
      type: "paragraph",
      content: "Building good credit takes time and consistency."
    },
    {
      type: "paragraph", 
      content: "Pay your bills on time every month."
    },
    {
      type: "paragraph",
      content: "Start with a secured credit card."
    },
    {
      type: "paragraph",
      content: "Keep your credit utilization low."
    }
  ]

  const currentContent = lessonContent[currentContentIndex]

  const handleContinue = () => {
    if (currentContentIndex < lessonContent.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
    } else {
      setShowQuiz(true)
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
              <span className="text-sm text-gray-600">Complete</span>
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
          <div className="bg-gray-50 p-6 rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              {currentContent.content}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleContinue}
            className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
