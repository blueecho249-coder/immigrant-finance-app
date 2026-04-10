export default function ProgressBar({ 
  currentStep, 
  totalSteps, 
  showStepNumber = true 
}) {
  const progressPercentage = (currentStep / totalSteps) * 100

  return (
    <div className="w-full">
      {/* Step Number and Progress */}
      <div className="flex items-center justify-between mb-3">
        {showStepNumber && (
          <span className="text-sm font-medium text-gray-600">
            Step {currentStep} of {totalSteps}
          </span>
        )}
        <span className="text-sm font-medium text-purple-600">
          {Math.round(progressPercentage)}% Complete
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        {/* Background Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3">
          {/* Filled Bar */}
          <div 
            className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Step Dots */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1
            const isCompleted = stepNumber < currentStep
            const isCurrent = stepNumber === currentStep
            const isUpcoming = stepNumber > currentStep

            return (
              <div
                key={index}
                className="relative"
                style={{ 
                  left: `${(index / (totalSteps - 1)) * 100}%`,
                  transform: 'translateX(-50%)'
                }}
              >
                <div
                  className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isCompleted
                      ? 'bg-purple-600 border-purple-600'
                      : isCurrent
                      ? 'bg-purple-600 border-purple-600 shadow-lg shadow-purple-300'
                      : 'bg-white border-gray-300'
                  }`}
                >
                  {isCompleted ? (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586a1 1 0 01.414 1.414L16.707 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : isCurrent ? (
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  ) : (
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                  )}
                </div>

                {/* Step Number Label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 whitespace-nowrap">
                  {stepNumber}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
