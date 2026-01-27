import style from "../my-css.module.css";
import HerosectionComponent from "./herosection/page";

const iLLustratorPage = () => {
  return (
    <main className={`${style.backgroundBody}`}>
      <HerosectionComponent />
    </main>
  );
};

export default iLLustratorPage;
