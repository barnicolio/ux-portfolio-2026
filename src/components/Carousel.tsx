import { useRef, useState } from 'react'

export type CarouselSlide = { src: string; caption?: string }

function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const [index, setIndex] = useState(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const count = slides.length

  function go(next: number) {
    setIndex(Math.max(0, Math.min(count - 1, next)))
  }

  function handleTouchStart(event: React.TouchEvent) {
    const touch = event.touches[0]
    touchStart.current = { x: touch.clientX, y: touch.clientY }
  }

  function handleTouchEnd(event: React.TouchEvent) {
    if (!touchStart.current) return
    const touch = event.changedTouches[0]
    const dx = touch.clientX - touchStart.current.x
    const dy = touch.clientY - touchStart.current.y
    // Only treat as a swipe when the gesture is mostly horizontal,
    // so vertical scrolling inside a slide still works.
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      go(dx < 0 ? index + 1 : index - 1)
    }
    touchStart.current = null
  }

  const current = slides[index]

  return (
    <div className="my-6">
      <div className="mx-auto max-w-[340px]">
        <div
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* key forces a remount per slide so vertical scroll resets to top */}
          <div key={index} className="h-[560px] overflow-y-auto">
            <img
              src={current.src}
              alt={current.caption ?? `Slide ${index + 1}`}
              className="w-full"
            />
          </div>
        </div>

        {current.caption && (
          <p className="mt-3 text-center text-xs text-[var(--text)]">
            {current.caption}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <button
            type="button"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--text-h)] disabled:opacity-30 disabled:hover:border-[var(--border)]"
          >
            ←
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index
                    ? 'bg-[var(--accent)]'
                    : 'bg-[var(--border)] hover:bg-[var(--accent-border)]'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(index + 1)}
            disabled={index === count - 1}
            aria-label="Next slide"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--text-h)] disabled:opacity-30 disabled:hover:border-[var(--border)]"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
