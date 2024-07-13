import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
    return (
      <div className="bg-black py-8 bg-opacity-70">
        <h1 className="text-white text-2xl font-bold px-4 mb-4">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide px-4 space-x-4 ">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} poster_path={movie?.poster_path} />
          ))}
        </div>
      </div>
    );
  };

export default MovieList;
