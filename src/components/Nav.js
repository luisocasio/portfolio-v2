import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='#'>FULL STACK WEB DEVELOPER</Link>
      </div>

      <div className='links'>
        <Link to='#'>SKILLS</Link>
        <Link to='#'>PROJECTS</Link>
        <Link to='#'>CONTACT</Link>
      </div>
    </div>
  )
}

export default Nav
