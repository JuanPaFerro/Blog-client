import React from "react";
import { Rating } from "react-simple-star-rating";

const StarsRating = ({ stars}) => {
  return (
    <Rating
      ratingValue={(stars * 100) / 5}
      readonly={true}
      fillColor="#1083D6"
    />
  );
};

export default StarsRating;
