import Logo from './Logo.jsx'
import { footer } from '../data/content.js'

const MailIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
  </svg>
)
const PhoneIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
)
const PinIcon = (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__accent" aria-hidden="true" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo image src="/aic-logo-footer.png" />
          <p className="footer__tagline">
            Atal Incubation Centre, established by Mahindra University — supported by Atal Innovation
            Mission, NITI Aayog, Government of India.
          </p>
        </div>

        <div className="footer__contact">
          <h5 className="footer__heading">Get in touch</h5>
          <a className="footer__row" href={`mailto:${footer.email}`}>
            <span className="footer__icon">{MailIcon}</span>
            <span>{footer.email}</span>
          </a>
          <a className="footer__row" href={`tel:${footer.phone.replace(/\s/g, '')}`}>
            <span className="footer__icon">{PhoneIcon}</span>
            <span>{footer.phone}</span>
          </a>
          <div className="footer__row footer__row--addr">
            <span className="footer__icon">{PinIcon}</span>
            <span>{footer.address}</span>
          </div>
        </div>
      </div>

      <div className="footer__bar">
        <div className="container">{footer.copyright}</div>
      </div>
    </footer>
  )
}
