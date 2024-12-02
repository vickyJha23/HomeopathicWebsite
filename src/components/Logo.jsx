import React from 'react'
import imageCollection from '../assets/images/images'
const Logo = () => {
  return (
    <div className='mt-6 w-[180px] h-[100px] bg-white relative rounded-md shadow-m mb-3 lg:mb-0'>
       <img src={imageCollection.leaf} alt="()" className='absolute w-[100px] h-[100px] -top-[20px] left-4 z-20' />
       <div className='w-[60px] h-[60px] rounded-full bg-[#F0D1A7] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

       </div>
        <h3 className='absolute top-[55px] left-10 font-Mukta text-lg tracking-wider'>ANCURE</h3>
       <p className='absolute top-[76px] left-4 text-xs font-Mukta uppercase text-nowrap'>The art of healing Science</p>
    </div>
  )
}

export default Logo
