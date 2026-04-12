import { useState, useEffect } from 'react'
import ProgressBar from './ProgressBar.jsx'
import XPDisplay from './XPDisplay.jsx'
import { progressTracker } from '../utils/progressTracker.js'

// NEW: QuickQuestion component for embedded questions
function QuickQuestion({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showReview, setShowReview] = useState(false)

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === question.correct
    setIsCorrect(correct)
    setShowFeedback(true)
    
    if (!correct && question.spacedRepetition) {
      // Show review after a delay
      setTimeout(() => {
        setShowReview(true)
      }, 2000)
    } else if (correct) {
      // Auto-advance after showing correct feedback
      setTimeout(() => {
        setShowFeedback(false)
        setSelectedAnswer(null)
      }, 1500)
    }
  }

  const handleRetry = (answerIndex) => {
    const correct = answerIndex === question.spacedRepetition.onWrong.retryQuestion.correct
    if (correct) {
      setIsCorrect(true)
      setTimeout(() => {
        setShowReview(false)
        setShowFeedback(false)
        setSelectedAnswer(null)
      }, 1500)
    }
  }

  return (
    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
      <h4 className="font-bold text-yellow-900 mb-4">Quick Check:</h4>
      <p className="text-yellow-800 mb-4">{question.question}</p>
      
      {!showReview ? (
        <div className="grid grid-cols-2 gap-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && handleAnswer(index)}
              disabled={showFeedback}
              className={`p-3 rounded-xl font-medium transition-all ${
                showFeedback
                  ? index === question.correct
                    ? 'bg-green-500 text-white'
                    : index === selectedAnswer
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-400'
                  : 'bg-white border border-yellow-300 hover:bg-yellow-100'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-xl">
            <h5 className="font-bold text-orange-900 mb-2">{question.spacedRepetition.onWrong.reviewText}</h5>
            <ul className="space-y-1">
              {question.spacedRepetition.onWrong.reviewContent.map((point, index) => (
                <li key={index} className="text-orange-800 text-sm">· {point}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium text-orange-900 mb-2">{question.spacedRepetition.onWrong.retryQuestion.question}</p>
            <div className="grid grid-cols-2 gap-2">
              {question.spacedRepetition.onWrong.retryQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleRetry(index)}
                  className="p-2 rounded-lg bg-white border border-orange-300 hover:bg-orange-100 text-sm"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {showFeedback && !showReview && (
        <div className={`mt-4 p-3 rounded-xl text-center ${
          isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {isCorrect ? 'Correct! Great job!' : question.explanation}
        </div>
      )}
    </div>
  )
}

// NEW: VisualElements component for interactive visualizations
function VisualElements({ elements }) {
  const renderCreditScoreVisualizer = (visualizer) => {
    const [currentScore, setCurrentScore] = useState(visualizer.currentScore || 650)
    
    return (
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-200">
        <h4 className="font-bold text-purple-900 mb-4">{visualizer.description}</h4>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-purple-700 mb-2">
            <span>300</span>
            <span className="font-bold">Score: {currentScore}</span>
            <span>850</span>
          </div>
          <input
            type="range"
            min="300"
            max="850"
            value={currentScore}
            onChange={(e) => setCurrentScore(parseInt(e.target.value))}
            className="w-full h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-purple-600 mt-1">
            {visualizer.ranges.map((range, index) => (
              <span key={index} style={{ color: range.color }}>{range.label}</span>
            ))}
          </div>
        </div>
        <div className="text-center">
          <div className={`inline-block px-4 py-2 rounded-lg font-bold ${
            currentScore >= 740 ? 'bg-green-500 text-white' :
            currentScore >= 670 ? 'bg-blue-500 text-white' :
            currentScore >= 580 ? 'bg-yellow-500 text-white' :
            'bg-red-500 text-white'
          }`}>
            {visualizer.ranges.find(range => currentScore >= range.min && currentScore <= range.max)?.label}
          </div>
        </div>
      </div>
    )
  }

  const renderRentCalculator = (calculator) => {
    const [monthlySalary, setMonthlySalary] = useState(3000)
    const [monthlyExpenses, setMonthlyExpenses] = useState(500)
    const [desiredRent, setDesiredRent] = useState(1200)
    
    const maxRecommendedRent = monthlySalary * 0.3
    const availableForHousing = monthlySalary - monthlyExpenses - maxRecommendedRent
    const isAffordable = desiredRent <= maxRecommendedRent
    
    return (
      <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border border-green-200">
        <h4 className="font-bold text-green-900 mb-4">{calculator.title}</h4>
        <p className="text-green-800 mb-4">{calculator.description}</p>
        
        <div className="space-y-4">
          {calculator.fields.map((field, index) => {
            if (field.name === 'monthlySalary') {
              return (
                <div key={index}>
                  <label className="block text-sm font-medium text-green-700 mb-1">{field.label}</label>
                  <input
                    type="number"
                    value={monthlySalary}
                    onChange={(e) => setMonthlySalary(parseInt(e.target.value))}
                    className="w-full p-2 border border-green-300 rounded-lg"
                  />
                </div>
              )
            }
            if (field.name === 'monthlyExpenses') {
              return (
                <div key={index}>
                  <label className="block text-sm font-medium text-green-700 mb-1">{field.label}</label>
                  <input
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(parseInt(e.target.value))}
                    className="w-full p-2 border border-green-300 rounded-lg"
                  />
                </div>
              )
            }
            if (field.name === 'desiredRent') {
              return (
                <div key={index}>
                  <label className="block text-sm font-medium text-green-700 mb-1">{field.label}</label>
                  <input
                    type="number"
                    value={desiredRent}
                    onChange={(e) => setDesiredRent(parseInt(e.target.value))}
                    className="w-full p-2 border border-green-300 rounded-lg"
                  />
                </div>
              )
            }
            return null
          })}
          
          <div className={`p-4 rounded-lg text-center ${
            isAffordable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <div className="font-bold">
              {isAffordable ? 'Affordable!' : 'Too Expensive!'}
            </div>
            <div className="text-sm mt-1">
              Recommended max: ${maxRecommendedRent.toFixed(0)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Render different visual element types
  if (elements.creditScoreVisualizer) {
    return renderCreditScoreVisualizer(elements.creditScoreVisualizer)
  }
  
  if (elements.rentCalculator) {
    return renderRentCalculator(elements.rentCalculator)
  }
  
  // Add more visual element types as needed
  return null
}

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

          {/* NEW: Interactive Content Breakdown */}
          {t.contentBreakdown && (
            <div className="space-y-6 mb-8">
              {t.contentBreakdown.map((item, index) => {
                if (item.type === 'text') {
                  return (
                    <div key={index} className="bg-gray-50 p-4 rounded-2xl">
                      <p className="text-lg text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  )
                }
                
                if (item.type === 'quickQuestion') {
                  return <QuickQuestion key={index} question={item} />
                }
                
                if (item.type === 'example') {
                  return (
                    <div key={index} className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                      <h4 className="font-bold text-blue-900 mb-2">{item.title}</h4>
                      <p className="text-blue-800">{item.content}</p>
                    </div>
                  )
                }
                
                return null
              })}
            </div>
          )}

          {/* Original Explanation (fallback) */}
          {!t.contentBreakdown && (
            <div className="space-y-4 mb-8">
              {t.explanation.map((text, index) => (
                <p key={index} className="text-lg text-gray-700 leading-relaxed">
                  {text}
                </p>
              ))}
            </div>
          )}

          {/* NEW: Visual Elements */}
          {t.visualElements && <VisualElements elements={t.visualElements} />}

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

  const renderFinalTest = () => {
    const t = step.content[language] || step.content.en
    const [currentSection, setCurrentSection] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [score, setScore] = useState(0)

    const sections = t.testSections
    const totalQuestions = sections.reduce((acc, section) => acc + section.questions.length, 0)

    const handleAnswer = (questionIndex, answerIndex) => {
      const newAnswers = [...answers]
      newAnswers[questionIndex] = answerIndex
      setAnswers(newAnswers)

      // Move to next question
      if (questionIndex < totalQuestions - 1) {
        setCurrentQuestion(questionIndex + 1)
      } else {
        // Test complete, calculate score
        let correctCount = 0
        let questionIdx = 0
        sections.forEach(section => {
          section.questions.forEach(q => {
            if (newAnswers[questionIdx] === q.correct) {
              correctCount++
            }
            questionIdx++
          })
        })
        const finalScore = (correctCount / totalQuestions) * 100
        setScore(finalScore)
        setShowResults(true)
        
        if (finalScore >= t.passingScore) {
          awardXP(50) // Award XP for passing the test
        }
      }
    }

    const getCurrentQuestion = () => {
      let questionIdx = currentQuestion
      for (let i = 0; i < sections.length; i++) {
        if (questionIdx < sections[i].questions.length) {
          return {
            question: sections[i].questions[questionIdx],
            sectionTitle: sections[i].sectionTitle,
            sectionIndex: i,
            questionIndex: questionIdx
          }
        }
        questionIdx -= sections[i].questions.length
      }
      return null
    }

    const currentQ = getCurrentQuestion()

    if (showResults) {
      const passed = score >= t.passingScore
      const reward = passed ? t.rewards.passed : (score === 100 ? t.rewards.perfect : null)

      return (
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
            <div className="text-center mb-8">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mx-auto mb-4 ${
                passed ? 'bg-gradient-to-br from-green-400 to-emerald-500' : 'bg-gradient-to-br from-red-400 to-orange-500'
              }`}>
                {passed ? '!' : '×'}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {passed ? reward.title : 'Test Incomplete'}
              </h2>
              <div className="text-2xl font-bold mb-2">
                Score: {score.toFixed(0)}%
              </div>
              <div className="text-gray-600">
                {answers.filter(a => a !== undefined).length} of {totalQuestions} questions answered
              </div>
            </div>

            {passed && reward && (
              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 mb-6">
                <p className="text-green-800 font-semibold text-center">{reward.message}</p>
                <div className="flex items-center justify-center space-x-2 text-green-600 font-semibold mt-2">
                  <span className="text-xl">+{reward.points}</span>
                  <span className="text-lg">XP</span>
                </div>
              </div>
            )}

            <div className="flex justify-center">
              <button
                onClick={handleLessonComplete}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                {passed ? 'Complete Lesson!' : 'Review & Retake'}
              </button>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200/60">
          {/* Progress */}
          <div className="mb-6">
            <ProgressBar 
              currentStep={currentQuestion + 1} 
              totalSteps={totalQuestions} 
              showStepNumber={true} 
            />
            <div className="flex items-center justify-between mt-4">
              <span className="text-sm font-medium text-purple-600">FINAL TEST</span>
              <XPDisplay 
                xpEarned={xpEarned} 
                totalXP={totalXP} 
                showAnimation={showXPAnimation} 
              />
            </div>
            <div className="text-center mt-2">
              <h3 className="font-bold text-purple-900">{currentQ?.sectionTitle}</h3>
              <p className="text-sm text-purple-700">Question {currentQuestion + 1} of {totalQuestions}</p>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {currentQ?.question.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQ?.question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(currentQuestion, index)}
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
    case 'finalTest':
      return renderFinalTest()
    case 'summary':
      return renderSummaryCard()
    default:
      return renderConceptCard()
  }
}
