import React from 'react'
import sprite from '../assets/img/svg/sprite.svg'
import Navigation from './Navigation'

const Section = ({idx, handleNavClick, children}) => {
  return (
    <article id={`section-${idx + 1}`} className="section d-flex">
      <div className="container">
        <svg className="bg" alt="Lourie Tech logo">
          <use xlinkHref={`${sprite}#logo-l`}></use>
        </svg>
        {children}
      </div>
      <Navigation
        activeIdx={idx + 1}
        handleNavClick={handleNavClick} >
      </Navigation>
    </article>
  )
}

export default Section
