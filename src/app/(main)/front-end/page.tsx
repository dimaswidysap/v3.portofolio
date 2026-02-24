// import FrontEndHeaderComponent from "@/components/headers/FrontEndHeader/FrontEndHeaderComponent";
import NavbarComponent from "@/components/nav/nav";
import FrontEndHeroSection from "@/components/contents/FrontEndHeroSection/FrontEndHeroSection";
const FrontEndPage = () => {
  console.log("testing");
  return (
    <main>
      <NavbarComponent />
      {/* <FrontEndHeaderComponent /> */}
      <FrontEndHeroSection />
    </main>
  );
};

export default FrontEndPage;
