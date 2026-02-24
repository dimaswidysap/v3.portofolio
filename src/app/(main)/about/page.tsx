import NavbarComponent from "@/components/nav/nav";
import AboutHeaderComponent from "@/components/headers/AboutHeader/AboutHeader";
import AboutHeroSection from "@/components/contents/AboutHeroSection/AboutHeroSection";

const AboutPage = () => {
  return (
    <main>
      <NavbarComponent />
      <AboutHeaderComponent />
      <AboutHeroSection />
    </main>
  );
};

export default AboutPage;
