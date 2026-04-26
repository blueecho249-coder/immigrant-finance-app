// Gumroad Webhook Handler - Receives sale notifications from Gumroad
// This endpoint is called by Gumroad after a successful purchase

import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseServiceKey)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Gumroad sends form-encoded data by default, but can send JSON
    // Handle both cases
    let payload = req.body
    
    // If it's form data (Gumroad default), convert to object
    if (typeof payload === 'string') {
      const params = new URLSearchParams(payload)
      payload = Object.fromEntries(params)
    }

    // Extract email from Gumroad payload
    // Gumroad sends: email, product_id, product_name, permalink, etc.
    const buyerEmail = payload.email || payload.purchaser_email
    const productId = payload.product_id || payload.product_permalink
    
    if (!buyerEmail) {
      console.error('No email found in Gumroad payload:', payload)
      return res.status(400).json({ error: 'Email not found in payload' })
    }

    const normalizedEmail = buyerEmail.toLowerCase().trim()

    console.log(`Processing Gumroad sale for: ${normalizedEmail}, Product: ${productId}`)

    // Check if email already exists
    const { data: existingUser } = await supabase
      .from('premium_users')
      .select('id')
      .eq('email', normalizedEmail)
      .single()

    if (existingUser) {
      console.log(`Email ${normalizedEmail} already exists in premium_users`)
      return res.status(200).json({ 
        success: true, 
        message: 'Email already verified',
        email: normalizedEmail 
      })
    }

    // Insert new premium user
    const { data, error } = await supabase
      .from('premium_users')
      .insert([
        { 
          email: normalizedEmail,
          created_at: new Date().toISOString(),
          source: 'gumroad',
          product_id: productId || null
        }
      ])

    if (error) {
      console.error('Supabase insert error:', error)
      return res.status(500).json({ error: 'Failed to save premium user' })
    }

    console.log(`Successfully added ${normalizedEmail} to premium_users`)

    return res.status(200).json({ 
      success: true, 
      message: 'Premium user added successfully',
      email: normalizedEmail 
    })

  } catch (error) {
    console.error('Webhook error:', error)
    return res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    })
  }
}
