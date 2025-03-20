import AllProducts from "@/components/MobileComponents/AllProducts";
import Offer from "@/components/MobileComponents/Offer";
import Slider from "@/components/MobileComponents/Slider";
import Banner from "@/components/pages/home/Banner";
import LightningDeals from "@/components/pages/home/LightningDeals";
import PromotionalBanners from "@/components/common/PromotionalBanners";
import SpringSale from "@/components/pages/home/SpringSale";
import WhyChooceUs from "@/components/pages/home/WhyChooseUs";

export default function Home() {

  const banners = [

    { src: "/images/Home/member-banner.png", cols: 1 },
    { src: "/images/Home/promotional-banner-1.png", cols: 1 },
    { src: "/images/Home/promotional-banner-2.png", cols: 1 },
    { src: "/images/Home/promotional-banner-4.png", cols: 2 },
    { src: "/images/Home/promotional-banner-5.png", cols: 2 }
  ];

  return (
    <div className="">

      <Banner />
      <div className="lg:hidden">
        <Offer />
      </div>
      <WhyChooceUs />
      <LightningDeals />
      <div className="lg:hidden mx-5">
        <Slider data={banners} />
      </div>
      <div className="hidden lg:block">
        <PromotionalBanners />
        <SpringSale />
      </div>
      <div className="lg:hidden mx-5">
        <AllProducts />
      </div>

    </div>
  );
}
