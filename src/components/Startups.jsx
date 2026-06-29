import { startups } from '../data/content.js'
import Marquee from './Marquee.jsx'
import LogoTile from './LogoTile.jsx'

export default function Startups() {
  return (
    <section id="startups" className="section startups reveal">
      <div className="container">
        <h2 className="section__title section__title--center">{startups.heading}</h2>
        <p className="section__intro section__intro--center">{startups.intro}</p>
      </div>
      <Marquee items={startups.items} speed={26} renderItem={(s) => <LogoTile item={s} variant="startup" />} />
    </section>
  )
}
