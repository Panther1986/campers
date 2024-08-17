import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarOfId } from "../../redux/operations/operations";
import { FiWind } from "react-icons/fi";
import { LiaBedSolid, LiaGasPumpSolid } from "react-icons/lia";
import { TbToolsKitchen2, TbAutomaticGearbox } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import { LuDisc3 } from "react-icons/lu";
import { PiRadio } from "react-icons/pi";
import { BiSpreadsheet } from "react-icons/bi";
import css from "./Features.module.css";
import ReservationForm from "../Form/Form";

const Features = ({ id: carId, item }) => {
  const { id: paramId } = useParams();
  const id = carId || paramId;
  const [camp, setCamp] = useState([]);

  useEffect(() => {
    const fetchcamp = async () => {
      try {
        const campData = await fetchCarOfId(id || paramId);
        console.log(campData);
        setCamp(campData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchcamp();
  }, [id, paramId]);

  return (
    <div className={css.main}>
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
      <ReservationForm item={item} />
    </div>
  );
};

export default Features;
