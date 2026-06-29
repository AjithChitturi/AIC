import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Pathways from '../components/Pathways.jsx'
import Offerings from '../components/Offerings.jsx'
import Journey from '../components/Journey.jsx'
import Infrastructure from '../components/Infrastructure.jsx'
import Startups from '../components/Startups.jsx'
import Collaborations from '../components/Collaborations.jsx'
import Team from '../components/Team.jsx'

export default function Home() {
  const { hash } = useLocation()
  useReveal()

  // Support deep links / returning from a profile page to a section anchor.
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollTo(0, 0)
    }
  }, [hash])

  return (
    <main>
      <Hero />
      <About />
      <Pathways />
      <Offerings />
      <Journey />
      <Infrastructure />
      <Startups />
      <Collaborations />
      <Team />
    </main>
  )
}
