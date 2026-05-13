"use client"

import { EUROPE_DOTS } from "./europe-dots"
import { useI18n } from "@/lib/i18n"
import { useRef, useEffect, useCallback } from "react"

const VIEWBOX_W = 600
const VIEWBOX_H = 500

const WAVE_SPEED = 3       // radians/second
const WAVE_AMPLITUDE = 4   // max SVG-unit displacement
const WAVE_LENGTH = 80     // SVG units per full wave cycle
const WAVE_RADIUS = 200    // influence radius from cursor
const DECAY_DURATION = 0.7 // seconds to fade out after mouse leaves

type LocationKey = "frankfurt" | "paris" | "bucuresti" | "sofia"

const POSITIONS: Record<
  LocationKey,
  { cx: number; cy: number; type: "primary" | "edge"; boxOffset: { x: number; y: number } }
> = {
  frankfurt: { cx: 230, cy: 288, type: "primary", boxOffset: { x: 18, y: -16 } },
  paris: { cx: 159, cy: 304, type: "edge", boxOffset: { x: -80, y: 8 } },
  bucuresti: { cx: 423, cy: 363, type: "primary", boxOffset: { x: 22, y: -50 } },
  sofia: { cx: 392, cy: 386, type: "edge", boxOffset: { x: -55, y: 22 } },
}

const HIGHLIGHTED = { cx: 423, cy: 363 }

export function Map() {
  const { t } = useI18n()

  const svgRef = useRef<SVGSVGElement>(null)
  const dotsGroupRef = useRef<SVGGElement>(null)
  const circlesRef = useRef<SVGCircleElement[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999, active: false, leaveTime: 0 })
  const rafRef = useRef<number>(0)
  const rafStartRef = useRef<number>(0)

  const animate = useCallback((time: number) => {
    const circles = circlesRef.current
    if (!circles.length) return

    if (!rafStartRef.current) rafStartRef.current = time
    const elapsed = (time - rafStartRef.current) / 1000

    const { x: mx, y: my, active, leaveTime } = mouseRef.current

    let decayFactor = 1
    if (!active) {
      const sinceLeave = (time - leaveTime) / 1000
      decayFactor = Math.max(0, 1 - sinceLeave / DECAY_DURATION)
      if (decayFactor === 0) {
        circles.forEach((c) => c.removeAttribute("transform"))
        return
      }
    }

    for (let i = 0; i < circles.length; i++) {
      const [cx, cy] = EUROPE_DOTS[i]
      const dx = cx - mx
      const dy = cy - my
      const distSq = dx * dx + dy * dy

      if (distSq > WAVE_RADIUS * WAVE_RADIUS * 1.5) continue

      const dist = Math.sqrt(distSq)
      const falloff = Math.max(0, 1 - dist / WAVE_RADIUS)
      const phase = dist / WAVE_LENGTH - elapsed * WAVE_SPEED
      const offset = Math.sin(phase) * WAVE_AMPLITUDE * falloff * decayFactor

      if (Math.abs(offset) < 0.05) {
        circles[i].removeAttribute("transform")
      } else {
        circles[i].setAttribute("transform", `translate(0,${offset.toFixed(2)})`)
      }
    }

    rafRef.current = requestAnimationFrame(animate)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const svg = svgRef.current
      if (!svg) return

      const pt = svg.createSVGPoint()
      pt.x = e.clientX
      pt.y = e.clientY
      const svgPt = pt.matrixTransform(svg.getScreenCTM()!.inverse())
      mouseRef.current.x = svgPt.x
      mouseRef.current.y = svgPt.y

      if (!mouseRef.current.active) {
        mouseRef.current.active = true
        rafStartRef.current = 0
        cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(animate)
      }
    },
    [animate],
  )

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.active = false
    mouseRef.current.leaveTime = performance.now()
  }, [])

  useEffect(() => {
    if (dotsGroupRef.current) {
      circlesRef.current = Array.from(
        dotsGroupRef.current.querySelectorAll("circle"),
      ) as SVGCircleElement[]
    }
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const locations = (Object.keys(POSITIONS) as LocationKey[]).map((key) => ({
    key,
    ...POSITIONS[key],
    name: t.map.locations[key].name,
    label: t.map.locations[key].label,
  }))

  return (
    <div className="relative w-full h-full">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Grid lines — horizontal at true geographic latitudes, vertical every 100px */}
        <g stroke="oklch(0.18 0.01 270 / 0.1)" strokeWidth="0.5">
          {[224, 290, 355, 421].map((y) => (
            <line key={`h-${y}`} x1="0" y1={y} x2={VIEWBOX_W} y2={y} />
          ))}
          {[100, 200, 300, 400, 500].map((x) => (
            <line key={`v-${x}`} x1={x} y1="0" x2={x} y2={VIEWBOX_H} />
          ))}
        </g>

        {/* Latitude labels — equirectangular lon[-12,42] lat[34,72] */}
        <g fill="oklch(0.42 0.01 270)" fontSize="11" fontFamily="var(--font-geist-mono)">
          <text x="6" y="228">55°N</text>
          <text x="6" y="294">50°N</text>
          <text x="6" y="359">45°N</text>
          <text x="6" y="425">40°N</text>
        </g>

        {/* Dot matrix forming Europe */}
        <g ref={dotsGroupRef} fill="oklch(0.42 0.01 270 / 0.5)">
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
