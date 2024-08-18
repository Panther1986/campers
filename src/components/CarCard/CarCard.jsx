import css from "./CarCard.module.css";
import { useState } from "react";
import CarCardHeader from "../CarCardHeader/CarCardHeader";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import Facilities from "../Facilities/Facilities";
import ShowMoreModal from "../ShowMoreModal/ShowMoreModal";
import { useSelector } from "react-redux";
import {
  selectOpenModal,
  selectorError,
  selectorLoading,
} from "../../redux/operations/selectors.js";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CarCard = ({ item }) => {
  const isOpenModal = useSelector(selectOpenModal);
  const [modalIsOpen, setModalIsOpen] = useState(isOpenModal);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const { id } = useParams();

  const isLoading = useSelector(selectorLoading);
  const isError = useSelector(selectorError);

  const openModal = () => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    }
    navigate(`/catalog/${item.id}`);
  };
  const closeModal = () => {
    if (!modalIsOpen) {
      setModalIsOpen(false);
    }
    navigate("/catalog");
  };

  return (
    <>
      {isLoading ? (
        <p>Loading....🤔</p>
      ) : (
        // {isError && <p>Oooops🥵</p>}
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
              <button className={css.btn} onClick={openModal}>
                Show more
              </button>
            </div>
          </div>
          {id === item.id && (
            <ShowMoreModal item={item} isOpen={true} closeModal={closeModal} />
          )}
        </li>
      )}
    </>
  );
};

export default CarCard;
