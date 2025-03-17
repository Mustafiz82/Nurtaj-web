import Banner from "@/components/pages/home/Banner";
import LightningDeals from "@/components/pages/home/LightningDeals";
import PromotionalBanners from "@/components/pages/home/PromotionalBanners";
import WhyChooceUs from "@/components/pages/home/WhyChooseUs";

export default function Home() {
  return (
    <div>

      <Banner/>
      <WhyChooceUs/>
      <LightningDeals/>
      {/* <PromotionalBanners/> */}
      
    </div>
  );
}
