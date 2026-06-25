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
        <img
          src={person.img}
          alt={person.name}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </div>
    )
  }
  return <div className="person__avatar person__avatar--initials">{initials(person.name)}</div>
}

export default function PersonCard({ person }) {
  const inner = (
    <>
      <Avatar person={person} />
      <div className="person__body">
        <h4 className="person__name">{person.name}</h4>
        <p className="person__role">{person.role}</p>
        <span className="person__link">
          View Profile
          <span className="person__arrow" aria-hidden="true">
            {person.type === 'external' ? '↗' : '→'}
          </span>
        </span>
      </div>
    </>
  )

  if (person.type === 'profile') {
    return (
      <Link className="person" to={`/profile/${person.slug}`}>
        {inner}
      </Link>
    )
  }
  return (
    <a className="person" href={person.url} target="_blank" rel="noreferrer">
      {inner}
    </a>
  )
}
