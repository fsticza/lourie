import React from 'react'

import NavigationLink from './NavigationLink'
import sprite from '../assets/img/svg/sprite.svg'

const colors = ['#fff', '#666', '#fff', '#333', '#fff', '#333']

const Navigation = ({activeIdx, handleNavClick}) => {
  return (
    <div style={{ color : colors[activeIdx - 1]}}>
      <svg className="logo" alt="Lourie Tech logo">
        <use xlinkHref={`${sprite}#logo`}></use>
      </svg>
      <nav className="navigation">
        {
          Array.from(new Array(6),(val,index)=>index+1).map(idx => {
            return <NavigationLink
              idx={idx}
              key={idx}
              activeIdx={activeIdx}
              handleNavClick={handleNavClick} />
          })
        }
      </nav>
    </div>
  )
}

export default Navigation
