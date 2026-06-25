import { journey } from '../data/content.js'

export default function Journey() {
  return (
    <section id="journey" className="section journey reveal">
      <div className="container">
        <span className="eyebrow eyebrow--center">Stage-wise model</span>
        <h2 className="section__title section__title--center">{journey.heading}</h2>
        <p className="section__intro section__intro--center">{journey.intro}</p>
        <div className="journey__flow">
          {journey.stages.map((s, i) => (
            <div className="journey__stage" key={s.label}>
              <span className="journey__icon">{s.icon}</span>
              <div className={`journey__chip journey__chip--${i % 2 === 0 ? 'red' : 'gold'}`}>
                {s.label}
                {i < journey.stages.length - 1 && <span className="journey__arrow" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
