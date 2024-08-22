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
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

const CatalogPage = () => {
  const isLoading = useSelector(selectorLoading);
  const dispatch = useDispatch();
  const items = useSelector(selectorAllItems);
  const [filteredItems, setFilteredItems] = useState(items);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const filter = (filtersValue) => {
    const filteredArray = items.filter((item) => {
      const {
        airConditioner,
        transmission,
        kitchen,
        tv,
        shower,
        form,
        location,
      } = filtersValue;

      const matchesAirConditioner = airConditioner
        ? item.details.airConditioner
        : true;
      const matchesTransmission = transmission
        ? item.transmission === transmission
        : true;
      const matchesKitchen = kitchen ? item.details.kitchen : true;
      const matchesTV = tv ? item.details.TV : true;
      const matchesShower = shower ? item.details.shower : true;
      const matchesForm = form ? item.form === form : true;
      const matchesLocation = location
        ? item.location.includes(location)
        : true;

      console.log(matchesTransmission);

      return (
        matchesAirConditioner &&
        matchesTransmission &&
        matchesKitchen &&
        matchesTV &&
        matchesShower &&
        matchesForm &&
        matchesLocation
      );
    });

    setFilteredItems(filteredArray);
  };

  return (
    <>
      <div className={css.div}>
        <SearchBar filter={filter} />
        {filteredItems.length > 0 ? (
          <CarCard items={filteredItems} />
        ) : (
          <>
            {isLoading ? (
              <p>Loading... 🤔</p>
            ) : (
              <p>No found items! Try select another filter</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CatalogPage;
