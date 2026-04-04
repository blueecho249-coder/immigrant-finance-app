import { useState } from 'react'

export default function Account({ language = 'en' }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userEmail'))
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSignIn = () => {
    if (email && password) {
      localStorage.setItem('userEmail', email)
      setIsLoggedIn(true)
    }
  }

  const handleSignUp = () => {
    if (email && password) {
      localStorage.setItem('userEmail', email)
      setIsLoggedIn(true)
    }
  }

  const handleSignOut = () => {
    localStorage.removeItem('userEmail')
    setIsLoggedIn(false)
    setEmail('')
    setPassword('')
  }

  const content = {
    en: {
      title: "Account",
      subtitle: "Manage your profile and settings",
      signIn: "Sign In",
      signUp: "Sign Up",
      email: "Email",
      password: "Password",
      welcome: "Welcome",
      getPremium: "Get Premium",
      signOut: "Sign Out",
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      signUpLink: "Sign up",
      signInLink: "Sign in"
    },
    es: {
      title: "Cuenta",
      subtitle: "Gestiona tu perfil y configuración",
      signIn: "Iniciar Sesión",
      signUp: "Registrarse",
      email: "Correo Electrónico",
      password: "Contraseña",
      welcome: "Bienvenido",
      getPremium: "Obtener Premium",
      signOut: "Cerrar Sesión",
      noAccount: "¿No tienes una cuenta?",
      haveAccount: "¿Ya tienes una cuenta?",
      signUpLink: "Registrarse",
      signInLink: "Iniciar Sesión"
    },
    hi: {
      title: "खाता",
      subtitle: "अपनी प्रोफ़ाइल और सेटिंग्स प्रबंधित करें",
      signIn: "साइन इन करें",
      signUp: "साइन अप करें",
      email: "ईमेल",
      password: "पासवर्ड",
      welcome: "स्वागत है",
      getPremium: "प्रीमियम प्राप्त करें",
      signOut: "साइन आउट करें",
      noAccount: "क्या आपके पास खाता नहीं है?",
      haveAccount: "क्या आपके पास पहले से खाता है?",
      signUpLink: "साइन अप करें",
      signInLink: "साइन इन करें"
    }
  }

  const t = content[language] || content.en

  if (isLoggedIn) {
    const savedEmail = localStorage.getItem('userEmail')
    return (
      <div className="px-4 py-6">
        <div className="mb-6">
          <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
          <p className="text-gray-600">{t.subtitle}</p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-center">
              <div className="mb-4">
                <div className="mx-auto h-16 w-16 rounded-full gradient-header flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {savedEmail[0].toUpperCase()}
                  </span>
                </div>
              </div>
              <h2 className="mb-2 text-xl font-semibold text-gray-900">
                {t.welcome}, {savedEmail}
              </h2>
              <p className="text-gray-600">{savedEmail}</p>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">
              {t.getPremium}
            </h3>
            <p className="mb-4 text-gray-600">
              Unlock all lessons and features with premium access
            </p>
            <a
              href="https://blueecho3.gumroad.com/l/btyknk"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full rounded-lg gradient-header px-4 py-3 text-center font-medium text-white transition-transform hover:scale-105"
            >
              {t.getPremium} — $9.99/month
            </a>
          </div>

          <button
            onClick={handleSignOut}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            {t.signOut}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-center text-gray-900">
          {isSignUp ? t.signUp : t.signIn}
        </h2>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {t.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder={t.email}
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              {t.password}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2"
              placeholder={t.password}
            />
          </div>

          <button
            onClick={isSignUp ? handleSignUp : handleSignIn}
            className="w-full rounded-lg gradient-header px-4 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            {isSignUp ? t.signUp : t.signIn}
          </button>

          <div className="text-center">
            <span className="text-sm text-gray-600">
              {isSignUp ? t.haveAccount : t.noAccount}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-medium text-purple-600 hover:text-purple-700"
              >
                {isSignUp ? t.signInLink : t.signUpLink}
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
