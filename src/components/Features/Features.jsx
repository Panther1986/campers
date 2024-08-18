import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarOfId } from "../../redux/operations/operations";

import css from "./Features.module.css";
import ReservationForm from "../ReservationForm/ReservationForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import ItemsModalFeatures from "../ItemsModalFeatures/ItemsModalFeatures";

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
      <div className={css.wrap}>
        <ItemsModalFeatures item={item} />
        <VehicleDetails item={item} />
      </div>
      <ReservationForm item={item} />
    </div>
  );
};

export default Features;
