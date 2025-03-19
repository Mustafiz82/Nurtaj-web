import React from 'react';
import Image from 'next/image';


const OrderDetails = () => {
    return (
        <div className="bg-[#E5D8FF] p-5 rounded-lg shadow-md mt-4">
            <h3 className=" font-medium">Order Summary</h3>
            <div className="mt-3 text-sm space-y-2">
                <div className="flex justify-between">
                    <span>Sub Total</span>
                    <span>৳ 32,000</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping Charge</span>
                    <span>৳ 35</span>
                </div>
                <div className="flex justify-between">
                    <span>Coupon</span>
                    <span>৳ 0</span>
                </div>
                <hr className="border-gray-400 my-3" />
                <div className="flex justify-between font-medium">
                    <span>Payable Amount</span>
                    <span>৳ 32,035</span>
                </div>
            </div>
            <h3 className=" font-medium mt-7">Select Payment Method</h3>
            <div className="mt-3 space-y-2">
                <button className="w-full flex items-center gap-3  text-sm p-3 border border-[#1D1D1D] rounded-lg bg-[#C5AAFB]">
                    <Image
                        src="/images/cart/cashondelivery1.png"
                        width={40}
                        height={40}
                        className="rounded"
                    />
                    <div className='text-left'>
                        <p className="font-medium text-sm ">Cash On Delivery</p>
                        <p className="text-gray-600  text-[12px] text-sm">Pay with cash upon delivery</p>
                    </div>
                </button>
                <button className="w-full flex items-center gap-3  text-sm p-3 border border-[#1D1D1D] rounded-lg bg-[#C5AAFB]">
                    <Image
                        src="/images/cart/Untitled.png"
                        alt="SSLCommerz"
                        width={40}
                        height={40}
                        className="rounded"
                    />
                    <div className='text-start'>
                        <p className="font-medium">SSLCommerz</p>
                        <p className="text-gray-600 text-sm">Pay with SSLCommerz</p>
                    </div>
                </button>
            </div>


            <button className="active:scale-95  duration-300 w-full mt-4 py-3 text-white bg-primary font-medium">
                Place Order
            </button>
        </div>
    );
};

export default OrderDetails;