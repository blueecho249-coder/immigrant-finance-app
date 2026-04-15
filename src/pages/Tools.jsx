import { useState } from 'react'

function BudgetCalculator({ t }) {
  const [income, setIncome] = useState(3000)
  const [rent, setRent] = useState(1200)
  const [groceries, setGroceries] = useState(400)
  const [transport, setTransport] = useState(200)
  const [phone, setPhone] = useState(80)
  const [other, setOther] = useState(320)

  const totalExpenses = rent + groceries + transport + phone + other
  const moneyLeft = income - totalExpenses

  const expenses = [
    { name: 'Rent', amount: rent, color: 'bg-purple-500' },
    { name: 'Groceries', amount: groceries, color: 'bg-blue-500' },
    { name: 'Transport', amount: transport, color: 'bg-green-500' },
    { name: 'Phone', amount: phone, color: 'bg-yellow-500' },
    { name: 'Other', amount: other, color: 'bg-red-500' }
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-bold text-purple-700">{t.monthlyIncomeAfterTax}</label>
          <input type="number" value={income} onChange={(e) => setIncome(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-purple-700">{t.rent}</label>
          <input type="number" value={rent} onChange={(e) => setRent(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-purple-700">{t.groceries}</label>
          <input type="number" value={groceries} onChange={(e) => setGroceries(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-purple-700">{t.transport}</label>
          <input type="number" value={transport} onChange={(e) => setTransport(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-purple-700">{t.phoneBill}</label>
          <input type="number" value={phone} onChange={(e) => setPhone(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-purple-700">{t.otherExpenses}</label>
          <input type="number" value={other} onChange={(e) => setOther(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl p-4 bg-teal-50 border border-teal-200">
            <div className="text-sm text-gray-600 mb-1">{t.totalExpenses}</div>
            <div className="text-2xl font-bold text-teal-700">${totalExpenses.toFixed(2)}</div>
          </div>
          <div className={`rounded-xl p-4 ${moneyLeft >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="text-sm text-gray-600 mb-1">{t.moneyLeftOver}</div>
            <div className={`text-2xl font-bold ${moneyLeft >= 0 ? 'text-green-700' : 'text-red-700'}`}>${moneyLeft.toFixed(2)}</div>
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-bold text-gray-700">{t.expenseBreakdown}</div>
          {expenses.map((expense) => {
            const percentage = income > 0 ? (expense.amount / income) * 100 : 0
            return (
              <div key={expense.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 font-medium">{expense.name}</span>
                  <span className="font-bold">${expense.amount.toFixed(2)} ({percentage.toFixed(1)}%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className={`${expense.color} h-4 rounded-full transition-all`} style={{ width: `${Math.min(percentage, 100)}%` }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function CreditCardPayoff({ t }) {
  const [balance, setBalance] = useState(5000)
  const [interestRate, setInterestRate] = useState(19.99)
  const [monthlyPayment, setMonthlyPayment] = useState(200)

  const monthlyRate = interestRate / 100 / 12
  let monthsToPayoff = 0
  let totalInterest = 0
  let totalPaid = 0

  if (monthlyPayment > 0 && balance > 0) {
    let currentBalance = balance
    monthsToPayoff = 0
    while (currentBalance > 0 && monthsToPayoff < 600) {
      const interestPayment = currentBalance * monthlyRate
      const principalPayment = Math.min(monthlyPayment - interestPayment, currentBalance)
      if (principalPayment <= 0) {
        monthsToPayoff = -1
        break
      }
      currentBalance -= principalPayment
      totalInterest += interestPayment
      totalPaid += monthlyPayment
      monthsToPayoff++
    }
    if (currentBalance > 0) totalPaid += currentBalance
  }

  const formatTime = (months) => {
    if (months === -1) return 'Never (payment too low)'
    if (months === 0) return 'Paid off'
    if (months === 1) return '1 month'
    if (months < 12) return `${months} months`
    const years = Math.floor(months / 12)
    const remainingMonths = months % 12
    if (remainingMonths === 0) return `${years} year${years > 1 ? 's' : ''}`
    return `${years} year${years > 1 ? 's' : ''}, ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
  }

  const minimumPayment = balance * 0.02
  const paymentTooLow = monthlyPayment < minimumPayment && monthlyPayment > 0

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="mb-2 block text-sm font-bold text-teal-700">{t.currentBalance}</label>
          <input type="number" value={balance} onChange={(e) => setBalance(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-teal-700">{t.interestRate}</label>
          <input type="number" step="0.01" value={interestRate} onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
        </div>
        <div>
          <label className="mb-2 block text-sm font-bold text-teal-700">{t.monthlyPaymentAmount}</label>
          <input type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(parseFloat(e.target.value) || 0)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent" />
          {paymentTooLow && <p className="mt-2 text-sm text-red-600">Minimum payment: ${minimumPayment.toFixed(2)}</p>}
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl p-4 bg-purple-50 border border-purple-200">
            <div className="text-sm text-gray-600 mb-1">{t.monthsUntilPaidOff}</div>
            <div className="text-2xl font-bold text-purple-700">{formatTime(monthsToPayoff)}</div>
          </div>
          <div className="rounded-xl p-4 bg-orange-50 border border-orange-200">
            <div className="text-sm text-gray-600 mb-1">{t.totalInterestYouWillPay}</div>
            <div className="text-2xl font-bold text-orange-700">${totalInterest.toFixed(2)}</div>
          </div>
          <div className="rounded-xl p-4 bg-red-50 border border-red-200">
            <div className="text-sm text-gray-600 mb-1">{t.totalAmountPaidOverall}</div>
            <div className="text-2xl font-bold text-red-700">${totalPaid.toFixed(2)}</div>
          </div>
        </div>
        {paymentTooLow && (
          <div className="rounded-xl bg-red-100 border-2 border-red-300 p-4">
            <div className="text-sm font-bold text-red-800">⚠️ Your monthly payment is less than minimum required. This will never pay off the balance and interest will continue to accumulate.</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function Tools({ language }) {
  const [activeTool, setActiveTool] = useState('budget')

  const content = {
    en: {
      title: 'Financial Tools',
      subtitle: 'Calculate and plan your finances',
      budgetCalculator: 'Budget Calculator',
      creditCardPayoff: 'Credit Card Payoff',
      monthlyIncomeAfterTax: 'Monthly income after tax',
      rent: 'Rent',
      groceries: 'Groceries',
      transport: 'Transport',
      phoneBill: 'Phone bill',
      otherExpenses: 'Other expenses',
      totalExpenses: 'Total expenses',
      moneyLeftOver: 'Money left over',
      expenseBreakdown: 'Expense Breakdown',
      currentBalance: 'Current balance',
      interestRate: 'Interest rate (%)',
      monthlyPaymentAmount: 'Monthly payment amount',
      monthsUntilPaidOff: 'Months until paid off',
      totalInterestYouWillPay: 'Total interest you will pay',
      totalAmountPaidOverall: 'Total amount paid overall'
    },
    es: {
      title: 'Herramientas Financieras',
      subtitle: 'Calcula y planifica tus finanzas',
      budgetCalculator: 'Calculadora de Presupuesto',
      creditCardPayoff: 'Pago de Tarjeta de Crédito',
      monthlyIncomeAfterTax: 'Ingreso mensual después de impuestos',
      rent: 'Renta',
      groceries: 'Comestibles',
      transport: 'Transporte',
      phoneBill: 'Factura de teléfono',
      otherExpenses: 'Otros gastos',
      totalExpenses: 'Gastos totales',
      moneyLeftOver: 'Dinero restante',
      expenseBreakdown: 'Desglose de gastos',
      currentBalance: 'Saldo actual',
      interestRate: 'Tasa de interés (%)',
      monthlyPaymentAmount: 'Cantidad de pago mensual',
      monthsUntilPaidOff: 'Meses hasta pagar',
      totalInterestYouWillPay: 'Interés total que pagarás',
      totalAmountPaidOverall: 'Cantidad total pagada'
    },
    tl: {
      title: 'Mga Kagamitan sa Pananalapi',
      subtitle: 'Kalkulahin at planuhin ang iyong pinansak',
      budgetCalculator: 'Kalkuladora ng Budget',
      creditCardPayoff: 'Pagbayad ng Credit Card',
      monthlyIncomeAfterTax: 'Buwanang buwan matapos ang buwis',
      rent: 'Upa',
      groceries: 'Mga grocery',
      transport: 'Transportasyon',
      phoneBill: 'Bayad sa telepono',
      otherExpenses: 'Iba panggastos',
      totalExpenses: 'Kabuuang gastos',
      moneyLeftOver: 'Natitirang pera',
      expenseBreakdown: 'Detalye ng gastos',
      currentBalance: 'Kasalang balanse',
      interestRate: 'Rate ng interes (%)',
      monthlyPaymentAmount: 'Halaga ng buwanang pagbabayad',
      monthsUntilPaidOff: 'Buwan hanggang mababayaran',
      totalInterestYouWillPay: 'Kabuuang interes na babayaran mo',
      totalAmountPaidOverall: 'Kabuuang halagang babayaran'
    }
  }

  const t = content[language] || content.en

  const tools = [
    {
      id: 'budget',
      name: t.budgetCalculator,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'credit',
      name: t.creditCardPayoff,
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    }
  ]

  return (
    <div className="px-4 py-6">
      {/* Page Header with Gradient Banner */}
      <div className="mb-8 bg-gradient-to-r from-purple-600 to-teal-500 -mx-4 px-4 py-8 rounded-b-2xl">
        <h1 className="mb-2 text-3xl md:text-4xl font-bold text-white">{t.title}</h1>
        <p className="text-white opacity-90 text-lg">{t.subtitle}</p>
      </div>

      {/* Enhanced Tab Switcher */}
      <div className="mb-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-md mx-auto lg:max-w-none">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`rounded-xl p-6 text-center transition-all transform hover:scale-105 ${
                activeTool === tool.id
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="text-3xl mb-2">{tool.icon}</div>
              <div className="text-base font-semibold">
                {tool.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tool Content */}
      <div className="max-w-4xl mx-auto">
        <div className={`card border-l-4 ${activeTool === 'budget' ? 'border-l-purple-500' : 'border-l-teal-500'}`}>
          <div className="gradient-header text-white p-4 rounded-t-xl">
            <h2 className="text-lg font-bold">
              {activeTool === 'budget' ? t.budgetCalculator : t.creditCardPayoff}
            </h2>
          </div>
          <div className="p-4">
            {activeTool === 'budget' ? <BudgetCalculator t={t} /> : <CreditCardPayoff t={t} />}
          </div>
        </div>
      </div>
    </div>
  )
}
