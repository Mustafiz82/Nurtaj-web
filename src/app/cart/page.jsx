import Breadcrumbs from '@/components/common/Breadcrumbs';
import CartItem from '@/components/pages/Cart/CartItem';
import DeliveryDetails from '@/components/pages/Cart/DeliveryDetails';
import OrderDetails from '@/components/pages/Cart/OrderDetails';
import { productData } from '@/Data/ProductData';
import React from 'react';



const page = () => {
    return (
        <div className='mx-5 lg:mx-10  '>
            <Breadcrumbs />

            <div className='flex flex-col lg:flex-row gap-4 '>
                <div className="w-full lg:w-[70%]">
                    <div className=' rounded-lg shadow-md my-3 font-[500] bg-white p-5 text-black/80 flex justify-between items-center'>
                        <h2>My  Cart (3 item)</h2>
                        <div>
                            <h2 >Total Price : ৳ 32,000</h2>
                            <h2 className='font-normal'>Saved : ৳ 10,000</h2>

                        </div>
                    </div>

                    <div className='overflow-x-auto shadow-md'>
                        <div className='min-w-[700px] bg-white p-5 rounded-lg'>
                            <div className="grid  text-sm  w-full text-balck font-inter font-medium grid-cols-8">
                                <h1 className='text-start col-span-4'>Products</h1>

                                <h1 className='text-center col-span-2'>Quanity</h1>
                                <h1 className='text-center'>Total</h1>
                                <h1 className='text-right'>Action</h1>

                            </div>
                            <div>
                                {
                                    productData?.slice(0, 2)?.map((item, idx) => <div key={idx}>
                                        <CartItem
                                            item={item}
                                            idx={idx} />
                                    </div>)
                                }
                            </div>


                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[30%] mx-auto p-4 pl-0">

                    <DeliveryDetails />
                    <OrderDetails />


                </div>
            </div>
        </div>
    );
};

export default page;