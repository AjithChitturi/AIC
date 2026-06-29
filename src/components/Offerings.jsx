import { offerings } from '../data/content.js'

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="12" cy="12" rx="4.4" ry="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.6" />
      <line x1="3.5" y1="7" x2="20.5" y2="7" stroke="currentColor" strokeWidth="1.6" />
      <line x1="3.5" y1="17" x2="20.5" y2="17" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export default function Offerings() {
  return (
    <section id="offer" className="section offerings reveal">
      <div className="container">
        <h2 className="section__title">{offerings.heading}</h2>
        <p className="section__intro">{offerings.intro}</p>
        <div className="offerings__grid">
          {offerings.items.map((item, i) => (
            <div className="offer-card" key={item.title} style={{ '--i': i }}>
              <span className="offer-card__icon"><GlobeIcon /></span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
