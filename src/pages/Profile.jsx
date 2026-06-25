import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { profiles } from '../data/profiles.js'

function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0]).join('').toUpperCase()
}

export default function Profile() {
  const { slug } = useParams()
  const person = profiles[slug]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!person) {
    return (
      <main className="profile">
        <div className="container">
          <h1>Profile not found</h1>
          <Link to="/#team" className="profile__back">← Back to team</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="profile">
      <div className="profile__head">
        <div className="container">
          <nav className="profile__breadcrumb">
            <Link to="/">Home</Link> <span className="sep">/</span>{' '}
            <Link to="/#team">Faculties</Link> <span className="sep">/</span>{' '}
            <strong>{person.name}</strong>
          </nav>
        </div>
      </div>

      <div className="container profile__grid">
        <aside className="profile__side">
          <div className="profile__photo">
            {person.img ? (
              <img src={person.img} alt={person.name} />
            ) : (
              <span className="profile__photo-initials">{initials(person.name)}</span>
            )}
          </div>
          {person.quickFacts && (
            <div className="profile__facts">
              <h3>Quick facts</h3>
              <p>{person.quickFacts}</p>
            </div>
          )}
        </aside>

        <div className="profile__main">
          <h1 className="profile__name">{person.name}</h1>
          <p className="profile__role">{person.role}</p>
          {person.email && (
            <p className="profile__email">
              <span className="profile__email-icon">✉</span>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </p>
          )}

          {person.biography && (
            <section className="profile__section">
              <h2>Biography</h2>
              <p>{person.biography}</p>
            </section>
          )}

          {person.qualifications && person.qualifications.length > 0 && (
            <section className="profile__section">
              <h2>Qualifications</h2>
              <ul className="profile__quals">
                {person.qualifications.map((q) => (
                  <li key={q}>{q}</li>
                ))}
              </ul>
            </section>
          )}

          {person.experience && person.experience.length > 0 && (
            <section className="profile__section">
              <h2>Experience</h2>
              {person.experience.map((e, i) => (
                <p key={i}>{e}</p>
              ))}
            </section>
          )}

          {person.research && person.research.length > 0 && (
            <section className="profile__section">
              <h2>Research interests</h2>
              <ul className="profile__quals">
                {person.research.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </section>
          )}

          {person.publications && person.publications.length > 0 && (
            <section className="profile__section">
              <h2>Publications</h2>
              <ul className="profile__quals">
                {person.publications.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </section>
          )}

          <Link to="/#team" className="profile__back">← Back to AIC team</Link>
        </div>
      </div>
    </main>
  )
}
