import css from "./VehicleDetails.module.css";
const VehicleDetails = ({ item }) => {
  return (
    <div className={css.main_div}>
      <p className={css.text}>Vehicle details</p>
      <div className={css.div}>
        <div className={css.div_item}>
          <p>Form </p>
          <p>{item.form}</p>
        </div>
        <div className={css.div_item}>
          <p>Length</p>
          <p>{item.length}</p>
        </div>
        <div className={css.div_item}>
          <p>Width</p>
          <p>{item.width}</p>
        </div>
        <div className={css.div_item}>
          <p>Height</p>
          <p>{item.height}</p>
        </div>
        <div className={css.div_item}>
          <p>Tank</p>
          <p>{item.tank}</p>
        </div>
        <div className={css.div_item}>
          <p>Consumption</p>
          <p>{item.consumption}</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetails;
