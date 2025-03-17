import ProductCard from '@/components/common/ProductCard';
import { productData } from '@/Data/ProductData';
import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const LightningDeals = () => {
    return (
        <div className='mx-10 my-10 py-5'>

            <div className="bg-primary relative py-3 px-5 flex justify-center items-center gap-7">
                <div className="flex gap-2">
                    <Image
                        src={"/icons/lightning.svg"}
                        alt='logo'
                        priority
                        width={500}
                        height={500}
                        className='w-[26px] h-auto'
                    />

                    <h1 className='font-extrabold italic text-lg text-white'>Lightning deals</h1>
                </div>

                <div className="flex text-white items-center gap-1">
                    <p>Limited time offer</p>
                    <IoIosArrowForward className='text-normal' />
                </div>


                <Image
                    src={"/images/Home/spin.svg"}
                    alt='logo'
                    priority
                    width={500}
                    height={500}
                    className='w-[100px] h-auto absolute -left-[20px]'
                />

            </div>

            <div className="grid grid-cols-5 gap-5 mt-10">
                {
                    productData?.map((item , idx) => <ProductCard key={idx} item={item}/>)
                }
            </div>
        </div>
    );
};

export default LightningDeals;