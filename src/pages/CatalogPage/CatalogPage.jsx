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
  const allCars = useSelector(selectorAllItems);
  const isError = useSelector(selectorError);
  const isLoading = useSelector(selectorLoading);
  const dispatch = useDispatch();

  const itemsPerPage = 4;
  const [cars, setCars] = useState(allCars);
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleCars, setVisibleCars] = useState([]);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newCars = allCars.slice(startIndex, endIndex);
    setVisibleCars((prevCars) => [...prevCars, ...newCars]);
  }, [currentPage, allCars]);

  const totalPages = Math.ceil(allCars.length / itemsPerPage);

  return (
    <>
      {isLoading ? (
        <p>Loading....🤔</p>
      ) : (
        <div className={css.div}>
          <ul className={css.ul}>
            {visibleCars.map((car) => (
              <CarCard key={car._id} item={car} />
            ))}
          </ul>

          {currentPage < totalPages && (
            <button
              className={css.btnLoad}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Load more
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CatalogPage;
