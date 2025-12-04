import { Demo } from "@/components/blocks/demo"
import type { Metadata } from 'next'

export const dynamic = 'force-static'
export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Axos Waitlist — Sign up',
  description:
    'Join the Axos waitlist to receive news and exclusive invites to our AI-driven investing platform.',
  alternates: { canonical: 'https://axos.ai/' },
  openGraph: {
    title: 'Axos Waitlist — Sign up',
    description:
      'Join the Axos waitlist to receive news and exclusive invites to our AI-driven investing platform.',
    url: 'https://axos.ai/',
    siteName: 'Axos.AI',
    images: [
      {
        url: '/figma-assets/dashboard-criacao-agentes.webp',
        width: 1200,
        height: 630
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axos Waitlist — Sign up',
    description:
      'Join the Axos waitlist to receive news and exclusive invites to our AI-driven investing platform.',
    images: ['/figma-assets/dashboard-criacao-agentes.webp']
  },
  robots: { index: true, follow: true }
}

export default function Home() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Axos.AI",
        "url": "https://axos.ai",
        "logo": "/figma-assets/dashboard-criacao-agentes.webp"
      },
      {
        "@type": "WebSite",
        "url": "https://axos.ai",
        "name": "Axos.AI",
        "description": "Maximize your crypto returns with AI-driven recommendations and 24/7 monitoring."
      },
      {
        "@type": "WebPage",
        "url": "https://axos.ai/",
        "name": "Axos Waitlist",
        "isPartOf": { "@id": "https://axos.ai" }
      }
    ]
  })

  return (
    <>
      <Demo />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  )
}