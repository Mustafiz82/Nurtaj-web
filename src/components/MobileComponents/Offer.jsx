import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { MdOutlineWorkspacePremium } from 'react-icons/md';
import { RiStore2Line } from 'react-icons/ri';

const Offer = () => {


    const HeaderData = [{
        icon: <BsTruck />,
        title: "Free shipping",
        subtitle: "Incredible"

    },
    {
        icon: <MdOutlineWorkspacePremium />,
        title: "Premium Membership",
        subtitle: "Get Up to 70% discount*"

    },]

    return (
        <div>
            <div className='mx-5 rounded-[8px] flex items-center gap-5 justify-start my-4 p-4 bg-[#FFEADC]'>
                <div className='text-sm  font-medium text-primary'>
                    <div className="flex items-center gap-1">
                        <BsTruck />
                        <p>Free Shipping </p>
                    </div>
                    <p className='text-[10px] mt-1'>Incredible</p>
                </div>
                <div className="w-[1px] h-5 bg-black"></div>
                <div className='text-sm  font-medium text-black'>
                    <div className="flex items-center gap-1">
                        <MdOutlineWorkspacePremium />
                        <p>Premium Membership </p>
                    </div>
                    <p className='text-[10px] mt-1'>Get Up to 70% discount*</p>
                </div>
            </div>


            <div className='mx-5 rounded-[8px] gap-5 justify-start my-4 p-4 bg-[#FFEADC] text-sm mt-2 md:flex-1  font-medium text-black'>
                <div className="flex text-base md:text-lg items-center gap-1">
                    <HiOutlineDevicePhoneMobile />
                    <p>Get the Nurtaj App </p>
                </div>
                <p className='text-[10px] md:text-base mt-1'>Get Up to 70% discount*</p>
            </div>
            <div className='mx-5 rounded-[8px] gap-5 justify-start my-4 p-4 bg-[#FFEADC] text-sm mt-2 md:flex-1  font-medium text-black'>
                <div className="flex text-base md:text-lg items-center gap-1">
                    <RiStore2Line />
                    <p>Start Selling to Millions of Buyers on Nurtaj </p>
                </div>
                <p className='text-[10px] md:text-base mt-1'>Get Up to 70% discount*</p>
            </div>
        </div>
    );
};

export default Offer;