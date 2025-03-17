"use client"
import ProductCard from '@/components/common/ProductCard';
import categories from '@/Data/CategoriesData';
import { productData } from '@/Data/ProductData';
import React, { useState, useRef, useEffect } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const SpringSale = () => {
    const [translateX, setTranslateX] = useState(0);
    const containerRef = useRef(null); // Reference to the container element
    const [containerWidth, setContainerWidth] = useState(0); // State to hold the container width
    const [selected, setSelected] = useState(0)

    // Dynamically calculate the container width once the component is mounted
    useEffect(() => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth - 70);
        }

        // Optionally, you can add an event listener for window resizing
        const handleResize = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth - 70);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const itemWidth = 150; // Width of each item (can be dynamically calculated if needed)
    const maxTranslateX = (categories.length * itemWidth) - containerWidth; // Max translate value to prevent overflow

    const handleButtonClick = () => {
        // Increment by 300px, but clamp the value to prevent overflow
        setTranslateX((prevTranslateX) => {
            const nextTranslateX = prevTranslateX + 300;
            return Math.min(Math.max(nextTranslateX, 0), maxTranslateX);
        });
    };

    return (
        <div className='mx-10 my-10'>
            <div className="my-10 ">
                <h1 className="text-#621FE0 text-center text-[#621FE0] font-extrabold uppercase text-2xl">Spring sale</h1>
                <h1 className="text-#621FE0 text-center text-primary font-extrabold uppercase text-2xl">Explore your interests</h1>

                <div className="flex justify-between mt-5 items-center">
                    <div ref={containerRef} className="inline-block w-[calc(100%-70px)] overflow-hidden">
                        <div
                            className="w-full duration-300 items-center gap-5 flex"
                            style={{ transform: `translateX(-${translateX}px)` }} // Apply the transform with the state value
                        >
                            {
                                categories?.map((item, idx) => (
                                    <div
                                        onClick={() => setSelected(idx)}
                                        key={idx} className={`${selected == idx ? "border-primary" : "border-gray-500"} relative grow shrink-0 text-sm h-16 flex items-center justify-center p-4 text-center font-medium rounded-full border  `}>
                                        {item?.title}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button onClick={handleButtonClick} className="bg-white shadow-lg flex justify-center items-center w-10 h-10 rounded-full">
                        <IoIosArrowForward className="text-lg b" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-5 mt-10">
                {
                    productData?.map((item , idx) => <ProductCard key={idx} item={item}/>)
                }
            </div>
        </div>
    );
};

export default SpringSale;
