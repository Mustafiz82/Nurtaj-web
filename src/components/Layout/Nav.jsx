import Image from 'next/image';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { BiSearchAlt  } from 'react-icons/bi';

const Nav = () => {

    const Icon = ({ src }) => <Image
        src={src}
        alt='logo'
        priority
        width={500}
        height={500}
        className='w-[26px] h-auto' />


    return (
        <div className='bg-primary gap-3 text-sm flex justify-between items-center text-white font-semibold p-5 px-10'>
            <Image
                src={"/images/logo.svg"}
                alt='logo'
                priority
                width={500}
                height={500}
                className='w-[100px] h-auto' />

            <div className='flex items-center gap-1'>
                <p>categories</p>
                <IoIosArrowDown className='text-lg' />
            </div>

            <div className='flex items-center gap-1'>
                <Icon src={"/icons/bxs_like.svg"} />
                <p>Best Sellers</p>
            </div>

            <div className='flex items-center gap-1'>
                <Icon src={"/icons/spring.svg"} />
                <p>Spring Sale</p>
            </div>

            <div className="relative bg-white rounded-full  "  >
                <input className='  duration-200 font-normal text-black px-5 py-3 rounded-full  focus:outline-0 focus:border-gray-600 w-[300px]   ' type="text" placeholder='Search blogs ...' />
                <div className='bg-primary absolute top-[4px] right-[4px] rounded-full flex justify-center items-center  w-9 h-9 p-2'>
                    <BiSearchAlt className='text-xl text-white  ' />
                </div>
            </div>

            <div className='flex items-center gap-1'>
                <Icon src={"/icons/account.svg"} />
                <p>Orders & <br /> Accounts</p>
            </div>


            <div className='flex items-center gap-1'>
                <Icon src={"/icons/ix_support.svg"} />
                <p>Support <br /> </p>
            </div>


            <div className='flex text-primary py-2 px-4 bg-white rounded-md items-center gap-1'>
                <Icon src={"/icons/emojione_money-bag.png"} />
                <p >Investment <br /> </p>
            </div>

            <div className='flex items-center gap-1'>
                <Icon src={"/icons/proicons_cart.svg"} />
                <span className='text-[12px] -mt-4 -ml-4 w-4 h-4 text-primary grid place-items-center bg-white rounded-full'>1 </span>
            </div>
        

        </div>
    );
};

export default Nav;