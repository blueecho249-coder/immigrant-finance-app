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
        <Route element={<Layout />}>
          <Route path="/learn" element={<Learn language={language} />} />
          <Route path="/score" element={<Score language={language} />} />
          <Route path="/tools" element={<Tools language={language} />} />
          <Route path="/offers" element={<Offers language={language} />} />
          <Route path="/account" element={<Account language={language} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
