import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames || !movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
       <div className=""> {movieNames.map((movieName, index) =>{
          return (
            <MovieList
              key={movieName}
              title={movieName}
              movies={movieResults[index]}
            />
          ) 
        })}
        </div>
    </div>
  );
};

export default GptMovieSuggestions;
