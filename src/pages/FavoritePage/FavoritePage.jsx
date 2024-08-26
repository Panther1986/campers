import css from "./FavoritePage.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorItem } from "../../redux/operations/selectors";
import { fetchCarOfId } from "../../redux/operations/operations";
import { debounce } from "lodash";
import ItemCardFavorite from "../../components/ItemCardFavorite/ItemCardFavorite";

const FavoritePage = () => {
  const dispatch = useDispatch();
  const detailsOfCamp = useSelector(selectorItem);
  const selectItemsLocal = JSON.parse(localStorage.getItem("favorites")) || [];

  const getItem = selectItemsLocal.map((item) => item);

  const fetchDebounced = debounce(() => {
    if (getItem.length > 0 && !detailsOfCamp.length) {
      getItem.forEach((id) => {
        dispatch(fetchCarOfId(id));
      });
    }
  }, 500);

  useEffect(() => {
    fetchDebounced();
    return () => fetchDebounced.cancel();
  }, [dispatch, getItem]);

  return (
    <div className={css.div_favor_page}>
      {detailsOfCamp.length > 0 ? (
        <ul className={css.ul}>
          {detailsOfCamp.map((item) => (
            <li className={css.list} key={item.id}>
              {<ItemCardFavorite item={item} />}
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite camps 😞</p>
      )}
    </div>
  );
};
export default FavoritePage;
