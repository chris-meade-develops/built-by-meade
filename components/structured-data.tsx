export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://chrismeadewebdevelopment.co.uk/#business',
    name: 'Chris Meade Web Development',
    alternateName: 'Chris Meade Web Dev',
    url: 'https://chrismeadewebdevelopment.co.uk',
    description:
      'Professional web development services in Godstone, Surrey and across the South East. Specializing in custom websites, e-commerce solutions, and digital marketing for local businesses.',
    founder: {
      '@type': 'Person',
      name: 'Chris Meade',
      jobTitle: 'Web Developer',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Godstone',
      addressRegion: 'Surrey',
      addressCountry: 'GB',
    },
    areaServed: [
      {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
          latitude: 51.252,
          longitude: -0.0505,
        },
        geoRadius: '50000',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Surrey',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Kent',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'South East England',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'London',
      },
    ],
    serviceType: [
      'Web Development',
      'Website Design',
      'E-commerce Development',
      'WordPress Development',
      'React Development',
      'Next.js Development',
      'Digital Marketing',
      'SEO Services',
      'Responsive Web Design',
      'Custom Web Applications',
    ],
    knowsAbout: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'WordPress',
      'PHP',
      'Node.js',
      'SEO',
      'Web Design',
      'E-commerce',
    ],
    priceRange: '££',
    paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer', 'PayPal'],
    openingHours: 'Mo-Fr 09:00-17:00',
    //telephone: '+44-XXXX-XXXXXX', // Update with actual phone number
    email: 'chris@chrismeadewebdevelopment.co.uk', // Update with actual email
    sameAs: [
      // Add your social media profiles here
      'https://chrismeade.co.uk',
      'www.linkedin.com/in/chris-meade-66432187',
      // "https://twitter.com/chrismeadedev",
      'https://github.com/chris-meade-develops',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
