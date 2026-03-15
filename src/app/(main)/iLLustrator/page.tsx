import style from "@/app/my-css.module.css";
import NavbarComponent from "@/components/nav/nav";
import IllustratorHeader from "@/components/headers/IllustratorHeader/IllustratorHeader";
import MobileVersion from "@/components/contents/illustrator/mobileVersion/mobileVersion";
import DisplayProject1 from "@/components/contents/illustrator/project1/project1";
import DisplayProject2 from "@/components/contents/illustrator/project2/project2";
import DisplayProject3 from "@/components/contents/illustrator/project3/project3";
import DisplayProject4 from "@/components/contents/illustrator/project4/project4";

const iLLustratorPage = () => {
  return (
    <main className={`${style.backgroundBody}`}>
      <NavbarComponent />
      <IllustratorHeader />
      <MobileVersion />
      <DisplayProject1 />
      <DisplayProject2 />
      <DisplayProject3 />
      <DisplayProject4 />
    </main>
  );
};

export default iLLustratorPage;
