import React from 'react'

const NavigationLink = ({idx, activeIdx, handleNavClick}) => {
  if (idx === activeIdx) {
    return (
      <svg class="pulse-svg navigation-link" width="10px" height="10px" viewBox="0 0 10 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <circle class="circle first-circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
        <circle class="circle second-circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
        <circle class="circle third-circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
        <circle class="circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
      </svg>
    )
  }
  return (
    <a className="navigation-link" href={`#section-${idx}`}
      onClick={(ev) => handleNavClick(ev, idx)}><span className="sr-only">#{idx}</span>
    </a>
  )
}

export default NavigationLink
