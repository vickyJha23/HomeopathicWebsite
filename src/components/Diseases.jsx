import React from 'react'
import Button from './Button'


// static data import 
import { diseases } from '../assets/staticData'

const Diseases = () => {
    return (
        <div className='h-auto py-[5rem]'>
            <div className='w-[90vw] mx-w-[1170px] mx-auto h-full'>
                <div className='grid grid-row-2 lg:grid-cols-2 gap-4 place-items-center transition-all duration-200 ease-linear'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center w-[80%] mx-auto space-y-4 transition-all duration-200 ease-linear'>
                        {
                            diseases.map((disease, index) => {
                                console.log(disease.Icon);
                                return <div key={index} className='flex flex-col justify-center items-center gap-4 group cursor-pointer'>
                                      <div className='w-[100px] aspect-square flex justify-center items-center rounded-[50%] border-dashed border-[2px] border-[#ccc] group-hover:bg-white group-hover:border-none text-[#8E9192] transition-all duration-200 ease-linear'>
                                          {/* <Icon className='text-2xl group-hover:text-[#87A843] transition-all duration-200 ease-linear' /> */}
                                         <img src={disease.Icon} alt="" className='w-12 h-12' />
                                      </div>
                                      <h5 className='text-[#8E9192] text-sm lg:text-[1rem]'>{disease.name}</h5>  
                                 </div>   
                                 })
                        }
                    </div>
                    <div className='mt-[3rem] px-3 lg:px-0 lg:mt-0 transition-all duration-200 ease-linear'>
                        <p className='font-Caveat text-2xl text-[#87A843]'>Diseases</p>
                        <h1 className='font-Roboto-slab text-[28px] md:text-[26px] lg:text-[2.899rem] font-semibold lg:w-[80%] transition-all duration-200 ease-linear'>
                            Diseases That Can Be Treated
                        </h1>
                        <p className='lg:w-[80%] my-[2rem] text-sm lg:text-[1rem] text-[#8E9192] font-Roboto-slab transition-all duration-200 ease-linear'>Diseases that can be treated with Holistic medicine or so-called alternative medicine belong to practically all aspects of medicine including cardiology, surgery, ENT, OB-GYN, Pulmonology, Cardiology, etc.</p>
                        <Button parent={"Diseases"} buttonText={"More Solutions"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diseases
