import AllProducts from "@/components/MobileComponents/AllProducts";
import Offer from "@/components/MobileComponents/Offer";
import Slider from "@/components/MobileComponents/Slider";
import Banner from "@/components/pages/home/Banner";
import LightningDeals from "@/components/pages/home/LightningDeals";
import PromotionalBanners from "@/components/common/PromotionalBanners";
import SpringSale from "@/components/pages/home/SpringSale";
import WhyChooceUs from "@/components/pages/home/WhyChooseUs";

export default function Home() {
  return (
    <div className="">

      <Banner />
      <div className="lg:hidden">
        <Offer />
      </div>
      <WhyChooceUs />
      <LightningDeals />
      <div className="lg:hidden mx-5">
        <Slider />
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
