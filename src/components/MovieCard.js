import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if(!poster_path) return null;
  return (
    <div className="w-40 flex-shrink-0">
      <img
        className="w-full h-auto object-cover rounded-lg"
        alt="movie"
        src={IMG_CDN_URL + poster_path}
      />
    </div>
  );
};

export default MovieCard;
