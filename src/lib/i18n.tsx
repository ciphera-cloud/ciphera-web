"use client"

import { createContext, useCallback, useContext, useState, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "@/content/translations"

interface I18nValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: Translations
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({
  children,
  defaultLocale = "en",
}: {
  children: ReactNode
  defaultLocale?: Locale
}) {
  const [locale, setLocale] = useState<Locale>(defaultLocale)

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "ro" : "en"))
  }, [])

  return (
    <I18nContext.Provider
      value={{ locale, setLocale, toggleLocale, t: translations[locale] }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}
