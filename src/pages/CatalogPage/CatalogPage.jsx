import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CarCard from "../../components/CarCard/CarCard.jsx";
import css from "./CatalogPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectorAllItems,
  selectorError,
  selectorLoading,
} from "../../redux/operations/selectors.js";
import { fetchAllCars } from "../../redux/operations/operations.js";

const CatalogPage = () => {
  const isLoading = useSelector(selectorLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p>Loading....🤔</p>
      ) : (
        <div className={css.div}>
          {selectorAllItems.length > 0 && <CarCard />}
        </div>
      )}
    </>
  );
};

export default CatalogPage;
