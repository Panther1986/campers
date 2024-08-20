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

const closeIcon = `${sprite}#close`;
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

Modal.setAppElement("#root");

const ShowMoreModal = ({ modalIsOpen, closeModal, itemId }) => {
  console.log("itemId Show More Modal", itemId);
  const itemDetail = useSelector(selectorItem);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("description");

  console.log("itemId", itemId);

  console.log("itemDetail", itemDetail);

  const renderContent = () => {
    switch (activeTab) {
      case "features":
        return <Features id={itemId.id} item={itemDetail} />;
      case "reviews":
        return <Reviews id={itemId.id} item={itemDetail} />;
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
              // key={index}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Show more"
              // overlayClassName={css.overlay}
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
