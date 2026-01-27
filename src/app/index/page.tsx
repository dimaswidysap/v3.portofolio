import HerosectionComponent from "./Herosection/page";
import style from "../my-css.module.css";

const IndexPage = () => {
  return (
    <main className={`${style.backgroundBody}`}>
      <HerosectionComponent />
    </main>
  );
};

export default IndexPage;
