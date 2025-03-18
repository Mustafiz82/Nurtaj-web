import ProductCard from '@/components/common/ProductCard';
import { productData } from '@/Data/ProductData';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BsCurrencyDollar, BsLightningFill } from "react-icons/bs";
import { FaFire } from 'react-icons/fa6';


const LightningDeals = () => {

    const PriceFormatter = ({ price }) => {
        const [integerPart, decimalPart] = price.toFixed(2).split(".");

        return (
            <span className='flex font-bold items-end'>
                <span className="text-[12px] font-bold">{integerPart}.</span>
                <span className="text-[10px] ">{decimalPart}</span>
            </span>
        );
    };


    return (
        <div className='m-5 lg:m-10 lg:py-5'>

            <div className="lg:bg-primary  relative lg:py-3 lg:px-5 flex justify-between lg:justify-center items-center gap-7">
                <div className="flex items-center gap-1 lg:gap-2">
                    <BsLightningFill className='text-black lg:text-white text-lg' />

                    <h1 className='font-extrabold italic text-lg text-black lg:text-white'>Lightning deals</h1>
                </div>

                <div className="flex text-black lg:text-white items-center gap-1">
                    <p>Limited time offer</p>
                    <IoIosArrowForward className='hidden lg:block text-normal' />
                </div>


                <Image
                    src={"/images/Home/spin.svg"}
                    alt='logo'
                    priority
                    width={500}
                    height={500}
                    className='w-[100px]  hidden lg:block h-auto absolute -left-[20px]'
                />

            </div>

            <div className=" hidden lg:grid  grid-cols-5 gap-5 mt-10">
                {
                    productData?.slice(0, 5).map((item, idx) => <ProductCard key={idx} item={item} />)
                }
            </div>

            <div className='lg:hidden overflow-x-auto  flex gap-4   flex-nowrap  w-full  mt-5'>
                {
                    productData?.slice(0, 5).map((item, idx) => <div key={idx}>
                        <Image
                            src={item?.image}
                            alt='logo'
                            priority
                            width={500}
                            height={500}
                            className='min-w-[110px] z-[99] h-auto'
                        />
                        <h2 className='line-clamp-1 text-[12px] font-medium'>{item?.title}</h2>
                        <div className='flex justify-between     items-center'>
                            <div className="flex text-primary   items-center     ">
                                <BsCurrencyDollar className='text-[12px]'/> <span className=''><PriceFormatter price={item?.price} /></span>

                            </div>
                            {
                                item?.sold && <div className='flex pb-1 gap- items-center' >
                                    
                                    <span className=' text-[12px] text-black/60'>{item?.sold} sold</span>
                                </div>
                            }
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LightningDeals;