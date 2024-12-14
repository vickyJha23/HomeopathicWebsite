import React from 'react'

import Button from './Button';

const Banner = ({title1, description}) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full grid !place-items-center lg:mt-[4rem]'>
         <div className='flex flex-col items-center transition-all duration-200 ease-linear  lg:space-y-8'>
            <h1 className='flex justify-center transition-all duration-200 ease-linear gap-2 lg:gap-4 tracking-wider text-3xl md:text-4xl lg:text-[5rem]'>
            <span className="text-white">{title1}</span>
            {/* <span className="font-bold text-white">{title2}</span> */}
           </h1>
         <p className='block text-xs lg:text-[16px] !text-center mt-1 text-[#91B058]'>{description}</p>
         <div className='flex justify-center mt-[1.5rem] md:mt-[2rem] lg:mt-[3rem] transition-all duration-200 ease-linear'>
             <Button buttonText={"Read More"} parent = {"Banner"} />
         </div>
         </div>
    </div>
  )
}

export default Banner
