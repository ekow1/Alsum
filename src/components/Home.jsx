import React from 'react'
import Hero from "./sections/Hero"
import '../App.css'
import Services from "./sections/Services"
import About from "./sections/About"
import Testimonial from "./sections/Testimonial"
import Actioncall from "./sections/Actioncall"

const Home = () => {
  return (
      <>
      
      <Hero />
      <About />
      <Services />
      <Testimonial/>
      <Actioncall />
      
      </>
  )
}

export default Home