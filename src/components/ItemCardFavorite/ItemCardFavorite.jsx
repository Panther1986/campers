import CarCardHeader from "../CarCardHeader/CarCardHeader";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import Facilities from "../Facilities/Facilities";
import css from "./ItemCardFavorite.module.css";

const ItemCardFavorite = ({ item }) => {
  return (
    <>
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
        <div className={css.div_descript}>
          <p className={css.description}>{item.description}</p>
        </div>
        <Facilities item={item} />
      </div>
    </>
  );
};
export default ItemCardFavorite;
