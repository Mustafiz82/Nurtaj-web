import React from 'react';
import {  FaRegUser } from 'react-icons/fa';
import { LuMapPin } from "react-icons/lu";

const DeliveryDetails = () => {
    return (
        <div className="bg-white p-5 rounded-lg shadow-md">
        <div className="flex justify-between items-center">
            <h3 className=" font-medium text-black/70">Delivery Details</h3>
            <button className="text-secondary font-medium">Change</button>
        </div>
        <div className="mt-5">
            <div className="flex items-start gap-3 text-sm">
                <FaRegUser className="text-primary text-lg" />
                <div className='-mt-1'>
                    <p className="font-medium">Abrar Islam</p>
                    <p className="text-gray-600">+8801766134388</p>
                </div>
            </div>
            <div className="flex items-start gap-3  text-sm mt-3">
                <LuMapPin  className=" text-primary text-lg" />
                <div className='-mt-1'>
                    <p>Dhaka, Dhaka North, Banani</p>
                    <p className="text-gray-600">Road no: 12-13</p>
                </div>
            </div>
        </div>
    </div>

    );
};

export default DeliveryDetails;