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
  const [showClaimModal, setShowClaimModal] = useState(false)
  const [claimEmail, setClaimEmail] = useState('')
  const [claimStatus, setClaimStatus] = useState(null) // 'success', 'error', or null

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
      signOut: 'Sign Out',
      accountSettings: 'Account Settings',
      memberSince: 'Member since',
      lastLogin: 'Last login',
      achievements: 'Achievements',
      firstSteps: 'First Steps',
      quickLearner: 'Quick Learner',
      consistent: 'Consistent',
      streakDays: 'day streak',
      learningStats: 'Learning Statistics',
      totalTimeSpent: 'Total time spent',
      avgSessionTime: 'Average session time',
      completedExercises: 'Completed exercises',
      quickLinks: 'Quick Links',
      viewAllLessons: 'View All Lessons',
      yourProfile: 'Your Profile',
      helpSupport: 'Help & Support',
      alreadyPurchased: "I've already purchased",
      claimPremium: 'Claim Your Premium Access',
      enterPurchaseEmail: 'Enter the email you used to purchase premium:',
      verifyPurchase: 'Verify Purchase',
      verifying: 'Verifying...',
      premiumUnlocked: 'Premium Unlocked!',
      enjoyAllLessons: 'You now have access to all 20 lessons. Enjoy learning!',
      purchaseNotFound: 'Purchase not found',
      emailNotRecognized: "We couldn't find a premium account with that email. Contact support.",
      close: 'Close',
      tryAgain: 'Try Again'
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
      signOut: 'Cerrar sesión',
      accountSettings: 'Configuración de Cuenta',
      memberSince: 'Miembro desde',
      lastLogin: 'Último inicio de sesión',
      achievements: 'Logros',
      firstSteps: 'Primeros Pasos',
      quickLearner: 'Aprendiz Rápido',
      consistent: 'Consistente',
      streakDays: 'días seguidos',
      learningStats: 'Estadísticas de Aprendizaje',
      totalTimeSpent: 'Tiempo total dedicado',
      avgSessionTime: 'Tiempo promedio por sesión',
      completedExercises: 'Ejercicios completados',
      quickLinks: 'Enlaces Rápidos',
      viewAllLessons: 'Ver Todas las Lecciones',
      yourProfile: 'Tu Perfil',
      helpSupport: 'Ayuda y Soporte',
      alreadyPurchased: 'Ya compré premium',
      claimPremium: 'Reclama tu Acceso Premium',
      enterPurchaseEmail: 'Ingresa el correo que usaste para comprar premium:',
      verifyPurchase: 'Verificar Compra',
      verifying: 'Verificando...',
      premiumUnlocked: '¡Premium Desbloqueado!',
      enjoyAllLessons: 'Ahora tienes acceso a todas las 20 lecciones. ¡Disfruta aprendiendo!',
      purchaseNotFound: 'Compra no encontrada',
      emailNotRecognized: 'No encontramos una compra premium asociada con este correo. Verifica tu correo o compra premium abajo.',
      close: 'Cerrar',
      tryAgain: 'Intentar de Nuevo'
    },
    tl: {
      createAccount: 'Gumawa ng iyong account',
      signInToSave: 'Mag-sign in para i-save ang iyong progress',
      joinThousands: 'Sumali sa mga libo-libo sa pag-aaral ng financial literacy',
      lessonsSync: 'Ang iyong mga aralin ay naka-sync sa lahat ng iyong devices',
      email: 'Email',
      password: 'Password',
      confirmPassword: 'Kumpirmahin ang password',
      createAccountBtn: 'Gumawa ng account',
      signIn: 'Mag-sign in',
      haveAccount: 'May account ka na? Mag-sign in',
      noAccount: 'Walang account ka? Mag-sign up',
      emailRequired: 'Kinakailangan ang email',
      passwordMinLength: 'Ang password ay dapat maging 6 na character',
      passwordsNotMatch: 'Hindi magkatugma ang mga password',
      invalidCredentials: 'Maling email o password',
      freePlan: 'Libreng Plan',
      premiumPlan: 'Premium',
      unlockAllLessons: 'I-unlock ang lahat ng 20 na aralin',
      premiumAccess: 'Kumuha ng premium access sa eksklusibong content at mga advanced na feature',
      getPremium: 'Kumuha ng Premium',
      premiumBenefits: {
        allLessons: 'Lahat ng 20 na aralin ang naka-unlock',
        languages: 'Available sa 8 wika',
        cancelAnytime: 'Kanselahin anumang oras'
      },
      yourProgress: 'Ang Iyong Progress',
      lessonsCompleted: 'Mga Kumpletong Aralin',
      keepLearning: 'Mahusay na progress! Magpatuloy sa pag-aaral upang i-unlock ng mas maraming aralin!',
      signOut: 'Mag-sign Out',
      accountSettings: 'Mga Setting ng Account',
      memberSince: 'Miembro simula',
      lastLogin: 'Huling sign in',
      achievements: 'Mga Nagawa',
      firstSteps: 'Mga Unang Hakbang',
      quickLearner: 'Mabilis Mag-aral',
      consistent: 'Mag-consistent',
      streakDays: 'araw na streak',
      learningStats: 'Mga Estadistika sa Pag-aaral',
      totalTimeSpent: 'Kabuuang oras na nagastos',
      avgSessionTime: 'Karaniwang na session',
      completedExercises: 'Mga Kumpletong ehersisyo',
      quickLinks: 'Mga Mabilis Link',
      viewAllLessons: 'Tingnan ang Lahat ng Aralin',
      yourProfile: 'Ang Iyong Profile',
      helpSupport: 'Tulong at Suporta',
      alreadyPurchased: 'Nakabili na ako',
      claimPremium: 'Kunin ang Iyong Premium Access',
      enterPurchaseEmail: 'Ilagay ang email na ginamit mo para bumili ng premium:',
      verifyPurchase: 'I-verify ang Bili',
      verifying: 'Nagve-verify...',
      premiumUnlocked: 'Premium Na-unlock!',
      enjoyAllLessons: 'Ngayon may access ka na sa lahat ng 20 aralin. Enjoy learning!',
      purchaseNotFound: 'Hindi nahanap ang bili',
      emailNotRecognized: 'Hindi namin nakita ang premium purchase sa email na ito. Paki-check ang email o bumili ng premium sa ibaba.',
      close: 'Isara',
      tryAgain: 'Subukan Muli'
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

  const handleClaimPremium = async () => {
    setClaimStatus('verifying')
    
    try {
      // Call the serverless API to verify purchase
      const response = await fetch('/api/verify-purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: claimEmail })
      })
      
      const data = await response.json()
      
      if (data.valid) {
        // Unlock premium
        localStorage.setItem('isPremium', 'true')
        setIsPremium(true)
        setClaimStatus('success')
      } else {
        setClaimStatus('error')
      }
    } catch (error) {
      console.error('Error verifying purchase:', error)
      setClaimStatus('error')
    }
  }

  const closeClaimModal = () => {
    setShowClaimModal(false)
    setClaimEmail('')
    setClaimStatus(null)
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
            <div className="absolute inset-0 h-20 w-20 rounded-full border-4 border-purple-500"></div>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{userEmail}</h2>
          <span className="inline-flex items-center px-4 py-2 rounded-full text-lg font-bold bg-purple-100 text-purple-700 border border-purple-200">
            {isPremium ? t.premiumPlan : t.freePlan}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Account Settings */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.accountSettings}</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.memberSince}</span>
                  <span className="font-medium text-gray-900">January 2024</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">{t.lastLogin}</span>
                  <span className="font-medium text-gray-900">Today, 2:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Account Status</span>
                  <span className="font-medium text-green-600">Active</span>
                </div>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.achievements}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="w-12 h-12 mx-auto mb-3 bg-yellow-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div className="font-medium text-gray-900">{t.firstSteps}</div>
                  <div className="text-sm text-gray-600">Completed first lesson</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="w-12 h-12 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="font-medium text-gray-900">{t.quickLearner}</div>
                  <div className="text-sm text-gray-600">3 lessons in 1 day</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="w-12 h-12 mx-auto mb-3 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5a3 3 0 013.5 3.5 3 3 0 01-.88 2.12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="font-medium text-gray-900">{t.consistent}</div>
                  <div className="text-sm text-gray-600">5 {t.streakDays}</div>
                </div>
              </div>
            </div>

            {/* Learning Statistics */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.learningStats}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl font-bold text-purple-700 mb-1">2h 45m</div>
                  <div className="text-sm text-gray-600">{t.totalTimeSpent}</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <div className="text-2xl font-bold text-teal-700 mb-1">25 min</div>
                  <div className="text-sm text-gray-600">{t.avgSessionTime}</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-2xl font-bold text-orange-700 mb-1">12</div>
                  <div className="text-sm text-gray-600">{t.completedExercises}</div>
                </div>
              </div>
            </div>

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

              {/* Already Purchased Button */}
              <button
                onClick={() => setShowClaimModal(true)}
                className="mt-3 w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-xl text-center hover:bg-gray-50 transition-all shadow-md border border-purple-100 text-sm"
              >
                {t.alreadyPurchased}
              </button>
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
            {/* Quick Links */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.quickLinks}</h3>
              <div className="space-y-3">
                <Link
                  to="/learn"
                  className="block w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-300 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    {t.viewAllLessons}
                  </div>
                </Link>
                <button className="block w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {t.yourProfile}
                  </div>
                </button>
                <button className="block w-full text-left px-4 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-purple-300 transition-all">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t.helpSupport}
                  </div>
                </button>
              </div>
            </div>

            {/* Sign Out Button - Moved to bottom */}
            <button
              onClick={handleSignOut}
              className="w-full py-3 px-6 rounded-xl font-medium border-2 border-gray-300 text-gray-600 hover:bg-gray-50 transition-all text-sm"
            >
              {t.signOut}
            </button>
          </div>
        </div>

        {/* Claim Premium Modal */}
        {showClaimModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
              {/* Success State */}
              {claimStatus === 'success' ? (
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.premiumUnlocked}</h3>
                  <p className="text-gray-600 mb-6">{t.enjoyAllLessons}</p>
                  <button
                    onClick={closeClaimModal}
                    className="w-full btn-primary"
                  >
                    {t.close}
                  </button>
                </div>
              ) : claimStatus === 'error' ? (
                /* Error State */
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t.purchaseNotFound}</h3>
                  <p className="text-gray-600 mb-6">{t.emailNotRecognized}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setClaimStatus(null)}
                      className="flex-1 py-3 px-4 rounded-xl font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all"
                    >
                      {t.tryAgain}
                    </button>
                    <button
                      onClick={closeClaimModal}
                      className="flex-1 btn-primary"
                    >
                      {t.close}
                    </button>
                  </div>
                </div>
              ) : (
                /* Input Form */
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{t.claimPremium}</h3>
                    <button
                      onClick={closeClaimModal}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-gray-600 mb-4">{t.enterPurchaseEmail}</p>
                  <input
                    type="email"
                    value={claimEmail}
                    onChange={(e) => setClaimEmail(e.target.value)}
                    placeholder={t.email}
                    className="input-field mb-4"
                    disabled={claimStatus === 'verifying'}
                  />
                  <button
                    onClick={handleClaimPremium}
                    disabled={!claimEmail.trim() || claimStatus === 'verifying'}
                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {claimStatus === 'verifying' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {t.verifying}
                      </span>
                    ) : (
                      t.verifyPurchase
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
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
