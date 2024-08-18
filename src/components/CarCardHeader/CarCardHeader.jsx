import css from "./CarCardHeader.module.css";

import { FaEuroSign } from "react-icons/fa";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
const CarCardHeader = ({ item }) => {
  return (
    <div className={css.name}>
      <p className={css.name_product}>{item.name}</p>
      <div className={css.div_price}>
        <p className={css.price}>
          <FaEuroSign className={css.icon} />
          {item.price}.00
        </p>
        <FavoriteButton itemId={item.id} />
      </div>
    </div>
  );
};

export default CarCardHeader;
