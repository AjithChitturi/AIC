import { journey } from '../data/content.js'

// Chevron-flow diagram matching the AIC Mahindra startup-journey chart.
const G = '#3fa980' // green stages / Pre-Incubation
const B = '#5c7fd1' // blue stages
const PINK = '#d83f77' // Incubation
const ORANGE = '#cf6a1f' // Eureka Evenings
const NAVY = '#1f3a8a' // Acceleration
const GO = '#2f8f6b'
const GREY = '#8a7f84'

const CW = 176, CD = 26, CH = 92, CY = 220
const xs = [24, 174, 324, 536, 686, 898] // gaps after Prototype (idx 2) and Market Entry (idx 4)
const STAGES = [
  { lines: ['Idea'], c: G },
  { lines: ['PoC /', 'Customer Discovery'], c: B },
  { lines: ['Prototype'], c: G },
  { lines: ['MVP'], c: B },
  { lines: ['Market Entry /', 'Early Revenue /', '1st Funding'], c: G },
  { lines: ['Scaling up'], c: B },
]
const chev = (x) =>
  `${x},${CY} ${x + CW - CD},${CY} ${x + CW},${CY + CH / 2} ${x + CW - CD},${CY + CH} ${x},${CY + CH} ${x + CD},${CY + CH / 2}`

const tip = (i) => xs[i] + CW
const g1 = (tip(2) + xs[3]) / 2
const g2 = (tip(4) + xs[5]) / 2
const MID = CY + CH / 2
const FONT = 'Manrope, sans-serif'

export default function Journey() {
  return (
    <section id="journey" className="section journey reveal">
      <div className="container">
        <h2 className="section__title section__title--center">{journey.heading}</h2>
        <p className="section__intro section__intro--center">{journey.intro}</p>

        <div className="journey__svg-wrap">
          <svg
            className="journey__svg"
            viewBox="0 0 1120 478"
            role="img"
            aria-label="AIC Mahindra startup journey from Idea to Scaling up across the Eureka Evenings, Pre-Incubation, Incubation and Acceleration phases, with GO / No-Go gates and Pivot and Iterate loops."
          >
            <defs>
              <marker id="jtri" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="context-stroke" />
              </marker>
              <linearGradient id="jgGreen" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#52bf97" /><stop offset="1" stopColor="#369d74" />
              </linearGradient>
              <linearGradient id="jgBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#7493dd" /><stop offset="1" stopColor="#5173c9" />
              </linearGradient>
              <filter id="jshadow" x="-12%" y="-25%" width="124%" height="160%">
                <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#3a1f25" floodOpacity="0.16" />
              </filter>
            </defs>

            {/* Phase spans */}
            <g fontFamily={FONT} fontWeight="700" fontSize="16" textAnchor="middle">
              {/* Eureka Evenings (orange) */}
              <line className="jspan" x1="16" y1="152" x2="162" y2="152" stroke={ORANGE} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x="80" y="122" fill={ORANGE} fontSize="15">Eureka</text>
              <text x="80" y="140" fill={ORANGE} fontSize="15">Evenings</text>
              {/* Pre-Incubation (green) */}
              <line className="jspan" x1="188" y1="120" x2="505" y2="120" stroke={G} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x="346" y="104" fill={G}>Pre-Incubation</text>
              {/* Incubation (pink) */}
              <line className="jspan" x1="440" y1="164" x2="884" y2="164" stroke={PINK} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x="662" y="148" fill={PINK}>Incubation</text>
              {/* Acceleration (navy) */}
              <line className="jspan" x1="900" y1="120" x2="1096" y2="120" stroke={NAVY} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x="998" y="104" fill={NAVY}>Acceleration</text>
            </g>

            {/* GO / No-Go gates */}
            <g fontFamily={FONT} textAnchor="middle">
              <line className="jspan" x1={tip(2) + 2} y1={MID} x2={xs[3] - 4} y2={MID} stroke={GO} strokeWidth="2.4" strokeDasharray="5 5" markerEnd="url(#jtri)" />
              <line className="jspan" x1={tip(4) + 2} y1={MID} x2={xs[5] - 4} y2={MID} stroke={GO} strokeWidth="2.4" strokeDasharray="5 5" markerEnd="url(#jtri)" />
              <text x={g1} y={CY - 12} fontWeight="800" fontSize="14" fill={GO}>GO</text>
              <text x={g2} y={CY - 12} fontWeight="800" fontSize="14" fill={GO}>GO</text>
              <text x={g1 + 30} y={CY + CH + 24} fontWeight="700" fontSize="11.5" fill="#9a8f93">No-Go</text>
              <text x={g2 + 30} y={CY + CH + 24} fontWeight="700" fontSize="11.5" fill="#9a8f93">No-Go</text>
            </g>

            {/* Stage chevrons */}
            <g fontFamily={FONT} fontWeight="700" fontSize="13.5" textAnchor="middle" fill="#fff">
              {STAGES.map((s, i) => (
                <g className="jstage" key={i} style={{ animationDelay: `${0.12 + i * 0.1}s` }}>
                  <polygon points={chev(xs[i])} fill={s.c === G ? 'url(#jgGreen)' : 'url(#jgBlue)'} filter="url(#jshadow)" />
                  <text y={MID + 5}>
                    {s.lines.map((ln, li) => (
                      <tspan key={li} x={xs[i] + CW / 2 + CD / 2} dy={li === 0 ? -(s.lines.length - 1) * 9 : 18}>
                        {ln}
                      </tspan>
                    ))}
                  </text>
                </g>
              ))}
            </g>

            {/* Feedback loops */}
            <g fontFamily={FONT} fontWeight="800" fontSize="12.5" letterSpacing="0.06em" textAnchor="middle">
              <path className="jloop" d={`M ${g1} ${CY + CH + 2} L ${g1} 360 Q ${g1} 374 ${g1 - 14} 374 L 366 374 Q 352 374 352 360 L 352 ${CY + CH + 4}`} fill="none" stroke={GREY} strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#jtri)" />
              <text x={(g1 + 352) / 2} y="394" fill="#6b6065">PIVOT</text>
              <path className="jloop" d={`M ${g2} ${CY + CH + 2} L ${g2} 412 Q ${g2} 426 ${g2 - 14} 426 L 572 426 Q 558 426 558 412 L 558 ${CY + CH + 4}`} fill="none" stroke={GREY} strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#jtri)" />
              <text x={(g2 + 558) / 2} y="446" fill="#6b6065">ITERATE</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
