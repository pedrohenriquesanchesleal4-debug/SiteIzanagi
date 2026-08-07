import type { Metadata } from "next";
import "./globals.css";
import { MotionConfig } from "framer-motion";
import { LanguageProvider } from "../lib/i18n/LanguageProvider";

export const metadata: Metadata = {
    title: "Izanagi AI · Autonomous Multi-Agent Software Engineering Framework",
  description: "The definitive modular skill-oriented AI prompt & agent framework for autonomous software engineering. Built for low token consumption, rigorous architecture, and high-craft execution.",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "32x32" }],
    apple: "/apple-icon.png",
  },
  keywords: [
    "Izanagi AI",
    "Autonomous Agents",
    "Software Engineering AI",
    "Multi-Agent System",
    "CLI AI Framework",
    "Clean Architecture AI",
    "TypeScript AI Agents",
    "LLM Framework",
    "Skill-oriented AI",
    "Developer Tools"
  ],
  authors: [{ name: "Pedro Henrique Sanches Leal" }],
  creator: "Pedro Henrique Sanches Leal",
  publisher: "Izanagi AI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR", "es_ES"],
    url: "https://izanagi-ai.dev",
  title: "Izanagi AI · Autonomous Multi-Agent Software Engineering Framework",
    description: "Modular skill-oriented AI prompt & agent framework for autonomous software engineering.",
    siteName: "Izanagi AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izanagi AI · Autonomous Multi-Agent Framework",
    description: "Modular skill-oriented AI prompt & agent framework for autonomous software engineering.",
  },
  other: {
    "ai-content-declaration": "This site provides documentation and tools for Izanagi AI, an autonomous software engineering multi-agent framework.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Izanagi AI",
              "operatingSystem": "All",
              "applicationCategory": "DeveloperApplication",
              "description": "Modular skill-oriented AI prompt & agent framework for autonomous software engineering.",
              "softwareVersion": "2.4.1",
              "author": {
                "@type": "Person",
                "name": "Pedro Henrique Sanches Leal"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased selection:bg-blue-500 selection:text-white">
        <MotionConfig reducedMotion="user">
          <LanguageProvider>{children}</LanguageProvider>
        </MotionConfig>
      </body>
    </html>
  );
}
