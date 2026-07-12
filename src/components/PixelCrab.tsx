import { useEffect, useRef, useState } from 'react'

/**
 * Retro pixel-art crab that lives at the bottom of the viewport and
 * follows the cursor on the X axis. Hovering it makes it stop, pinch
 * its claws, and show a "Hire me!" speech bubble.
 *
 * Sprites are authored as character grids (one char = one pixel) and
 * drawn to a small canvas scaled up with image-rendering: pixelated.
 * The whole layer is pointer-events: none; "hover" is computed from
 * cursor coordinates so the crab never blocks page interactions.
 */

const SCALE = 3
const EDGE_MARGIN = 8

const PALETTE: Record<string, string> = {
  r: '#ef3022', // bright red body
  d: '#9c1a10', // dark red shadow
  h: '#ff9280', // highlight
  b: '#161616', // eye black
}
const SPARKLE_COLOR = '#ffffff'

// Left half of the body (12px wide); the right half is mirrored.
const HALF_CLOSED = [
  '.......bb...',
  '.......bb...',
  '........r...',
  '..rr....r...',
  '.rrrr..rrrrr',
  '.rrdr.rrrrrr',
  '.rrrr.rrrrrr',
  '..rr..rhrrrr',
  '...d..rrrrrd',
  '......drrrrr',
  '......ddrrrr',
  '.......ddddd',
]

// Same body, claws open in a pinch.
const HALF_OPEN = [
  '.......bb...',
  '.......bb...',
  '........r...',
  '.rr.....r...',
  'rr.....rrrrr',
  'rr..d.rrrrrr',
  '.rr.r.rrrrrr',
  '..rrr.rhrrrr',
  '...d..rrrrrd',
  '......drrrrr',
  '......ddrrrr',
  '.......ddddd',
]

// Legs are authored full-width (24px) so the gait can be asymmetric.
const LEGS_NEUTRAL = [
  '.....d...d....d...d.....',
  '....d...d......d...d....',
  '...d...d........d...d...',
]
const LEGS_A = [
  '....d....d...d....d.....',
  '....d...d.....d....d....',
  '....d..d........d....d..',
]

const mirror = (rows: string[]) => rows.map((r) => r + [...r].reverse().join(''))
const flip = (rows: string[]) => rows.map((r) => [...r].reverse().join(''))

const BODY_CLOSED = mirror(HALF_CLOSED)
const BODY_OPEN = mirror(HALF_OPEN)
const LEGS_B = flip(LEGS_A)

const FRAME_IDLE = [...BODY_CLOSED, ...LEGS_NEUTRAL]
const FRAME_WALK1 = [...BODY_CLOSED, ...LEGS_A]
const FRAME_WALK2 = [...BODY_CLOSED, ...LEGS_B]
const FRAME_PINCH_OPEN = [...BODY_OPEN, ...LEGS_NEUTRAL]

const GRID_W = 24
const GRID_H = FRAME_IDLE.length
const CRAB_W = GRID_W * SCALE
const CRAB_H = GRID_H * SCALE

