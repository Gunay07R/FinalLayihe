import React from 'react'
import Companies from './Companies'
import { Swiper, SwiperSlide } from "swiper/react";

import Hill from '../svgs/images/company logo/hill-hayes.svg'
import Riksgransen from '../svgs/images/company logo/riksgransen.svg'
import Studiocai from '../svgs/images/company logo/studio-cai.svg'
import Industries from '../svgs/images/company logo/chill-industries.svg'
import Stockholm from '../svgs/images/company logo/stockholm.svg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";





const Carousel = () => {
  return (
   <>
   <section class="brands" data-aos="fade-up" id='brands'>
            <div class="brands-text">
                <h2 id="brand-head">Post clients</h2>
                <p id="brand-pg">Trusted by your favourite companies</p>
            </div>
            {/* <div class="brands-logo">
                <img src={Hill} alt="" />
                <img src={Riksgransen} alt="" />
                <img src={Studiocai} alt="" />
                <img src={Industries} alt="" />
                <img src={Stockholm} alt="" />
            </div> */}
        </section>
   <div className='carousel'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}

        breakpoints={{
         420:{
            slidesPerView:1,
         },
         500:{
            slidesPerView:1,

         },
         640: {
            slidesPerView: 2,
            spaceBetween: 20,
         },
         768: {
            slidesPerView: 4,
            spaceBetween: 40,
         },
         1024: {
            slidesPerView: 5,
            spaceBetween: 50,
         },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        
      >
        <SwiperSlide>
          <img src={Hill} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Riksgransen} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Studiocai} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Industries} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Stockholm} />
        </SwiperSlide>        
      </Swiper>
   </div>
   </>
  )
}


export default Carousel