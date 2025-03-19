"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function Slider() {
    const banners = [

        { src: "/images/Home/member-banner.png", cols: 1 },
        { src: "/images/Home/promotional-banner-1.png", cols: 1 },
        { src: "/images/Home/promotional-banner-2.png", cols: 1 },
        { src: "/images/Home/promotional-banner-4.png", cols: 2 },
        { src: "/images/Home/promotional-banner-5.png", cols: 2 }
    ];

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
                    className='w-full h-[200px] object-cover'
                     
                     />
                </SwiperSlide>)
               }

            </Swiper>
        </>
    );
}
