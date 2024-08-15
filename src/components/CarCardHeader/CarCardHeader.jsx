import css from "./CarCardHeader.module.css";
import { CiHeart } from "react-icons/ci";
import sprite from "../../images/icons.svg";
const CarCardHeader = ({ item }) => {
  const iconHeart = `${sprite}#icon-heart`;
  return (
    <div className={css.name}>
      <p className={css.name_product}>{item.name}</p>
      <p className={css.price}>${item.price}.00</p>
      <button className={css.btn}>
        <svg width="21" height="18">
          <use href={iconHeart} />
        </svg>
      </button>
    </div>
  );
};

export default CarCardHeader;
