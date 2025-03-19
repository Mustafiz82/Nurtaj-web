
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { FaMinus } from 'react-icons/fa';
import { FaPlus, } from 'react-icons/fa6';
import { RiDeleteBin6Line } from "react-icons/ri";


const CartItem = ({ item, idx }) => {

    let itemPrice = 1200
    const [quantity, setQuantity] = useState(1)
    const [totalPrice, setTotalPrice] = useState(itemPrice)

    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1)
        setTotalPrice(prev => prev * (quantity + 1))
    }

    const decreaseQuantity = () => {
        setQuantity((prev) => prev > 1 ? prev - 1 : prev)
        setTotalPrice(prev => (quantity > 1) ? prev / (quantity) : prev)
    }
    return (
        <div className={`grid   py-5  text-sm  w-full font-inter font-semibold grid-cols-8`}>
            <div className='col-span-4 flex gap-3'>
                <div className='w-[70px] h-[70px] relative'>
                    <Image
                        src={item?.image}
                        layout='fill'
                        priority
                        alt={item?.title}

                    />
                </div>
                <div className=' space-y-1'>
                    <h1 className='font-medium text-sm'>{item?.title}</h1>
                    <p className='text-sm  font-semibold '><span className='text-gray'>Color:</span> Black</p>
                    <p className='text-sm  font-semibold '><span className='text-gray'>Size:</span> M</p>

                </div>
            </div>

            <div className='py-2 flex  col-span-2  justify-center gap-2'>
                <button onClick={decreaseQuantity} className='w-[36px] h-[40px] grid place-items-center text-black hover:text-white hover:border-transparent hover:bg-black/90 duration-300 text-sm border border-black/90 active:scale-95 '> <FaMinus /></button>
                <button className='w-[36px] h-[40px] grid place-items-center text-black text-sm bg-transparent  '>{quantity}</button>
                <button onClick={increaseQuantity} className='w-[36px] h-[40px] grid place-items-center text-white hover:text-black hover:bg-transparent hover:border-black border duration-300 border-transparent text-sm active:scale-95 bg-black/90  '>
                    <FaPlus />
                </button>
            </div>

            <div className='py-2  col-span-1 text-center '>
                <h1 className=' py-2'>{`Tk. ${totalPrice}`}</h1>
            </div>

            <div className='py-2 flex  justify-end'>
                <button className='w-[36px]  h-[40px] grid place-items-center text-black   active:scale-95'><RiDeleteBin6Line /></button>
            </div>

        </div>
    );
};

export default CartItem;
