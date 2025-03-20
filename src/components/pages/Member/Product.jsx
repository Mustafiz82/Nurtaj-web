import ProductCard from '@/components/common/ProductCard';
import { productData } from '@/Data/ProductData';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

const Product = ({ title }) => {
    return (
        <div className="mx-10 my-14">
            <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold'>{title}</h2>
                <button className='text-primary flex items-center gap-2'>
                    <span className='text-base font-medium'>View all</span>
                    <MdKeyboardArrowRight className='text-lg'/>
                </button>
            </div>

           <div className='grid grid-cols-5 gap-5 my-5'>
           {
                productData.slice(0, 5)?.map((item , idx) => <ProductCard item={item} key={idx} /> )
            }
           </div>
        </div>
    );
};

export default Product;