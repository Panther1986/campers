import Modal from "react-modal";
import { useEffect, useState } from "react";
import sprite from "../../images/icons.svg";
import CarCardReviews from "../CarCardReviews/CarCardReviews";
import { FaEuroSign } from "react-icons/fa";
import css from "./ShowMoreModal.module.css";
import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import { useDispatch, useSelector } from "react-redux";
import { selectorItem } from "../../redux/operations/selectors";
import { fetchCarOfId } from "../../redux/operations/operations";
import { useLocation, useParams } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import { Suspense } from "react";

Modal.setAppElement("#root");

const closeIcon = `${sprite}#close`;
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const customStyles = {
  content: {
    position: "absolute",
    overflowY: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    marginTop: "10px",
    marginBottom: "10px",
    transform: "translate(-50%, -50%)",
    maxWidth: "982px",
    maxHeight: "100%",
    borderRadius: "20px",
    padding: "40px",
    color: "rgb(195, 193, 181)",
  },
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(195, 193, 181, 0.5)",
  },
};

const ShowMoreModal = ({ modalIsOpen, closeModal, itemId }) => {
  const itemDetail = useSelector(selectorItem);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "features":
        return <Features />;
      case "reviews":
        return <Reviews />;
      default:
        null;
    }
  };

  useEffect(() => {
    if (itemId && id === itemId && itemDetail.length === 0) {
      dispatch(fetchCarOfId(id));
    }
  }, [dispatch, id, itemId, itemDetail.length]);

  if (!itemDetail) {
    return null;
  }

  return (
    <>
      {itemDetail.map((item, index) => {
        return (
          <div key={item.id}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Show more modal"
              style={customStyles}
            >
              <div className={css.div_main_contain}>
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
              </div>
              <div className={css["link-block"]}>
                <NavLink
                  to={`${id}/features`}
                  className={buildLinkClass}
                  state={location.state}
                  onClick={() => setActiveTab("features")}
                >
                  Features
                </NavLink>
                <NavLink
                  to={`${id}/reviews`}
                  className={buildLinkClass}
                  state={location.state}
                  onClick={() => setActiveTab("reviews")}
                >
                  Reviews
                </NavLink>
              </div>
              <div>{renderContent()}</div>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Modal>
          </div>
        );
      })}
    </>
  );
};

export default ShowMoreModal;
