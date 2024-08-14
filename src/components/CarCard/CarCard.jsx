import css from "./CarCard.module.css";
const CarCard = ({ items }) => {
  return (
    <ul className={css.ul}>
      {items.map((item) => (
        <>
          <li key={item.id} className={css.li}>
            <div>
              <img src={item.gallery[0]} alt={`${item.name}`} width="130" />
            </div>
            <div className={css.name}>
              <p>{item.name}</p>
              <p>${item.price}.00</p>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
};

export default CarCard;
