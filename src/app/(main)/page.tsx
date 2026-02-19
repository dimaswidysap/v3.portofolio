import HomeHeader from "@/components/headers/HomeHeader/HomeHeader";
import HomeHeroSection from "@/components/contents/contentHome/HomeHeroSection/HomeHeroSection";
import HomeContentMobile from "@/components/contents/contentHome/homeContentMobile/homeContentMobile";

export default function Home() {
  return (
    <div className="relative">
      <HomeHeader />
      <HomeHeroSection />
      <HomeContentMobile />
    </div>
  );
}
