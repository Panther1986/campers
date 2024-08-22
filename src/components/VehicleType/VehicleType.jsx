import { TbCaravan } from "react-icons/tb";
import css from "./VehicleType.module.css";

const VehicleType = ({ filtersValue, handleVehicleTypeChange }) => {
  return (
    <>
      <div style={{ marginTop: "32px" }}>
        <h3 className={css["vehicle-type"]}>Vehicle type</h3>

        <ul className={css["van-list"]}>
          <li className={css.vans}>
            <input
              type="radio"
              id="panelTruck"
              name="form"
              value="panelTruck"
              checked={filtersValue.form === "panelTruck"}
              onChange={handleVehicleTypeChange}
            />
            <label htmlFor="panelTruck" className={css.label}>
              <TbCaravan className={css["van-icon"]} />
              Van
            </label>
          </li>
          <li className={css.vans}>
            <input
              type="radio"
              id="fullyIntegrated"
              name="form"
              value="fullyIntegrated"
              checked={filtersValue.form === "fullyIntegrated"}
              onChange={handleVehicleTypeChange}
            />
            <label htmlFor="fullyIntegrated" className={css.label}>
              <TbCaravan className={css["van-icon"]} />
              Integrated
            </label>
          </li>
          <li className={css.vans}>
            <input
              type="radio"
              id="alcove"
              name="form"
              value="alcove"
              checked={filtersValue.form === "alcove"}
              onChange={handleVehicleTypeChange}
            />
            <label htmlFor="alcove" className={css.label}>
              <TbCaravan className={css["van-icon"]} />
              Alcove
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default VehicleType;
