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
  const [showCelebration, setShowCelebration] = useState(false)

  const lesson = lessons.find(l => l.id === id)

  useEffect(() => {
    setCurrentStepIndex(0)
    setShowCelebration(false)
  }, [id])

  if (!lesson) {
    return <div className="px-4 py-10 text-center text-gray-600">Lesson not found</div>
  }

  const lessonTitle = lesson.title[language] || lesson.title.en
  const lessonSubtitle = lesson.subtitle ? (lesson.subtitle[language] || lesson.subtitle.en) : ''

  const handleNextStep = () => {
    const totalSteps = lesson.steps?.length || 0
    if (!totalSteps) return
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex(currentStepIndex + 1)
      return
    }
    setShowCelebration(true)
    progressTracker.completeLesson(id)
    progressTracker.addXP(50)
    progressTracker.updateStreak()
  }

  const handleLessonComplete = () => {
    setShowCelebration(false)
    const currentIndex = lessons.findIndex(l => l.id === id)
    const nextLesson = lessons[currentIndex + 1]
    navigate(nextLesson ? `/lesson/${nextLesson.id}` : '/learn')
  }

  const handleBackToLessons = () => {
    setShowCelebration(false)
    navigate('/learn')
  }

  if (showCelebration) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 p-6 shadow-2xl">
        <div className="text-center text-white max-w-xl">
          <div className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm shadow-2xl">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-xl">
              <svg className="h-12 w-12 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <h1 className="mb-4 text-5xl font-bold">Complete!</h1>
          <h2 className="mb-6 text-2xl font-semibold opacity-90">{lessonTitle}</h2>
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 font-bold text-white shadow-lg">XP</div>
            <span className="text-3xl font-bold">+50 XP</span>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button onClick={handleLessonComplete} className="rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition-transform hover:scale-105">Next Lesson</button>
            <button onClick={handleBackToLessons} className="rounded-2xl border-2 border-white/50 bg-white/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition-transform hover:scale-105">All Lessons</button>
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
        <div className="space-y-6">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-6 text-white shadow-2xl">
            <Link to="/learn" className="mb-4 inline-flex items-center text-sm font-semibold text-white/90 hover:text-white">&larr; Back to Lessons</Link>
            <h1 className="text-3xl font-bold md:text-4xl">{lessonTitle}</h1>
            {lessonSubtitle && <p className="mt-2 max-w-3xl text-white/90">{lessonSubtitle}</p>}
          </div>
          <div className="rounded-3xl bg-white p-4 shadow-xl ring-1 ring-gray-200/80 md:p-6">
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
      <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-200/80">
        <Link to="/learn" className="mb-5 inline-block text-sm font-semibold text-indigo-600">&larr; Back to Lessons</Link>
        <h1 className="text-3xl font-bold text-gray-900">{lessonTitle}</h1>
        {lessonSubtitle && <p className="mt-3 text-lg text-gray-600">{lessonSubtitle}</p>}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 text-gray-700">This lesson content is coming soon. Check back later!</div>
        <div className="mt-6">
          <Link to="/learn" className="inline-flex rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105">Browse Other Lessons</Link>
        </div>
      </div>
    </>
  )
}
