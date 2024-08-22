import css from "./SearchBar.module.css";
import VehicleType from "../VehicleType/VehicleType";
import FilterToEquipment from "../FilterToEquipment/FilterToEquipment";
import { useState } from "react";

const SearchBar = ({ filter }) => {
  const [filtersValue, setFiltersValue] = useState({
    location: "",
    transmission: "",
    kitchen: false,
    tv: false,
    shower: false,
    airConditioner: false,
    form: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      [name]: name === "transmission" ? (checked ? "automatic" : "") : checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    filter(filtersValue);
  };

  const handleVehicleTypeChange = (e) => {
    const { value } = e.target;
    setFiltersValue((prevFilters) => ({
      ...prevFilters,
      form: value,
    }));
  };

  return (
    <div className={css["side-bar"]}>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label className={css.text} htmlFor="Location">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className={css.input}
            value={filtersValue.location}
            onChange={handleInputChange}
          />
        </div>

        <>
          <FilterToEquipment
            filtersValue={filtersValue}
            handleCheckboxChange={handleCheckboxChange}
          />
          <VehicleType
            filtersValue={filtersValue}
            handleVehicleTypeChange={handleVehicleTypeChange}
          />
        </>

        <button className={css["search-btn"]}>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
