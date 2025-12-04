import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import LenisProvider from '@/components/providers/lenis-provider'
import RevealProvider from '@/components/providers/reveal-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const metadata: Metadata = {
  title: {
    default: 'Axos.AI — AI-driven crypto investing',
    template: '%s — Axos.AI'
  },
  description: 'Maximize your crypto returns with AI-driven recommendations and 24/7 monitoring.',
  alternates: {
    canonical: 'https://axos.ai'
  },
  openGraph: {
    title: 'Axos.AI — AI-driven crypto investing',
    description: 'Personalized recommendations, 24/7 monitoring and data-driven decision making.',
    url: 'https://axos.ai',
    siteName: 'Axos.AI',
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axos.AI — AI-driven crypto investing',
    description: 'Personalized recommendations, 24/7 monitoring and data-driven decision making.'
  },
  robots: {
    index: true,
    follow: true
  },
  // Allow Next.js to automatically resolve icons placed in `app/` or `public/`.
  // Explicit favicon reference removed so Next serves the app icons (icon0.svg, icon1.png, etc.).
  icons: undefined
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" className="dark" suppressHydrationWarning>
      <head>
      </head>
      <body className={inter.className}>
        <LenisProvider>
          <RevealProvider>
            {children}
          </RevealProvider>
        </LenisProvider>
      </body>
    </html>
  )
} 