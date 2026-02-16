import style from "@/app/my-css.module.css";

import IllustratorHeader from "@/components/headers/IllustratorHeader/IllustratorHeader";
import ContainerProjectGrid from "@/components/ProjectIllustratorGrid/ProjectiLLustratorGrid";
import DisplayProject1 from "@/components/contents/illustrator/project1/project1";

const iLLustratorPage = () => {
  return (
    <main className={`${style.backgroundBody}`}>
      <IllustratorHeader />
      <ContainerProjectGrid />
      <DisplayProject1 />
    </main>
  );
};

export default iLLustratorPage;
