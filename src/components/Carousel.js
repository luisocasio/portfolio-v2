import React from 'react'

const Carousel = () => {
  return (
    <div className='carousel_container'>
      <div className='carousel'>
        <h1>Title of Project</h1>
      </div>
      <div className='details'>
        <div className='project_details'>
          <h3>About this Project</h3>
          <p>8 week long project</p>
        </div>
        <div className='stack_details'>
          <h3>Tech Stack</h3>
          <p>React</p>
          <p>Javascript</p>
        </div>
      </div>
    </div>
  )
}

export default Carousel
