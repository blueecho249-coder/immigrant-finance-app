import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { lessons } from '../data/lessons.js'

export default function LessonDetail({ language = 'en' }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
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

  const handleAnswerClick = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    const correct = answerIndex === lesson.quiz.correctIndex
    setIsCorrect(correct)
    setShowResult(true)

    if (correct) {
      // Mark lesson as complete
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
      back: "← Back to Lessons",
      complete: "✓ Lesson Complete",
      tryAgain: "Try Again",
      next: "Next Lesson",
      correct: "Correct! Well done!",
      incorrect: "Incorrect. Try again!"
    },
    es: {
      back: "← Volver a Lecciones",
      complete: "✓ Lección Completa",
      tryAgain: "Intentar de Nuevo",
      next: "Siguiente Lección",
      correct: "¡Correcto! ¡Bien hecho!",
      incorrect: "Incorrecto. ¡Intenta de nuevo!"
    },
    hi: {
      back: "← पाठों पर वापस जाएं",
      complete: "✓ पाठ पूर्ण",
      tryAgain: "फिर से कोशिश करें",
      next: "अगला पाठ",
      correct: "सही! बहुत बढ़िया!",
      incorrect: "गलत। फिर से कोशिश करें!"
    }
  }

  const t = content[language] || content.en

  return (
    <div style={{padding: '20px', maxWidth: '800px', margin: '0 auto'}}>
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
      </div>

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

      {/* Quiz */}
      <div style={{
        backgroundColor: '#f9fafb',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb'
      }}>
        <h2 style={{fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '16px'}}>
          Quiz
        </h2>
        <p style={{fontSize: '18px', color: '#4b5563', marginBottom: '20px'}}>
          {lesson.quiz.question[language] || lesson.quiz.question.en}
        </p>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
          {(lesson.quiz.options[language] || lesson.quiz.options.en).map((option, index) => (
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

        {/* Next Lesson Button */}
        {lessonComplete && (
          <Link
            to={getNextLesson()}
            style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '12px 24px',
              backgroundColor: '#4f46e5',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500'
            }}
          >
            {t.next}
          </Link>
        )}
      </div>
    </div>
  )
}
