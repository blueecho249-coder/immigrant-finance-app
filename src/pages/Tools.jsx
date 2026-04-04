import { useState } from 'react'

export default function Tools({ language = 'en' }) {
  const [activeTool, setActiveTool] = useState('budget')

  const tools = [
    {
      id: 'budget',
      name: {
        en: 'Budget Calculator',
        es: 'Calculadora de Presupuesto',
        hi: 'बजट कैलकुलेटर'
      },
      icon: '💰'
    },
    {
      id: 'loan',
      name: {
        en: 'Loan Calculator',
        es: 'Calculadora de Préstamo',
        hi: 'ऋण कैलकुलेटर'
      },
      icon: '🏠'
    },
    {
      id: 'savings',
      name: {
        en: 'Savings Goal',
        es: 'Meta de Ahorro',
        hi: 'बचत लक्ष्य'
      },
      icon: '📈'
    }
  ]

  const content = {
    en: {
      title: "Financial Tools",
      subtitle: "Calculate and plan your finances",
      monthlyIncome: "Monthly Income",
      monthlyExpenses: "Monthly Expenses",
      remaining: "Remaining",
      loanAmount: "Loan Amount",
      interestRate: "Interest Rate (%)",
      loanTerm: "Loan Term (years)",
      monthlyPayment: "Monthly Payment",
      totalPayment: "Total Payment",
      savingsGoal: "Savings Goal",
      currentSavings: "Current Savings",
      monthlyContribution: "Monthly Contribution",
      timeToGoal: "Time to Goal"
    },
    es: {
      title: "Herramientas Financieras",
      subtitle: "Calcula y planifica tus finanzas",
      monthlyIncome: "Ingreso Mensual",
      monthlyExpenses: "Gastos Mensuales",
      remaining: "Restante",
      loanAmount: "Monto del Préstamo",
      interestRate: "Tasa de Interés (%)",
      loanTerm: "Plazo del Préstamo (años)",
      monthlyPayment: "Pago Mensual",
      totalPayment: "Pago Total",
      savingsGoal: "Meta de Ahorro",
      currentSavings: "Ahorros Actuales",
      monthlyContribution: "Contribución Mensual",
      timeToGoal: "Tiempo para la Meta"
    },
    hi: {
      title: "वित्तीय उपकरण",
      subtitle: "अपने वित्त की गणना और योजना बनाएं",
      monthlyIncome: "मासिक आय",
      monthlyExpenses: "मासिक खर्च",
      remaining: "शेष",
      loanAmount: "ऋण राशि",
      interestRate: "ब्याज दर (%)",
      loanTerm: "ऋण अवधि (वर्ष)",
      monthlyPayment: "मासिक भुगतान",
      totalPayment: "कुल भुगतान",
      savingsGoal: "बचत लक्ष्य",
      currentSavings: "वर्तमान बचत",
      monthlyContribution: "मासिक योगदान",
      timeToGoal: "लक्ष्य तक का समय"
    }
  }

  const t = content[language] || content.en

  const renderBudgetCalculator = () => {
    const [income, setIncome] = useState(3000)
    const [expenses, setExpenses] = useState(2000)
    const remaining = income - expenses

    return (
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.monthlyIncome}
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.monthlyExpenses}
          </label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div className={`rounded-lg p-4 ${remaining >= 0 ? 'bg-green-50' : 'bg-red-50'}`}>
          <div className="text-lg font-semibold">
            {t.remaining}: ${remaining}
          </div>
        </div>
      </div>
    )
  }

  const renderLoanCalculator = () => {
    const [amount, setAmount] = useState(200000)
    const [rate, setRate] = useState(4.5)
    const [term, setTerm] = useState(30)
    
    const monthlyRate = rate / 100 / 12
    const numPayments = term * 12
    const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    const totalPayment = monthlyPayment * numPayments

    return (
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.loanAmount}
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.interestRate}
          </label>
          <input
            type="number"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(parseFloat(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.loanTerm}
          </label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="rounded-lg bg-blue-50 p-4">
          <div className="text-lg font-semibold">
            {t.monthlyPayment}: ${monthlyPayment.toFixed(2)}
          </div>
          <div className="text-sm text-gray-600">
            {t.totalPayment}: ${totalPayment.toFixed(2)}
          </div>
        </div>
      </div>
    )
  }

  const renderSavingsGoal = () => {
    const [goal, setGoal] = useState(10000)
    const [current, setCurrent] = useState(2000)
    const [monthly, setMonthly] = useState(500)
    
    const remaining = goal - current
    const monthsToGoal = Math.ceil(remaining / monthly)

    return (
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.savingsGoal}
          </label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.currentSavings}
          </label>
          <input
            type="number"
            value={current}
            onChange={(e) => setCurrent(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            {t.monthlyContribution}
          </label>
          <input
            type="number"
            value={monthly}
            onChange={(e) => setMonthly(parseInt(e.target.value))}
            className="w-full rounded-lg border border-gray-300 px-3 py-2"
          />
        </div>
        <div className="rounded-lg bg-green-50 p-4">
          <div className="text-lg font-semibold">
            {t.timeToGoal}: {monthsToGoal} months
          </div>
        </div>
      </div>
    )
  }

  const renderTool = () => {
    switch (activeTool) {
      case 'budget':
        return renderBudgetCalculator()
      case 'loan':
        return renderLoanCalculator()
      case 'savings':
        return renderSavingsGoal()
      default:
        return renderBudgetCalculator()
    }
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-3 gap-2">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`rounded-lg p-3 text-center transition-colors ${
                activeTool === tool.id
                  ? 'gradient-header text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-2xl mb-1">{tool.icon}</div>
              <div className="text-xs font-medium">
                {tool.name[language] || tool.name.en}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        {renderTool()}
      </div>
    </div>
  )
}
