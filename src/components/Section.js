import React from 'react'
import sprite from '../assets/img/svg/sprite.svg'

const Section = ({id, title, description, children}) => {
  return (
    <article id={id} className="section d-flex align-items-center">
      <div className="container">
        <svg className="bg" alt="Lourie Tech logo">
          <use xlinkHref={`${sprite}#logo-l`}></use>
        </svg>
        {children}
      </div>
    </article>
  )
}

export default Section
