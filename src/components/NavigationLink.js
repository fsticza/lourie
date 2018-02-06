import React from 'react'

const NavigationLink = ({idx, activeIdx, handleNavClick}) => {
  return (
    <a className={`navigation-link ${idx === activeIdx ? 'is-active' : ''}`} href={`#section-${idx}`}
      onClick={(ev) => handleNavClick(ev, idx)}><span className="sr-only">#{idx}</span>
    </a>
  )
}

export default NavigationLink
