import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchCarOfId } from "../../redux/operations/operations";

import css from "./Features.module.css";
import ReservationForm from "../ReservationForm/ReservationForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import ItemsModalFeatures from "../ItemsModalFeatures/ItemsModalFeatures";
import { useDispatch, useSelector } from "react-redux";
import { selectorItem } from "../../redux/operations/selectors";

const Features = () => {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOfCamp = useSelector(selectorItem);

  useEffect(() => {
    dispatch(fetchCarOfId(id));
  }, [dispatch, id]);

  console.log("detailsOfCamp", detailsOfCamp);
  // const { id: paramId } = useParams();
  // const id = carId || paramId;
  // const [camp, setCamp] = useState([]);
  // console.log("feature", item);

  // useEffect(() => {
  //   const fetchcamp = async () => {
  //     try {
  //       const campData = await fetchCarOfId(id || paramId);
  //       console.log(campData);
  //       setCamp(campData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchcamp();
  // }, [id, paramId]);

  return (
    <>
      {detailsOfCamp.length > 0 &&
        detailsOfCamp.map((item) => {
          return (
            <div className={css.main}>
              <div className={css.wrap}>
                <ItemsModalFeatures items={item.items} />
                <VehicleDetails items={item} />
              </div>
              <ReservationForm item={item} />
            </div>
          );
        })}
    </>
  );
};

export default Features;
