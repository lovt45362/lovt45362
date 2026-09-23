import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Archivo } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
  weight: ['500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://newflooringprocess.uk'),
  title: {
    default:
      'New Flooring Process Ltd | Commercial Flooring, Carpentry & Refurbishment | London',
    template: '%s | New Flooring Process Ltd',
  },
  description:
    'New Flooring Process Ltd is a London-based commercial flooring, carpentry and refurbishment contractor delivering flooring installation, subfloor preparation, fit-out, planned maintenance and responsive repairs for commercial and public-sector clients.',
  keywords: [
    'commercial flooring London',
    'flooring contractor London',
    'LVT installation',
    'safety flooring',
    'carpentry and joinery',
    'commercial refurbishment',
    'fit-out contractor',
    'subfloor preparation',
    'planned maintenance',
    'void works',
    'New Flooring Process Ltd',
  ],
  authors: [{ name: 'New Flooring Process Ltd' }],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://newflooringprocess.uk',
    siteName: 'New Flooring Process Ltd',
    title:
      'New Flooring Process Ltd | Commercial Flooring, Carpentry & Refurbishment',
    description:
      'London-based commercial flooring, carpentry and refurbishment contractor for commercial and public-sector clients.',
  },
  generator: 'v0.app',
  alternates: {
    canonical: 'https://newflooringprocess.uk',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`light ${inter.variable} ${archivo.variable}`}>
      <body className="flex min-h-dvh flex-col antialiased font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
