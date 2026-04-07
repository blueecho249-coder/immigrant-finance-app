import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage,
  type = 'website',
  structuredData = null 
}) {
  const defaultTitle = 'NewStart Finance — Financial Literacy for Newcomers'
  const defaultDescription = 'Learn financial literacy for newcomers to Canada and USA. Master banking, credit, housing, taxes, and saving with free courses in 8 languages.'
  const defaultKeywords = 'financial literacy, newcomer finance, Canada banking, US credit, housing, taxes, saving, immigrant finance, financial education, multilingual finance'
  const defaultImage = 'https://newstart-finance.com/og-image.jpg'

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalImage = ogImage || defaultImage

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NewStart Finance",
    "url": "https://newstart-finance.com",
    "logo": "https://newstart-finance.com/logo.png",
    "description": finalDescription,
    "sameAs": [
      "https://www.facebook.com/newstartfinance",
      "https://www.twitter.com/newstartfinance"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["English", "Spanish", "Hindi", "Tagalog", "Mandarin", "Arabic", "French", "Punjabi"]
    }
  }

  const courseSchema = structuredData || organizationSchema

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content="NewStart Finance" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl || 'https://newstart-finance.com'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl || 'https://newstart-finance.com'} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      
      {/* Additional Meta */}
      <meta name="theme-color" content="#4F46E5" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(courseSchema)}
      </script>
    </Helmet>
  )
}
