export function Footer() {
  return (
    <footer className="px-12 py-6 flex items-center justify-between">
      <span
        className="text-[11px] tracking-[0.12em] uppercase"
        style={{
          color: 'oklch(0.42 0.01 270)',
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        Made in România · for Europe
      </span>

      <div
        className="flex items-center gap-8 text-[11px] tracking-[0.12em] uppercase"
        style={{
          color: 'oklch(0.42 0.01 270)',
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        <a href="#hero" className="hover:opacity-70 transition-opacity">§ 01 — Hero</a>
        <a href="#trust" className="hover:opacity-70 transition-opacity">§ 02 — Trust</a>
        <a href="#platform" className="hover:opacity-70 transition-opacity">§ 03 — Platform</a>
        <a href="#pricing" className="hover:opacity-70 transition-opacity">§ 04 — Pricing</a>
      </div>

      <span
        className="text-[11px] tracking-[0.12em] uppercase"
        style={{
          color: 'oklch(0.42 0.01 270)',
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        P. 001 / 006
      </span>
    </footer>
  )
}
