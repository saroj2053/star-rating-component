import React, { useState } from "react";
import "./StarRating.css";

import { MdStar } from "react-icons/md";
import { getRatingStatus } from "../../utils/calculateRatingScore";
import { getTextColor } from "../../utils/calculateTextColor";

const StarRating = ({ starsQuantity = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };

  const handleMouseOver = (currentIndex) => {
    setHover(currentIndex);
  };

  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className="starRating">
      <h2>StarRating Component</h2>
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          margin: "10px",
          fontWeight: "bold",
          fontFamily: "inherit",
          color: "white",
          backgroundColor: `${getTextColor(rating)}`,
        }}
      >
        {getRatingStatus(rating)}
      </div>
      {[...Array(starsQuantity)].map((_, idx) => {
        idx = idx + 1;
        return (
          <MdStar
            style={{ cursor: "pointer" }}
            className={idx <= (hover || rating) ? "active" : "inactive"}
            key={idx}
            size={50}
            onClick={() => handleClick(idx)}
            onMouseOver={() => handleMouseOver(idx)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
