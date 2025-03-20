import Image from 'next/image';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const WhyChooseUs = () => {

    const Icon = ({ src }) => <Image
        src={src}
        alt='logo'
        priority
        width={500}
        height={500}
        className='w-4 lg:w-[20px] h-auto'
    />

    return (
        <div className='text-white my-5 lg:my-10 overflow-hidden mx-5 lg:mx-10  rounded-[4px] lg:rounded-xl border-secondary border-2'>
            <div className='w-full text-[10px] md:text-sm lg:text-base flex justify-between flex-col lg:flex-row gap-3  bg-secondary py-3 px-4  '>
                <div className="flex text-base  items-center gap-2">
                    <Icon src={"/icons/tik-mark.svg"} />
                    <h2 className='font-semibold'>Why choose nurtaj</h2>
                </div>
                <div className='flex flex-wrap gap-3 lg:gap-10'>
                    <div className="flex items-center gap-2">
                        <Icon src={"/icons/lock.svg"} />
                        <p>Security privacy</p>
                       
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon src={"/icons/payment.svg"} />
                        <p>Safe payments</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Icon src={"/icons/delivery_truck.svg"} />
                        <p>Delivery guarantee</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center py-3  px-4'>
                <div className='flex max-w-[90%] gap-2 '>
                    <Icon src={"/icons/mdi_bell.svg"} />
                    <p className='font-semibold text-[11px] md:text-sm lg:text-base text-secondary'>Be wary of messages about delivery issues claiming to be from USPS </p>
                </div>
                <div className='flex gap-1 items-center text-secondary'>
                    <p className='hidden lg:block font-semibold'>view </p>
                    <IoIosArrowForward className='text-lg b' />
                </div>
            </div>


            

            



        </div>
    );
};

export default WhyChooseUs;