import Modal from "react-modal";
import { useState } from "react";
import sprite from "../../images/icons.svg";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import { FaEuroSign } from "react-icons/fa";
import css from "./ShowMoreModal.module.css";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";

const closeIcon = `${sprite}#close`;

const ShowMoreModal = ({ item, isOpen, closeModal }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "features":
        return <Features id={item.id} item={item} />;
      case "reviews":
        return <Reviews id={item.id} item={item} />;

      default:
        null;
    }
  };
  return (
    <>
      <Modal
        appElement={document.getElementById("root")}
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Show more"
        overlayClassName={css.overlay}
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
        <div className={css.div_btn_feature}>
          <button
            className={css.btn_feature}
            onClick={() => setActiveTab("features")}
          >
            Features
          </button>
          <button
            className={css.btn_feature}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>
        <div>{renderContent()}</div>
      </Modal>
    </>
  );
};

export default ShowMoreModal;
