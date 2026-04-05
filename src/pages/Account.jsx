import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Account({ language }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [isPremium, setIsPremium] = useState(false)

  const content = {
    en: {
      createAccount: 'Create your account',
      signInToSave: 'Sign in to save your progress',
      joinThousands: 'Join thousands learning financial literacy',
      lessonsSync: 'Your lessons sync across all your devices',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Confirm password',
      createAccountBtn: 'Create account',
      signIn: 'Sign in',
      haveAccount: 'Already have an account? Sign in',
      noAccount: "Don't have an account? Sign up",
      emailRequired: 'Email is required',
      passwordMinLength: 'Password must be at least 6 characters',
      passwordsNotMatch: 'Passwords do not match',
      invalidCredentials: 'Invalid email or password',
      freePlan: 'Free Plan',
      premiumPlan: 'Premium',
      unlockAllLessons: 'Unlock all 20 lessons',
      premiumAccess: 'Get premium access to exclusive content and advanced features',
      getPremium: 'Get Premium',
      premiumBenefits: {
        allLessons: 'All 20 lessons unlocked',
        languages: 'Available in 8 languages',
        cancelAnytime: 'Cancel any time'
      },
      yourProgress: 'Your Progress',
      lessonsCompleted: 'Lessons Completed',
      keepLearning: 'Great progress! Keep learning to unlock more lessons!',
      signOut: 'Sign Out'
    },
    es: {
      createAccount: 'Crea tu cuenta',
      signInToSave: 'Inicia sesión para guardar tu progreso',
      joinThousands: 'Únete a miles aprendiendo educación financiera',
      lessonsSync: 'Tus lecciones se sincronizan en todos tus dispositivos',
      email: 'Correo electrónico',
      password: 'Contraseña',
      confirmPassword: 'Confirmar contraseña',
      createAccountBtn: 'Crear cuenta',
      signIn: 'Iniciar sesión',
      haveAccount: '¿Ya tienes una cuenta? Inicia sesión',
      noAccount: '¿No tienes una cuenta? Regístrate',
      emailRequired: 'El correo electrónico es requerido',
      passwordMinLength: 'La contraseña debe tener al menos 6 caracteres',
      passwordsNotMatch: 'Las contraseñas no coinciden',
      invalidCredentials: 'Correo electrónico o contraseña inválidos',
      freePlan: 'Plan Gratuito',
      premiumPlan: 'Premium',
      unlockAllLessons: 'Desbloquea todas las 20 lecciones',
      premiumAccess: 'Obtén acceso premium a contenido exclusivo y características avanzadas',
      getPremium: 'Obtener Premium',
      premiumBenefits: {
        allLessons: 'Todas las 20 lecciones desbloqueadas',
        languages: 'Disponible en 8 idiomas',
        cancelAnytime: 'Cancelar en cualquier momento'
      },
      yourProgress: 'Tu Progreso',
      lessonsCompleted: 'Lecciones Completadas',
      keepLearning: '¡Gran progreso! Sigue aprendiendo para desbloquear más lecciones!',
      signOut: 'Cerrar sesión'
    },
    hi: {
      createAccount: 'अपना खाता बनाएं',
      signInToSave: 'अपनी प्रगति सहेजने के लिए साइन इन करें',
      joinThousands: 'वित्तीय साक्षरता सीखने वालों हजारों में शामिल हों',
      lessonsSync: 'आपके सभी उपकरणों पर आपकी पाठ यों का सिंक्रनाइज़ेशन होता है',
      email: 'ईमेल',
      password: 'पासवर्ड',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      createAccountBtn: 'खाता बनाएं',
      signIn: 'साइन इन करें',
      haveAccount: 'पहले से खाता है? साइन इन करें',
      noAccount: 'खाता नहीं है? साइन अप करें',
      emailRequired: 'ईमेल आवश्यक है',
      passwordMinLength: 'पासवर्ड कम से कम 6 अक्षरों का होना चाहिए',
      passwordsNotMatch: 'पासवर्ड मेल नहीं खाते',
      invalidCredentials: 'अमान्य ईमेल या पासवर्ड',
      freePlan: 'मुफ्त योजना',
      premiumPlan: 'प्रीमियम',
      unlockAllLessons: 'सभी 20 पाठ अनलॉक करें',
      premiumAccess: 'अनन्य सामग्री और उन्नत विशेषताओं तक प्रीमियम पहुंच प्राप्त करें',
      getPremium: 'प्रीमियम प्राप्त करें',
      premiumBenefits: {
        allLessons: 'सभी 20 पाठ अनलॉक किए गए',
        languages: '8 भाषाओं में उपलब्ध',
        cancelAnytime: 'किसी भी समय रद्द करें'
      },
      yourProgress: 'आपकी प्रगति',
      lessonsCompleted: 'पूरी पाठें',
      keepLearning: 'बढ़िया प्रगति! और अधिक पाठ अनलॉक करने के लिए सीखना जारी रखें!',
      signOut: 'साइन आउट'
    }
  }

  const t = content[language] || content.en

  useEffect(() => {
    // Check if user is logged in on component mount
    const savedEmail = localStorage.getItem('userEmail')
    const savedPremium = localStorage.getItem('isPremium') === 'true'
    
    if (savedEmail) {
      setIsLoggedIn(true)
      setUserEmail(savedEmail)
      setIsPremium(savedPremium)
    }
  }, [])

  const validateEmail = (email) => {
    return email.trim() !== ''
  }

  const validatePassword = (password) => {
    return password.length >= 6
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    setError('')

    if (!validateEmail(email)) {
      setError(t.emailRequired)
      return
    }

    if (!validatePassword(password)) {
      setError(t.passwordMinLength)
      return
    }

    // Check if user exists in localStorage
    const savedEmail = localStorage.getItem('userEmail')
    const savedPassword = localStorage.getItem('userPassword')

    if (savedEmail === email && savedPassword === password) {
      setIsLoggedIn(true)
      setUserEmail(email)
      localStorage.setItem('userEmail', email)
      localStorage.setItem('userPassword', password)
    } else {
      setError(t.invalidCredentials)
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setError('')

    if (!validateEmail(email)) {
      setError(t.emailRequired)
      return
    }

    if (!validatePassword(password)) {
      setError(t.passwordMinLength)
      return
    }

    if (password !== confirmPassword) {
      setError(t.passwordsNotMatch)
      return
    }

    // Save new user to localStorage
    localStorage.setItem('userEmail', email)
    localStorage.setItem('userPassword', password)
    localStorage.setItem('isPremium', 'false')
    
    setIsLoggedIn(true)
    setUserEmail(email)
    setIsPremium(false)
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    setUserEmail('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setError('')
    // Keep localStorage data for future sign in
  }

  const getInitial = (email) => {
    return email.charAt(0).toUpperCase()
  }

  if (isLoggedIn) {
    return (
      <div className="px-4 py-6 max-w-4xl mx-auto">
        {/* Enhanced User Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="h-20 w-20 rounded-full gradient-header flex items-center justify-center shadow-xl">
              <span className="text-4xl font-bold text-white">
                {getInitial(userEmail)}
              </span>
            </div>
            <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-purple-500 -m-1"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{userEmail}</h2>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-purple-100 text-purple-700 border border-purple-200">
            {isPremium ? t.premiumPlan : t.freePlan}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced Premium Upgrade Card */}
            <div className="bg-gradient-to-r from-purple-600 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-8 h-8 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16.573a4.5 4.5 0 01-1.896-1.78l5.106-4.719c.467-.467 1.211-.467 1.678 0l5.106 4.719a4.5 4.5 0 01-1.896 1.78l-5.106-4.718a1.125 1.125 0 00-1.678 0l-5.106 4.718z"/>
                  <path d="M12.5 16.573a4.5 4.5 0 001.896-1.78l-5.106-4.719a1.125 1.125 0 00-1.678 0l-5.106 4.718a4.5 4.5 0 001.896 1.78l5.106-4.718a1.125 1.125 0 011.678 0l5.106 4.718z"/>
                </svg>
                <h3 className="text-2xl font-bold">{t.unlockAllLessons}</h3>
              </div>
              <p className="mb-6 text-lg opacity-90">{t.premiumAccess}</p>
              
              {/* Benefits List */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t.premiumBenefits.allLessons}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t.premiumBenefits.languages}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base">{t.premiumBenefits.cancelAnytime}</span>
                </div>
              </div>

              {/* Price Display */}
              <div className="mb-6 text-center">
                <div className="text-3xl font-bold mb-1">$9.99</div>
                <div className="text-sm opacity-75">per month</div>
              </div>

              <a
                href="https://blueecho3.gumroad.com/l/btyknk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full lg:w-auto bg-white text-purple-600 font-bold py-4 px-8 rounded-xl text-center hover:bg-gray-50 transition-all shadow-lg"
              >
                {t.getPremium}
              </a>
            </div>

            {/* Enhanced Progress Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t.yourProgress}</h3>
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700 text-lg font-medium">{t.lessonsCompleted}</span>
                  <span className="font-bold text-gray-900 text-2xl">3 / 20</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-600 to-teal-500 h-4 rounded-full transition-all" style={{ width: '15%' }}></div>
                </div>
                <p className="text-gray-600 text-base font-medium">{t.keepLearning}</p>
              </div>
            </div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-8">
            {/* Sign Out Button - Moved to bottom */}
            <button
              onClick={handleSignOut}
              className="w-full py-3 px-6 rounded-xl font-medium border-2 border-gray-300 text-gray-600 hover:bg-gray-50 transition-all text-sm"
            >
              {t.signOut}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6 max-w-4xl mx-auto">
      {/* Logo */}
      <div className="text-center mb-8">
        <div className="mx-auto h-16 w-16 rounded-full gradient-header flex items-center justify-center mb-4 shadow-lg">
          <span className="text-xl font-bold text-white">NF</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          {isSignUp ? t.createAccount : t.signInToSave}
        </h2>
        <p className="text-gray-600 text-lg">
          {isSignUp ? t.joinThousands : t.lessonsSync}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-600 text-sm font-medium">{error}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={isSignUp ? handleSignUp : handleSignIn} className="space-y-4 max-w-md mx-auto">
        <div>
          <input
            type="email"
            placeholder={t.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder={t.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>

        {isSignUp && (
          <div>
            <input
              type="password"
              placeholder={t.confirmPassword}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full btn-primary"
        >
          {isSignUp ? t.createAccountBtn : t.signIn}
        </button>
      </form>

      {/* Toggle Sign In/Sign Up */}
      <div className="text-center mt-6">
        <button
          onClick={() => {
            setIsSignUp(!isSignUp)
            setError('')
          }}
          className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
        >
          {isSignUp ? t.haveAccount : t.noAccount}
        </button>
      </div>
    </div>
  )
}
