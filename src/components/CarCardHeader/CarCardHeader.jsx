import css from "./CarCardHeader.module.css";

import { FaEuroSign } from "react-icons/fa";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
const CarCardHeader = ({ item }) => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(item.price);
  return (
    <div className={css.name}>
      <p className={css.name_product}>{item.name}</p>
      <div className={css.div_price}>
        <p className={css.price}>
          <FaEuroSign className={css.icon} />
          {formattedPrice}
        </p>
        <FavoriteButton itemId={item.id} />
      </div>
    </div>
  );
};

export default CarCardHeader;
