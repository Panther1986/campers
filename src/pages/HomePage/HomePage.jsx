import home from "../../images/golovna.jpeg";
import { GiRollingSuitcase } from "react-icons/gi";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <h2>
        Renting the best campervans for any of your desires. With our company,
        your travels will become even brighter <GiRollingSuitcase />
      </h2>
      <img src={home} />
    </div>
  );
};

export default HomePage;
