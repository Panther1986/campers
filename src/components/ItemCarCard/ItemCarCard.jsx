import CarCardHeader from "../CarCardHeader/CarCardHeader";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import Facilities from "../Facilities/Facilities";
import { useLocation, useNavigate, useParams, NavLink } from "react-router-dom";
import { selectOpenModal } from "../../redux/operations/selectors";
import { useState } from "react";
import { useSelector } from "react-redux";
import css from "./ItemCarCard.module.css";
import ShowMoreModal from "../ShowMoreModal/ShowMoreModal";

const ItemCarCard = ({ item }) => {
  const isOpenModal = useSelector(selectOpenModal);
  const [modalIsOpen, setModalIsOpen] = useState(isOpenModal);
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
    if (!modalIsOpen) {
      setModalIsOpen(true);
    }
    navigate(`/catalog/${item.id}`);
  };

  const closeModal = () => {
    if (modalIsOpen) {
      setModalIsOpen(false);
    }
    navigate(`/catalog`);
  };

  const handleNavigate = () => {
    openModal();
    navigate(`/catalog/${item.id}/reviews`);
  };

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
        <NavLink
          to={`/catalog/${item.id}/reviews`}
          onClick={handleNavigate}
          style={{ textDecoration: "underline" }}
        ></NavLink>
        <CarCardReviews item={item} />
        <div className={css.div_descript}>
          <p className={css.description}>{item.description}</p>
        </div>
        <Facilities item={item} />
        <div className={css.btnContainer}>
          <button className={css.btn} onClick={openModal}>
            Show more
          </button>
        </div>
      </div>
      {modalIsOpen && (
        <ShowMoreModal
          itemId={item.id}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};
export default ItemCarCard;
