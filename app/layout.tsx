import type { Metadata } from 'next'
import { Geist, Geist_Mono, Google_Sans_Code } from 'next/font/google'
import './globals.css'
import { NavigationBar } from '@/components/navigation'
import { StructuredData } from '@/components/structured-data'
import { ThemeProvider } from '@/providers/theme-provider'
import { Footer } from '@/components/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const cascadiaCode = Google_Sans_Code({
  variable: '--font-cascadia-code',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Web Development Godstone Surrey | Chris Meade Web Development | South East UK',
  description:
    'Professional web development services in Godstone, Surrey and across the South East. Expert WordPress, React, and Next.js development. Custom websites, e-commerce solutions, and digital marketing for local businesses in Surrey, Kent, and London.',
  keywords:
    'web development Godstone, web developer Surrey, website design Godstone, web development South East, Surrey web developer, Kent web development, London web developer, WordPress development Surrey, React developer Godstone, Next.js development Surrey, e-commerce websites Surrey, local web developer',
  authors: [{ name: 'Chris Meade' }],
  creator: 'Chris Meade',
  publisher: 'Chris Meade Web Development',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://chrismeadewebdevelopment.co.uk'), // Update this to your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Development Services in Godstone, Surrey | Chris Meade',
    description:
      'Expert web development services in Godstone, Surrey and across the South East. Specializing in modern websites, e-commerce solutions, and digital presence for local businesses.',
    url: 'https://chrismeade.co.uk', // Update this to your actual domain
    siteName: 'Chris Meade Web Development',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Chris Meade Web Development - Godstone Surrey',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Godstone Surrey | Chris Meade',
    description:
      'Professional web development services in Godstone, Surrey and the South East UK.',
    creator: '@chrismeadedev', // Update with actual Twitter handle
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cascadiaCode.variable} antialiased`}
      >
        <ThemeProvider>
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
