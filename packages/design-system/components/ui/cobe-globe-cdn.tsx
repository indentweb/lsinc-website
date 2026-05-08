"use client"

import { useEffect, useRef, useCallback, useState } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import type React from "react"

type GlobeRenderState = Pick<COBEOptions, "width" | "height" | "phi" | "theta">
type GlobeOptions = COBEOptions & {
  onRender?: (state: GlobeRenderState) => void
}

interface CdnMarker {
  id: string
  location: [number, number]
  region: string
}

interface CdnArc {
  id: string
  from: [number, number]
  to: [number, number]
}

interface GlobeCdnProps {
  markers?: CdnMarker[]
  arcs?: CdnArc[]
  className?: string
  speed?: number
}

const defaultMarkers: CdnMarker[] = [
  { id: "cdn-iad", location: [38.95, -77.45], region: "iad1" },
  { id: "cdn-sfo", location: [37.62, -122.38], region: "sfo1" },
  { id: "cdn-cdg", location: [49.01, 2.55], region: "cdg1" },
  { id: "cdn-hnd", location: [35.55, 139.78], region: "hnd1" },
  { id: "cdn-syd", location: [-33.95, 151.18], region: "syd1" },
  { id: "cdn-gru", location: [-23.43, -46.47], region: "gru1" },
  { id: "cdn-sin", location: [1.36, 103.99], region: "sin1" },
  { id: "cdn-arn", location: [59.65, 17.93], region: "arn1" },
  { id: "cdn-dub", location: [53.43, -6.25], region: "dub1" },
  { id: "cdn-bom", location: [19.09, 72.87], region: "bom1" },
]

const defaultArcs: CdnArc[] = [
  { id: "cdn-arc-1", from: [38.95, -77.45], to: [49.01, 2.55] },
  { id: "cdn-arc-2", from: [37.62, -122.38], to: [35.55, 139.78] },
  { id: "cdn-arc-3", from: [49.01, 2.55], to: [1.36, 103.99] },
  { id: "cdn-arc-4", from: [38.95, -77.45], to: [-23.43, -46.47] },
  { id: "cdn-arc-5", from: [35.55, 139.78], to: [-33.95, 151.18] },
  { id: "cdn-arc-6", from: [49.01, 2.55], to: [19.09, 72.87] },
]

export function GlobeCdn({
  markers = defaultMarkers,
  arcs = defaultArcs,
  className = "",
  speed = 0.003,
}: GlobeCdnProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<{ x: number; y: number } | null>(null)
  const dragOffset = useRef({ phi: 0, theta: 0 })
  const phiOffsetRef = useRef(0)
  const thetaOffsetRef = useRef(0)
  const isPausedRef = useRef(false)
  const [traffic, setTraffic] = useState(() =>
    arcs.map((arc, i) => ({ id: arc.id, value: [420, 380, 290, 185, 156, 134][i] || 100 }))
  )

  useEffect(() => {
    setTraffic(arcs.map((arc, i) => ({ id: arc.id, value: [420, 380, 290, 185, 156, 134][i] || 100 })))
  }, [arcs])

  useEffect(() => {
    const interval = setInterval(() => {
      setTraffic((data) =>
        data.map((t) => ({
          ...t,
          value: Math.max(50, t.value + Math.floor(Math.random() * 21) - 10),
        }))
      )
    }, 250)
    return () => clearInterval(interval)
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = { x: e.clientX, y: e.clientY }
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing"
    isPausedRef.current = true
  }, [])

  const handlePointerUp = useCallback(() => {
    if (pointerInteracting.current !== null) {
      phiOffsetRef.current += dragOffset.current.phi
      thetaOffsetRef.current += dragOffset.current.theta
      dragOffset.current = { phi: 0, theta: 0 }
    }
    pointerInteracting.current = null
    if (canvasRef.current) canvasRef.current.style.cursor = "grab"
    isPausedRef.current = false
  }, [])

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        dragOffset.current = {
          phi: (e.clientX - pointerInteracting.current.x) / 300,
          theta: (e.clientY - pointerInteracting.current.y) / 1000,
        }
      }
    }
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerUp])

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    let globe: ReturnType<typeof createGlobe> | null = null
    let resizeObserver: ResizeObserver | null = null

    let phi = 0

    function init() {
      const width = canvas.offsetWidth
      if (width === 0 || globe) return

      const globeOptions: GlobeOptions = {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi: 0,
        theta: 0.35,
        dark: 0,
        diffuse: 1.2,
        mapSamples: 20000,
        mapBrightness: 5,
        mapBaseBrightness: 0.25,
        baseColor: [0.3, 0.33, 0.39],
        markerColor: [0.24, 0.56, 0.98],
        glowColor: [0.95, 0.97, 1],
        markers: markers.map((m) => ({ location: m.location, size: 0.012 })),
        arcs: arcs.map((arc) => ({ from: arc.from, to: arc.to })),
        arcColor: [0.24, 0.56, 0.98],
        arcWidth: 0.8,
        arcHeight: 0.18,
        markerElevation: 0.04,
        scale: 1,
        onRender: (state) => {
          if (!isPausedRef.current) phi += speed

          const size = canvas.offsetWidth || width
          state.width = size
          state.height = size
          state.phi = phi + phiOffsetRef.current + dragOffset.current.phi
          state.theta = 0.35 + thetaOffsetRef.current + dragOffset.current.theta
        },
      }

      globe = createGlobe(canvas, globeOptions)

      requestAnimationFrame(() => {
        canvas.style.opacity = "1"
      })
    }

    if (canvas.offsetWidth > 0) {
      init()
    } else {
      resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]?.contentRect.width > 0) {
          resizeObserver?.disconnect()
          init()
        }
      })
      resizeObserver.observe(canvas)
    }

    return () => {
      resizeObserver?.disconnect()
      if (globe) {
        try {
          globe.destroy()
        } catch {
          // COBE can throw during Fast Refresh teardown when the canvas has already been detached.
        }
      }
    }
  }, [markers, arcs, speed])

  return (
    <div className={`relative aspect-square select-none ${className}`}>
      <div className="absolute inset-[12%] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.95),rgba(226,232,240,0.8)_58%,rgba(203,213,225,0.55)_100%)] shadow-[0_0_40px_rgba(148,163,184,0.18)]" />
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        style={{
          width: "100%",
          height: "100%",
          cursor: "grab",
          opacity: 0,
          transition: "opacity 1.2s ease",
          borderRadius: "50%",
          touchAction: "none",
        }}
      />
      {traffic.length > 0 && (
        <div className="absolute bottom-4 left-4 flex flex-col gap-1">
          {traffic.slice(0, 3).map((t) => (
            <div
              key={t.id}
              className="font-mono text-[0.5rem] text-white bg-black px-2 py-1 rounded"
            >
              {t.value}k req/s
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
