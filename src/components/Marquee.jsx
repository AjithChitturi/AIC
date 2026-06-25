// Infinite horizontal marquee. Renders the children track twice so the loop is seamless.
// Pauses on hover; honors prefers-reduced-motion via CSS.
export default function Marquee({ items, renderItem, speed = 36, reverse = false, className = '' }) {
  const track = [...items, ...items]
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
