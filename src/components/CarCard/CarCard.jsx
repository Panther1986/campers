import css from "./CarCard.module.css";
import CarCardHeader from "../CarCardHeader/CarCardHeader";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import Facilities from "../Facilities/Facilities";
const CarCard = ({ item }) => {
  return (
    <li key={item.id} className={css.li}>
      <div className={css.div}>
        <img
          src={item.gallery[0]}
          alt={`${item.name}`}
          width="130"
          className={css.img}
        />
      </div>
      <div className={css.container}>
        <CarCardHeader item={item} />
        <CarCardReviews item={item} />
        <div>
          <p className={css.description}>{item.description}</p>
        </div>
        <Facilities item={item} />
        <div className={css.btnContainer}>
          <button className={css.btn}>Show more</button>
        </div>
      </div>
    </li>
  );
};

export default CarCard;
