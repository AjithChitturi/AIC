import { about } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section about reveal">
      <div className="container about__grid">
        <div className="about__lead">
          <h2 className="section__title">{about.heading}</h2>
        </div>
        <div className="about__content">
          <div className="about__body">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="stats">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__value">{s.value}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
