#!/usr/bin/env node
// Helper script to add a premium user to your verified list
// Usage: node scripts/add-premium-user.js user@example.com

const fs = require('fs')
const path = require('path')

const email = process.argv[2]

if (!email) {
  console.error('Usage: node scripts/add-premium-user.js <email>')
  process.exit(1)
}

// Basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
if (!emailRegex.test(email)) {
  console.error('Invalid email format')
  process.exit(1)
}

const envPath = path.join(__dirname, '..', '.env.local')
const normalizedEmail = email.toLowerCase().trim()

// Read existing .env.local or create new
let envContent = ''
if (fs.existsSync(envPath)) {
  envContent = fs.readFileSync(envPath, 'utf8')
}

// Check if VERIFIED_PREMIUM_EMAILS already exists
const emailLineRegex = /^VERIFIED_PREMIUM_EMAILS=(.*)$/m
const match = envContent.match(emailLineRegex)

if (match) {
  // Update existing list
  const existingEmails = match[1].split(',').map(e => e.trim())
  
  if (existingEmails.includes(normalizedEmail)) {
    console.log(`⚠️  ${normalizedEmail} is already in the verified list`)
    process.exit(0)
  }
  
  existingEmails.push(normalizedEmail)
  const newEmailList = existingEmails.join(',')
  envContent = envContent.replace(emailLineRegex, `VERIFIED_PREMIUM_EMAILS=${newEmailList}`)
} else {
  // Add new line
  const newLine = `VERIFIED_PREMIUM_EMAILS=${normalizedEmail}`
  envContent = envContent ? `${envContent.trim()}\n${newLine}\n` : `${newLine}\n`
}

fs.writeFileSync(envPath, envContent)
console.log(`✅ Added ${normalizedEmail} to verified premium users`)
console.log('')
console.log('Next steps:')
console.log('1. Commit this change: git add .env.local && git commit -m "Add premium user"')
console.log('2. Push to deploy: git push origin main')
console.log('')
console.log('Or for Vercel Dashboard:')
console.log('1. Copy this email and add to VERIFIED_PREMIUM_EMAILS env variable')
console.log('2. Redeploy the application')
