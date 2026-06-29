import { useState } from 'react'
import { Link } from 'react-router-dom'

function initials(name) {
  return name
    .replace(/[^A-Za-z .]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function Avatar({ person }) {
  const [failed, setFailed] = useState(false)
  if (person.img && !failed) {
    return (
      <div className="person__avatar">
        <img src={person.img} alt={person.name} loading="lazy" onError={() => setFailed(true)} />
      </div>
    )
  }
  return <div className="person__avatar person__avatar--initials">{initials(person.name)}</div>
}

// `minimal` (mentors): image + View Profile only. Otherwise (core team): name, role, bio too.
export default function PersonCard({ person, minimal }) {
  const inner = (
    <>
      <Avatar person={person} />
      <div className="person__body">
        <h4 className="person__name">{person.name}</h4>
        {!minimal && <p className="person__role">{person.role}</p>}
        {!minimal && person.bio && <p className="person__bio">{person.bio}</p>}
        <span className="person__link">
          View Profile
          <span className="person__arrow" aria-hidden="true">
            {person.type === 'external' ? '↗' : '→'}
          </span>
        </span>
      </div>
    </>
  )

  const cls = `person${minimal ? ' person--minimal' : ''}`

  if (person.type === 'profile') {
    return (
      <Link className={cls} to={`/profile/${person.slug}`} aria-label={person.name}>
        {inner}
      </Link>
    )
  }
  return (
    <a className={cls} href={person.url} target="_blank" rel="noreferrer" aria-label={`${person.name} — LinkedIn profile`}>
      {inner}
    </a>
  )
}
