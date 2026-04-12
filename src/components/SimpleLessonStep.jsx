import React from 'react'

function SimpleLessonStep() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: '#dc2626', fontSize: '14px', fontWeight: '600' }}>
              Step 1 of 5
            </span>
            <span style={{ color: '#6b7280', fontSize: '14px' }}>Building Credit from Zero</span>
          </div>
          <div style={{ width: '100%', background: '#e5e7eb', height: '12px', borderRadius: '6px', marginTop: '12px' }}>
            <div style={{
              width: '20%',
              height: '100%',
              background: 'linear-gradient(to right, #6366f1, #6366f1)',
              borderRadius: '6px'
            }}/>
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>
          Building Credit from Zero
        </h2>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ background: '#f9fafb', padding: '30px', borderRadius: '15px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#374151' }}>
              Building good credit takes time and consistency. When you arrive in Canada, you start with no credit history, which is different from having bad credit.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            style={{
              background: 'linear-gradient(to right, #4f46e5, #14b8a6)',
              color: 'white',
              border: 'none',
              padding: '16px 40px',
              borderRadius: '15px',
              fontSize: '18px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default SimpleLessonStep
