"use client"

import { EUROPE_DOTS } from "./europe-dots"
import { useI18n } from "@/lib/i18n"

// Dot matrix coords are in space [112-549, 71-451]; viewBox 600x500 matches the HTML proportions.
const VIEWBOX_W = 600
const VIEWBOX_H = 500

type LocationKey = "frankfurt" | "paris" | "bucuresti" | "sofia"

const POSITIONS: Record<
  LocationKey,
  { cx: number; cy: number; type: "primary" | "edge"; boxOffset: { x: number; y: number } }
> = {
  frankfurt: { cx: 275, cy: 215, type: "primary", boxOffset: { x: 18, y: -16 } },
  paris: { cx: 215, cy: 235, type: "edge", boxOffset: { x: -80, y: 8 } },
  bucuresti: { cx: 372, cy: 350, type: "primary", boxOffset: { x: 22, y: -50 } },
  sofia: { cx: 350, cy: 380, type: "edge", boxOffset: { x: -55, y: 22 } },
}

const HIGHLIGHTED = { cx: 372, cy: 350 }

export function Map() {
  const { t } = useI18n()

  const locations = (Object.keys(POSITIONS) as LocationKey[]).map((key) => ({
    key,
    ...POSITIONS[key],
    name: t.map.locations[key].name,
    label: t.map.locations[key].label,
  }))

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Grid lines */}
        <g stroke="oklch(0.18 0.01 270 / 0.1)" strokeWidth="0.5">
          {[80, 170, 260, 350, 440].map((y) => (
            <line key={`h-${y}`} x1="0" y1={y} x2={VIEWBOX_W} y2={y} />
          ))}
          {[100, 200, 300, 400, 500].map((x) => (
            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2={VIEWBOX_H} />
          ))}
        </g>

        {/* Latitude labels */}
        <g fill="oklch(0.42 0.01 270)" fontSize="11" fontFamily="var(--font-geist-mono)">
          <text x="6" y="84">55°N</text>
          <text x="6" y="174">50°N</text>
          <text x="6" y="264">45°N</text>
          <text x="6" y="354">40°N</text>
        </g>

        {/* Dot matrix forming Europe */}
        <g fill="oklch(0.42 0.01 270 / 0.5)">
          {EUROPE_DOTS.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="1.4" />
          ))}
        </g>

        {/* Pulse ring around highlighted location */}
        <circle
          cx={HIGHLIGHTED.cx}
          cy={HIGHLIGHTED.cy}
          r="14"
          fill="none"
          stroke="oklch(0.42 0.14 255)"
          strokeWidth="1"
          strokeDasharray="2 2"
          opacity="0.6"
        />
        <circle
          cx={HIGHLIGHTED.cx}
          cy={HIGHLIGHTED.cy}
          r="4"
          fill="oklch(0.42 0.14 255)"
        />

        {/* Connecting lines from primary boxes to their dots */}
        {locations
          .filter((l) => l.type === "primary")
          .map((loc) => (
            <line
              key={`line-${loc.key}`}
              x1={loc.cx}
              y1={loc.cy}
              x2={loc.cx + loc.boxOffset.x}
              y2={loc.cy + loc.boxOffset.y + 12}
              stroke="oklch(0.18 0.01 270)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              opacity="0.4"
            />
          ))}

        {/* Location dot markers */}
        {locations.map((loc) => (
          <circle
            key={`dot-${loc.key}`}
            cx={loc.cx}
            cy={loc.cy}
            r="3"
            fill="oklch(0.42 0.14 255)"
          />
        ))}

        {/* Location info — primary as dark blue boxes, edge as plain text */}
        {locations.map((loc) => {
          const x = loc.cx + loc.boxOffset.x
          const y = loc.cy + loc.boxOffset.y
          const isPrimary = loc.type === "primary"

          if (isPrimary) {
            return (
              <g key={`box-${loc.key}`} transform={`translate(${x}, ${y})`}>
                <rect
                  width="120"
                  height="30"
                  rx="3"
                  fill="oklch(0.32 0.13 260)"
                />
                <text
                  x="8"
                  y="13"
                  fill="white"
                  fontSize="10"
                  fontWeight="700"
                  fontFamily="var(--font-geist-mono)"
                >
                  {loc.name}
                </text>
                <text
                  x="8"
                  y="24"
                  fill="white"
                  fontSize="9"
                  fontWeight="400"
                  opacity="0.9"
                  fontFamily="var(--font-geist-mono)"
                >
                  {loc.label}
                </text>
              </g>
            )
          }

          return (
            <g key={`text-${loc.key}`} transform={`translate(${x}, ${y})`}>
              <text
                x="0"
                y="0"
                fill="oklch(0.18 0.01 270)"
                fontSize="11"
                fontWeight="700"
                fontFamily="var(--font-geist-mono)"
              >
                {loc.name}
              </text>
              <text
                x="0"
                y="12"
                fill="oklch(0.42 0.01 270)"
                fontSize="10"
                fontWeight="400"
                fontFamily="var(--font-geist-mono)"
              >
                {loc.label}
              </text>
            </g>
          )
        })}

        {/* Top right legend */}
        <g
          fill="oklch(0.42 0.14 255)"
          fontFamily="var(--font-geist-mono)"
          textAnchor="end"
        >
          <text x={VIEWBOX_W - 8} y="20" fontSize="11" fontWeight="600">
            {t.map.legendTitle}
          </text>
          <text x={VIEWBOX_W - 8} y="34" fontSize="10" opacity="0.85">
            {t.map.legendSubtitle}
          </text>
        </g>
      </svg>
    </div>
  )
}
