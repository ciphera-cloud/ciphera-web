"use client"

import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  const mono = {
    color: 'oklch(0.42 0.01 270)',
    fontFamily: 'var(--font-geist-mono)',
  }

  return (
    <footer className="px-12 py-6 flex items-center justify-between">
      <span className="text-[11px] tracking-[0.12em] uppercase" style={mono}>
        {t.footer.tagline}
      </span>

      <div
        className="flex items-center gap-8 text-[11px] tracking-[0.12em] uppercase"
        style={mono}
      >
        <a href="#hero" className="hover:opacity-70 transition-opacity">{t.footer.sections.hero}</a>
        <a href="#problem" className="hover:opacity-70 transition-opacity">{t.footer.sections.problem}</a>
        <a href="#solution" className="hover:opacity-70 transition-opacity">{t.footer.sections.solution}</a>
        <a href="#platform" className="hover:opacity-70 transition-opacity">{t.footer.sections.platform}</a>
        <a href="#pricing" className="hover:opacity-70 transition-opacity">{t.footer.sections.pricing}</a>
      </div>

      <span className="text-[11px] tracking-[0.12em] uppercase" style={mono}>
        {t.footer.page}
      </span>
    </footer>
  )
}
