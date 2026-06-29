import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Desktop: the finished banner (logo, title and tagline are baked into the art). */}
      <img
        className="hero__banner"
        src="/hero-banner.jpg"
        alt="AIC Mahindra — Atal Incubation Centre, established by Mahindra University, supported by Atal Innovation Mission, NITI Aayog, Government of India."
      />

      {/* Mobile: styled text hero over the crimson gradient. */}
      <div className="hero__mobile">
        <div className="hero__inner">
          <span className="hero__eyebrow">Atal Incubation Centre · Mahindra University</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__tagline">{hero.tagline}</p>
          <div className="hero__support">
            <span className="hero__support-mark" aria-hidden="true" />
            <span>Supported by Atal Innovation Mission, NITI Aayog, Govt. of India</span>
          </div>
          <div className="hero__actions">
            <a href="#pathways" className="btn btn--light">Explore pathways</a>
            <a href="#team" className="btn btn--ghost">Meet the team</a>
          </div>
        </div>
      </div>
    </section>
  )
}
