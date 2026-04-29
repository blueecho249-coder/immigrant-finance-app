import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle, ArrowRight, HelpCircle, Lightbulb, FileText } from 'lucide-react'

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
      <div className="flex items-center justify-center py-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-indigo-100">
            <div className="h-6 w-6 rounded-full border-2 border-purple-500 border-t-transparent animate-spin" />
          </div>
          <p className="text-gray-500 font-medium">Loading step...</p>
        </motion.div>
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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mx-auto max-w-3xl"
        style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
      >
        {/* Glassmorphism quiz card */}
        <div className="relative rounded-[22px] bg-white/80 backdrop-blur-sm border border-white/60 shadow-xl p-6 sm:p-8">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-tr-[22px] rounded-bl-[100px] pointer-events-none" />
          
          <div className="relative">
            {/* Quiz icon */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 shadow-sm">
                <HelpCircle className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">Knowledge Check</span>
            </div>
            
            <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              {quiz.question}
            </h3>
            
            <div className="flex flex-col gap-3">
              {quiz.options.map((option, idx) => {
                let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151', borderLeft = '2px solid #e5e7eb'
                let icon = null
                
                if (quizFeedback) {
                  if (idx === quiz.correct) { 
                    bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46'; borderLeft = '4px solid #10b981' 
                    icon = <CheckCircle className="w-5 h-5 ml-auto flex-shrink-0" />
                  }
                  else if (idx === quizAnswer) { 
                    bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b'; borderLeft = '4px solid #ef4444' 
                    icon = <XCircle className="w-5 h-5 ml-auto flex-shrink-0" />
                  }
                } else if (idx === quizAnswer) {
                  bg = '#ede9fe'; border = '2px solid #8b5cf6'; color = '#5b21b6'; borderLeft = '4px solid #8b5cf6'
                }
                
                return (
                  <motion.button 
                    key={idx} 
                    onClick={() => handleQuizAnswer(idx)}
                    whileHover={{ scale: quizFeedback ? 1 : 1.01 }}
                    whileTap={{ scale: quizFeedback ? 1 : 0.99 }}
                    disabled={quizFeedback}
                    className="group rounded-xl px-5 py-4 text-left text-base font-medium transition-all duration-200 flex items-center gap-3 hover:bg-indigo-50/50 hover:border-indigo-200 hover:shadow-sm"
                    style={{ background: bg, border, color, borderLeft }}
                  >
                    <span className="flex-1">{option}</span>
                    {icon}
                  </motion.button>
                )
              })}
            </div>
            
            <AnimatePresence>
              {quizFeedback && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6"
                >
                  <div className={`rounded-xl px-5 py-4 flex items-start gap-3 ${quizAnswer === quiz.correct ? 'bg-green-50/80 border border-green-200' : 'bg-red-50/80 border border-red-200'}`}>
                    {quizAnswer === quiz.correct ? (
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className={`font-semibold ${quizAnswer === quiz.correct ? 'text-green-800' : 'text-red-800'}`}>
                        {quizAnswer === quiz.correct ? 'Correct!' : 'Not quite'}
                      </p>
                      <p className={`text-sm mt-1 ${quizAnswer === quiz.correct ? 'text-green-700' : 'text-red-700'}`}>
                        {quizAnswer === quiz.correct ? (quiz.explanation || 'Great job!') : (quiz.explanation || 'Try again to continue.')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            <AnimatePresence>
              {quizFeedback && quizAnswer !== quiz.correct && (
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => { setQuizAnswer(null); setQuizFeedback(false) }}
                  className="mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Try Again
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="mx-auto max-w-3xl"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* Premium Progress Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-100 to-indigo-100">
              <FileText className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              Step <span className="text-purple-600 font-bold">{stepNumber || 1}</span> of <span className="text-gray-500">{totalSteps || 1}</span>
            </span>
          </div>
          {headline && (
            <span className="hidden sm:block text-sm font-medium text-gray-500 truncate max-w-[200px]">
              {headline}
            </span>
          )}
        </div>
        
        {/* Premium progress bar with step indicators */}
        <div className="relative">
          <div className="h-3 w-full rounded-full bg-gray-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="h-full rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-teal-500"
            />
          </div>
          {/* Step dots */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-1">
            {Array.from({ length: totalSteps || 1 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                  i < (stepNumber || 1) - 1 
                    ? 'bg-purple-500 border-purple-500' 
                    : i === (stepNumber || 1) - 1
                    ? 'bg-white border-purple-500 shadow-md'
                    : 'bg-gray-200 border-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={contentIndex + (isQuickQuestion ? '-question' : '')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          {isQuickQuestion ? (
            <div className="relative rounded-[22px] bg-white/90 backdrop-blur-sm border border-white/80 shadow-xl p-6 sm:p-8 overflow-hidden">
              {/* Decorative gradient blob */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative">
                {/* Question icon */}
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-100 to-indigo-100 shadow-sm">
                    <Lightbulb className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-semibold text-purple-600 tracking-wide uppercase">Quick Question</span>
                </div>
                
                <h3 className="mb-8 text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                  {currentContent.question}
                </h3>
                
                <div className="flex flex-col gap-3">
                  {currentContent.options.map((option, idx) => {
                    let bg = '#f9fafb', border = '2px solid #e5e7eb', color = '#374151', borderLeft = '2px solid #e5e7eb'
                    let icon = null
                    
                    if (showFeedback) {
                      if (idx === currentContent.correct) { 
                        bg = '#d1fae5'; border = '2px solid #10b981'; color = '#065f46'; borderLeft = '4px solid #10b981' 
                        icon = <CheckCircle className="w-5 h-5 ml-auto flex-shrink-0" />
                      }
                      else if (idx === selectedAnswer) { 
                        bg = '#fee2e2'; border = '2px solid #ef4444'; color = '#991b1b'; borderLeft = '4px solid #ef4444' 
                        icon = <XCircle className="w-5 h-5 ml-auto flex-shrink-0" />
                      }
                    } else if (idx === selectedAnswer) {
                      bg = '#ede9fe'; border = '2px solid #8b5cf6'; color = '#5b21b6'; borderLeft = '4px solid #8b5cf6'
                    }
                    
                    return (
                      <motion.button
                        key={idx}
                        onClick={() => handleAnswerSelect(idx)}
                        whileHover={{ scale: showFeedback ? 1 : 1.01 }}
                        whileTap={{ scale: showFeedback ? 1 : 0.99 }}
                        disabled={showFeedback}
                        className="group rounded-xl px-5 py-4 text-left text-base font-medium transition-all duration-200 flex items-center gap-3 hover:bg-indigo-50/50 hover:border-indigo-200 hover:shadow-sm"
                        style={{ background: bg, border, color, borderLeft }}
                      >
                        <span className="flex-1">{option}</span>
                        {icon}
                      </motion.button>
                    )
                  })}
                </div>
                
                <AnimatePresence>
                  {showFeedback && selectedAnswer !== currentContent.correct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <div className="rounded-xl bg-red-50/80 border border-red-200 px-5 py-4 flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-red-800">Not quite</p>
                          <p className="text-sm mt-1 text-red-700">{currentContent.explanation || 'Try again.'}</p>
                        </div>
                      </div>
                      <motion.button
                        onClick={() => { setShowFeedback(false); setSelectedAnswer(null) }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                      >
                        Try Again
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {showFeedback && selectedAnswer === currentContent.correct && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6"
                    >
                      <div className="rounded-xl bg-green-50/80 border border-green-200 px-5 py-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-green-800">Correct!</p>
                          <p className="text-sm mt-1 text-green-700">{currentContent.explanation || 'Great job!'}</p>
                        </div>
                      </div>
                      <motion.button
                        onClick={advanceContent}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-4 rounded-xl bg-gradient-to-r from-purple-600 to-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 flex items-center gap-2"
                      >
                        {contentIndex < rawContent.length - 1 ? 'Continue' : quiz ? 'Take Quiz' : 'Next Step'}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ) : currentContent && currentContent.type === 'example' ? (
            <div className="relative rounded-[22px] bg-gradient-to-br from-blue-50/80 to-teal-50/80 backdrop-blur-sm border border-white/60 shadow-lg p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-transparent rounded-tr-[22px] rounded-bl-[100px] pointer-events-none" />
              {currentContent.title && (
                <div className="mb-4 flex items-center gap-2">
                  <div className="h-1 w-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500" />
                  <p className="text-xs font-bold uppercase tracking-widest text-teal-600">{currentContent.title}</p>
                </div>
              )}
              <p className="text-lg leading-[1.8] text-gray-700 font-normal">{currentContent.content}</p>
            </div>
          ) : (
            <div className="relative rounded-[22px] bg-white/80 backdrop-blur-sm border border-white/60 shadow-lg p-6 sm:p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-tr-[22px] rounded-bl-[100px] pointer-events-none" />
              <p className="text-lg leading-[1.8] text-gray-700 font-normal">
                {currentContent.content || (typeof currentContent === 'string' ? currentContent : '')}
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Premium Continue Button */}
      {!isQuickQuestion && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            onClick={advanceContent}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-teal-500 px-10 py-4 text-lg font-bold text-white shadow-xl shadow-purple-500/20 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative">{contentIndex < rawContent.length - 1 ? 'Continue' : quiz ? 'Take Quiz' : 'Next Step'}</span>
            <ArrowRight className="relative w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  )
}
