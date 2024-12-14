import React from 'react'
import { Swiper, SwiperSlide} from 'swiper/react';
import {Pagination, EffectFade, Autoplay } from 'swiper/modules';
import imageCollection from '../assets/images/images';
import Banner from './Banner';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const Hero = () => {
  return (
    <div className='h-full'>
      <Swiper
    slidesPerView={1}
    allowTouchMove={false}
    effect={"fade"}
    modules={[Pagination, Autoplay, EffectFade]}
    pagination={{
        clickable: true,
        dynamicBullets: true,
    }}
    autoplay={{
        delay: 1000,
        disableOnInteraction: false, // Ensures autoplay resumes after interaction
    }}
    loop={true}
    className="h-full"
>
    <SwiperSlide>
        <div className="h-full w-full">
            <img
                src={imageCollection.hero}
                alt="Hero image showcasing alternative medicine"
                className="w-full h-full object-cover block"
            />
            <Banner
                title1="Ancure"
                description="The Art of Healing Science"
            />
        </div>
    </SwiperSlide>
    <SwiperSlide className="flex justify-center items-center">
        <div className="h-full w-full">
            <img
                src={imageCollection.hero1}
                alt="Another perspective of alternative medicine"
                className="w-full h-full object-cover block"
            />
            <Banner
                title1="Ancure"
                description="The Art of Healing Science"
            />
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="h-full w-full">
            <img
                src={imageCollection.hero2}
                alt="Illustration of herbal medicine"
                className="w-full h-full object-cover block"
            />
            <Banner
                title1="Ancure"
                description="The Art of Healing Science"
            />
        </div>
    </SwiperSlide>
</Swiper>
    </div>
  )
}

export default Hero
