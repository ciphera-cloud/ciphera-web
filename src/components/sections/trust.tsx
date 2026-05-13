"use client"

import { useI18n } from "@/lib/i18n"

export function Trust() {
  const { t } = useI18n()

  return (
    <div
      className="grid grid-cols-4 border-t"
      style={{ borderColor: 'oklch(0.922 0 0)' }}
    >
      {t.trust.map((item, idx) => (
        <div
          key={idx}
          className={`px-5 py-5 ${idx < t.trust.length - 1 ? 'border-r' : ''}`}
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
            className="text-[16px] font-medium leading-tight mb-0.5"
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
      ))}
    </div>
  )
}
