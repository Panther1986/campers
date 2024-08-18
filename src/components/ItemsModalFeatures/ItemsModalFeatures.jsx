import css from "./ItemsModalFeatures.module.css";
import { FiWind } from "react-icons/fi";
import { LiaBedSolid, LiaGasPumpSolid } from "react-icons/lia";
import { TbToolsKitchen2, TbAutomaticGearbox } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { LuDisc3 } from "react-icons/lu";
import { PiRadio } from "react-icons/pi";
import { BiSpreadsheet } from "react-icons/bi";

const ItemsModalFeatures = ({ item }) => {
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
        <FiWind />
        {item.details.airConditioner} AC
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
        <TbAirConditioning />
        {item.details.airConditioner} air conditioner
      </p>
      <p className={css.item}>
        <LuDisc3 />
        {item.details.CD} CD
      </p>
      <p className={css.item}>
        <PiRadio />
        {item.details.radio} Radio
      </p>
      <p className={css.item}>
        <BiSpreadsheet />
        {item.details.hobs} hob
      </p>
    </div>
  );
};

export default ItemsModalFeatures;
