import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, ChevronLeft, Trophy, Sparkles, GraduationCap } from 'lucide-react'
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
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-100 to-red-50">
            <GraduationCap className="h-8 w-8 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">Lesson not found</h2>
          <p className="mt-2 text-gray-500">The lesson you're looking for doesn't exist.</p>
        </motion.div>
      </div>
    )
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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex items-center justify-center relative overflow-hidden"
      >
        {/* Floating background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"
          />
        </div>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="relative text-center text-white max-w-xl mx-4"
        >
          {/* Success card with glass effect */}
          <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm border border-white/30 shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-3 text-4xl md:text-5xl font-extrabold tracking-tight"
            >
              Complete!
            </motion.h1>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-8 text-xl md:text-2xl font-semibold text-white/90"
            >
              {lessonTitle}
            </motion.h2>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-10 flex items-center justify-center gap-4"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-500 font-bold text-white shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
              <span className="text-3xl font-bold">+50 XP</span>
            </motion.div>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:justify-center"
            >
              <button 
                onClick={handleLessonComplete} 
                className="group relative rounded-2xl bg-white px-8 py-4 font-bold text-indigo-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Next Lesson
                  <Trophy className="h-5 w-5 transition-transform group-hover:scale-110" />
                </span>
              </button>
              <button 
                onClick={handleBackToLessons} 
                className="rounded-2xl border-2 border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:border-white/60"
              >
                All Lessons
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
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
        
        {/* Floating background shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-40 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 right-20 w-[30rem] h-[30rem] bg-teal-500/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-60 right-40 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"
          />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative space-y-8"
        >
          {/* Premium Hero Header */}
          <div className="relative">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-indigo-600/20 to-teal-500/20 blur-2xl rounded-3xl transform scale-105" />
            
            <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-8 text-white shadow-2xl overflow-hidden">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] opacity-30" />
              
              <div className="relative">
                <Link 
                  to="/learn" 
                  className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-all duration-300 hover:gap-3"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back to Lessons
                </Link>
                
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
                    <BookOpen className="h-7 w-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                      {lessonTitle}
                    </h1>
                    {lessonSubtitle && (
                      <p className="mt-3 max-w-3xl text-white/80 text-lg sm:text-xl font-medium leading-relaxed">
                        {lessonSubtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Main Content Container */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/50 to-transparent blur-xl rounded-[28px] transform translate-y-4" />
            
            <div className="relative rounded-[28px] bg-white p-6 sm:p-8 md:p-10 shadow-xl border border-gray-100/80">
              <SimpleLessonStep
                key={`${id}-step-${currentStepIndex}`}
                step={currentStep}
                language={language}
                onNext={handleNextStep}
                stepNumber={currentStepIndex + 1}
                totalSteps={totalSteps}
                lessonId={id}
              />
            </div>
          </motion.div>
        </motion.div>
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100"
      >
        <Link to="/learn" className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Lessons
        </Link>
        {lessonSubtitle && <p className="mt-3 text-lg text-gray-600">{lessonSubtitle}</p>}
        <div className="mt-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 text-gray-700">This lesson content is coming soon. Check back later!</div>
        <div className="mt-6">
          <Link to="/learn" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5">
            Browse Other Lessons
            <ChevronLeft className="w-4 h-4 rotate-180" />
          </Link>
        </div>
      </motion.div>
    </>
  )
}
