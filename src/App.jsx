import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Learn from './pages/Learn.jsx'
import LessonDetail from './pages/LessonDetail.jsx'
import Score from './pages/Score.jsx'
import Tools from './pages/Tools.jsx'
import Offers from './pages/Offers.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'en'
  })

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <HelmetProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route path="/" element={<LandingPage language={language} onLanguageChange={handleLanguageChange} />} />
          <Route path="/learn" element={<Layout><Learn language={language} onLanguageChange={handleLanguageChange} /></Layout>} />
          <Route path="/lesson/:id" element={<Layout><LessonDetail language={language} onLanguageChange={handleLanguageChange} /></Layout>} />
          <Route path="/score" element={<Layout><Score language={language} onLanguageChange={handleLanguageChange} /></Layout>} />
          <Route path="/tools" element={<Layout><Tools language={language} onLanguageChange={handleLanguageChange} /></Layout>} />
          <Route path="/offers" element={<Layout><Offers language={language} onLanguageChange={handleLanguageChange} /></Layout>} />
          <Route path="/account" element={<Layout><Account language={language} onLanguageChange={handleLanguageChange} /></Layout>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}
