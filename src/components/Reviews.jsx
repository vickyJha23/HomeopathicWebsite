import React from 'react'
import { CiRainbow } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

// static data import 
import { patients } from '../assets/staticData';



const Reviews = () => {
    return (
        <div className='h-auto bg-[#87A843]'>
            <div className='w-[75%] lg:w-[90vw] max-w-[1170px] mx-auto py-[5rem]'>
                <div className='text-center'>
                    <p className='font-Caveat text-white text-xl lg:text-2xl transition-all duration-200 ease-linear'>100% Positive Reviews</p>
                    <h1 className='text-white text-[26px] md:text-[28px] lg:text-5xl font-Roboto-slab tracking-wide font-semibold mt-[1rem] transition-all duration-200 ease-linear'>
                        Thousands of Happy Patients
                    </h1>
                </div>
                <div className='mt-[2rem]'>
                    <Swiper
                        spaceBetween={25}
                        slidesPerView={3}
                        allowTouchMove={false}
                        modules={[Pagination, Autoplay, EffectCards]}
                        pagination={
                            {
                                clickable: true,
                                dynamicBullets: true,
                            }
                        }
                        autoplay={{
                            delay: 1000,
                        }}
                        loop={true}
                        breakpoints={{
                            "0": {
                                slidesPerView: 1,
                            },

                            "640": {
                                "slidesPerView": 2,
                            },
                            "1024": {
                                "slidesPerView": 3,
                            }
                        }}
                       className='!w-full !h-full !py-[3rem]'     

                    >
                         {patients.map((patient, index) => (
                            <SwiperSlide key={index} className='w-[270px] h-[270px] md:w-[440px] md:aspect-square lg:aspect-square bg-white shadow rounded transition-all duration-200 ease-linear'>
                                <div data-id={index} className='w-full h-full text-center relative'>
                                    <div className='h-1/2 -mt-[1.45rem]'>
                                       <div className='w-full mb-[1.8rem]'>
                                           <img src={patient.image} alt="patient" className={`mx-auto shadow w-[83px] aspect-square md:w-[95px] lg:w-[120px] lg:h-[120px] object-cover rounded-[50%] align-middle`} />
                                       </div>
                                       <h1 className='text-center text-[1rem]  md:text-[1.2rem] lg:text-2xl text-[#3C484D] font-Roboto-slab'>{patient.name}</h1>
                                     </div>
                                    <div className='h-1/2 pt-0 pr-8 pl-8 pb-[3.15rem]'>
                                         <CiRainbow className='text-center text-3xl  lg:text-6xl text-blue-400 font-semibold mx-auto mt-[0.8rem] mb-[1rem]' />
                                         <p className='text-center text-[#878A8C] font-Mukta w-[80%] mx-auto lg:text-[1.1rem]'>"{patient.review}"</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                         ))}
                    
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Reviews
