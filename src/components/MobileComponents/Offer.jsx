import React from 'react';
import { BsTruck } from 'react-icons/bs';
import { MdOutlineWorkspacePremium } from 'react-icons/md';

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
        <div className='mx-5 rounded-[8px] flex items-center gap-5 justify-start my-4 p-4 bg-[#FFEADC]'>
           <div className='text-sm  font-medium text-primary'>
                <div className="flex items-center gap-1">
                    <BsTruck/>
                    <p>Free Shipping </p>
                </div>
                <p className='text-[10px] mt-1'>Incredible</p>
           </div>
           <div className="w-[1px] h-5 bg-black"></div>
           <div className='text-sm  font-medium text-black'>
                <div className="flex items-center gap-1">
                    <MdOutlineWorkspacePremium/>
                    <p>Premium Membership </p>
                </div>
                <p className='text-[10px] mt-1'>Get Up to 70% discount*</p>
           </div>
        </div>
    );
};

export default Offer;