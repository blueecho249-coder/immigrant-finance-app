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
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [xpEarned, setXPEarned] = useState(0)
  const [showXPAnimation, setShowXPAnimation] = useState(false)
  const [totalXP, setTotalXP] = useState(0)

  useEffect(() => {
    // Load total XP on component mount
    setTotalXP(progressTracker.getTotalXP())
  }, [])

  const awardXP = (points, showAnimation = true) => {
    const newTotal = progressTracker.addXP(points)
    setTotalXP(newTotal)
    setXPEarned(points)
    setShowXPAnimation(showAnimation)
    
    // Hide animation after 2 seconds
    setTimeout(() => {
      setShowXPAnimation(false)
      setXPEarned(0)
    }, 2000)
  }

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === step.correctIndex
    setIsCorrect(correct)
    setShowFeedback(true)
    
    // Award XP based on performance
    if (correct) {
      awardXP(10) // +10 XP for correct answer first try
      // Auto-advance after feedback
      setTimeout(() => {
        awardXP(5) // +5 XP for completing step
        onNext()
      }, 1500)
    } else {
      // Wrong answer - no XP, allow retry
      setTimeout(() => {
        setSelectedAnswer(null)
        setShowFeedback(false)
      }, 2000)
    }
  }

  const handleGotIt = () => {
    awardXP(5) // +5 XP for completing concept step
    onNext()
  }

  const handleLessonComplete = () => {
    // Award lesson completion XP
    awardXP(25) // +25 XP for lesson completion
    
    // Mark lesson as completed
    if (lessonId) {
      progressTracker.completeLesson(lessonId)
    }
    
    if (onLessonComplete) {
      onLessonComplete()
    }
  }

  const renderConceptCard = () => {
    const t = step.content[language] || step.content.en

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <ProgressBar 
              currentStep={stepNumber} 
              totalSteps={totalSteps} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-indigo-600">CONCEPT</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
          </div>

          {/* Illustration */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-100 to-teal-100 flex items-center justify-center text-6xl">
              {t.illustration || 'lightbulb'}
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t.headline}
          </h2>

          {/* Explanation */}
          <div className="space-y-4">
            {t.explanation.map((text, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* Got It Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={handleGotIt}
              className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Got it! 
            </button>
          </div>
        </div>
      </div>
    )
  }

  const renderQuickCheck = () => {
    const t = step.content[language] || step.content.en

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <ProgressBar 
              currentStep={stepNumber} 
              totalSteps={totalSteps} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-purple-600">QUICK CHECK</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t.question}
            </h2>
          </div>

          {/* Answer Buttons */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {t.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`py-6 px-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 ${
                  showFeedback
                    ? index === step.correctIndex
                      ? 'bg-green-500 text-white animate-pulse'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white animate-bounce'
                      : 'bg-gray-100 text-gray-400'
                    : 'bg-gradient-to-r from-indigo-100 to-teal-100 text-gray-800 hover:from-indigo-200 hover:to-teal-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-2xl text-center ${
              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <p className="font-semibold">
                {isCorrect ? 'Correct! Great job!' : 'Not quite. Try again!'}
              </p>
              {!isCorrect && (
                <p className="text-sm mt-2">{t.explanation}</p>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderFillInBlank = () => {
    const t = step.content[language] || step.content.en

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <ProgressBar 
              currentStep={stepNumber} 
              totalSteps={totalSteps} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-orange-600">FILL IN THE BLANK</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
          </div>

          {/* Sentence with Blank */}
          <div className="mb-8">
            <p className="text-xl text-gray-800 leading-relaxed text-center">
              {t.sentence.split('___').map((part, index) => (
                <span key={index}>
                  {part}
                  {index < t.sentence.split('___').length - 1 && (
                    <span className={`inline-block mx-2 px-4 py-2 rounded-xl font-semibold ${
                      showFeedback && selectedAnswer === index
                        ? index === step.correctIndex
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {showFeedback && selectedAnswer === index
                        ? t.options[index]
                        : '___'}
                    </span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* Word Options */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {t.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`py-4 px-3 rounded-2xl font-semibold transition-all transform hover:scale-105 ${
                  showFeedback
                    ? index === step.correctIndex
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                    : 'bg-gradient-to-r from-orange-100 to-yellow-100 text-gray-800 hover:from-orange-200 hover:to-yellow-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-2xl text-center ${
              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <p className="font-semibold">
                {isCorrect ? 'Perfect! You got it!' : 'Not quite. Try again!'}
              </p>
              {!isCorrect && (
                <p className="text-sm mt-2">{t.explanation}</p>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderRealWorldExample = () => {
    const t = step.content[language] || step.content.en

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <ProgressBar 
              currentStep={stepNumber} 
              totalSteps={totalSteps} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-blue-600">REAL WORLD EXAMPLE</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
          </div>

          {/* Scenario */}
          <div className="mb-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/60">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl">
                {t.scenarioIcon || 'person'}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">{t.scenarioTitle}</h3>
                <p className="text-gray-700 leading-relaxed">{t.scenario}</p>
              </div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              {t.question}
            </h3>
          </div>

          {/* Answer Options */}
          <div className="space-y-4 mb-6">
            {t.options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showFeedback && handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-2xl text-left transition-all transform hover:scale-105 ${
                  showFeedback
                    ? index === step.correctIndex
                      ? 'bg-green-500 text-white'
                      : index === selectedAnswer
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-400'
                    : 'bg-gradient-to-r from-blue-100 to-indigo-100 text-gray-800 hover:from-blue-200 hover:to-indigo-200'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 ${
                    showFeedback
                      ? index === step.correctIndex
                        ? 'border-white bg-white'
                        : index === selectedAnswer
                        ? 'border-white'
                        : 'border-gray-400'
                      : 'border-gray-400'
                  }`}>
                    {showFeedback && index === step.correctIndex && (
                      <svg className="w-4 h-4 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {showFeedback && (
            <div className={`p-4 rounded-2xl ${
              isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              <p className="font-semibold mb-2">
                {isCorrect ? 'Excellent! You understand real-world application.' : 'Not quite right.'}
              </p>
              <p>{t.explanation}</p>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderSummaryCard = () => {
    const t = step.content[language] || step.content.en

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          {/* Enhanced Progress Bar */}
          <div className="mb-6">
            <ProgressBar 
              currentStep={stepNumber} 
              totalSteps={totalSteps} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-green-600">SUMMARY</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
          </div>

          {/* Celebration */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 animate-bounce">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Lesson Complete!</h2>
            <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold">
              <span className="text-2xl">+10</span>
              <span className="text-lg">XP</span>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
            <div className="space-y-3">
              {t.takeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm mt-0.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{takeaway}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <div className="flex justify-center">
            <button
              onClick={handleLessonComplete}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Next Lesson 
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Render different step types
  switch (step.type) {
    case 'concept':
      return renderConceptCard()
    case 'quickCheck':
      return renderQuickCheck()
    case 'fillBlank':
      return renderFillInBlank()
    case 'realWorld':
      return renderRealWorldExample()
    case 'summary':
      return renderSummaryCard()
    default:
      return renderConceptCard()
  }
}
