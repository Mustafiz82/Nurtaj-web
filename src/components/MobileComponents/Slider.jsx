"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Slider({data:banners}) {
    

    return (
        <>
            <Swiper 
            pagination={true} 
            modules={[Pagination , Autoplay]}
            loop={true}
            autoplay={{
                delay: 2000,
            }}
             className="mySwiper ">
               {
                banners?.map((item , idx) =>  <SwiperSlide>
                    <Image 
                    src={item?.src}
                    width={1000}
                    height={1000}
                    alt={"banner"+idx}
                    className='w-full h-[200px] sm:h-[330px] '
                     
                     />
                </SwiperSlide>)
               }

            </Swiper>
        </>
    );
}
