import LanguageSelector from './LanguageSelector.jsx'

export default function Header() {
  return (
    <div className="sticky top-0 z-40">
      <div className="gradient-header px-4 py-4 sm:px-5">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">New Finance</h1>
          <LanguageSelector />
        </div>
      </div>
    </div>
  )
}
