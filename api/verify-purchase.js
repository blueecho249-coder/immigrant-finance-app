// Vercel Serverless Function - Verify Gumroad Purchase
// This checks if an email has made a purchase on Gumroad

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body

  if (!email || !email.trim()) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const normalizedEmail = email.toLowerCase().trim()

  try {
    // Get purchases from Gumroad API
    // You need to set GUMROAD_ACCESS_TOKEN in Vercel environment variables
    const accessToken = process.env.GUMROAD_ACCESS_TOKEN
    const productId = process.env.GUMROAD_PRODUCT_ID // Your product ID

    if (!accessToken) {
      console.error('GUMROAD_ACCESS_TOKEN not configured')
      // Fallback: Check against a list of verified emails stored in env
      const verifiedEmails = process.env.VERIFIED_PREMIUM_EMAILS 
        ? process.env.VERIFIED_PREMIUM_EMAILS.split(',').map(e => e.trim().toLowerCase())
        : []
      
      const isVerified = verifiedEmails.includes(normalizedEmail)
      
      return res.status(200).json({ 
        valid: isVerified,
        message: isVerified ? 'Purchase verified' : 'No purchase found for this email'
      })
    }

    // Call Gumroad API to verify purchase
    const gumroadResponse = await fetch(
      `https://api.gumroad.com/v2/products/${productId}/subscribers?email=${encodeURIComponent(normalizedEmail)}`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    )

    if (!gumroadResponse.ok) {
      throw new Error(`Gumroad API error: ${gumroadResponse.status}`)
    }

    const data = await gumroadResponse.json()
    
    // Check if there's a successful purchase
    const hasPurchase = data.subscribers && data.subscribers.length > 0 &&
      data.subscribers.some(sub => sub.email.toLowerCase() === normalizedEmail)

    return res.status(200).json({
      valid: hasPurchase,
      message: hasPurchase ? 'Purchase verified' : 'No purchase found for this email'
    })

  } catch (error) {
    console.error('Verification error:', error)
    
    // Don't expose internal errors to client
    return res.status(500).json({ 
      error: 'Verification failed',
      message: 'Unable to verify purchase at this time. Please try again later.'
    })
  }
}
