import { useState } from 'react'

export default function SimpleLessonStep({ step, language, onNext, stepNumber, totalSteps }) {
  const [contentIndex, setContentIndex] = useState(0)
  const [phase, setPhase] = useState('content')
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState(null)
  const [quizFeedback, setQuizFeedback] = useState(false)

  const safeLanguage = ['en', 'es', 'hi', 'tl', 'zh', 'ar', 'fr', 'pa'].includes(language) ? language : 'en'

  if (!step || !step.content) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading step...</p>
        </div>
      </div>
    )
  }

  const t = step.content[safeLanguage] || step.content.en
  const rawContent = t.contentBreakdown || (Array.isArray(t.explanation) ? t.explanation.map(e => ({ type: 'text', content: e })) : typeof t.explanation === 'string' ? [{ type: 'text', content: t.explanation }] : [])
  const headline = t.headline || ''
  const quiz = t.quiz || null

  const currentContent = rawContent[contentIndex]
  const isQuickQuestion = currentContent && currentContent.type === 'quickQuestion'
  const progressPct = totalSteps ? ((stepNumber - 1) / totalSteps) * 100 : 0

  const advanceContent = () => {
    if (contentIndex < rawContent.length - 1) {
      setContentIndex(contentIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else if (quiz) {
      setPhase('quiz')
    } else {
      onNext && onNext()
    }
  }

  const handleAnswerSelect = (idx) => {
    if (showFeedback) return
    setSelectedAnswer(idx)
    setShowFeedback(true)
  }

  const handleQuizAnswer = (idx) => {
    if (quizFeedback) return
    setQuizAnswer(idx)
    setQuizFeedback(true)
    if (quiz && quiz.correct === idx) {
      setTimeout(() => onNext && onNext(), 1500)
    }
  }

  if (phase === 'quiz' && quiz) {
    return (
      <div className="mx-auto max-w-3xl p-2 sm:p-4" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 sm:p-8">
          <h3 className="mb-6 text-2xl font-bold text-gray-900 leading-tight" style={{ fontWeight: 700 }}>
            {quiz.question}
          </h3>
          <div className="flex flex-col gap-3">
            {quiz.options.map((option, idx) => {
              let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151', borderLeft = '2px solid #e5e7eb'
              if (quizFeedback) {
                if (idx === quiz.correct) { bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46'; borderLeft = '4px solid #10b981' }
                else if (idx === quizAnswer) { bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b'; borderLeft = '4px solid #ef4444' }
              } else if (idx === quizAnswer) {
                bg = '#ede9fe'; border = '2px solid #8b5cf6'; color = '#5b21b6'; borderLeft = '4px solid #8b5cf6'
              }
              return (
                <button key={idx} onClick={() => handleQuizAnswer(idx)}
                  className="rounded-2xl px-4 py-4 text-left text-base font-medium transition-all hover:bg-indigo-50 hover:border-indigo-300 hover:border-l-4 hover:border-l-indigo-500"
                  style={{ background: bg, border, color, borderLeft }}>
                  {option}
                </button>
              )
            })}
          </div>
          {quizFeedback && (
            <div className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${quizAnswer === quiz.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {quizAnswer === quiz.correct ? `✓ ${quiz.explanation || 'Correct!'}` : '✗ Try again!'}
            </div>
          )}
          {quizFeedback && quizAnswer !== quiz.correct && (
            <button onClick={() => { setQuizAnswer(null); setQuizFeedback(false) }}
              className="mt-3 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105">
              Try Again
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl p-2 sm:p-4" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
      <div className="rounded-3xl bg-white p-6 shadow-lg border border-gray-100 sm:p-8">
        <div className="mb-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-50 to-teal-50 px-4 py-3">
          <span className="text-sm font-semibold text-purple-700 tracking-wide">
            Step {stepNumber || 1} of {totalSteps || 1}
          </span>
          <span className="text-sm font-medium text-gray-500">{headline}</span>
        </div>
        <div className="mb-8 h-2.5 w-full rounded-full bg-gray-100">
          <div
            className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-teal-500 transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {headline && (
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 leading-tight" style={{ fontWeight: 700 }}>
            {headline}
          </h2>
        )}

        {currentContent && (
          <div className="mb-8">
            {isQuickQuestion ? (
              <div className="rounded-3xl bg-gradient-to-br from-white to-indigo-50 p-5 ring-1 ring-indigo-100">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 leading-tight" style={{ fontWeight: 700 }}>
                  {currentContent.question}
                </h3>
                <div className="flex flex-col gap-3">
                  {currentContent.options.map((option, idx) => {
                    let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151', borderLeft = '2px solid #e5e7eb'
                    if (showFeedback) {
                      if (idx === currentContent.correct) { bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46'; borderLeft = '4px solid #10b981' }
                      else if (idx === selectedAnswer) { bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b'; borderLeft = '4px solid #ef4444' }
                    } else if (idx === selectedAnswer) {
                      bg = '#ede9fe'; border = '2px solid #8b5cf6'; color = '#5b21b6'; borderLeft = '4px solid #8b5cf6'
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        className="rounded-2xl px-4 py-4 text-left text-base font-medium transition-all hover:bg-indigo-50 hover:border-indigo-300 hover:border-l-4 hover:border-l-indigo-500"
                        style={{ background: bg, border, color, borderLeft }}
                      >
                        {option}
                      </button>
                    )
                  })}
                </div>
                {showFeedback && selectedAnswer !== currentContent.correct && (
                  <div className="mt-4">
                    <div className="mb-3 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                      Not quite — {currentContent.explanation || 'Try again.'}
                    </div>
                    <button
                      onClick={() => { setShowFeedback(false); setSelectedAnswer(null) }}
                      className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-indigo-700"
                    >
                      Try Again
                    </button>
                  </div>
                )}
                {showFeedback && selectedAnswer === currentContent.correct && (
                  <div className="mt-4">
                    <div className="mb-3 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                      ✓ {currentContent.explanation || 'Correct!'}
                    </div>
                    <button
                      onClick={advanceContent}
                      className="rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                    >
                      {contentIndex < rawContent.length - 1 ? 'Continue' : quiz ? 'Take Quiz' : 'Next Step'}
                    </button>
                  </div>
                )}
              </div>
            ) : currentContent && currentContent.type === 'example' ? (
              <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-teal-50 p-6 ring-1 ring-blue-100">
                {currentContent.title && (
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-teal-600">{currentContent.title}</p>
                )}
                <p className="text-base leading-[1.7] text-gray-600" style={{ fontWeight: 400, lineHeight: 1.7 }}>{currentContent.content}</p>
              </div>
            ) : (
              <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-6 ring-1 ring-gray-100">
                <p className="text-base leading-[1.7] text-gray-600" style={{ fontWeight: 400, lineHeight: 1.7 }}>
                  {currentContent.content || (typeof currentContent === 'string' ? currentContent : '')}
                </p>
              </div>
            )}
          </div>
        )}

        {!isQuickQuestion && (
          <div className="text-center">
            <button
              onClick={advanceContent}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-teal-500 px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              {contentIndex < rawContent.length - 1 ? 'Continue' : quiz ? 'Take Quiz' : 'Next Step'}
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
