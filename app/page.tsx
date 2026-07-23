"use client"

import { I18nProvider } from "@/lib/i18n"
import ThreeBackground from "@/components/ThreeBackground"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Stats from "@/components/Stats"
import Features from "@/components/Features"
import InstallGuide from "@/components/InstallGuide"
import Architecture from "@/components/Architecture"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <I18nProvider>
      <ThreeBackground />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Stats />
        <Features />
        <InstallGuide />
        <Architecture />
        <CTA />
        <Footer />
      </main>
    </I18nProvider>
  )
}
