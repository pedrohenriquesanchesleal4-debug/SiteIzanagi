import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NexusAI — The Architect's Mind",
  description:
    "A modular, skill-oriented framework for AI agents. Low token, high signal. Architecture first, code second.",
  openGraph: {
    title: "NexusAI — The Architect's Mind",
    description:
      "A modular, skill-oriented framework for AI agents. Low token, high signal.",
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
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
