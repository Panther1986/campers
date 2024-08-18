import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import css from "./ReservationForm.module.css";
const FeedbackSchema = Yup.object()
  .shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    useremail: Yup.string().email().required("Required"),
    bookingdate: Yup.date().required("Required"),
  })
  .required();

// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm({
//   resolver: yupResolver(FeedbackSchema),
// });

// const initialValues = {
//   username: "",
//   useremail: "",
//   bookingdate: new Date(),
// };

const ReservationForm = ({ item }) => {
  const { register, handleSubmit } = useForm({
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

  return (
    <div>
      <p className={css.main_text}>Book your campervan now</p>
      <p className={css.support_text}>
        Stay connected! We are always ready to help you.
      </p>

      <form className={css.form} onSubmit={handleSubmit((d) => console.log(d))}>
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
          type="booking date"
          {...register("booking date")}
          placeholder="Booking date"
        />
        <textarea
          className={css.textarea}
          type="text"
          {...register("comment")}
          placeholder="Comment"
        />
        <input type="submit" value="Send" className={css.btn} />
      </form>
    </div>
  );
};

export default ReservationForm;
