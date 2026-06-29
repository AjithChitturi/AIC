// AIC Mahindra logo.
// `image` -> the actual brand logo cropped from the hero banner (used in the navbar).
// default  -> recreated SVG mark + white text (used on the dark footer).
export default function Logo({ image, src = '/aic-logo.png' }) {
  if (image) {
    return <img className="aic-logo-img" src={src} alt="AIC Mahindra — Empowering Startups to Rise" />
  }
  return (
    <span className="aic-logo">
      <svg className="aic-logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#c1121f" />
        <g stroke="#fff" strokeWidth="4" strokeLinecap="round">
          <line x1="13" y1="33" x2="23" y2="15" />
          <line x1="21" y1="33" x2="31" y2="15" />
          <line x1="29" y1="33" x2="39" y2="15" />
        </g>
      </svg>
      <span className="aic-logo__text">
        <strong>AIC</strong>
        <span>Mahindra</span>
        <em>Empowering Startups to <i>Rise</i></em>
      </span>
    </span>
  )
}
