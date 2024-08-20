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
  // const allCars = useSelector(selectorAllItems);
  // const isError = useSelector(selectorError);
  const isLoading = useSelector(selectorLoading);
  const dispatch = useDispatch();

  // console.log("allCars", allCars);

  // const itemsPerPage = 4;
  // const [cars, setCars] = useState(allCars);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [visibleCars, setVisibleCars] = useState([]);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  // useEffect(() => {
  //   const startIndex = (currentPage - 1) * itemsPerPage;
  //   const endIndex = startIndex + itemsPerPage;
  //   const newCars = allCars.slice(startIndex, endIndex);
  //   setVisibleCars(newCars);
  // }, [currentPage, allCars]);

  // const totalPages = Math.ceil(allCars.length / itemsPerPage);

  return (
    <>
      {isLoading ? (
        <p>Loading....🤔</p>
      ) : (
        <div className={css.div}>
          <ul className={css.ul}>
            {selectorAllItems.length > 0 && <CarCard />}
          </ul>
        </div>
      )}
    </>
  );
};

export default CatalogPage;
