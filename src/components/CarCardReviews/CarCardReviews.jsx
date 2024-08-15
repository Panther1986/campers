import css from "./CarCardReviews.module.css";
import sprite from "../../images/icons.svg";
import { IoLocationOutline } from "react-icons/io5";

const CarCardReviews = ({ item }) => {
  const iconStar = `${sprite}#icon-Rating`;
  const countReviews = item.reviews.length;
  return (
    <div className={css.div}>
      <svg width="16" height="16">
        <use href={iconStar}></use>
      </svg>
      <a className={css.link_reviews}>
        {item.rating} ({countReviews} Reviews)
      </a>
      <p className={css.location}>
        <IoLocationOutline />
        {item.location}
      </p>
    </div>
  );
};

export default CarCardReviews;
