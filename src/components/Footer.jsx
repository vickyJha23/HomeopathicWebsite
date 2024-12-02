import React from 'react'
import Logo from './Logo';

// static data import
import imageCollection from '../assets/images/images';


const Footer = () => {
  return (
    <div id='contacts' className='h-auto bg-[#14252F] py-[5rem]'>
        <div className="w-[90vw] max-w-[1170px] mx-auto h-full">
        <div className="border-dashed border-b-[2px] border-[#6D7278] pb-[5rem]">
            <div className='grid lg:!grid-cols-[auto,auto]'>
                 <div>
                     <Logo />
                     <p className='font-Mukta text-[#6D7278] text-[0.95rem] w-[60%] mt-[1.5rem]'>
                     Our Doctors collaborate with our Naturopath to deliver the best of natural and conventional medicine, lifestyle, and nutritional advice.
                     </p>
                 </div>
                 <div className=''>
                     <h1 className='text-left mt-[4rem] text-white text-3xl font-Roboto-slab mb-4'>
                         Connect with Us
                     </h1>
                     <div className='grid gap-4 lg:grid-cols-2'>
                         <div className='flex flex-col gap-2'>
                             <p className='text-[#A25F51] font-semibold'>Dr Nandini R.Baranwal(Gupta)</p>
                             <p className='text-xs text-[#6D7278]'>General Physician, (Reg.No 199084)</p>
                             <p className='text-xs text-[#6D7278]' >Mob: +91 95985-85796</p>   
                         </div>
                         <div className='flex flex-col gap-2'>
                             <p className='text-[#A25F51] font-semibold'>Dr.S.P.Baranwal (BHMS)</p>
                             <p className='text-xs text-[#6D7278]'>Senior Consultant | Retired Medical Officer UP Govt </p>
                             <p className='text-xs text-[#6D7278]'>Mob: +91 99846-46466</p>   
                         </div>
                     </div>
                 </div>
              </div>
            </div>  
        <p className='font-Mukta text-white mt-[1.5rem]'><span className='hover:text-[#87A843] capitalize transition-all duration-200 ease-linear'>Uma homeopathic clinic</span> <span className='text-[#6D7278]'> &copy; {new Date().getFullYear()}. All rights Reserved.</span></p>
        </div> 
    </div>
  )
}

export default Footer
