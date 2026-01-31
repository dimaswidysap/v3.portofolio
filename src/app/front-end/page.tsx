import FrontEndHeaderComponent from "@/components/headers/FrontEndHeader/FrontEndHeaderComponent";
import FrontEndHeroSection from "@/components/FrontEndHeroSection/FrontEndHeroSection";
const FrontEndPage = () => {
  console.log("testing");
  return (
    <main>
      <FrontEndHeaderComponent />
      <FrontEndHeroSection />
    </main>
  );
};

export default FrontEndPage;
