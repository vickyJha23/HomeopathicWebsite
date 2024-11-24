import React from 'react'
import imageCollection from '../assets/images/images'
const Logo = () => {
  return (
    <div>
       <img src={imageCollection.logoImg} alt="()" className='w-[120px] h-[120px] object-cover' />
    </div>
  )
}

export default Logo
