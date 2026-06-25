import { useState } from 'react'

// A logo tile that shows the brand image, falling back to the name if the image fails.
export default function LogoTile({ item, variant = 'collab' }) {
  const [failed, setFailed] = useState(false)
  const cls = variant === 'startup' ? 'logo-tile logo-tile--startup' : 'logo-tile'
  return (
    <div className={cls}>
      {item.img && !failed ? (
        <img src={item.img} alt={item.name} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <span className="logo-tile__name">{item.name}</span>
      )}
    </div>
  )
}
