// A stylised AIC Mahindra wordmark recreated with SVG/CSS (not the original logo file).
export default function Logo() {
  return (
    <span className="aic-logo">
      <svg className="aic-logo__mark" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="24" fill="#c1121f" />
        <g stroke="#fff" strokeWidth="3.4" strokeLinecap="round">
          <line x1="15" y1="32" x2="24" y2="16" />
          <line x1="22" y1="32" x2="31" y2="16" />
          <line x1="29" y1="32" x2="34" y2="22" />
        </g>
      </svg>
      <span className="aic-logo__text">
        <strong>AIC</strong>
        <span>Mahindra</span>
        <em>Empowering Startups to Rise</em>
      </span>
    </span>
  )
}
