import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Button = () => {
    return (
        <button className='bg-primary text-[8px] lg:text-base py-2 lg:py-4 px-3 lg:px-6 uppercase flex items-center gap-2' >
            <p className="">Shop now</p>
            <FaArrowRight className='text-xl'/>
        </button>
    );
};

export default Button;