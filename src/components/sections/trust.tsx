"use client"

import { useI18n } from "@/lib/i18n"

export function Trust() {
  const { t } = useI18n()

  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 border-t"
      style={{ borderColor: 'oklch(0.922 0 0)' }}
    >
      {t.trust.map((item, idx) => {
        const isLastCol2 = idx % 2 === 1
        const isLastCol4 = idx === t.trust.length - 1
        return (
          <div
            key={idx}
            className={[
              'px-4 py-4 md:px-5 md:py-5',
              // Mobile (2-col): right border on even items, bottom border on first row
              !isLastCol2 ? 'border-r' : '',
              idx < 2 ? 'border-b md:border-b-0' : '',
              // Desktop (4-col): right border on all except last
              !isLastCol4 ? 'md:border-r' : 'md:border-r-0',
            ].join(' ')}
            style={{ borderColor: 'oklch(0.922 0 0)' }}
          >
            <div
              className="text-[10px] tracking-[0.16em] uppercase mb-2"
              style={{
                color: 'oklch(0.42 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              {item.label}
            </div>
            <div
              className="text-[15px] md:text-[16px] font-medium leading-tight mb-0.5"
              style={{
                color: 'oklch(0.18 0.01 270)',
                fontFamily: 'var(--font-bricolage)',
              }}
            >
              {item.title}
            </div>
            <div
              className="text-[11px] leading-tight"
              style={{ color: 'oklch(0.42 0.01 270)' }}
            >
              {item.description}
            </div>
          </div>
        )
      })}
    </div>
  )
}
