import Logo from './Logo.jsx'
import { footer } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo image src="/aic-logo-footer.png" />
          <p className="footer__address">{footer.address}</p>
          <p className="footer__contact">
            <a href={`tel:${footer.phone.replace(/\s|–/g, '')}`}>{footer.phone}</a>
            <br />
            <a href={`mailto:${footer.email}`}>{footer.email}</a>
          </p>
        </div>
        {footer.columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h5>{col.title}</h5>
            <ul>
              {col.links.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__bar">
        <div className="container">{footer.copyright}</div>
      </div>
    </footer>
  )
}
