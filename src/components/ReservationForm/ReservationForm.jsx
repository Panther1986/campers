import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./ReservationForm.module.css";
import { useSelector } from "react-redux";
import { selectOpenModal } from "../../redux/operations/selectors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email().required("Required"),
  bookingdate: Yup.date().required("Required"),
});

const ReservationForm = ({ item }) => {
  const isOpenModal = useSelector(selectOpenModal);
  const [modalIsOpen, setModalIsOpen] = useState(isOpenModal);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(FeedbackSchema),
  });

  // const handleSubmit = (values, actions) => {
  //   onAdd({
  //     id: item._id,
  //     name: values.username,
  //     email: values.useremail,
  //     bookingdate: values.bookingdate,
  //   });
  //   actions.resetForm();
  // };

  const onClose = () => {
    if (modalIsOpen) {
      setModalIsOpen(false);
    }
  };

  const toCatalog = () => {
    navigate("/catalog");
  };

  const onSubmit = (data) => {
    console.log("Data", data);
    reset();
    onClose();
  };

  return (
    <div>
      <p className={css.main_text}>Book your campervan now</p>
      <p className={css.support_text}>
        Stay connected! We are always ready to help you.
      </p>

      <form
        className={css.form}
        onSubmit={handleSubmit((e) =>
          onSubmit({
            name: e.name,
            email: e.email,
            bookingdate: e.bookingdate,
            comment: e.comment,
            item: item,
          })
        )}
      >
        <input
          className={css.labelContainer}
          {...register("name")}
          placeholder="Name"
        />
        <input
          className={css.labelContainer}
          type="email"
          {...register("email")}
          placeholder="Email"
        />
        <input
          className={css.labelContainer}
          type="date"
          {...register("bookingdate")}
          placeholder="Booking date"
        />
        <textarea
          className={css.textarea}
          type="text"
          {...register("comment")}
          placeholder="Comment"
        />
        <button onClick={toCatalog} type="submit" className={css.btn}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
