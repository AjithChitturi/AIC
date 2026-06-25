import { startups } from '../data/content.js'
import Marquee from './Marquee.jsx'
import LogoTile from './LogoTile.jsx'

// Two rails scrolling in opposite directions for a lively, side-by-side effect.
const half = Math.ceil(startups.items.length / 2)
const rowA = startups.items.slice(0, half)
const rowB = startups.items.slice(half)

export default function Startups() {
  return (
    <section id="startups" className="section startups reveal">
      <div className="container">
        <span className="eyebrow eyebrow--center">Portfolio</span>
        <h2 className="section__title section__title--center">{startups.heading}</h2>
        <p className="section__intro section__intro--center">{startups.intro}</p>
      </div>
      <Marquee items={rowA} speed={42} renderItem={(s) => <LogoTile item={s} variant="startup" />} />
      <Marquee items={rowB} speed={42} reverse className="marquee--gap" renderItem={(s) => <LogoTile item={s} variant="startup" />} />
    </section>
  )
}
