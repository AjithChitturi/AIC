import { infrastructure } from '../data/content.js'

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 13l4 4L19 7" fill="none" stroke="#c1121f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Infrastructure() {
  return (
    <section id="infrastructure" className="section infra reveal">
      <div className="container">
        <h2 className="section__title">{infrastructure.heading}</h2>
        <p className="infra__body">{infrastructure.body}</p>
        <ul className="infra__list">
          {infrastructure.facilities.map((f) => (
            <li key={f}><Check /> {f}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
