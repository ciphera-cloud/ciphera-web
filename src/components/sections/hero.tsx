"use client"

import { Map } from "@/components/sections/map"
import { Trust } from "@/components/sections/trust"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  return (
    <section
      className="grid grid-cols-2 border-b"
      style={{ borderColor: 'oklch(0.922 0 0)' }}
    >
      {/* LEFT column */}
      <div
        className="flex flex-col border-r"
        style={{ borderColor: 'oklch(0.922 0 0)' }}
      >
        {/* Vol. label */}
        <div
          className="px-12 py-4 flex items-center gap-3 border-b"
          style={{ borderColor: 'oklch(0.922 0 0)' }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: 'oklch(0.42 0.14 255)' }}
          />
          <span
            className="text-[11px] tracking-[0.12em] uppercase"
            style={{
              color: 'oklch(0.42 0.01 270)',
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            {t.hero.volume}
          </span>
        </div>

        {/* Hero content */}
        <div className="px-12 py-16 flex-1 flex flex-col justify-center">
          <h1
            className="text-[80px] leading-[0.95] font-medium tracking-[-0.02em]"
            style={{
              color: 'oklch(0.18 0.01 270)',
              fontFamily: 'var(--font-bricolage)',
            }}
          >
            {t.hero.title.line1}
            <br />
            <em
              className="italic font-normal"
              style={{
                color: 'oklch(0.42 0.14 255)',
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: '92px',
              }}
            >
              {t.hero.title.line2}
            </em>
            <br />
            <span style={{ color: 'oklch(0.42 0.01 270)' }}>
              {t.hero.title.line3}
            </span>
          </h1>

          {/* Bilingual subtitle (always shows the OPPOSITE language) */}
          <div className="mt-8 flex items-baseline gap-3">
            <span
              className="text-[12px] uppercase tracking-[0.15em]"
              style={{
                color: 'oklch(0.42 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              {t.hero.bilingualLabel}
            </span>
            <span
              className="italic text-[16px]"
              style={{
                color: 'oklch(0.18 0.01 270)',
                fontFamily: 'var(--font-instrument-serif)',
              }}
            >
              {t.hero.bilingualText}
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-6 text-[17px] leading-[1.55] max-w-[540px]"
            style={{ color: 'oklch(0.18 0.01 270)' }}
          >
            {t.hero.descriptionPrefix}{' '}
            <span
              className="px-1.5 py-0.5 text-[14px] rounded"
              style={{
                backgroundColor: 'oklch(0.95 0.005 270)',
                color: 'oklch(0.18 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              {t.hero.descriptionTag}
            </span>
            {t.hero.descriptionSuffix}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-start gap-2">
            <button
              className="px-5 py-3 rounded-md text-[15px] font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'oklch(0.42 0.14 255)',
                color: 'white',
              }}
            >
              {t.hero.primaryCta}
              <span className="text-[13px]">↗</span>
            </button>
            <span
              className="text-[12px] tracking-wide"
              style={{
                color: 'oklch(0.42 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              {t.hero.primaryCtaNote}
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT column */}
      <div className="flex flex-col">
        {/* Top location info */}
        <div
          className="px-8 py-4 flex items-center justify-end border-b"
          style={{ borderColor: 'oklch(0.922 0 0)' }}
        >
          <span
            className="text-[11px] tracking-[0.12em] uppercase"
            style={{
              color: 'oklch(0.42 0.01 270)',
              fontFamily: 'var(--font-geist-mono)',
            }}
          >
            {t.hero.location}
          </span>
        </div>

        {/* Map */}
        <div className="px-8 py-8 flex-1 flex items-center">
          <Map />
        </div>

        {/* Trust cells under the map */}
        <Trust />
      </div>
    </section>
  )
}
