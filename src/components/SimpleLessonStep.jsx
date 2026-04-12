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
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        {/* Progress bar */}
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#6366f1', fontSize: '14px', fontWeight: '600' }}>
              Step {stepNumber || 1} of {totalSteps || 1}
            </span>
            <span style={{ color: '#6b7280', fontSize: '14px' }}>{headline}</span>
          </div>
          <div style={{ width: '100%', background: '#e5e7eb', height: '8px', borderRadius: '6px', marginTop: '12px' }}>
            <div style={{ width: `${progressPct}%`, height: '100%', background: 'linear-gradient(to right, #6366f1, #14b8a6)', borderRadius: '6px', transition: 'width 0.4s ease' }} />
          </div>
        </div>

        {headline && (
          <h2 style={{ textAlign: 'center', fontSize: '26px', fontWeight: '700', color: '#1f2937', marginBottom: '24px' }}>
            {headline}
          </h2>
        )}

        {currentContent && (
          <div style={{ marginBottom: '32px' }}>
            {isQuickQuestion ? (
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937', marginBottom: '16px' }}>
                  {currentContent.question}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {currentContent.options.map((option, idx) => {
                    let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151'
                    if (showFeedback) {
                      if (idx === currentContent.correct) { bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46' }
                      else if (idx === selectedAnswer) { bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b' }
                    } else if (idx === selectedAnswer) {
                      bg = '#ede9fe'; border = '2px solid #7c3aed'
                    }
                    return (
                      <button key={idx} onClick={() => handleAnswerSelect(idx)}
                        style={{ background: bg, border, color, borderRadius: '10px', padding: '14px 18px', textAlign: 'left', fontSize: '15px', cursor: 'pointer', transition: 'all 0.2s' }}>
                        {option}
                      </button>
                    )
                  })}
                </div>
                {showFeedback && selectedAnswer !== currentContent.correct && (
                  <div style={{ marginTop: '12px' }}>
                    <div style={{ padding: '12px 16px', borderRadius: '8px', background: '#fee2e2', color: '#991b1b', fontSize: '14px', marginBottom: '8px' }}>
                      Not quite — {currentContent.explanation || 'Try again.'}
                    </div>
                    <button onClick={() => { setShowFeedback(false); setSelectedAnswer(null) }}
                      style={{ background: '#6366f1', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '14px', cursor: 'pointer' }}>
                      Try Again
                    </button>
                  </div>
                )}
                {showFeedback && selectedAnswer === currentContent.correct && (
                  <div style={{ marginTop: '12px', padding: '12px 16px', borderRadius: '8px', background: '#d1fae5', color: '#065f46', fontSize: '14px' }}>
                    ✓ {currentContent.explanation || 'Correct!'}
                  </div>
                )}
              </div>
            ) : (
              <div style={{ background: '#f9fafb', padding: '28px', borderRadius: '14px' }}>
                <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#374151' }}>
                  {currentContent.content || (typeof currentContent === 'string' ? currentContent : '')}
                </p>
              </div>
            )}
          </div>
        )}

        {!isQuickQuestion && (
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={advanceContent}
              style={{
                background: 'linear-gradient(to right, #4f46e5, #14b8a6)',
                color: 'white',
                border: 'none',
                padding: '16px 40px',
                borderRadius: '14px',
                fontSize: '17px',
                fontWeight: '600',
                cursor: 'pointer',
              }}>
              {contentIndex < rawContent.length - 1 ? 'Continue' : quiz ? 'Take Quiz' : 'Next Step'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
