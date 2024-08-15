import { FiWind } from "react-icons/fi";
import { LiaBedSolid, LiaGasPumpSolid } from "react-icons/lia";
import { TbToolsKitchen2, TbAutomaticGearbox } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import css from "./Facilities.module.css";

const Facilities = ({ item }) => {
  return (
    <div className={css.div}>
      <p className={css.item}>
        <BsPeople />
        {item.adults} adults
      </p>
      <p className={css.item}>
        <TbAutomaticGearbox />
        {item.transmission}
      </p>
      <p className={css.item}>
        <LiaGasPumpSolid />
        {item.engine}
      </p>
      <p className={css.item}>
        <TbToolsKitchen2 />
        {item.details.kitchen} Kitchen
      </p>
      <p className={css.item}>
        <LiaBedSolid />
        {item.details.beds} beds
      </p>
      <p className={css.item}>
        <FiWind />
        {item.details.airConditioner} AC
      </p>
    </div>
  );
};

export default Facilities;
