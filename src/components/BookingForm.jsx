import React, { useEffect } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ times, timeReducer, handleSubmit }) => {
  const formik = useFormik({
    initialValues: {
      date: "",
      time: "0",
      guests: "",
      occasion: "0",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string()
        .required("Required")
        .test("Default value", "Required", (e) => {
          if (e === "0") {
            return false;
          }

          return true;
        }),
      guests: Yup.number().min(1, "Min guest 1").required("Required"),
      occasion: Yup.string(),
    }),
  });

  // func
  const onFormSUbmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  // effect
  useEffect(() => {
    if (formik.values.date) {
      timeReducer({
        type: new Date(formik.values.date).toLocaleString("en", {
          weekday: "long",
        }),
      });
      formik.setFieldValue("time", "0");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.date]);

  return (
    <form className="form_booking" onSubmit={onFormSUbmit}>
      <div className="input">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          className={`${formik.errors.date ? "error" : ""}`}
          {...formik.getFieldProps("date")}
        />
        {formik.errors.date ? (
          <p className="error-p">{formik.errors.date}</p>
        ) : null}
      </div>
      <div className="input">
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          className={`${formik.errors.time ? "error" : ""}`}
          {...formik.getFieldProps("time")}
        >
          <>
            <option value="0" disabled>
              Please Select Time
            </option>
            {times.map((time) => (
              <option value={time} key={time}>
                {time}
              </option>
            ))}
          </>
        </select>
        {formik.errors.time ? (
          <p className="error-p">{formik.errors.time}</p>
        ) : null}
      </div>
      <div className="input">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="min 1"
          min="1"
          max="10"
          id="guests"
          className={`${formik.errors.guests ? "error" : ""}`}
          {...formik.getFieldProps("guests")}
        />
        {formik.errors.guests ? (
          <p className="error-p">{formik.errors.guests}</p>
        ) : null}
      </div>
      <div className="input">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          className={`${formik.errors.occasion ? "error" : ""}`}
          {...formik.getFieldProps("occasion")}
        >
          <option value="0" disabled>
            Please Select Occasion
          </option>
          <option value="birtday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>
        {formik.errors.occasion ? (
          <p className="error-p">{formik.errors.occasion}</p>
        ) : null}
      </div>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
