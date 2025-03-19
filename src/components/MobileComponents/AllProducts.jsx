"use client"
import { productData } from '@/Data/ProductData';
import React, { useState } from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { IoMdSearch } from 'react-icons/io';
import { IoMicOutline } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import ProductCard from '../common/ProductCard';
import SpringSale from '../pages/home/SpringSale';
import categories from '@/Data/CategoriesData';


const AllProducts = () => {

    const [activeTab, setActiveTab] = useState("All")
    const [tabContent ,  setTabContent] = useState(null)
    const [selectedSpringSale , setSelectedSpringSale] = useState(null)


    const categoriesData = [
        { title: "All", link: "#" ,},
        { title: "Deals", link: "#" , icon : <BsLightningFill/>},
        { title: "5-Star Rated", link: "#" , icon : <MdOutlineReviews />},
        { title: "Spring Sale", link: "#" , icon : <BsLightningFill/>},
     
    ]
    return (
        <div className='mt-10'>
           

            <div className='flex mt-5  items-center justify-between'>
                {
                    categoriesData?.map((item, idx) => <div key={idx}>
                        <h2
                            onClick={() => setActiveTab(item?.title)}
                            className={`${activeTab == item?.title ? "text-black border-b-2" : "text-black/70" } flex items-center gap-1 pb-1 px-1 `}>
                               {item?.icon &&  <span>{item?.icon}</span>}
                                <span>{item?.title}</span>
                            </h2>
                    </div>)
                }
                
            </div>

            {
                activeTab === "Spring Sale"  && <div className='lg:hidden overflow-x-auto  flex gap-4   flex-nowrap  w-full  mt-5'>
                        {
                            categories?.map((item , idx) => <div 
                            onClick={() => setSelectedSpringSale(item?.title)}
                            className={`${item?.title == selectedSpringSale && "text-primary"} whitespace-nowrap`} key={idx}>
                                {item?.title}
                            </div> )
                        }
                </div>
            }

            <div className='grid grid-cols-2 gap-5 mt-5 '>
            {
                    productData?.map((item , idx) => <ProductCard key={idx} item={item}/>)
                }
            </div>



        </div>
    );
};

export default AllProducts;