import Image from 'next/image';
import React from 'react';

const PromotionalBanners = () => {
    const banners = [
        { src: "/images/Home/promotional-banner-1.png", cols: 1 },
        { src: "/images/Home/promotional-banner-2.png", cols: 1 },
        { src: "/images/Home/promotional-banner-3.png", cols: 1 },
        { src: "/images/Home/promotional-banner-4.png", cols: 2 },
        { src: "/images/Home/promotional-banner-5.png", cols: 2 }
    ];

    return (
        <div className="mx-10 mt-20 mb-16">
            <div className="grid gap-5">
                <div className="grid grid-cols-3 gap-5">
                    {banners.slice(0, 3).map((banner, index) => (
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
                <div className="grid grid-cols-2 gap-5">
                    {banners.slice(3).map((banner, index) => (
                        <Image
                            key={index + 3}
                            src={banner.src}
                            width={1000}
                            height={1000}
                            className="w-full h-auto"
                            alt={`promotional banner ${index + 4}`}
                        />
                    ))}
                </div>
            </div>

            <div className="py-3 mt-10 bg-primary text-center italic font-extrabold text-white ">
                Shop now, Pay later
            </div>
        </div>
    );
};

export default PromotionalBanners;
