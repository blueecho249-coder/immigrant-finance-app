// Progress tracking utility for localStorage
export const progressTracker = {
  // Get user progress data
  getProgress() {
    const stored = localStorage.getItem('userProgress')
    return stored ? JSON.parse(stored) : {
      totalXP: 0,
      streak: 0,
      lastActiveDate: null,
      completedLessons: [],
      lessonProgress: {}, // Track current step in each lesson
      achievements: []
    }
  },

  // Save progress data
  saveProgress(progress) {
    localStorage.setItem('userProgress', JSON.stringify(progress))
  },

  // Add XP points
  addXP(points) {
    const progress = this.getProgress()
    progress.totalXP += points
    this.saveProgress(progress)
    return progress.totalXP
  },

  // Get total XP
  getTotalXP() {
    return this.getProgress().totalXP
  },

  // Update streak
  updateStreak() {
    const progress = this.getProgress()
    const today = new Date().toDateString()
    
    if (progress.lastActiveDate === today) {
      // Already active today
      return progress.streak
    }
    
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const yesterdayString = yesterday.toDateString()
    
    if (progress.lastActiveDate === yesterdayString) {
      // Consecutive day
      progress.streak += 1
    } else {
      // Streak broken, start new
      progress.streak = 1
    }
    
    progress.lastActiveDate = today
    this.saveProgress(progress)
    return progress.streak
  },

  // Get current streak
  getStreak() {
    return this.getProgress().streak
  },

  // Mark lesson as completed
  completeLesson(lessonId) {
    const progress = this.getProgress()
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId)
      this.saveProgress(progress)
    }
  },

  // Check if lesson is completed
  isLessonCompleted(lessonId) {
    return this.getProgress().completedLessons.includes(lessonId)
  },

  // Update lesson progress (current step)
  updateLessonProgress(lessonId, currentStep, totalSteps) {
    const progress = this.getProgress()
    progress.lessonProgress[lessonId] = {
      currentStep,
      totalSteps,
      lastUpdated: new Date().toISOString()
    }
    this.saveProgress(progress)
  },

  // Get lesson progress
  getLessonProgress(lessonId) {
    const progress = this.getProgress()
    return progress.lessonProgress[lessonId] || { currentStep: 0, totalSteps: 0 }
  },

  // Reset all progress (for testing)
  resetProgress() {
    localStorage.removeItem('userProgress')
  }
}
