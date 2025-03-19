"use client"
import React, { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { IoMicOutline } from "react-icons/io5";


const MobileHeader = () => {

    const [activeTab, setActiveTab] = useState("All")

    const categories = [
        { title: "All", link: "#" },
        { title: "Women", link: "#" },
        { title: "Men", link: "#" },
        { title: "Home", link: "#" },
        { title: "Sports", link: "#" },
        { title: "Jewelry", link: "#" },
    ]
    return (
        <div className='bg-secondary p-5'>
            <div className="flex items-center bg-white rounded-full py-2 px-4">
                <IoMdSearch className='text-3xl text-black/50 -ml-1' />
                <input
                    className='flex-1 px-3 py-2 w-full focus:outline-0 '
                    type="text"
                    placeholder='Search Any Product '
                />
                <IoMicOutline className='text-3xl text-black/50 -mr-1' />

            </div>


            <div className='flex mt-5  items-center justify-between'>
                {
                    categories?.map((item, idx) => <div key={idx}>
                        <h2
                            onClick={() => setActiveTab(item?.title)}
                            className={`${activeTab == item?.title ? "text-white border-b-2" : "text-white/70" } md:text-lg  pb-1 px-1 `}>{item?.title}</h2>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MobileHeader;