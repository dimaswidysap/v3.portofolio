import style from "../my-css.module.css";

import IllustratorHeader from "@/components/headers/IllustratorHeader/IllustratorHeader";
import ContainerProjectGrid from "@/components/ProjectIllustratorGrid/ProjectiLLustratorGrid";

const iLLustratorPage = () => {
  return (
    <main className={`${style.backgroundBody} `}>
      <IllustratorHeader />
      <ContainerProjectGrid />
    </main>
  );
};

export default iLLustratorPage;
