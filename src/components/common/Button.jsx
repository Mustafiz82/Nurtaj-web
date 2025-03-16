import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

const Button = () => {
    return (
        <button className='bg-primary py-4 px-6 text-sm uppercase flex items-center gap-2' >
            <p className="">Shop now</p>
            <FaArrowRight className='text-xl'/>
        </button>
    );
};

export default Button;