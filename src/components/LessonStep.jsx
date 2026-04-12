import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar.jsx'
import XPDisplay from './XPDisplay.jsx'
import { progressTracker } from '../utils/progressTracker.js'

export default function LessonStep({ 
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
  const [quizAnswer, setQuizAnswer] = useState(null)
  const [showQuizFeedback, setShowQuizFeedback] = useState(false)
  const [xpEarned, setXPEarned] = useState(0)
  const [totalXP, setTotalXP] = useState(0)

  useEffect(() => {
    setTotalXP(progressTracker.getTotalXP())
  }, [])

  const awardXP = (points) => {
    const newTotal = progressTracker.addXP(points)
    setTotalXP(newTotal)
    setXPEarned(points)
  }

  const handleNext = () => {
    const t = step.content[language] || step.content.en
    const content = t.contentBreakdown || t.explanation
    
    if (currentContentIndex < content.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
      setQuizAnswer(null)
      setShowQuizFeedback(false)
    } else {
      setShowQuiz(true)
    }
  }

  const handleQuizAnswer = (answerIndex) => {
    setQuizAnswer(answerIndex)
    setShowQuizFeedback(true)
    
    const t = step.content[language] || step.content.en
    const content = t.contentBreakdown || t.explanation
    const currentContent = content[currentContentIndex]
    
    if (currentContent.correct === answerIndex) {
      awardXP(5)
      setTimeout(() => {
        handleNext()
      }, 1500)
    }
  }

  const handleFinalQuizComplete = () => {
    awardXP(25)
    if (lessonId) {
      progressTracker.completeLesson(lessonId)
    }
    if (onLessonComplete) {
      onLessonComplete()
    }
  }

  const t = step.content[language] || step.content.en
  const content = t.contentBreakdown || t.explanation
  const currentContent = content[currentContentIndex]

  if (showQuiz) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          <div className="mb-6">
            <ProgressBar 
              currentStep={1} 
              totalSteps={1} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-purple-600">FINAL QUIZ</span>
              <XPDisplay xpEarned={xpEarned} totalXP={totalXP} />
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
          <ProgressBar 
            currentStep={currentContentIndex + 1} 
            totalSteps={content.length + 1} 
            showStepNumber={true} 
          />
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-indigo-600">
              Step {currentContentIndex + 1} of {content.length + 1}
            </span>
            <XPDisplay xpEarned={xpEarned} totalXP={totalXP} />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          {t.headline}
        </h2>

        <div className="mb-8">
          {Array.isArray(currentContent) ? (
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent[0]}
              </p>
            </div>
          ) : currentContent.type === 'text' ? (
            <div className="bg-gray-50 p-6 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                {currentContent.content}
              </p>
            </div>
          ) : currentContent.type === 'example' ? (
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">{currentContent.title}</h4>
              <p className="text-blue-800">{currentContent.content}</p>
            </div>
          ) : currentContent.type === 'quickQuestion' ? (
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
                    onClick={() => !showQuizFeedback && handleQuizAnswer(index)}
                    disabled={showQuizFeedback}
                    className={`py-6 px-4 rounded-2xl font-semibold text-lg transition-all ${
                      showQuizFeedback
                        ? index === currentContent.correct
                          ? 'bg-green-500 text-white'
                          : index === quizAnswer
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                        : 'bg-gradient-to-r from-indigo-100 to-teal-100 text-gray-800 hover:from-indigo-200 hover:to-teal-200'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {showQuizFeedback && (
                <div className={`p-4 rounded-2xl text-center ${
                  quizAnswer === currentContent.correct ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  <p className="font-semibold">
                    {quizAnswer === currentContent.correct ? 'Correct! Great job!' : currentContent.explanation}
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>

        <div className="flex justify-center">
          {Array.isArray(currentContent) ? (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Continue
            </button>
          ) : currentContent.type === 'text' ? (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Continue
            </button>
          ) : currentContent.type === 'example' ? (
            <button
              onClick={handleNext}
              className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Got it!
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
