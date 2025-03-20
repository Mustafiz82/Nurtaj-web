import LightningDeals from '@/components/pages/home/LightningDeals';
import WhyChooseUs from '@/components/pages/home/WhyChooseUs';
import Banner from '@/components/pages/Member/Banner';
import Product from '@/components/pages/Member/Product';
import PromotionalBanner from '@/components/pages/Member/PromotionalBanner';
import React from 'react';

const page = () => {
    return (
        <div className=''>
            <Banner />
            <WhyChooseUs/>
            <LightningDeals hideImage />
            <PromotionalBanner/>
            <Product title={"Members spatial discount"} />
            <Product title={"Special discount"} />
            <Product title={"Free delivery"} />

        </div>

    );
};

export default page;