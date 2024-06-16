import React from "react";

// data
import { testimonialsData } from "../assets/data/testimonials";

// image
import StartOutline from "../assets/icons_assets/rating-outline.png";
import StartFilled from "../assets/icons_assets/rating-filled.png";

const Testimonials = () => {
  return (
    <div className="testimoni">
      <h1>Testimonials</h1>

      <div className="testimoni_container">
        {testimonialsData.map((testimoni) => {
          const persentage_star = (1 - testimoni.rating / 5) * 100;
          return (
            <div className="testimoni_card" key={testimoni.name}>
              <div className="testimoni_title">
                <div className="testimoni_name">
                  <img src={testimoni.image} alt={`photo_${testimoni.name}`} />
                  <p>{testimoni.name}</p>
                </div>

                <div
                  className="start"
                  style={{ "--persentage_star": `${persentage_star}%` }}
                >
                  <img
                    src={StartOutline}
                    alt="start outline"
                    className="start_outline"
                  />
                  <img
                    src={StartFilled}
                    alt="start filled"
                    className="start_filled"
                  />
                </div>
              </div>

              <div className="testimoni_review">
                <p>{testimoni.review}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
