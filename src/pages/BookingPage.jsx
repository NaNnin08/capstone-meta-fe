import React, { useEffect, useMemo, useReducer } from "react";

import { useNavigate } from "react-router-dom";

// component
import BookingForm from "../components/BookingForm";

const timeSwitch = (day = "Monday") => {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    case "Saturday":
    case "Sunday":
      return [
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ];
    default:
      return [];
  }
};

const reducerTimes = (_, action) => {
  return timeSwitch(action.type);
};

const BookingPage = () => {
  // router
  const navigate = useNavigate();

  // func
  const initializeTimes = useMemo(() => {
    const date = new Date().toLocaleString("en", { weekday: "long" });
    const initiaze_ = timeSwitch(date);

    return initiaze_;
  }, []);

  const handleSubmit = (formData) => {
    navigate("/success");
  };

  // reducer
  const [state, reducer] = useReducer(reducerTimes, initializeTimes);

  // effect
  useEffect(() => {
    const user = sessionStorage.getItem("_user");

    if (!user) {
      navigate("/login?red=booking");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="booking">
      <div className="booking_title">
        <h1>Booking Table</h1>
        <h3>
          Please input your desired date, time, and the number of guests in your
          party to make a reservation.
        </h3>
      </div>

      <BookingForm
        times={state}
        timeReducer={reducer}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookingPage;
