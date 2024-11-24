import React from 'react'

// component import 
import Header from '../components/Header'
import Services from '../components/Services'
import Welcome from '../components/Welcome'
import About from '../components/About'
import Reviews from '../components/Reviews'
import Diseases from '../components/Diseases'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div>
         <Header />
         <Services />
         <Welcome />
         <About />
         <Reviews />
         <Diseases />
         <Footer />
    </div>
  )
}

export default Home