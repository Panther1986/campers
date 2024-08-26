import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarOfId } from "../../redux/operations/operations";
import { selectorItem } from "../../redux/operations/selectors";
import css from "./Reviews.module.css";
import sprite from "../../images/icons.svg";
import ReservationForm from "../ReservationForm/ReservationForm";

const Reviews = () => {
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailsOfCamp = useSelector(selectorItem);
  const iconStar = `${sprite}#icon-Rating`;
  const getStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg key={index} width="16" height="16">
        <use href={iconStar}></use>
      </svg>
    ));
  };

  useEffect(() => {
    if (!detailsOfCamp.length) {
      dispatch(fetchCarOfId(id));
    }
  }, [dispatch, id, detailsOfCamp.length]);

  return (
    <>
      {detailsOfCamp.length > 0 &&
        detailsOfCamp.map((item) => {
          return (
            <div key={item.id} className={css.div_main}>
              <div className={css.div_rating}>
                {item.reviews.map((review, index) => (
                  <div key={index} className={css.div_rev}>
                    <p className={css.first_letter}>
                      {review.reviewer_name.charAt(0)}
                    </p>
                    <div className={css.div_name}>
                      <p className={css.p_name}>{review.reviewer_name}</p>
                      <p className={css.p_name}>
                        {getStars(review.reviewer_rating)}
                      </p>
                    </div>

                    <p>{review.comment}</p>
                  </div>
                ))}
              </div>
              <ReservationForm />
            </div>
          );
        })}
    </>
  );
};

export default Reviews;
