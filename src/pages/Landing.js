import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import IntroContent from '../components/IntroContent'
import Projects from '../components/Projects'
import Education from '../components/Education'
import IntroTitle from '../components/IntroTitle'

const Landing = () => {
  return (
    <>
      <Header />
      <IntroContent />
      <IntroTitle />
      <Projects />
      <Education />
      <Footer />
    </>
  )
}

export default Landing
