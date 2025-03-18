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
                    style={{
                        backgroundImage: "url('/images/Home/banner-bg-map.png')",
                        backgroundSize: "contain    ",
                        backgroundPosition: "center"
                    }}
                    className='bg-secondary px-5 lg:px-10 flex justify-evenly items-center   h-[180px] lg:h-[400px] overflow-hidden text-white'
                >
                    <div className="space-y-3">
                        <button className="bg-[#EFD33D] hidden lg:block text-black text-sm font-semibold py-2 px-3 w-fit ">
                            INTRODUCING NEW
                        </button>
                        <h1 className='font-bold text-base lg:text-4xl max-w-[420px] font-public-sans '>Google Pixel 7 pro Ultra
                            12GB+256GB</h1>
                        <p className='max-w-[160px] lg:max-w-[320px] text-[10px] lg:text-base text-white/70'> Data provided by internal laboratories. Industry measurment.</p>

                        <Button />
                    </div>

                    <Image
                        src={"/images/Home/mobile.png"}
                        alt='banner-image'
                        width={1000}
                        height={1000}
                        className='w-[160px] lg:w-[400px] h-auto mt-10   lg:mt-20'
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





