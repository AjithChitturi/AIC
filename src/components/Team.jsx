import { coreTeam, mentors } from '../data/team.js'
import PersonCard from './PersonCard.jsx'

export default function Team() {
  return (
    <section id="team" className="section team reveal">
      <div className="container">
        <span className="eyebrow eyebrow--center">People</span>
        <h2 className="section__title section__title--center">AIC Mahindra core team</h2>
        <div className="team__grid team__grid--core">
          {coreTeam.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>

        <h2 className="section__title section__title--center mt">Mentors and Experts</h2>
        <p className="section__intro section__intro--center">
          AIC Mahindra works with a growing network of mentors, investors, industry experts, academic
          experts, entrepreneurs and ecosystem partners. These connections help startups access
          guidance, opportunities and relevant support at different stages of their journey.
        </p>
        <div className="team__grid">
          {mentors.map((p) => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
