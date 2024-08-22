import css from "./FilterToEquipment.module.css";
import { MdOutlineAir } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";
import { GiTv } from "react-icons/gi";
import { LiaShowerSolid } from "react-icons/lia";
import { TbAutomaticGearbox } from "react-icons/tb";

const FilterToEquipment = ({ filtersValue, handleCheckboxChange }) => {
  return (
    <>
      <div style={{ marginTop: "32px" }}>
        <p className={css.text}>Filters</p>
        <h3 className={css["vehicle-equipment-title"]}>Vehicle equipment</h3>

        <ul className={css["equip-list"]}>
          <li className={css.equip}>
            <input
              type="checkbox"
              id="airConditioner"
              name="airConditioner"
              checked={filtersValue.airConditioner}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="airConditioner" className={css.label}>
              <MdOutlineAir className={css["equip-icon"]} /> AC
            </label>
          </li>

          <li className={css.equip}>
            <input
              type="checkbox"
              id="transmission"
              name="transmission"
              value="automatic"
              checked={filtersValue.transmission === "automatic"}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="transmission" className={css.label}>
              <TbAutomaticGearbox className={css["equip-icon"]} /> Automatic
            </label>
          </li>
          <li className={css.equip}>
            <input
              type="checkbox"
              id="kitchen"
              name="kitchen"
              checked={filtersValue.kitchen}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="kitchen" className={css.label}>
              <TbToolsKitchen2 className={css["equip-icon"]} /> Kitchen
            </label>
          </li>
          <li className={css.equip}>
            <input
              type="checkbox"
              id="tv"
              name="tv"
              checked={filtersValue.tv}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="tv" className={css.label}>
              <GiTv className={css["equip-icon"]} /> TV
            </label>
          </li>
          <li className={css.equip}>
            <input
              type="checkbox"
              id="shower"
              name="shower"
              checked={filtersValue.shower}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="shower" className={css.label}>
              <LiaShowerSolid className={css["equip-icon"]} />
              Shower/WC
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterToEquipment;
