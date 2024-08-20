import css from "./CarCard.module.css";
import { useState } from "react";
import { selectorAllItems } from "../../redux/operations/selectors";

import { useSelector } from "react-redux";
import ItemCarCard from "../ItemCarCard/ItemCarCard";

const CarCard = () => {
  const items = useSelector(selectorAllItems);
  const itemsPerPage = 4;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const handleLoadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + itemsPerPage);
  };

  return (
    <div>
      <ul>
        {items.slice(0, visibleItems).map((item) => {
          return (
            <li key={item.id} className={css.li}>
              <ItemCarCard item={item} />
            </li>
          );
        })}
      </ul>

      {visibleItems < items.length && (
        <button className={css.btnLoad} onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarCard;
