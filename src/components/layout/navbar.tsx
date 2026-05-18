"use client"

import Link from "next/link"
import { useI18n } from "@/lib/i18n"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Locale } from "@/content/translations"

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
      <div className="flex items-center justify-between px-4 md:px-12 h-14 md:h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <CipheraLogoMark />
          <span
            className="text-[18px] md:text-[20px] font-semibold tracking-tight"
            style={{
              color: 'oklch(0.18 0.01 270)',
              fontFamily: 'var(--font-bricolage)',
            }}
          >
            Ciphera
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center justify-center gap-8">
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
        <div className="flex items-center gap-2 md:gap-5">
          {/* Language picker */}
          <Select
            value={locale}
            onValueChange={(v) => setLocale(v as Locale)}
          >
            <SelectTrigger
              size="sm"
              aria-label="Language"
              className="h-8 text-[11px] tracking-wider uppercase border-transparent shadow-none px-2 gap-1.5 hover:bg-zinc-50"
              style={{
                color: 'oklch(0.18 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent
              align="end"
              className="min-w-[6rem]"
            >
              <SelectItem
                value="en"
                className="text-[12px] tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                English
              </SelectItem>
              <SelectItem
                value="ro"
                className="text-[12px] tracking-wider uppercase"
                style={{ fontFamily: 'var(--font-geist-mono)' }}
              >
                Română
              </SelectItem>
            </SelectContent>
          </Select>
          <Link
            href="/sign-in"
            className="hidden sm:inline text-[14px] transition-opacity hover:opacity-60"
            style={{ color: 'oklch(0.18 0.01 270)' }}
          >
            {t.navbar.signIn}
          </Link>
          <Link
            href="/sign-up"
            className="px-3 py-1.5 md:px-4 md:py-2 text-[13px] md:text-[14px] font-medium rounded-full inline-flex items-center gap-1.5 transition-opacity hover:opacity-90 whitespace-nowrap"
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
