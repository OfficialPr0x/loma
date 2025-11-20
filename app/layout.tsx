import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Loma Beach Resort - Paradise Awaits',
  description: 'Experience luxury beachfront accommodation at Loma Beach Resort. Book your tropical getaway with transparent pricing and exceptional service.',
  keywords: 'beach resort, Thailand, luxury accommodation, beachfront, tropical getaway, Loma Beach',
  authors: [{ name: 'Loma Beach Resort' }],
  openGraph: {
    title: 'Loma Beach Resort - Paradise Awaits',
    description: 'Experience luxury beachfront accommodation at Loma Beach Resort.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'th_TH',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
