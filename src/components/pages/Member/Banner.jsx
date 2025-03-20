"use client"
import Button from '@/components/common/Button';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";


const Banner = () => {

    const arr = Array.from({ length: 3 }, (_, i) => i);
    const swiperRef = useRef(null);



    return (
        <Swiper
            navigation={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            loop
            modules={[Navigation, Autoplay]}
            className="mySwiper relative">
            {
                arr?.map((item, idx) => <SwiperSlide> <div

                    className=''
                >

                    <Image
                        src={"/images/Home/member-banner.png"}
                        alt='member banner'
                        width={1000}
                        height={1000}
                        className='w-full h-[200px] sm:h-[330px]  lg:h-[450px]'
                    />

                </div></SwiperSlide>)
            }

            <div
                onClick={() => swiperRef.current?.slidePrev()}
                className='hidden lg:flex absolute w-10 h-10  justify-center items-center bg-white rounded-full z-[999] top-1/2 left-[40px] translate-y-[-50%]'>
                <IoIosArrowBack className='text-2xl -ml-1' />
            </div>
            <div
                onClick={() => swiperRef.current?.slideNext()}
                className='hidden lg:flex absolute w-10 h-10  justify-center items-center bg-white rounded-full z-[999] top-1/2 right-[40px] translate-y-[-50%]'>
                <IoIosArrowBack className='text-2xl rotate-180 -mr-1' />
            </div>

        </Swiper>


    );
};

export default Banner;





