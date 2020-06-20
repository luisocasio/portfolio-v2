import React from 'react'
import Carousel from './Carousel'
import back from '../images/luluport_SVG/back.svg'
import next from '../images/luluport_SVG/next.svg'

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='back'>
        <img src={back} alt='back arrow' />
      </div>

      <div className='carousel_wrapper'>
        <Carousel />
      </div>

      <div className='next'>
        <img src={next} alt='forward arrow' />
      </div>
    </div>
  )
}

export default Projects