function drawFrame(
  ctx: CanvasRenderingContext2D,
  frame: string[],
  facing: -1 | 0 | 1,
) {
  ctx.clearRect(0, 0, GRID_W, GRID_H)
  for (let y = 0; y < frame.length; y++) {
    const row = frame[y]
    for (let x = 0; x < row.length; x++) {
      const color = PALETTE[row[x]]
      if (color) {
        ctx.fillStyle = color
        ctx.fillRect(x, y, 1, 1)
      }
    }
  }
  // Eye sparkles shift one pixel toward the direction of travel.
  ctx.fillStyle = SPARKLE_COLOR
  ctx.fillRect(facing === -1 ? 7 : 8, 0, 1, 1)
  ctx.fillRect(facing === 1 ? 16 : 15, 0, 1, 1)
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(Math.max(v, min), max)

function PixelCrab() {
  const [enabled, setEnabled] = useState(false)
  const [hovered, setHovered] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bubbleRef = useRef<HTMLDivElement>(null)

  // Only run on devices with a hovering pointer (mouse/trackpad).
  useEffect(() => {
    if (window.matchMedia('(hover: hover)').matches) setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let x = (window.innerWidth - CRAB_W) / 2
    let mouseX = window.innerWidth / 2
    let mouseY = -1
    let facing: -1 | 0 | 1 = 0
    let over = false
    let walkTimer = 0
    let walkFrame = 0
    let pinchTimer = 0
    let pinchOpen = false
    let last = performance.now()
    let raf = 0

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50)
      last = now

      const maxX = window.innerWidth - CRAB_W - EDGE_MARGIN
      const target = clamp(mouseX - CRAB_W / 2, EDGE_MARGIN, maxX)
      const crabTop = window.innerHeight - CRAB_H

      // Hover = cursor inside the crab's box (computed, not DOM hover,
      // so the layer can stay pointer-events: none).
      const nowOver =
        mouseY >= crabTop - 6 &&
        mouseX >= x - 6 &&
        mouseX <= x + CRAB_W + 6
      if (nowOver !== over) {
        over = nowOver
        setHovered(nowOver)
        pinchTimer = 0
        pinchOpen = false
      }

      // Follow the cursor (paused while hovered so it's easy to interact).
      if (!over) {
        const ease = reduceMotion ? 0.4 : 0.085
        x += (target - x) * (1 - Math.pow(1 - ease, dt / 16.67))
        x = clamp(x, EDGE_MARGIN, maxX)
      }

      const dist = target - x
      facing = !over && Math.abs(dist) > 2 ? (dist > 0 ? 1 : -1) : 0
      const moving = !over && Math.abs(dist) > 2

      // Pick the sprite frame.
      let frame = FRAME_IDLE
      if (over) {
        if (reduceMotion) {
          frame = FRAME_PINCH_OPEN
        } else {
          pinchTimer += dt
          if (pinchTimer > 220) {
            pinchTimer = 0
            pinchOpen = !pinchOpen
          }
          frame = pinchOpen ? FRAME_PINCH_OPEN : FRAME_IDLE
        }
      } else if (moving && !reduceMotion) {
        walkTimer += dt
        if (walkTimer > 110) {
          walkTimer = 0
          walkFrame = walkFrame === 0 ? 1 : 0
        }
        frame = walkFrame === 0 ? FRAME_WALK1 : FRAME_WALK2
      }

      drawFrame(ctx, frame, facing)
      wrap.style.transform = `translate3d(${x}px, 0, 0)`

      // Keep the speech bubble inside the viewport.
      const bubble = bubbleRef.current
      if (bubble) {
        const bubbleW = bubble.offsetWidth
        const desired = x + CRAB_W / 2 - bubbleW / 2
        const clamped = clamp(desired, 6, window.innerWidth - bubbleW - 6)
        bubble.style.transform = `translateX(${clamped - x}px)`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={wrapRef}
      data-crab
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 left-0 z-30"
      style={{ width: CRAB_W }}
    >
      {hovered && (
        <div
          ref={bubbleRef}
          className="absolute bottom-full left-0 mb-4 whitespace-nowrap border-[3px] border-black bg-white px-3 py-2.5 text-black"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: 10,
            letterSpacing: 0,
            lineHeight: 1,
            boxShadow: '4px 4px 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          Hire me!
          {/* Pixel-stair speech bubble tail */}
          <span
            className="absolute block bg-black"
            style={{ top: '100%', left: 24, width: 15, height: 5 }}
          />
          <span
            className="absolute block bg-black"
            style={{ top: 'calc(100% + 5px)', left: 29, width: 5, height: 5 }}
          />
        </div>
      )}
      <canvas
        ref={canvasRef}
        width={GRID_W}
        height={GRID_H}
        style={{
          display: 'block',
          width: CRAB_W,
          height: CRAB_H,
          imageRendering: 'pixelated',
        }}
      />
    </div>
  )
}

export default PixelCrab
