import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <Link to='#'>Logo</Link>
      </div>

      <div className='links'>
        <Link to='#'>Skills</Link>
        <Link to='#'>projects</Link>
        <Link to='#'>contact</Link>
      </div>
    </div>
  )
}

export default Nav
