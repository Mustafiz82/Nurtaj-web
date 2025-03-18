import ProductCard from '@/components/common/ProductCard';
import { productData } from '@/Data/ProductData';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { BsLightningFill } from "react-icons/bs";


const LightningDeals = () => {
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
                    </div>)
                }
            </div>
        </div>
    );
};

export default LightningDeals;