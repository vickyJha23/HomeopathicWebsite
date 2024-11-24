import React from 'react'

import imageCollection from '../assets/images/images'


const Welcome = () => {
  return (
    <div className='bg-white h-auto py-[5rem]'>
      <div className='w-[90vw] max-w-[1170px] h-full mx-auto'>
         {/* parent element  */}
        <div className='grid grid-rows-[auto,auto] lg:grid-cols-[1fr,auto] w-full h-full gap-8 transition-all duration-200 ease-linear'>
          {/* first element  */}
          <div>
            <div>
              <p className='text-[#87A843] font-Caveat text-[1.5rem] lg:text-[2rem] tracking-wide transition-all duration-200 ease-linear'>Welcome</p>
              <h1 className='text-[#3E474C] text-[26px] lg:text-4xl w-[80%] lg:w-[65%] font-semibold font-Roboto-slab transition-all duration-200 ease-linear'>
                A Place Of Healing, Peace, And Wellness.
              </h1>
            </div>
            <div className='mt-[2rem] grid grid-rows-[auto,auto] lg:grid-cols-2 lg:gap-8 transition-all duration-200 ease-linear'>
                <div>
                <p className='text-[#AAADAE] text-sm lg:text-[1rem] font-Mukta' style={{
                  overflowWrap: "break-word",
                  wordBreak: "normal"
                  
                }}>
                  Welcome to the Alternative Medical Centre. Our approach to patient care values the importance of the patient-practitioner relationship.
                </p>
                </div>  
                <div>
                <p className='text-[#AAADAE] text-sm lg:text-[1rem] font-Mukta transition-all duration-200 ease-linear' style={{
                  overflowWrap: "break-word",
                  wordBreak: "normal"
                }}>
                  Focuses on the whole person, is informed by evidence and integrates naturopathic healthcare and disciplines, lifestyle and nutritional advice.
                </p>
                  <p className='mt-[2rem] lg:mt-[5rem] tracking-wide transition-all duration-200 ease-linear'>
                  Dr.S.P.Baranwal
                  </p>  
                </div> 
            </div>
          </div>

          {/* {second element } */}
          <div>
            <img src={imageCollection.welcome} alt="()" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
