import React from 'react'
import Navbar from './Navbar'
import './style.css'
import Container from './Container'
import Section from './Section'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Container/>
        <Section/>
        <Testimonials/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home