import { collaborations } from '../data/content.js'
import Marquee from './Marquee.jsx'
import LogoTile from './LogoTile.jsx'

export default function Collaborations() {
  return (
    <section id="collaborations" className="section collab reveal">
      <div className="container">
        <h2 className="section__title section__title--center">{collaborations.heading}</h2>
        <p className="section__intro section__intro--center">{collaborations.intro}</p>
      </div>
      <Marquee
        items={collaborations.partners}
        speed={38}
        renderItem={(p) => <LogoTile item={p} variant="collab" />}
      />
    </section>
  )
}
