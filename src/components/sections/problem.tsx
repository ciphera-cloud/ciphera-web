"use client"

import { useI18n } from "@/lib/i18n"

export function Problem() {
  const { t } = useI18n()

  return (
    <section
      id="problem"
      className="border-b"
      style={{ borderColor: 'oklch(0.922 0 0)' }}
    >
      {/* Header row */}
      <div
        className="border-b"
        style={{ borderColor: 'oklch(0.922 0 0)' }}
      >
        {/* Eyebrow */}
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
            {t.problem.eyebrow}
          </span>
        </div>

        {/* Headline + sub */}
        <div className="px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <h2
            className="md:col-span-8 text-[56px] md:text-[72px] leading-[0.98] font-medium tracking-[-0.02em]"
            style={{
              color: 'oklch(0.18 0.01 270)',
              fontFamily: 'var(--font-bricolage)',
            }}
          >
            {t.problem.headlineLead}{' '}
            <em
              className="italic font-normal"
              style={{
                color: 'oklch(0.42 0.14 255)',
                fontFamily: 'var(--font-instrument-serif)',
              }}
            >
              {t.problem.headlineAccent}
            </em>{' '}
            {t.problem.headlineTail}
          </h2>
          <p
            className="md:col-span-4 md:pt-3 text-[17px] leading-[1.55]"
            style={{ color: 'oklch(0.42 0.01 270)' }}
          >
            {t.problem.sub}
          </p>
        </div>
      </div>

      {/* Three risk cards */}
      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ borderColor: 'oklch(0.922 0 0)' }}
      >
        {t.problem.risks.map((risk, idx) => {
          const isLast = idx === t.problem.risks.length - 1
          return (
            <article
              key={idx}
              className={`flex flex-col h-full px-12 py-12 ${
                isLast ? '' : 'border-b md:border-b-0 md:border-r'
              }`}
              style={{ borderColor: 'oklch(0.922 0 0)' }}
            >
              <div
                className="text-[11px] tracking-[0.16em] uppercase mb-6"
                style={{
                  color: 'oklch(0.42 0.01 270)',
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                {risk.eyebrow}
              </div>

              <h3
                className="text-[28px] leading-[1.1] font-normal italic tracking-[-0.01em] mb-6"
                style={{
                  color: 'oklch(0.18 0.01 270)',
                  fontFamily: 'var(--font-instrument-serif)',
                }}
              >
                {risk.title}
              </h3>

              <p
                className="text-[17px] leading-[1.55]"
                style={{ color: 'oklch(0.18 0.01 270)' }}
              >
                {risk.body}
              </p>

              <div
                className="mt-auto pt-10 text-[11px] tracking-[0.08em] uppercase"
                style={{
                  color: 'oklch(0.42 0.01 270)',
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                {risk.citation}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
