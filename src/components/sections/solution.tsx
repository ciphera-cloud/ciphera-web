"use client"

import { useI18n } from "@/lib/i18n"

export function Solution() {
  const { t } = useI18n()

  return (
    <section
      id="solution"
      className="border-b"
      style={{
        borderColor: 'oklch(0.922 0 0)',
        backgroundColor: 'oklch(0.975 0.002 270)',
      }}
    >
      {/* Header row */}
      <div
        className="border-b"
        style={{ borderColor: 'oklch(0.922 0 0)' }}
      >
        {/* Eyebrow */}
        <div
          className="px-6 md:px-12 py-3 md:py-4 flex items-center gap-3 border-b"
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
            {t.solution.eyebrow}
          </span>
        </div>

        {/* Headline + sub */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <h2
            className="md:col-span-8 text-[32px] sm:text-[44px] md:text-[56px] lg:text-[72px] leading-[0.98] font-medium tracking-[-0.02em]"
            style={{
              color: 'oklch(0.18 0.01 270)',
              fontFamily: 'var(--font-bricolage)',
            }}
          >
            {t.solution.headlineLead}{' '}
            <em
              className="italic font-normal"
              style={{
                color: 'oklch(0.42 0.14 255)',
                fontFamily: 'var(--font-instrument-serif)',
              }}
            >
              {t.solution.headlineAccent}
            </em>{' '}
            {t.solution.headlineTail}
          </h2>
          <p
            className="md:col-span-4 md:pt-3 text-[16px] md:text-[17px] leading-[1.55]"
            style={{ color: 'oklch(0.42 0.01 270)' }}
          >
            {t.solution.sub}
          </p>
        </div>
      </div>

      {/* Three solution cards */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {t.solution.items.map((item, idx) => {
            const isLast = idx === t.solution.items.length - 1
            return (
              <article
                key={idx}
                className={`flex flex-col h-full px-6 md:px-12 py-8 md:py-12 ${
                  isLast ? '' : 'border-b md:border-b-0 md:border-r'
                }`}
                style={{ borderColor: 'oklch(0.922 0 0)' }}
              >
                <div
                  className="text-[10px] tracking-[0.14em] uppercase mb-4"
                  style={{
                    color: 'oklch(0.52 0.12 255)',
                    fontFamily: 'var(--font-geist-mono)',
                  }}
                >
                  {item.responseMarker}
                </div>

                <div
                  className="text-[11px] tracking-[0.16em] uppercase mb-6"
                  style={{
                    color: 'oklch(0.42 0.01 270)',
                    fontFamily: 'var(--font-geist-mono)',
                  }}
                >
                  {item.eyebrow}
                </div>

                <h3
                  className="text-[24px] md:text-[28px] leading-[1.1] font-normal italic tracking-[-0.01em] mb-6"
                  style={{
                    color: 'oklch(0.18 0.01 270)',
                    fontFamily: 'var(--font-instrument-serif)',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-[16px] md:text-[17px] leading-[1.55]"
                  style={{ color: 'oklch(0.18 0.01 270)' }}
                >
                  {item.body}
                </p>

                <div
                  className="mt-auto pt-8 md:pt-10 text-[11px] tracking-[0.08em] uppercase"
                  style={{
                    color: 'oklch(0.42 0.01 270)',
                    fontFamily: 'var(--font-geist-mono)',
                  }}
                >
                  {item.citation}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
