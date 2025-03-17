import Image from 'next/image';
import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { PiSealCheckBold } from "react-icons/pi";


const ProductCard = ({ item }) => {

    const PriceFormatter = ({ price }) => {
        const [integerPart, decimalPart] = price.toFixed(2).split(".");

        return (
            <span className='flex font-bold items-end'>
                <span className="text-2xl font-bold">{integerPart}.</span>
                <span className="text-lg ">{decimalPart}</span>
            </span>
        );
    };

    const calculateOriginalPrice = (discountedPrice, discountPercent) => {
        const intDiscountedPrice = parseInt(discountedPrice)
        const intDiscountedPercent = parseInt(discountPercent)
        return (intDiscountedPrice / (1 - intDiscountedPercent / 100)).toFixed(2);
    };


    const Icon = ({ src }) => <Image
        src={src}
        alt='logo'
        priority
        width={500}
        height={500}
        className='w-[18px] h-auto' />


    return (
        <div>
            <div className='relative'>
                <Image
                    src={item?.image}
                    alt='logo'
                    priority
                    width={500}
                    height={500}
                    className='w-full h-auto'
                />
                <div className='absolute flex m-3 gap-2 text-white top-0'>
                    {
                        item?.tags?.map((item, idx) => <button className={`p-1 font-bold rounded-[3px]  text-[12px] ${item == "Local" ? "bg-[#174A7A]" : "bg-primary "}`}>
                            {item}
                        </button>)
                    }
                </div>

                <div className='absolute flex m-3 gap-2 text-white top-0 right-0'>
                    {item?.discount && <button className='bg-primary p-1 font-bold rounded-[2px]  text-[12px]'>
                        {item?.discount}
                    </button>}
                </div>

            </div>

            <h2 className='text-sm font-semibold mt-3 line-clamp-2 h-[3em]'>{item?.title} </h2>
            <div className='flex justify-between items-end'>
                <div className='flex items-end'>
                    <div className="flex text-primary  mt-2 items-center     ">
                        <BsCurrencyDollar /> <span className=''><PriceFormatter price={item?.price} /></span>

                    </div>
                    <span className='ml-1 line-through pb-[2px] font-semibold text-black/60' > {item?.discount && calculateOriginalPrice(item?.price, item?.discount)}</span>
                </div>

                {
                    item?.sold && <div className='flex pb-1 gap- items-center' >
                        {item?.fireSell && <FaFire />}
                        <span className='font-semibold text-black/60'>{item?.sold} sold</span>
                    </div>
                }


            </div>
            <h2 className='font-medium'>{item?.stockStatus} </h2>
            <div className="flex gap-1 items-center mt-1 text-primary">
                {
                    [...Array.from({ length: item?.rating })].map((item, idx) => <div key={idx}>
                        <IoStarSharp />
                    </div>)
                }
                {
                    [...Array.from({ length: 5 - item?.rating })].map((item, idx) => <div key={idx}>
                        <IoStarSharp className='text-black/60' />
                    </div>)
                }
                <span className='text-black/70'> {item?.reviews}</span>
            </div>

            {
                item?.highRepeat && <div className='flex text-sm mt-1 pb-1 gap-1 items-center' >
                    {item?.highRepeat && <Icon src={"/icons/high-repeat.svg"} />}
                    <span className='font-semibold text-black'>High repeat customers store </span>
                </div>
            }
        
            {
                item?.fastDelivery && <div className='flex text-sm mt-1 pb-1 gap-1 items-center' >
                   <Icon src={"/icons/fast-delivery.svg"} />
                    <span className='font-semibold text-black'>Fast delivery store</span>
                </div>
            }

            {
                item?.directFromHAYVE && <div className='flex bg-black/80 rounded-lg p-1 w-fit text-white text-sm mt-1 pb-1 gap-1 items-center' >
                   <PiSealCheckBold/>
                    <span className='font-semibold '>Direct from HAYVE</span>
                </div>
            }
        </div>
    );
};

export default ProductCard;