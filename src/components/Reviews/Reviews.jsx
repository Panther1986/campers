import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCarOfId } from "../../redux/operations/operations";
import css from "./Reviews.module.css";
import sprite from "../../images/icons.svg";
import ReservationForm from "../ReservationForm/ReservationForm";

const Reviews = ({ id: carId, item }) => {
  const iconStar = `${sprite}#icon-Rating`;
  const getStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <svg key={index} width="16" height="16">
        <use href={iconStar}></use>
      </svg>
    ));
  };

  return (
    <div className={css.div_main}>
      <div className={css.div_rating}>
        {item.reviews.map((review, index) => (
          <div key={index} className={css.div_rev}>
            <p className={css.first_letter}>{review.reviewer_name.charAt(0)}</p>
            <div className={css.div_name}>
              <p className={css.p_name}>{review.reviewer_name}</p>
              <p className={css.p_name}>{getStars(review.reviewer_rating)}</p>
            </div>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>
      <ReservationForm />
    </div>
  );
};

export default Reviews;
