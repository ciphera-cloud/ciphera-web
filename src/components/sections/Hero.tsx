import { Map } from "@/components/sections/Map"
import { Trust } from "@/components/sections/Trust"

export function Hero() {
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
            Vol. 01 — Sovereign Cloud, Made for Europe
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
            Your data,
            <br />
            <em
              className="italic font-normal"
              style={{
                color: 'oklch(0.42 0.14 255)',
                fontFamily: 'var(--font-instrument-serif)',
                fontSize: '92px',
              }}
            >
              your Europe.
            </em>
            <br />
            <span style={{ color: 'oklch(0.42 0.01 270)' }}>Nothing less.</span>
          </h1>

          {/* Bilingual subtitle */}
          <div className="mt-8 flex items-baseline gap-3">
            <span
              className="text-[12px] uppercase tracking-[0.15em]"
              style={{
                color: 'oklch(0.42 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              RO  /
            </span>
            <span
              className="italic text-[16px]"
              style={{
                color: 'oklch(0.18 0.01 270)',
                fontFamily: 'var(--font-instrument-serif)',
              }}
            >
              Datele tale, Europa ta. Suveranitate digitală fără compromis.
            </span>
          </div>

          {/* Description */}
          <p
            className="mt-6 text-[17px] leading-[1.55] max-w-[540px]"
            style={{ color: 'oklch(0.18 0.01 270)' }}
          >
            A complete Microsoft 365 alternative — files, docs, mail, video and a private AI — hosted on European hardware, governed by European law, beyond the reach of the US{' '}
            <span
              className="px-1.5 py-0.5 text-[14px] rounded"
              style={{
                backgroundColor: 'oklch(0.95 0.005 270)',
                color: 'oklch(0.18 0.01 270)',
                fontFamily: 'var(--font-geist-mono)',
              }}
            >
              CLOUD Act
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center gap-3">
            <button
              className="px-5 py-3 rounded-md text-[15px] font-medium inline-flex items-center gap-2 transition-opacity hover:opacity-90"
              style={{
                backgroundColor: 'oklch(0.42 0.14 255)',
                color: 'white',
              }}
            >
              Start 30-day free trial
              <span className="text-[13px]">↗</span>
            </button>
            <button
              className="pl-2 pr-5 py-2 rounded-md text-[15px] font-medium inline-flex items-center gap-3 border transition-colors hover:bg-zinc-50"
              style={{
                borderColor: 'oklch(0.922 0 0)',
                color: 'oklch(0.18 0.01 270)',
                backgroundColor: 'white',
              }}
            >
              <span
                className="w-7 h-7 rounded-full inline-flex items-center justify-center"
                style={{ backgroundColor: 'oklch(0.18 0.01 270)' }}
              >
                <span className="text-white text-[10px] ml-0.5">▶</span>
              </span>
              Watch 90-sec demo
            </button>
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
            Hetzner · Frankfurt DE  ·  EST. București 2026
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
