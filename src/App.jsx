import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import Learn from './pages/Learn.jsx'
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
        <Route path="/score" element={<Layout><Score language={language} /></Layout>} />
        <Route path="/tools" element={<Layout><Tools /></Layout>} />
        <Route path="/offers" element={<Layout><Offers /></Layout>} />
        <Route path="/account" element={<Layout><Account /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}
