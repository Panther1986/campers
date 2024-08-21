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
    if (!detailsOfCamp.length) {
      dispatch(fetchCarOfId(id));
    }
  }, [dispatch, id, detailsOfCamp.length]);

  return (
    <>
      {detailsOfCamp.length > 0 &&
        detailsOfCamp.map((item) => {
          return (
            <div key={item.id} className={css.main}>
              <div className={css.wrap}>
                <ItemsModalFeatures item={item} />
                <VehicleDetails item={item} />
              </div>
              <ReservationForm item={item} />
            </div>
          );
        })}
    </>
  );
};

export default Features;
