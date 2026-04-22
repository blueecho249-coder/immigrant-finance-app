import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('🚀 main.jsx executing - React app starting...')

const rootElement = document.getElementById('root')
console.log('📍 Root element found:', rootElement)

if (rootElement) {
  console.log('✅ Creating React root and rendering App...')
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
  console.log('✅ App rendered successfully')
} else {
  console.error('❌ Root element not found! Cannot mount React app.')
}
