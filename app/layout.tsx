import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Lincare Saúde - Assistência Domiciliar de Qualidade",
    template: "%s | Lincare Saúde"
  },
  description: "Soluções de qualidade em assistência à saúde com cuidado humanizado no conforto do seu lar",
  generator: "v0.app",
  applicationName: "Lincare Saúde",
  referrer: "origin-when-cross-origin",
  keywords: ["assistência domiciliar", "saúde", "enfermagem", "cuidados", "cuidador de idosos", "enfermagem domiciliar"],
  authors: [{ name: "Lincare Saúde", url: "https://lincare.netlify.app" }],
  creator: "Lincare Saúde",
  publisher: "Lincare Saúde",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lincare.netlify.app",
    title: "Lincare Saúde - Assistência Domiciliar de Qualidade",
    description: "Soluções de qualidade em assistência à saúde com cuidado humanizado no conforto do seu lar",
    siteName: "Lincare Saúde",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lincare Saúde - Assistência Domiciliar de Qualidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lincare Saúde - Assistência Domiciliar de Qualidade",
    description: "Soluções de qualidade em assistência à saúde com cuidado humanizado no conforto do seu lar",
    images: ["/og-image.jpg"],
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
    google: "google-site-verification-token",
    yandex: "yandex-verification-token",
  },
  alternates: {
    canonical: "https://lincare.netlify.app",
  },
  category: "healthcare",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
