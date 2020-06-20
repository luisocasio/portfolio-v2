import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroContent from '../components/IntroContent'
import Projects from '../components/Projects'
import About from '../components/About'
import IntroTitle from '../components/IntroTitle'

const Landing = () => {
  return (
    <div>
      <Header />
      <IntroContent />
      <IntroTitle />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}

export default Landing
