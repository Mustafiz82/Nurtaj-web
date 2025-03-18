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
        <div className='text-white my-5 lg:my-10 overflow-hidden mx-5 lg:mx-10  rounded-[4px] lg:rounded-xl border-secondary lg:border-2'>
            <div className='w-full text-[12px] lg:text-base flex justify-between  bg-primary lg:bg-secondary py-3 px-4  '>
                <div className="flex items-center gap-2">
                    <Icon src={"/icons/tik-mark.svg"} />
                    <h2 className='font-semibold'>Why choose nurtaj</h2>
                </div>
                <div className='flex  gap-10'>
                    <div className="flex items-center gap-2">
                        <Icon src={"/icons/lock.svg"} />
                        <p>Security privacy</p>
                        <IoIosArrowForward className='lg:hidden -ml-1 text-lg b' />
                    </div>
                    <div className="hidden  lg:flex items-center gap-2">
                        <Icon src={"/icons/payment.svg"} />
                        <p>Safe payments</p>
                    </div>
                    <div className="hidden  lg:flex items-center gap-2">
                        <Icon src={"/icons/delivery_truck.svg"} />
                        <p>Delivery guarantee</p>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex justify-between items-center py-3  px-4'>
                <div className='flex gap-2 '>
                    <Icon src={"/icons/mdi_bell.svg"} />
                    <p className='font-semibold text-secondary'>Be wary of messages about delivery issues claiming to be from USPS </p>
                </div>
                <div className='flex gap-1 items-center text-secondary'>
                    <p className='font-semibold'>view </p>
                    <IoIosArrowForward className='text-lg b' />
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;