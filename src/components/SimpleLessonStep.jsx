import { useState } from 'react'

export default function SimpleLessonStep({ step, language, onNext, stepNumber, totalSteps }) {
  const [contentIndex, setContentIndex] = useState(0)
  const [phase, setPhase] = useState('content')
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [quizAnswer, setQuizAnswer] = useState(null)
  const [quizFeedback, setQuizFeedback] = useState(false)

  if (!step || !step.content) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <p style={{ textAlign: 'center', color: '#6b7280' }}>Loading step...</p>
        </div>
      </div>
    )
  }

  const t = step.content[language] || step.content.en
  const rawContent = t.contentBreakdown || (t.explanation ? t.explanation.map(e => ({ type: 'text', content: e })) : [])
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
    if (currentContent.correct === idx) {
      setTimeout(() => {
        advanceContent()
      }, 1200)
    }
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
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1f2937', marginBottom: '24px' }}>
            {quiz.question}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {quiz.options.map((option, idx) => {
              let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151'
              if (quizFeedback) {
                if (idx === quiz.correct) { bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46' }
                else if (idx === quizAnswer) { bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b' }
              } else if (idx === quizAnswer) {
                bg = '#ede9fe'; border = '2px solid #7c3aed'
              }
              return (
                <button key={idx} onClick={() => handleQuizAnswer(idx)}
                  style={{ background: bg, border, color, borderRadius: '12px', padding: '16px 20px', textAlign: 'left', fontSize: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {option}
                </button>
              )
            })}
          </div>
          {quizFeedback && (
            <div style={{ marginTop: '16px', padding: '12px 16px', borderRadius: '8px', background: quizAnswer === quiz.correct ? '#d1fae5' : '#fee2e2', color: quizAnswer === quiz.correct ? '#065f46' : '#991b1b', fontSize: '14px' }}>
              {quizAnswer === quiz.correct ? `✓ ${quiz.explanation || 'Correct!'}` : '✗ Try again!'}
            </div>
          )}
          {quizFeedback && quizAnswer !== quiz.correct && (
            <button onClick={() => { setQuizAnswer(null); setQuizFeedback(false) }}
              style={{ marginTop: '12px', background: 'linear-gradient(to right, #4f46e5, #14b8a6)', color: 'white', border: 'none', borderRadius: '12px', padding: '12px 24px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
              Try Again
            </button>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl p-2 sm:p-4">
      <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-200/80 sm:p-8">
        <div className="mb-6 flex items-center justify-between rounded-2xl bg-gradient-to-r from-indigo-50 to-teal-50 px-4 py-3">
          <span className="text-sm font-bold text-indigo-700">
            Step {stepNumber || 1} of {totalSteps || 1}
          </span>
          <span className="text-sm font-semibold text-gray-600">{headline}</span>
        </div>
        <div className="mb-8 h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-gradient-to-r from-indigo-600 to-teal-500 transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {headline && (
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
            {headline}
          </h2>
        )}

        {currentContent && (
          <div className="mb-8">
            {isQuickQuestion ? (
              <div className="rounded-3xl bg-gradient-to-br from-white to-indigo-50 p-5 ring-1 ring-indigo-100">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {currentContent.question}
                </h3>
                <div className="flex flex-col gap-3">
                  {currentContent.options.map((option, idx) => {
                    let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151'
                    if (showFeedback) {
                      if (idx === currentContent.correct) { bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46' }
                      else if (idx === selectedAnswer) { bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b' }
                    } else if (idx === selectedAnswer) {
                      bg = '#ede9fe'; border = '2px solid #7c3aed'
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        className="rounded-2xl px-4 py-4 text-left text-base font-medium transition-transform hover:scale-[1.01]"
                        style={{ background: bg, border, color }}
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
                  <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                    ✓ {currentContent.explanation || 'Correct!'}
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white p-6 ring-1 ring-gray-200">
                <p className="text-[17px] leading-8 text-gray-700">
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
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-teal-500 px-10 py-4 text-lg font-semibold text-white shadow-xl transition-transform hover:scale-105"
            >
              {contentIndex < rawContent.length - 1 ? 'Continue' : quiz ? 'Take Quiz' : 'Next Step'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
