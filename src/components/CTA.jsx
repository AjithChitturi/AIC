import { cta } from '../data/content.js'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <h2 className="cta__title">{cta.heading}</h2>
        <div className="cta__links">
          {cta.links.map((l) => (
            <a key={l.label} href={l.href} className="cta__btn">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
