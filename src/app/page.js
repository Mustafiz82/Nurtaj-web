import Offer from "@/components/MobileComponents/Offer";
import Banner from "@/components/pages/home/Banner";
import LightningDeals from "@/components/pages/home/LightningDeals";
import PromotionalBanners from "@/components/pages/home/PromotionalBanners";
import SpringSale from "@/components/pages/home/SpringSale";
import WhyChooceUs from "@/components/pages/home/WhyChooseUs";

export default function Home() {
  return (
    <div>

      <Banner />
      {/* offer mobile component  */}
      <div className="lg:hidden">
        <Offer />
      </div>
      <WhyChooceUs />
     <LightningDeals/>
      {/*  <PromotionalBanners/>
      <SpringSale/> */}

    </div>
  );
}
