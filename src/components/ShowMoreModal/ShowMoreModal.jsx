import Modal from "react-modal";
import { useState } from "react";
import sprite from "../../images/icons.svg";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import { FaEuroSign } from "react-icons/fa";
import css from "./ShowMoreModal.module.css";

const closeIcon = `${sprite}#close`;

const ShowMoreModal = ({ item, isOpen, closeModal }) => {
  return (
    <>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Show more"
        //   overlayClassName={styles.overlay}
      >
        <div className={css.div_btn}>
          <p className={css.name_product}>{item.name}</p>
          <button onClick={closeModal} className={css.btn}>
            <svg width="32" height="32" className={css.icon_close}>
              <use href={closeIcon} />
            </svg>
          </button>
        </div>
        <CarCardReviews item={item} />
        <p className={css.price}>
          <FaEuroSign className={css.icon} />
          {item.price}.00
        </p>
        <div className={css.div}>
          {item.gallery.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${item.name} ${index + 1}`}
              className={css.img}
            />
          ))}
        </div>
        <div>
          <p className={css.description}>{item.description}</p>
        </div>
        <div>
          <button>Features</button>
          <button>Reviews</button>
        </div>
      </Modal>
    </>
  );
};

export default ShowMoreModal;
