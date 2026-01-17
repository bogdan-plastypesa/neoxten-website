import type { Metadata, Viewport } from 'next'
import { Navigation, Footer } from '@/components'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://neoxten.com'),
  title: {
    default: 'NeoXten Studios',
    template: '%s | NeoXten Studios'
  },
  description: 'An intelligence studio building systems for automation, content, and digital infrastructure.',
  keywords: ['intelligence', 'automation', 'systems', 'digital infrastructure', 'NeoXten'],
  authors: [{ name: 'NeoXten Studios' }],
  creator: 'NeoXten Studios',
  publisher: 'PLASTYPESA S.R.L.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://neoxten.com',
    siteName: 'NeoXten Studios',
    title: 'NeoXten Studios',
    description: 'An intelligence studio building systems for automation, content, and digital infrastructure.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NeoXten Studios',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeoXten Studios',
    description: 'An intelligence studio building systems for automation, content, and digital infrastructure.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
