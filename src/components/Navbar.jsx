import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import { nav } from '../data/content.js'

const APPLY_URL = 'https://forms.gle/ApwtXiHUkp4EBGg29'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // On profile pages, anchor links point back to the home page sections.
  const hrefFor = (h) => (pathname === '/' ? h : `/${h}`)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)} aria-label="AIC Mahindra home">
          <Logo image />
        </Link>

        <div className="navbar__right">
          <nav className={`navbar__menu ${open ? 'is-open' : ''}`}>
            {nav.map((item) => (
              <a key={item.label} href={hrefFor(item.href)} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="navbar__apply" href={APPLY_URL} target="_blank" rel="noreferrer">
            Apply
          </a>

          <button
            className={`navbar__toggle ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
