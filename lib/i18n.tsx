"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export type Locale = "pt" | "en" | "es"

const messages: Record<Locale, Record<string, any>> = {
  pt: {} as any,
  en: {} as any,
  es: {} as any,
}

async function loadMessages(locale: Locale) {
  if (Object.keys(messages[locale]).length) return messages[locale]
  const mod = await import(`./${locale}.json`)
  messages[locale] = mod.default
  return mod.default
}

interface I18nContextType {
  locale: Locale
  setLocale: (l: Locale) => void
  t: (path: string) => string
}

const I18nContext = createContext<I18nContextType>(null!)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")
  const [dict, setDict] = useState<Record<string, any>>({})

  useEffect(() => {
    loadMessages(locale).then(setDict)
  }, [locale])

  const t = (path: string): string => {
    const keys = path.split(".")
    let val: any = dict
    for (const k of keys) {
      if (val == null) return path
      val = val[k]
    }
    return typeof val === "string" ? val : path
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
