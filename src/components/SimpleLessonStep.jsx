import { useState } from 'react'

export default function SimpleLessonStep() {
  const [currentStep, setCurrentStep] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)

  const content = [
    "Building good credit takes time and consistency.",
    "Pay your bills on time every month.",
    "Start with a secured credit card.",
    "Keep your credit utilization low."
  ]

  const handleContinue = () => {
    if (currentStep < content.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowQuiz(true)
    }
  }

  const handleFinalQuiz = () => {
    setShowQuiz(false)
  }

  if (showQuiz) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>Final Quiz</h2>
          <p style={{ textAlign: 'center', fontSize: '20px', marginBottom: '40px' }}>
            Based on what you learned, what's the most important takeaway?
          </p>
          <button
            onClick={handleFinalQuiz}
            style={{
              width: '100%',
              padding: '20px',
              background: 'linear-gradient(to right, #8b5cf6, #3b82f6)',
              color: 'white',
              border: 'none',
              borderRadius: '15px',
              fontSize: '18px',
              cursor: 'pointer'
            }}
          >
            Building good credit takes time and consistency
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#dc2626', fontSize: '14px', fontWeight: '600' }}>
              Step {currentStep + 1} of {content.length + 1}
            </span>
            <span style={{ color: '#6b7280', fontSize: '14px' }}>Building Credit from Zero</span>
          </div>
          <div style={{ width: '100%', background: '#e5e7eb', height: '12px', borderRadius: '6px', marginTop: '12px' }}>
            <div 
              style={{
                width: `${((currentStep + 1) / (content.length + 1)) * 100}%`,
                height: '100%',
                background: 'linear-gradient(to right, #6366f1, #6366f1)',
                borderRadius: '6px',
                transition: 'width 0.5s ease'
              }}
            />
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>
          Building Credit from Zero
        </h2>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '15px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
              {content[currentStep]}
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={handleContinue}
            style={{
              background: 'linear-gradient(to right, #4f46e5, #14b8a6)',
              color: 'white',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '15px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}
