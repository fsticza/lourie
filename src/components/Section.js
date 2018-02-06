import React from 'react'
import sprite from '../assets/img/svg/sprite.svg'

const Section = ({id, title, description, children}) => {
  return (
    <article id={id} className="section" style={{ backgroundImage: `url(${sprite}#logo-l)` }}>
      <div className="container">
        {children}
      </div>
    </article>
  )
}

export default Section
