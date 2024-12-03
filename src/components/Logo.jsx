import React from 'react'
import imageCollection from '../assets/images/images'
const Logo = () => {
  return (
    <div className='mt-6 w-[140px] h-[65px] lg:w-[180px] lg:h-[100px] bg-white relative rounded-md shadow-m mb-3 lg:mb-0'>
       <img src={imageCollection.leaf} alt="()" className='absolute w-[50px] h-[50px] -top-[8px] left-8 lg:w-[100px] lg:h-[100px] lg:-top-[20px] lg:left-4 z-20' />
       <div className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#F0D1A7] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

       </div>
        <h3 className='absolute top-[28px] left-6 lg:top-[55px] lg:left-10 font-Mukta lg:text-lg lg:tracking-wider'>ANCURE</h3>
       <p className='absolute top-[45px] left-2 text-[10px] lg:top-[76px] lg:left-4 lg:text-xs font-Mukta uppercase text-nowrap'>The art of healing Science</p>
    </div>
  )
}

export default Logo
