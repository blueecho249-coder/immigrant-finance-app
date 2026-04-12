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
  const [currentContentIndex, setCurrentContentIndex] = useState(0)
  const [showFinalQuiz, setShowFinalQuiz] = useState(false)

  useEffect(() => {
    setTotalXP(progressTracker.getTotalXP())
  }, [])

  const awardXP = (points, showAnimation = true) => {
    const newTotal = progressTracker.addXP(points)
    setTotalXP(newTotal)
    setXPEarned(points)
    setShowXPAnimation(showAnimation)
    
    setTimeout(() => {
      setShowXPAnimation(false)
      setXPEarned(0)
    }, 2000)
  }

  const handleNextContent = () => {
    const t = step.content[language] || step.content.en
    const content = t.contentBreakdown || t.explanation
    
    if (currentContentIndex < content.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setShowFinalQuiz(true)
    }
  }

  const handleContentAnswer = (answerIndex) => {
    const t = step.content[language] || step.content.en
    const content = t.contentBreakdown || t.explanation
    const currentContent = content[currentContentIndex]
    
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === currentContent.correct
    setIsCorrect(correct)
    setShowFeedback(true)
    
    if (correct) {
      awardXP(3)
      setTimeout(() => {
        handleNextContent()
      }, 1500)
    }
  }

  const handleLessonComplete = () => {
    awardXP(25)
    if (lessonId) {
      progressTracker.completeLesson(lessonId)
    }
    if (onLessonComplete) {
      onLessonComplete()
    }
  }

  const renderParagraphContent = () => {
    const t = step.content[language] || step.content.en
    const content = t.contentBreakdown || t.explanation
    const currentContent = content[currentContentIndex]

    if (showFinalQuiz) {
      return renderFinalQuiz()
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
                {t.headline} - Step {currentContentIndex + 1} of {content.length + 1}
              </span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-100 to-teal-100 flex items-center justify-center text-6xl">
              {t.illustration || 'lightbulb'}
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
            ) : null}
          </div>

          <div className="flex justify-center">
            {Array.isArray(currentContent) ? (
              <button
                onClick={handleNextContent}
                className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Continue
              </button>
            ) : currentContent.type === 'text' ? (
              <button
                onClick={handleNextContent}
                className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Continue
              </button>
            ) : currentContent.type === 'example' ? (
              <button
                onClick={handleNextContent}
                className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-indigo-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Got it!
              </button>
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
                      onClick={() => !showFeedback && handleContentAnswer(index)}
                      disabled={showFeedback}
                      className={`py-6 px-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 ${
                        showFeedback
                          ? index === currentContent.correct
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

                {showFeedback && (
                  <div className={`p-4 rounded-2xl text-center ${
                    isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    <p className="font-semibold">
                      {isCorrect ? 'Correct! Great job!' : currentContent.explanation}
                    </p>
                    {!isCorrect && currentContent.spacedRepetition && (
                      <div className="mt-4 space-y-3">
                        <div className="bg-orange-50 p-3 rounded-xl">
                          <p className="font-bold text-orange-900 text-sm">{currentContent.spacedRepetition.onWrong.reviewText}</p>
                          <ul className="mt-2 space-y-1">
                            {currentContent.spacedRepetition.onWrong.reviewContent.map((point, index) => (
                              <li key={index} className="text-orange-800 text-xs">· {point}</li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-orange-900 text-sm mb-2">{currentContent.spacedRepetition.onWrong.retryQuestion.question}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {currentContent.spacedRepetition.onWrong.retryQuestion.options.map((option, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  if (index === currentContent.spacedRepetition.onWrong.retryQuestion.correct) {
                                    setIsCorrect(true)
                                    setTimeout(() => {
                                      handleNextContent()
                                    }, 1500)
                                  }
                                }}
                                className="p-2 rounded-lg bg-white border border-orange-300 hover:bg-orange-100 text-sm"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }

  const renderFinalQuiz = () => {
    const t = step.content[language] || step.content.en
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)

    const quizQuestions = t.finalQuizQuestions || [
      {
        question: "Based on what you learned, what's the most important takeaway?",
        options: [
          "Building good credit takes time and consistency",
          "You should avoid all debt",
          "Credit scores don't matter in Canada",
          "Only rich people need financial literacy"
        ],
        correct: 0
      }
    ]

    const handleAnswer = (answerIndex) => {
      const newAnswers = [...answers]
      newAnswers[currentQuestion] = answerIndex
      setAnswers(newAnswers)

      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        let correctCount = 0
        newAnswers.forEach((answer, index) => {
          if (answer === quizQuestions[index].correct) {
            correctCount++
          }
        })
        
        const finalScore = (correctCount / quizQuestions.length) * 100
        setScore(finalScore)
        setShowResults(true)
        
        if (finalScore >= 70) {
          awardXP(50)
        }
      }
    }

    if (showResults) {
      const passed = score >= 70

      return (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 ${
                passed ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-red-400 to-orange-500'
              }`}>
                {passed ? '✓' : '×'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {passed ? 'Course Complete!' : 'Review Needed'}
              </h2>
              <div className="text-2xl font-bold mb-2">
                Score: {score.toFixed(0)}%
              </div>
              <div className="text-gray-600">
                {passed ? 'You passed the course!' : 'Review the material and try again'}
              </div>
            </div>

            {passed && (
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-6">
                <p className="text-green-800 font-semibold text-center">Congratulations! You've mastered this lesson!</p>
                <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold mt-2">
                  <span className="text-xl">+50</span>
                  <span className="text-lg">XP</span>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <button
                onClick={handleLessonComplete}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {passed ? 'Next Lesson' : 'Review Lesson'}
              </button>
            </div>
          </div>
        </div>
      )
    }

    const currentQ = quizQuestions[currentQuestion]

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestion + 1} 
              totalSteps={quizQuestions.length} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-purple-600">FINAL QUIZ</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
            <div className="text-center mt-2">
              <p className="text-sm text-purple-700">Question {currentQuestion + 1} of {quizQuestions.length}</p>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {currentQ.question}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="w-full p-4 rounded-2xl text-left transition-all transform hover:scale-105 bg-gradient-to-r from-purple-100 to-blue-100 text-gray-800 hover:from-purple-200 hover:to-blue-200"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-400"></div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  switch (step.type) {
    case 'concept':
      return renderParagraphContent()
    case 'quickCheck':
      return renderParagraphContent()
    case 'fillBlank':
      return renderParagraphContent()
    case 'realWorld':
      return renderParagraphContent()
    case 'finalTest':
      return renderFinalQuiz()
    case 'summary':
      return renderParagraphContent()
    default:
      return renderParagraphContent()
  }
}
