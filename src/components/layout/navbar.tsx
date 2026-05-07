"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"

function CipheraLogoMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="24"
      viewBox="0 0 22 26"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M11 1.5 L21 5 V13 C21 19 16.5 23.5 11 25 C5.5 23.5 1 19 1 13 V5 Z"
        stroke="oklch(0.18 0.01 270)"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="11" cy="9" r="1.5" fill="oklch(0.42 0.14 255)" />
      <circle cx="7" cy="14.5" r="1.5" fill="oklch(0.18 0.01 270)" />
      <circle cx="15" cy="14.5" r="1.5" fill="oklch(0.18 0.01 270)" />
      <path
        d="M11 9 L7 14.5 M11 9 L15 14.5 M7 14.5 L15 14.5"
        stroke="oklch(0.18 0.01 270)"
        strokeWidth="1"
      />
    </svg>
  )
}

export function Navbar() {
  const { t, locale, setLocale } = useI18n()

  const navLinks = [
    { label: t.navbar.links.platform, href: "#" },
    { label: t.navbar.links.sovereignty, href: "#" },
    { label: t.navbar.links.industries, href: "#" },
    { label: t.navbar.links.pricing, href: "#" },
    { label: t.navbar.links.docs, href: "#" },
  ]

  return (
    <header
      className="sticky top-0 z-50 border-b bg-white"
      style={{ borderColor: 'oklch(0.922 0 0)' }}
    >
      <div className="grid grid-cols-3 items-center px-12 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <CipheraLogoMark />
          <span
            className="text-[20px] font-semibold tracking-tight"
            style={{
              color: 'oklch(0.18 0.01 270)',
              fontFamily: 'var(--font-bricolage)',
            }}
          >
            Ciphera
          </span>
        </Link>

        {/* Nav links centered */}
        <nav className="flex items-center justify-center gap-8">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[14px] transition-opacity hover:opacity-60"
              style={{ color: 'oklch(0.18 0.01 270)' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center justify-end gap-5">
          {/* Language toggle */}
          <div
            className="text-[11px] tracking-wider inline-flex items-center gap-1.5 select-none"
            style={{ fontFamily: 'var(--font-geist-mono)' }}
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLocale("ro")}
              className="transition-opacity cursor-pointer"
              style={{
                color: 'oklch(0.18 0.01 270)',
                opacity: locale === "ro" ? 1 : 0.45,
                fontWeight: locale === "ro" ? 600 : 400,
              }}
              aria-pressed={locale === "ro"}
            >
              RO
            </button>
            <span style={{ color: 'oklch(0.42 0.01 270)' }}>·</span>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className="transition-opacity cursor-pointer"
              style={{
                color: 'oklch(0.18 0.01 270)',
                opacity: locale === "en" ? 1 : 0.45,
                fontWeight: locale === "en" ? 600 : 400,
              }}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
          <Link
            href="/sign-in"
            className="text-[14px] transition-opacity hover:opacity-60"
            style={{ color: 'oklch(0.18 0.01 270)' }}
          >
            {t.navbar.signIn}
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 text-[14px] font-medium rounded-full inline-flex items-center gap-1.5 transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'oklch(0.18 0.01 270)', color: 'white' }}
          >
            {t.navbar.cta}
            <span className="text-[12px]">→</span>
          </Link>
        </div>
      </div>
    </header>
  )
}
