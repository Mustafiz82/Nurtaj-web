"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { LuFilter } from "react-icons/lu";

const filters = [
    { name: "Sort by", subOptions: ["Relevance"] },
    { name: "Men’s Tops Size", subOptions: ["Small", "Medium", "Large", "X-Large"] },
    { name: "Men’s Bottoms Size", subOptions: ["28", "30", "32", "34", "36"] },
    { name: "Men’s Clothing Size", subOptions: ["Small", "Medium", "Large"] },
    { name: "Men’s Clothing Size", subOptions: ["Small", "Medium", "Large"] },
    { name: "Men’s Clothing Size", subOptions: ["Small", "Medium", "Large"] },
    { name: "Clothing Size", subOptions: ["XS", "S", "M", "L", "XL", "XXL"] },
    { name: "Color", subOptions: ["Red", "Blue", "Green", "Black", "White"] },
    { name: "Occasion", subOptions: ["Casual", "Formal", "Sporty"] },
    { name: "Season", subOptions: ["Spring", "Summer", "Fall", "Winter"] },
];

export default function FilterSwiper() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null); // Track active dropdown

    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle current dropdown
    };

    return (
        <div className="relative w-full h-full">
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full"
            >
                <BiChevronRight size={20} />
            </button>

            <div className="absolute z-10 left-0 px-4 flex gap-1 items-center max-w-fit py-2 bg-gray-200 rounded-full whitespace-nowrap">
                <LuFilter />
                Filter
            </div>

            <Swiper
                modules={[Navigation]}
                slidesPerView="auto"
                spaceBetween={10}
                loop={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full  !overflow-visible !overflow-x-hidden"
            >
                {filters.map((filter, index) => (
                    <SwiperSlide key={index} className="relative max-w-fit whitespace-nowrap">
                        <button
                            onClick={() => toggleDropdown(index)}
                            className="flex py-2 bg-gray-200 rounded-full gap-1 items-center px-4"
                        >
                            {filter?.name}
                            <BiChevronDown />
                        </button>

                        {activeIndex === index && (
                            <div className=" top-full left-0 w-full p-5 pt-3 bg-red-400 z-50 rounded-md shadow-md">
                                {filter?.subOptions?.map((item, idx) => (
                                    <div key={idx} className="py-1">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>


           
        </div>
    );
}
