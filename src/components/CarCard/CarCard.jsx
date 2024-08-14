import css from "./CarCard.module.css";
import sprite from "../../images/icons.svg";
import { IoLocationOutline } from "react-icons/io5";
import { FiWind } from "react-icons/fi";
import { LiaBedSolid, LiaGasPumpSolid } from "react-icons/lia";
import { TbToolsKitchen2, TbAutomaticGearbox } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
const CarCard = ({ item }) => {
  const iconStar = `${sprite}#icon-Rating`;
  return (
    <ul className={css.ul}>
      <>
        <li key={item.id} className={css.li}>
          <div>
            <img src={item.gallery[0]} alt={`${item.name}`} width="130" />
          </div>
          <div className={css.name}>
            <p>{item.name}</p>
            <p>${item.price}.00</p>
          </div>
          <div>
            <svg width="16" height="16">
              <use href={iconStar}></use>
            </svg>
            <p>{item.rating}</p>
            <p>
              <IoLocationOutline />
              {item.location}
            </p>
          </div>
          <div>
            <p className={css.description}>{item.description}</p>
          </div>
          <div>
            <p>
              <BsPeople />
              {item.adults}
            </p>
            <p>
              <TbAutomaticGearbox />
              {item.transmission}
            </p>
            <p>
              <LiaGasPumpSolid />
              {item.engine}
            </p>
            <p>
              <TbToolsKitchen2 />
              {item.details.kitchen}
            </p>
            <p>
              <LiaBedSolid />
              {item.details.beds}
            </p>
            <p>
              <FiWind />
              {item.details.airConditioner}
            </p>
          </div>
          <button className={css.btn}>Show more</button>
        </li>
      </>
    </ul>
  );
};

export default CarCard;
