import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const baseUrl = "https://pedrohenriquesanchesleal4-debug.github.io/SiteIzanagi"

export const metadata: Metadata = {
  title: {
    default: "IzanagiIA — The Architect's Mind",
    template: "%s | IzanagiIA",
  },
  description:
    "IzanagiIA: framework modular e skill-oriented para agentes de IA. Baixo consumo de tokens, qualidade por camadas, auto-evolução contínua. Arquitetura primeiro, código depois.",
  keywords: [
    "IzanagiIA",
    "AI framework",
    "agentes de IA",
    "framework para agentes",
    "skill-oriented",
    "LLM",
    "prompt engineering",
    "autonomous agents",
    "IA framework",
    "token optimization",
    "izanagi",
    "desenvolvimento de IA",
  ],
  authors: [{ name: "Pedro Henrique Sanches Leal" }],
  creator: "Pedro Henrique Sanches Leal",
  publisher: "IzanagiIA",
  robots: { index: true, follow: true },
  metadataBase: new URL(baseUrl),

  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: ["en_US", "es_ES"],
    siteName: "IzanagiIA",
    title: "IzanagiIA — The Architect's Mind",
    description:
      "Framework modular skill-oriented para agentes de IA. 137 skills, 10 agentes, 8 engines. Baixo token, alto sinal.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "IzanagiIA — The Architect's Mind",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IzanagiIA — The Architect's Mind",
    description:
      "Framework modular skill-oriented para agentes de IA. 137 skills, baixo consumo de tokens.",
    images: [`${baseUrl}/og-image.png`],
  },

  other: {
    "google-site-verification": "", // opcional: colocar o código de verificação do Search Console
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={baseUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "IzanagiIA",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Windows, macOS, Linux",
              description:
                "Framework modular skill-oriented para agentes de IA com 137 skills, 10 agentes pré-construídos e 8 engines em pipeline.",
              author: {
                "@type": "Person",
                name: "Pedro Henrique Sanches Leal",
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
