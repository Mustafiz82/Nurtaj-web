import Slider from '@/components/MobileComponents/Slider';
import Image from 'next/image';
import React from 'react';

const PromotionalBanner = () => {

    const banners = [
        { src: "/images/Home/promotional-banner-1.png", cols: 1 },
        { src: "/images/Home/promotional-banner-2.png", cols: 1 },
        { src: "/images/Home/promotional-banner-3.png", cols: 1 },

    ];

    return (
        <div className='mx-5 lg:mx-10 my-5'>
            <div className=" hidden lg:grid grid-cols-3 gap-5">
                {banners.map((banner, index) => (
                    <Image
                        key={index}
                        src={banner.src}
                        width={1000}
                        height={1000}
                        className="w-full h-auto"
                        alt={`promotional banner ${index + 1}`}
                        priority
                    />
                ))}
            </div>


            <div className='lg:hidden'>
                <Slider data = {banners} />
            </div>
        </div>
    );
};

export default PromotionalBanner;