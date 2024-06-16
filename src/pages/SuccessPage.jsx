import React from "react";

// image
import SuccessImage from "../assets/icons_assets/success.png";

const SuccessPage = () => {
  return (
    <div className="success-page">
      <h1>Booking Table Success</h1>
      <img src={SuccessImage} alt="succes" />
      <p>
        Your table has been successfully booked! An email containing all the
        details of your reservation will be sent to your email address.
      </p>
    </div>
  );
};

export default SuccessPage;
