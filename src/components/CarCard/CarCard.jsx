import css from "./CarCard.module.css";
import { useState } from "react";
import CarCardHeader from "../CarCardHeader/CarCardHeader";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import Facilities from "../Facilities/Facilities";
import ShowMoreModal from "../ShowMoreModal/ShowMoreModal";
import { useSelector } from "react-redux";
import {
  selectorError,
  selectorLoading,
} from "../../redux/operations/selectors.js";
const CarCard = ({ item }) => {
  const isLoading = useSelector(selectorLoading);
  const isError = useSelector(selectorError);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading....🤔</p>
      ) : (
        // {isError && <p>Oooops🥵</p>}
        <li key={item._id} className={css.li}>
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
              <button className={css.btn} onClick={openModal}>
                Show more
              </button>
            </div>
          </div>
          {isModalOpen && (
            <ShowMoreModal
              item={item}
              isOpen={isModalOpen}
              closeModal={closeModal}
            />
          )}
        </li>
      )}
    </>
  );
};

export default CarCard;
