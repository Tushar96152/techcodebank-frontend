import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Tc from '../assets/tc.jpeg'
import TcbPAge from '../assets/tcbpage.jpg'
import Bank from '../assets/bank.jpg'
import Man from '../assets/man.jpg'
import Slide1 from '../assets/slide1.jpeg'
import Slide2 from '../assets/slide2.jpg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';



const Slides = () => {
  return (
      <>
    <div className='w-100% h-120'>
        <Swiper 
        modules={[Pagination , Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={ {delay: 1500 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
     
      >
      <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-120' src={TcbPAge} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-120' src={Man} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-120' src={Slide1} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center'>
         <img className='w-500 h-120' src={Slide2} alt="" /> 
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className='flex justify-center w-95%'>
         <img className='w-500 h-120' src={Bank} alt="Rupay credit card on upi"></img>
        </div>
        </SwiperSlide>
     
    </Swiper>
    </div>
    </>
  )
}

export default Slides