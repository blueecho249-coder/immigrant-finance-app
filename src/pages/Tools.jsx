import { useState } from 'react'

export default function Tools() {
  const [activeTool, setActiveTool] = useState('budget')

  const tools = [
    {
      id: 'budget',
      name: 'Budget Calculator',
      icon: '💰'
    },
    {
      id: 'credit',
      name: 'Credit Card Payoff',
      icon: '💳'
    }
  ]

  const renderBudgetCalculator = () => {
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
        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Monthly income after tax
            </label>
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>
          
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Rent
            </label>
            <input
              type="number"
              value={rent}
              onChange={(e) => setRent(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Groceries
            </label>
            <input
              type="number"
              value={groceries}
              onChange={(e) => setGroceries(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Transport
            </label>
            <input
              type="number"
              value={transport}
              onChange={(e) => setTransport(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Phone bill
            </label>
            <input
              type="number"
              value={phone}
              onChange={(e) => setPhone(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Other expenses
            </label>
            <input
              type="number"
              value={other}
              onChange={(e) => setOther(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className={`rounded-xl p-4 ${moneyLeft >= 0 ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="text-sm text-gray-600 mb-1">Total expenses</div>
            <div className="text-2xl font-bold text-gray-900">${totalExpenses.toFixed(2)}</div>
          </div>

          <div className={`rounded-xl p-4 ${moneyLeft >= 0 ? 'bg-teal-50 border border-teal-200' : 'bg-red-100 border border-red-300'}`}>
            <div className="text-sm text-gray-600 mb-1">Money left over</div>
            <div className={`text-2xl font-bold ${moneyLeft >= 0 ? 'text-teal-700' : 'text-red-700'}`}>
              ${moneyLeft.toFixed(2)}
            </div>
          </div>

          {/* Expense Breakdown */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Expense Breakdown</div>
            {expenses.map((expense) => {
              const percentage = income > 0 ? (expense.amount / income) * 100 : 0
              return (
                <div key={expense.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">{expense.name}</span>
                    <span className="font-medium">${expense.amount.toFixed(2)} ({percentage.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`${expense.color} h-2 rounded-full transition-all`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  const renderCreditCardPayoff = () => {
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
      
      while (currentBalance > 0 && monthsToPayoff < 600) { // Max 50 years
        const interestPayment = currentBalance * monthlyRate
        const principalPayment = Math.min(monthlyPayment - interestPayment, currentBalance)
        
        if (principalPayment <= 0) {
          // Payment doesn't cover interest
          monthsToPayoff = -1
          break
        }
        
        currentBalance -= principalPayment
        totalInterest += interestPayment
        totalPaid += monthlyPayment
        monthsToPayoff++
      }
      
      if (currentBalance > 0) {
        totalPaid += currentBalance
      }
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

    const minimumPayment = balance * 0.02 // 2% minimum payment
    const paymentTooLow = monthlyPayment < minimumPayment && monthlyPayment > 0

    return (
      <div className="space-y-6">
        {/* Input Fields */}
        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Current balance
            </label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Interest rate (%)
            </label>
            <input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Monthly payment amount
            </label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(parseFloat(e.target.value) || 0)}
              className="input-field"
            />
            {paymentTooLow && (
              <p className="mt-2 text-sm text-red-600">
                Minimum payment: ${minimumPayment.toFixed(2)}
              </p>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="rounded-xl bg-teal-50 border border-teal-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Months until paid off</div>
            <div className="text-2xl font-bold text-teal-700">
              {formatTime(monthsToPayoff)}
            </div>
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total interest you will pay</div>
            <div className="text-2xl font-bold text-blue-700">
              ${totalInterest.toFixed(2)}
            </div>
          </div>

          <div className="rounded-xl bg-purple-50 border border-purple-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total amount paid overall</div>
            <div className="text-2xl font-bold text-purple-700">
              ${totalPaid.toFixed(2)}
            </div>
          </div>

          {paymentTooLow && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4">
              <div className="text-sm font-medium text-red-800">
                ⚠️ Your monthly payment is less than the minimum required. 
                This will never pay off the balance and interest will continue to accumulate.
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  const renderTool = () => {
    switch (activeTool) {
      case 'budget':
        return renderBudgetCalculator()
      case 'credit':
        return renderCreditCardPayoff()
      default:
        return renderBudgetCalculator()
    }
  }

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl md:text-3xl font-bold text-gray-900">Financial Tools</h1>
        <p className="text-gray-600">Calculate and plan your finances</p>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-md mx-auto lg:max-w-none">
          {tools.map(tool => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`rounded-xl p-4 text-center transition-all ${
                activeTool === tool.id
                  ? 'gradient-header text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="text-2xl mb-2">{tool.icon}</div>
              <div className="text-sm font-semibold">
                {tool.name}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Budget Calculator */}
        <div className="card">
          <div className="gradient-header text-white p-4 rounded-t-xl">
            <h2 className="text-lg font-bold">
              Budget Calculator
            </h2>
          </div>
          <div className="p-4">
            {renderBudgetCalculator()}
          </div>
        </div>

        {/* Credit Card Payoff Calculator */}
        <div className="card">
          <div className="gradient-header text-white p-4 rounded-t-xl">
            <h2 className="text-lg font-bold">
              Credit Card Payoff
            </h2>
          </div>
          <div className="p-4">
            {renderCreditCardPayoff()}
          </div>
        </div>
      </div>
    </div>
  )
}
