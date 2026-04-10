import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { lessons } from '../data/lessons.js'
import SEO from '../components/SEO.jsx'
import LessonStep from '../components/LessonStep.jsx'

export default function LessonDetail({ language }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const [lessonComplete, setLessonComplete] = useState(false)

  const lesson = lessons.find(l => l.id === id)

  useEffect(() => {
    // Check if lesson is already complete
    const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]')
    if (completedLessons.includes(id)) {
      setLessonComplete(true)
    }
  }, [id])

  if (!lesson) {
    return (
      <div style={{padding: '20px', fontSize: '24px'}}>
        Lesson not found
      </div>
    )
  }

  // Check if lesson uses new step-based format
  if (lesson.steps) {
    const currentStep = lesson.steps[currentStepIndex]
    const totalSteps = lesson.steps.length

    const handleNextStep = () => {
      if (currentStepIndex < totalSteps - 1) {
        setCurrentStepIndex(currentStepIndex + 1)
      } else {
        // Mark lesson as complete
        const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]')
        if (!completedLessons.includes(id)) {
          completedLessons.push(id)
          localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
          setLessonComplete(true)
        }
        // Navigate to next lesson or back to learn
        const currentIndex = lessons.findIndex(l => l.id === id)
        const nextLesson = lessons[currentIndex + 1]
        if (nextLesson) {
          navigate(`/lesson/${nextLesson.id}`)
        } else {
          navigate('/learn')
        }
      }
    }

    return (
      <>
        <SEO 
          title={`${lesson.title[language] || lesson.title.en} - ${lesson.category} Lesson | NewStart Finance`}
          description={`Learn ${lesson.category.toLowerCase()} with expert-led interactive lessons. Available in 8 languages for newcomers to Canada and USA.`}
          keywords={`${lesson.category.toLowerCase()} education, financial literacy, ${lesson.title[language] || lesson.title.en}, newcomer finance, multilingual lessons`}
          canonicalUrl={`https://newstart-finance.com/lesson/${lesson.id}`}
          ogImage={`https://newstart-finance.com/lesson-${lesson.id}.jpg`}
          type="article"
        />
        <div style={{padding: '20px', maxWidth: '1000px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
          {/* Header */}
          <div style={{marginBottom: '30px'}}>
            <Link 
              to="/learn" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '16px',
                marginBottom: '20px',
                padding: '8px 0'
              }}
            >
              Back to Lessons
            </Link>
            <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px'}}>
              {lesson.title[language] || lesson.title.en}
            </h1>
            {lessonComplete && (
              <div style={{
                backgroundColor: '#10b981',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '8px',
                display: 'inline-block',
                fontSize: '14px',
                fontWeight: '500'
              }}>
                Lesson Complete
              </div>
            )}
          </div>

          {/* Interactive Step */}
          <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
            <LessonStep 
              step={currentStep}
              language={language}
              onNext={handleNextStep}
              stepNumber={currentStepIndex + 1}
              totalSteps={totalSteps}
            />
          </div>
        </div>
      </>
    )
  }

  // Fallback to old format for lessons not yet converted
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [quizScores, setQuizScores] = useState([])

  const currentQuiz = lesson.quizzes[currentQuizIndex]

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === currentQuiz.correctIndex
    setIsCorrect(correct)
    setShowResult(true)

    // Save quiz score
    const newScores = [...quizScores, correct ? 1 : 0]
    setQuizScores(newScores)
  }

  const handleNextQuiz = () => {
    if (currentQuizIndex < lesson.quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
      setSelectedAnswer(null)
      setShowResult(false)
      setIsCorrect(false)
    } else {
      // All quizzes completed
      const completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]')
      if (!completedLessons.includes(id)) {
        completedLessons.push(id)
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons))
        setLessonComplete(true)
      }
    }
  }

  const resetQuiz = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setIsCorrect(false)
  }

  const getNextLesson = () => {
    const currentIndex = lessons.findIndex(l => l.id === id)
    const nextLesson = lessons[currentIndex + 1]
    return nextLesson ? `/lesson/${nextLesson.id}` : '/learn'
  }

  const content = {
    en: {
      back: "Back to Lessons",
      complete: "Lesson Complete",
      tryAgain: "Try Again",
      next: "Next Question",
      finishLesson: "Complete Lesson",
      nextLesson: "Next Lesson",
      correct: "Correct! Well done!",
      incorrect: "Incorrect. Try again!",
      quizProgress: `Quiz ${currentQuizIndex + 1} of ${lesson.quizzes.length}`,
      yourScore: `Your score: ${quizScores.filter(s => s).length} out of ${quizScores.length}`
    },
    es: {
      back: "Volver a Lecciones",
      complete: "Lección Completa",
      tryAgain: "Intentar de Nuevo",
      next: "Siguiente Pregunta",
      finishLesson: "Completar Lección",
      nextLesson: "Siguiente Lección",
      correct: "¡Correcto! ¡Bien hecho!",
      incorrect: "¡Incorrecto! ¡Intenta de nuevo!",
      quizProgress: `Cuestionario ${currentQuizIndex + 1} de ${lesson.quizzes.length}`,
      yourScore: `Tu puntuación: ${quizScores.filter(s => s).length} de ${quizScores.length}`
    },
    hi: {
      back: "Lessons par wapas jao",
      complete: "Lesson complete",
      tryAgain: "Phir se try karo",
      next: "Agla sawal",
      finishLesson: "Lesson complete karo",
      nextLesson: "Agla lesson",
      correct: "Sahi! Bahut badhiya!",
      incorrect: "Galat. Phir se try karo!",
      quizProgress: `Quiz ${currentQuizIndex + 1} ka ${lesson.quizzes.length}`,
      yourScore: `Aapka score: ${quizScores.filter(s => s).length} ka ${quizScores.length}`
    },
    tl: {
      back: "Bumalik sa mga Aralin",
      complete: "Kumpletong Aralin",
      tryAgain: "Subukan uli",
      next: "Susunod na Katanungan",
      finishLesson: "Kumpletong ang Aralin",
      nextLesson: "Susunod na Aralin",
      correct: "Tama! Mahusay mo!",
      incorrect: "Mali. Subukan uli!",
      quizProgress: `Pagsusulit ${currentQuizIndex + 1} ng ${lesson.quizzes.length}`,
      yourScore: `Ang iyong score mo: ${quizScores.filter(s => s).length} sa ${quizScores.length}`
    },
    zh: {
      back: "Back to Lessons",
      complete: "Lesson Complete",
      tryAgain: "Try Again",
      next: "Next Question",
      finishLesson: "Complete Lesson",
      nextLesson: "Next Lesson",
      correct: "Correct! Well done!",
      incorrect: "Incorrect. Try again!",
      quizProgress: `Quiz ${currentQuizIndex + 1} of ${lesson.quizzes.length}`,
      yourScore: `Your score: ${quizScores.filter(s => s).length} out of ${quizScores.length}`
    },
    ar: {
      back: "Back to Lessons",
      complete: "Lesson Complete",
      tryAgain: "Try Again",
      next: "Next Question",
      finishLesson: "Complete Lesson",
      nextLesson: "Next Lesson",
      correct: "Correct! Well done!",
      incorrect: "Incorrect. Try again!",
      quizProgress: `Quiz ${currentQuizIndex + 1} of ${lesson.quizzes.length}`,
      yourScore: `Your score: ${quizScores.filter(s => s).length} out of ${quizScores.length}`
    },
    fr: {
      back: "Retour aux leçons",
      complete: "Leçon terminée",
      tryAgain: "Réessayer",
      next: "Question suivante",
      finishLesson: "Terminer la leçon",
      nextLesson: "Leçon suivante",
      correct: "Correct ! Bien joué !",
      incorrect: "Incorrect ! Réessayez !",
      quizProgress: `Quiz ${currentQuizIndex + 1} sur ${lesson.quizzes.length}`,
      yourScore: `Votre score : ${quizScores.filter(s => s).length} sur ${quizScores.length}`
    },
    pa: {
      back: "Lessons to wapas jao",
      complete: "Lesson complete",
      tryAgain: "Phir try karo",
      next: "Agla sawal",
      finishLesson: "Lesson complete karo",
      nextLesson: "Agla lesson",
      correct: "Sahi! Vaddia!",
      incorrect: "Galat. Phir try karo!",
      quizProgress: `Quiz ${currentQuizIndex + 1} da ${lesson.quizzes.length}`,
      yourScore: `Tuhada score: ${quizScores.filter(s => s).length} da ${quizScores.length}`
    }
  }

  const t = content[language] || content.en

  return (
    <>
      <SEO 
        title={`${lesson.title[language] || lesson.title.en} - ${lesson.category} Lesson | NewStart Finance`}
        description={`Learn ${lesson.category.toLowerCase()} with expert-led lessons. ${(lesson.content[language] || lesson.content.en)[0]?.substring(0, 100) || 'Master essential financial skills'} Available in 8 languages for newcomers to Canada and USA.`}
        keywords={`${lesson.category.toLowerCase()} education, financial literacy, ${lesson.title[language] || lesson.title.en}, newcomer finance, multilingual lessons`}
        canonicalUrl={`https://newstart-finance.com/lesson/${lesson.id}`}
        ogImage={`https://newstart-finance.com/lesson-${lesson.id}.jpg`}
        type="article"
      />
      <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
      {/* Header */}
      <div style={{marginBottom: '30px'}}>
        <Link 
          to="/learn" 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#4f46e5',
            textDecoration: 'none',
            fontSize: '16px',
            marginBottom: '20px',
            padding: '8px 0'
          }}
        >
          {t.back}
        </Link>
      </div>
      
      {/* Main Content */}
      <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <h1 style={{fontSize: '32px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px'}}>
          {lesson.title[language] || lesson.title.en}
        </h1>
        
        {lessonComplete && (
          <div style={{
            backgroundColor: '#10b981',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            display: 'inline-block',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            {t.complete}
          </div>
        )}
        
        {/* Content */}
        <div style={{marginBottom: '40px'}}>
          {(lesson.content[language] || lesson.content.en).map((paragraph, index) => (
            <p key={index} style={{
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#4b5563',
              marginBottom: '16px'
            }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Quiz Section */}
      {!lessonComplete && lesson.quizzes && lesson.quizzes.length > 0 && (
        <div style={{
          backgroundColor: '#f9fafb',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #e5e7eb',
          marginTop: 'auto'
        }}>
          <h2 style={{fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px'}}>
            Quiz
          </h2>
          
          {/* Progress */}
          <div style={{
            marginBottom: '20px',
            fontSize: '16px',
            color: '#6b7280',
            fontWeight: '500'
          }}>
            {t.quizProgress}
          </div>
          
          {/* Question */}
          <p style={{fontSize: '18px', color: '#4b5563', marginBottom: '20px'}}>
            {currentQuiz.question[language] || currentQuiz.question.en}
          </p>
          
          {/* Options */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
            {(currentQuiz.options[language] || currentQuiz.options.en).map((option, index) => (
              <button
                key={index}
                onClick={() => !showResult && handleAnswerClick(index)}
                disabled={showResult}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  border: '2px solid',
                  borderColor: selectedAnswer === index 
                    ? isCorrect 
                      ? '#10b981' 
                      : '#ef4444'
                    : '#d1d5db',
                  backgroundColor: selectedAnswer === index
                    ? isCorrect
                      ? '#ecfdf5'
                      : '#fef2f2'
                    : 'white',
                  cursor: showResult ? 'not-allowed' : 'pointer',
                  fontSize: '16px',
                  textAlign: 'left',
                  transition: 'all 0.2s'
                }}
              >
                {option}
              </button>
            ))}
          </div>
          
          {/* Result Message */}
          {showResult && (
            <div style={{
              marginTop: '20px',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: isCorrect ? '#ecfdf5' : '#fef2f2',
              border: `2px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
              color: isCorrect ? '#065f46' : '#991b1b',
              fontSize: '16px',
              fontWeight: '500'
            }}>
              {isCorrect ? t.correct : t.incorrect}
              {!isCorrect && (
                <button
                  onClick={resetQuiz}
                  style={{
                    marginTop: '12px',
                    padding: '8px 16px',
                    backgroundColor: '#ef4444',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  {t.tryAgain}
                </button>
              )}
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div style={{marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center'}}>
            {isCorrect && currentQuizIndex < lesson.quizzes.length - 1 && (
              <button
                onClick={handleNextQuiz}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {t.next}
              </button>
            )}
            {isCorrect && currentQuizIndex === lesson.quizzes.length - 1 && (
              <button
                onClick={handleNextQuiz}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                {t.finishLesson}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Lesson Complete Section */}
      {lessonComplete && (
        <div style={{
          backgroundColor: '#f0fdf4',
          padding: '24px',
          borderRadius: '12px',
          border: '1px solid #86efac',
          marginTop: '30px'
        }}>
          <h3 style={{fontSize: '20px', fontWeight: 'bold', color: '#166534', marginBottom: '16px'}}>
            {t.complete}
          </h3>
          <p style={{fontSize: '16px', color: '#15803d', marginBottom: '20px'}}>
            {t.yourScore}
          </p>
          <Link
            to={getNextLesson()}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#16a34a',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            {t.nextLesson}
          </Link>
        </div>
      )}
    </div>
    </>
  )
}
