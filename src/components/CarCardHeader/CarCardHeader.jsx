import css from "./CarCardHeader.module.css";
import sprite from "../../images/icons.svg";
import { FaEuroSign } from "react-icons/fa";
const CarCardHeader = ({ item }) => {
  const iconHeart = `${sprite}#heart1`;
  return (
    <div className={css.name}>
      <p className={css.name_product}>{item.name}</p>
      <div className={css.div_price}>
        <p className={css.price}>
          <FaEuroSign className={css.icon} />
          {item.price}.00
        </p>
        <button className={css.btn}>
          <svg
            width="24"
            height="21"
            className={css.icon_heart}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarCardHeader;
