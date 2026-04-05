import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Learn from './pages/Learn.jsx'
import LessonDetail from './pages/LessonDetail.jsx'
import Score from './pages/Score.jsx'
import Tools from './pages/Tools.jsx'
import Offers from './pages/Offers.jsx'
import Account from './pages/Account.jsx'

export default function App() {
  const [language, setLanguage] = useState('en')

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage language={language} onLanguageChange={handleLanguageChange} />} />
        <Route path="/learn" element={<Layout><Learn language={language} /></Layout>} />
        <Route path="/lesson/:id" element={<Layout><LessonDetail language={language} /></Layout>} />
        <Route path="/score" element={<div style={{padding: '20px', fontSize: '24px'}}>SCORE PAGE WORKS</div>} />
        <Route path="/tools" element={<Layout><Tools language={language} /></Layout>} />
        <Route path="/offers" element={<Layout><Offers language={language} /></Layout>} />
        <Route path="/account" element={<Layout><Account language={language} /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
