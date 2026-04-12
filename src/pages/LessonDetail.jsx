import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { lessons } from '../data/lessons.js'
import SEO from '../components/SEO.jsx'
import SimpleLessonStep from '../components/SimpleLessonStep.jsx'
import { progressTracker } from '../utils/progressTracker.js'

export default function LessonDetail({ language }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [lessonComplete, setLessonComplete] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const lesson = lessons.find(l => l.id === id)

  useEffect(() => {
    setCurrentStepIndex(0)
    setLessonComplete(false)
    setShowCelebration(false)
  }, [id])

  if (!lesson) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', color: '#1f2937', marginBottom: '16px' }}>Lesson not found</h2>
        <Link to="/learn" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '16px' }}>
          Back to Lessons
        </Link>
      </div>
    )
  }

  const lessonTitle = lesson.title[language] || lesson.title.en
  const lessonSubtitle = lesson.subtitle ? (lesson.subtitle[language] || lesson.subtitle.en) : ''

  const handleNextStep = () => {
    if (!lesson.steps) return
    const totalSteps = lesson.steps.length
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
    } else {
      setShowCelebration(true)
      progressTracker.completeLesson(id)
      progressTracker.addXP(50)
      progressTracker.updateStreak()
    }
  }

  const handleLessonComplete = () => {
    setLessonComplete(true)
    setShowCelebration(false)
    const currentIndex = lessons.findIndex(l => l.id === id)
    const nextLesson = lessons[currentIndex + 1]
    if (nextLesson) {
      navigate(`/lesson/${nextLesson.id}`)
    } else {
      navigate('/learn')
    }
  }

  const handleBackToLessons = () => {
    setShowCelebration(false)
    navigate('/learn')
  }

  if (showCelebration) {
    return (
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #4f46e5 0%, #14b8a6 100%)',
        borderRadius: '20px',
        padding: '40px',
        margin: '20px'
      }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%',
            background: 'white', display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 24px'
          }}>
            <svg width="60" height="60" fill="none" viewBox="0 0 24 24">
              <path fill="#10b981" fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: '800', marginBottom: '12px' }}>Complete!</h1>
          <h2 style={{ fontSize: '22px', fontWeight: '600', marginBottom: '24px', opacity: 0.9 }}>{lessonTitle}</h2>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px', marginBottom: '32px'
          }}>
            <div style={{
              width: '48px', height: '48px', borderRadius: '50%',
              background: '#facc15', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <span style={{ color: 'white', fontWeight: '700', fontSize: '14px' }}>XP</span>
            </div>
            <span style={{ fontSize: '28px', fontWeight: '700' }}>+50 XP</span>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={handleLessonComplete}
              style={{
                background: 'white', color: '#4f46e5', border: 'none',
                padding: '16px 32px', borderRadius: '16px', fontSize: '17px',
                fontWeight: '700', cursor: 'pointer'
              }}
            >
              Next Lesson
            </button>
            <button
              onClick={handleBackToLessons}
              style={{
                background: 'rgba(255,255,255,0.2)', color: 'white',
                border: '2px solid rgba(255,255,255,0.5)',
                padding: '16px 32px', borderRadius: '16px', fontSize: '17px',
                fontWeight: '600', cursor: 'pointer'
              }}
            >
              All Lessons
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (lesson.steps) {
    const currentStep = lesson.steps[currentStepIndex]
    const totalSteps = lesson.steps.length

    return (
      <>
        <SEO
          title={`${lessonTitle} - ${lesson.category} Lesson | NewStart Finance`}
          description={`Learn ${lesson.category.toLowerCase()} with expert-led interactive lessons. Available in 8 languages for newcomers to Canada and USA.`}
          keywords={`${lesson.category.toLowerCase()} education, financial literacy, ${lessonTitle}, newcomer finance, multilingual lessons`}
          canonicalUrl={`https://newstart-finance.com/lesson/${lesson.id}`}
          ogImage={`https://newstart-finance.com/lesson-${lesson.id}.jpg`}
          type="article"
        />
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <div style={{ marginBottom: '20px' }}>
            <Link
              to="/learn"
              style={{
                display: 'inline-flex', alignItems: 'center', color: '#4f46e5',
                textDecoration: 'none', fontSize: '16px', marginBottom: '16px', padding: '8px 0'
              }}
            >
              &larr; Back to Lessons
            </Link>
            <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#1f2937', marginBottom: '4px' }}>
              {lessonTitle}
            </h1>
            {lessonSubtitle && (
              <p style={{ fontSize: '16px', color: '#6b7280' }}>{lessonSubtitle}</p>
            )}
          </div>

          <div style={{ flex: 1 }}>
            <SimpleLessonStep
              step={currentStep}
              language={language}
              onNext={handleNextStep}
              stepNumber={currentStepIndex + 1}
              totalSteps={totalSteps}
              lessonId={id}
            />
          </div>
        </div>
      </>
    )
  }

  // Fallback: lesson has no steps — show a simple message
  return (
    <>
      <SEO
        title={`${lessonTitle} - ${lesson.category} Lesson | NewStart Finance`}
        description={`Learn ${lesson.category.toLowerCase()} with expert-led lessons. Available in 8 languages for newcomers to Canada and USA.`}
        keywords={`${lesson.category.toLowerCase()} education, financial literacy, ${lessonTitle}, newcomer finance, multilingual lessons`}
        canonicalUrl={`https://newstart-finance.com/lesson/${lesson.id}`}
        ogImage={`https://newstart-finance.com/lesson-${lesson.id}.jpg`}
        type="article"
      />
      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        <Link to="/learn" style={{ color: '#4f46e5', textDecoration: 'none', fontSize: '16px', display: 'inline-block', marginBottom: '20px' }}>
          &larr; Back to Lessons
        </Link>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1f2937', marginBottom: '8px' }}>{lessonTitle}</h1>
        {lessonSubtitle && <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '24px' }}>{lessonSubtitle}</p>}
        <div style={{ background: '#f9fafb', padding: '24px', borderRadius: '12px', border: '1px solid #e5e7eb' }}>
          <p style={{ fontSize: '16px', color: '#374151' }}>This lesson content is coming soon. Check back later!</p>
        </div>
        <div style={{ marginTop: '24px' }}>
          <Link
            to="/learn"
            style={{
              display: 'inline-block', padding: '12px 24px',
              background: 'linear-gradient(to right, #4f46e5, #14b8a6)',
              color: 'white', textDecoration: 'none',
              borderRadius: '10px', fontSize: '16px', fontWeight: '600'
            }}
          >
            Browse Other Lessons
          </Link>
        </div>
      </div>
    </>
  )
}
