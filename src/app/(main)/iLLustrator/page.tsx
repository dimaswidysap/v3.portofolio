import style from "@/app/my-css.module.css";

import IllustratorHeader from "@/components/headers/IllustratorHeader/IllustratorHeader";
import ContainerProjectGrid from "@/components/contents/illustrator/ProjectIllustratorGrid/ProjectiLLustratorGrid";
import DisplayProject1 from "@/components/contents/illustrator/project1/project1";
import DisplayProject2 from "@/components/contents/illustrator/project2/project2";
import DisplayProject3 from "@/components/contents/illustrator/project3/project3";

const iLLustratorPage = () => {
  return (
    <main className={`${style.backgroundBody}`}>
      <IllustratorHeader />
      <ContainerProjectGrid />
      <DisplayProject1 />
      <DisplayProject2 />
      <DisplayProject3 />
    </main>
  );
};

export default iLLustratorPage;
