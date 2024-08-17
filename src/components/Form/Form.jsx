import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  useremail: Yup.string().email().required("Required"),
  bookingdate: Yup.date().required("Required"),
});

const initialValues = {
  username: "",
  useremail: "",
  bookingdate: new Date(),
};

const ReservationForm = ({ item }) => {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: item._id,
      name: values.username,
      email: values.useremail,
      bookingdate: values.bookingdate,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor={item._id}>Name</label>
          <Field type="text" name="username" id={item._id} />
          <ErrorMessage name="username" as="span" />
        </div>
        <div>
          <label htmlFor={item._id}>Email</label>
          <Field type="text" name="useremail" id={item._id} />
          <ErrorMessage name="useremail" as="span" />
        </div>
        <div>
          <label htmlFor={item._id}>Booking date</label>
          <Field type="text" name="bookingdate" id={item._id} />
          <ErrorMessage name="booking date" as="span" />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <Field as="textarea" name="comment" />
          <ErrorMessage name="comment" as="span" />
        </div>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};

export default ReservationForm;
