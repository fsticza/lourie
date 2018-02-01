import React from 'react'
import logo from '../assets/img/logo.svg'

const Page = ({id, title, description, children}) => {
  return (
    <article id={id} className="page">
      <div className="container">
        <img className="logo" src={logo} alt="Lourie Tech logo" />
        <h1 className="page-title">{title}</h1>
        <p className="page-description">
          {description}
        </p>
        {children}
      </div>
    </article>
  )
}

export default Page
