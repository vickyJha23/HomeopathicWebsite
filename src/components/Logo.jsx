import React from 'react'
import imageCollection from '../assets/images/images'
const Logo = () => {
  return (
    <div className='mt-6 rounded-md shadow-m mb-8 lg:mb-0'>
       <img src={imageCollection.logo} alt="()" className='w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] object-cover' />
    </div>
  )
}

export default Logo
