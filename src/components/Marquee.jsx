// Infinite horizontal marquee. Repeats the items enough to overflow the viewport,
// then renders that sequence twice and translates -50% for a seamless loop.
// Pauses on hover; honors prefers-reduced-motion via CSS.
export default function Marquee({ items, renderItem, speed = 40, reverse = false, className = '' }) {
  if (!items || items.length === 0) return null
  // Ensure the base sequence is long enough to fill wide screens before looping.
  const reps = Math.max(2, Math.ceil(10 / items.length))
  const base = Array.from({ length: reps }, () => items).flat()
  const track = [...base, ...base]
  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      <div
        className={`marquee__track ${reverse ? 'marquee__track--reverse' : ''}`}
        style={{ '--marquee-duration': `${speed}s` }}
      >
        {track.map((item, i) => (
          <div className="marquee__item" key={i}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>
    </div>
  )
}
