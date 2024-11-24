import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';

const Header = () => {
  return (
    <div className='overflow-hidden w-full h-[50vh] lg:h-screen'>
        <Navbar/>
        <Hero />
    </div>
  )
}

export default Header
