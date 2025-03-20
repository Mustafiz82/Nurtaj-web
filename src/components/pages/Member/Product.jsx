import ProductCard from '@/components/common/ProductCard';
import { productData } from '@/Data/ProductData';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Product = ({ title }) => {
    return (
        <div className="mx-5 lg:mx-10 my-14">
            <div className='flex justify-between'>
                <h2 className='text-lg md:text-2xl font-semibold'>{title}</h2>
                <button className='text-primary  group flex items-center gap-2'>
                    <span className='text-sm md:text-base font-medium'>View all</span>
                    <MdKeyboardArrowRight className=' group-hover:translate-x-2 duration-300 text-lg'/>
                </button>
            </div>

           <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5'>
           {
                productData.slice(0, 5)?.map((item , idx) => <ProductCard item={item} key={idx} /> )
            }
           </div>
        </div>
    );
};

export default Product;