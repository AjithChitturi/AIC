import { journey } from '../data/content.js'

// Chevron-flow diagram modelled on the AIC Mahindra startup-journey chart.
const G = '#3fa980'
const B = '#5c7fd1'
const P = '#d83f77'
const GO = '#2f8f6b'
const GREY = '#8a7f84'

const CW = 176, CD = 26, CH = 92, CY = 214
const xs = [24, 174, 324, 536, 686, 898] // gaps after Customer Discovery (idx 2) and Market Entry (idx 4)
const STAGES = [
  { lines: ['Idea'], c: G },
  { lines: ['Prototype / PoC'], c: B },
  { lines: ['Customer', 'Discovery'], c: G },
  { lines: ['MVP'], c: B },
  { lines: ['Market Entry /', 'Early Revenue /', '1st Funding'], c: G },
  { lines: ['Scaling up'], c: B },
]
const chev = (x) =>
  `${x},${CY} ${x + CW - CD},${CY} ${x + CW},${CY + CH / 2} ${x + CW - CD},${CY + CH} ${x},${CY + CH} ${x + CD},${CY + CH / 2}`

const tip = (i) => xs[i] + CW
const g1 = (tip(2) + xs[3]) / 2 // GO gate 1 (gap centre)
const g2 = (tip(4) + xs[5]) / 2 // GO gate 2 (gap centre)
const MID = CY + CH / 2
const FONT = 'Manrope, sans-serif'

// Faint band behind each phase group: [x, width, color]
const BANDS = [
  [14, tip(2) - 14 + 14, G],
  [xs[3] - 12, tip(4) - xs[3] + 24, P],
  [xs[5] - 12, CW + 24, B],
]

export default function Journey() {
  return (
    <section id="journey" className="section journey reveal">
      <div className="container">
        <h2 className="section__title section__title--center">{journey.heading}</h2>
        <p className="section__intro section__intro--center">{journey.intro}</p>

        <div className="journey__svg-wrap">
          <svg
            className="journey__svg"
            viewBox="0 0 1100 462"
            role="img"
            aria-label="AIC Mahindra startup journey from Idea to Scaling up across the Pre-Incubation, Incubation and Scaling-up phases, separated by GO / No-Go decision gates, with Pivot and Iterate feedback loops."
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

            {/* Phase group bands */}
            {BANDS.map(([x, w, c], i) => (
              <rect key={i} x={x} y={194} width={w} height={132} rx="18" fill={c} opacity="0.07" />
            ))}

            {/* Phase span labels + dashed double-arrows */}
            <g fontFamily={FONT} fontWeight="700" fontSize="16" textAnchor="middle">
              <line className="jspan" x1="32" y1="132" x2={tip(2) - 4} y2="132" stroke={G} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x={(32 + tip(2)) / 2} y="116" fill={G}>Pre-Incubation</text>
              <line className="jspan" x1={xs[3] + 4} y1="132" x2={tip(4) - 4} y2="132" stroke={P} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x={(xs[3] + tip(4)) / 2} y="116" fill={P}>Incubation</text>
              <line className="jspan" x1={xs[5] + 4} y1="132" x2={tip(5)} y2="132" stroke={B} strokeWidth="2.4" strokeDasharray="7 7" markerStart="url(#jtri)" markerEnd="url(#jtri)" />
              <text x={(xs[5] + tip(5)) / 2} y="116" fill={B}>Scaling up</text>
            </g>

            {/* GO arrows bridging the gaps + No-Go */}
            <g fontFamily={FONT} textAnchor="middle">
              <line className="jspan" x1={tip(2) + 2} y1={MID} x2={xs[3] - 4} y2={MID} stroke={GO} strokeWidth="2.4" strokeDasharray="5 5" markerEnd="url(#jtri)" />
              <line className="jspan" x1={tip(4) + 2} y1={MID} x2={xs[5] - 4} y2={MID} stroke={GO} strokeWidth="2.4" strokeDasharray="5 5" markerEnd="url(#jtri)" />
              <text x={g1} y={CY - 12} fontWeight="800" fontSize="14" fill={GO}>GO</text>
              <text x={g2} y={CY - 12} fontWeight="800" fontSize="14" fill={GO}>GO</text>
              <text x={g1} y={CY + CH + 22} fontWeight="700" fontSize="11.5" fill="#9a8f93">No-Go</text>
              <text x={g2} y={CY + CH + 22} fontWeight="700" fontSize="11.5" fill="#9a8f93">No-Go</text>
            </g>

            {/* Stage chevrons */}
            <g fontFamily={FONT} fontWeight="700" fontSize="15.5" textAnchor="middle" fill="#fff">
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
              <path className="jloop" d={`M ${g1} ${CY + CH + 2} L ${g1} 356 Q ${g1} 370 ${g1 - 14} 370 L 366 370 Q 352 370 352 356 L 352 ${CY + CH + 4}`} fill="none" stroke={GREY} strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#jtri)" />
              <text x={(g1 + 352) / 2} y="390" fill="#6b6065">PIVOT</text>
              <path className="jloop" d={`M ${g2} ${CY + CH + 2} L ${g2} 402 Q ${g2} 416 ${g2 - 14} 416 L 552 416 Q 538 416 538 402 L 538 ${CY + CH + 4}`} fill="none" stroke={GREY} strokeWidth="2" strokeDasharray="6 6" markerEnd="url(#jtri)" />
              <text x={(g2 + 538) / 2} y="436" fill="#6b6065">ITERATE</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
