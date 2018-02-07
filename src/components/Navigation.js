import React from 'react'

import NavigationLink from './NavigationLink'
import sprite from '../assets/img/svg/sprite.svg'

const colors = ['#fff', '#666', '#fff', '#333', '#fff', '#333']

const Navigation = ({activeIdx, handleNavClick}) => {
  return (
    <div className="d-none d-md-block" style={{ color : colors[activeIdx - 1]}}>
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
      <svg className={`scroll ${activeIdx === 6 ? 'd-none' : ''}`} onClick={(ev) => handleNavClick(ev, activeIdx + 1)}>
        <use xlinkHref={`${sprite}#scroll`}></use>
      </svg>
    </div>
  )
}

export default Navigation
