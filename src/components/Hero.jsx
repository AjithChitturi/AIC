import { hero } from '../data/content.js'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Art: drop your files in /public as hero-desktop.jpg and hero-mobile.jpg.
          Different art is served per breakpoint; a crimson gradient shows until then. */}
      <picture className="hero__art">
        <source media="(min-width: 768px)" srcSet="/hero-desktop.jpg" />
        <img src="/hero-mobile.jpg" alt="" aria-hidden="true" onError={(e) => { e.currentTarget.style.display = 'none' }} />
      </picture>
      <div className="hero__scrim" />

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

      <a href="#about" className="hero__scroll" aria-label="Scroll to content">
        <span />
      </a>
    </section>
  )
}
