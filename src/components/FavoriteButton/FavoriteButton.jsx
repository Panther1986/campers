import React, { useState, useEffect } from "react";
import css from "./FavoriteButton.module.css";

const FavoriteButton = ({ itemId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.includes(itemId));
  }, [itemId]);

  const handleFavoriteToggle = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (itemId && !favorites.includes(itemId)) {
      favorites.push(itemId);
    } else {
      favorites = favorites.filter((id) => id !== itemId);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <button
      className={`${css.btn} ${isFavorite ? css.favorite : ""}`}
      onClick={handleFavoriteToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        width="24"
        height="21"
        className={`${css.icon_heart} ${isFavorite ? css.favorite : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
      </svg>
    </button>
  );
};
export default FavoriteButton;
