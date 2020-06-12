import React from 'react'
import me from '../assets/myself.jpg'

const IntroContent = () => {
  return (
    <div className='intro-content'>
      <div className='profileContainer-pic'>
        <img className='profile-pic' src={me} alt='profile pic' />
      </div>

      <div className='intro'>
        <div className='name'>
          <p>Luis Ocasio-Perez</p>
          <p className='location'> Location: Pennsylvania</p>
        </div>
        <div className='job-title'>
          <p>Full stack web developer</p>
        </div>
      </div>
    </div>
  )
}

export default IntroContent
