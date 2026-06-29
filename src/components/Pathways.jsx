import { useState } from 'react'
import { pathways } from '../data/content.js'

export default function Pathways() {
  const [active, setActive] = useState(0)
  return (
    <section id="pathways" className="section pathways reveal">
      <div className="container">
        <h2 className="section__title">{pathways.heading}</h2>
        <p className="section__intro">{pathways.intro}</p>

        <div className="tabs">
          <div className="tabs__head" role="tablist">
            {pathways.tabs.map((t, i) => (
              <button
                key={t.label}
                role="tab"
                aria-selected={active === i}
                className={`tabs__tab ${active === i ? 'is-active' : ''}`}
                onClick={() => setActive(i)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="tabs__body" role="tabpanel">
            <p>{pathways.tabs[active].body}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
