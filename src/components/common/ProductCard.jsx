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
        className='w-[16px] lg:w-[18px] h-auto' />


    return (
        <div className='flex group flex-col h-full justify-between'>
            <div>
                <div className='relative overflow-hidden'>
                    <Image
                        src={item?.image}
                        alt='logo'
                        priority
                        width={500}
                        height={500}
                        className='w-full group-hover:scale-110 duration-300 h-auto'
                    />
                    <div className='absolute flex m-2 lg:m-3 gap-2 text-white top-0'>
                        {
                            item?.tags?.map((item, idx) => <button key={idx} className={`p-1 font-bold rounded-[3px] text-[10px] lg:text-[12px] ${item == "Local" ? "bg-[#174A7A]" : "bg-primary "}`}>
                                {item}
                            </button>)
                        }
                    </div>

                    <div className='absolute flex m-2 lg:m-3 gap-2 text-white top-0 right-0'>
                        {item?.discount && <button className='bg-primary p-1 font-bold rounded-[2px] text-[10px] lg:text-[12px]'>
                            {item?.discount}
                        </button>}
                    </div>

                </div>
                <div>
                    <h2 className='text-[12px] duration-300 group-hover:text-primary lg:text-sm lg:font-semibold line-clamp-1 mt-3 lg:line-clamp-2 lg:h-[3em]'>{item?.title} </h2>
                    <div className='hidden lg:flex justify-between items-end'>
                        <div className='flex items-end'>
                            <div className="flex text-primary  mt-2 items-center     ">
                                <BsCurrencyDollar /> <span className=''><PriceFormatter price={item?.price} /></span>

                            </div>
                            <span className='ml-1 line-through pb-[2px] font-semibold text-black/60' > {item?.discount && calculateOriginalPrice(item?.price, item?.discount)}</span>
                        </div>

                        {
                            item?.sold && <div className='flex pb-1 gap- items-center' >
                                {item?.fireSell && <FaFire />}
                                <span className='font-semibold  text-black/60'>{item?.sold} sold</span>
                            </div>
                        }




                    </div>
                    <h2 className='text-[12px] lg:text-[14px] text-[#621FE0] lg:text-black font-medium'>{item?.stockStatus} </h2>
                    <div className="flex lg:gap-1 items-center mt-1 text-primary">
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
                        <span className='text-black/70 ml-2 lg:ml-0 text-[12px] lg:text-base'> {item?.reviews}</span>
                    </div>

                    {
                        item?.highRepeat && <div className='flex line-clamp-1  text-[12px] lg:text-sm mt-1 pb-1 gap-1 items-center' >
                            {item?.highRepeat && <Icon src={"/icons/high-repeat.svg"} />}
                            <span className='lg:font-semibold text-black'>High repeat customers store </span>
                        </div>
                    }

                    {
                        item?.fastDelivery && <div className='flex text-[12px] lg:text-sm mt-1 pb-1 gap-1 items-center' >
                            <Icon src={"/icons/fast-delivery.svg"} />
                            <span className='lg:font-semibold text-black'>Fast delivery store</span>
                        </div>
                    }

                    {
                        item?.directFromHAYVE && <div className='flex bg-black/80 rounded-lg p-1 w-fit text-white text-[12px] lg:text-sm mt-1 pb-1 gap-1 items-center' >
                            <PiSealCheckBold className='' />
                            <span className='lg:font-semibold '>Direct from HAYVE</span>
                        </div>
                    }
                </div>

                <div className='flex lg:hidden justify-between     items-center'>
                    <div className="flex text-primary   items-center     ">
                        <BsCurrencyDollar className='' /> <span className=''><PriceFormatter price={item?.price} /></span>

                    </div>
                    {
                        item?.sold && <div className='flex pb-1 gap- items-center' >

                            <span className=' text-[12px] text-black/60'>{item?.sold} sold</span>
                        </div>
                    }
                </div>


            </div>

            <button className='border active:scale-95 duration-300 hidden lg:block w-full mt-2 border-black py-2 px-5 justify-center items-center hover:bg-black duration-300 text-black hover:text-white'>
                Add To Cart
            </button>
        </div>
    );
};

export default ProductCard;