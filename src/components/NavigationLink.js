import React from 'react'

const NavigationLink = ({idx, activeIdx, handleNavClick}) => {
  if (idx === activeIdx) {
    return (
      <svg className="pulse-svg navigation-link" width="10px" height="10px" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <circle className="circle first-circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
        <circle className="circle second-circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
        <circle className="circle third-circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
        <circle className="circle" fill="currentColor" cx="5" cy="5" r="5"></circle>
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
