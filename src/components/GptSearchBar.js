import React from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import model from "../utils/openai";
import { API_OPTIONS, TMDB_SEARCH_API } from "../utils/constants";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchInput = useRef(null);
  const dispatch = useDispatch();
  const language = useSelector((store) => store.config.lang);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      TMDB_SEARCH_API +
        "?query=" +
        movie+
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    const prompt = `Recommend movies based on: ${searchInput.current.value}. Only give the names of 5 movies separated by comma. Return the name of the movies in both English and the preferred language code ${language}. Only answer in this format format: Movie1 in English, Movie2 in English, till Movie5 in English, Movie1 in Preferred Language, Movie2 in Preferred Language, till Movie5 in Preferred Language`;

    try {
      const input = searchInput?.current?.value;
      if (input.trim()) {
        const result = await model?.generateContent(prompt);
        const text = await result?.response?.text();
        console.log(text);

        const bothLanguages = text.split(",");

        const movieList = bothLanguages.slice(0, 5);
        const langList = bothLanguages.slice(5);

        console.log(movieList);
        console.log(langList);

        const promiseArray = movieList.map((movie) => searchMoviesTMDB(movie.trim()));

        const movieResults = await Promise.all(promiseArray);
        console.log(movieResults);

        dispatch(
          addGptMovies({ movieNames: langList, movieResults: movieResults })
        );
      }
    } catch (error) {
      console.error("Error fetching GPT results:", error);
    }
  };

  const currentLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="md:pt-[10%] flex justify-center  ">
      <form
        className="w-full md:w-3/4 bg-black bg-opacity-80 rounded-lg shadow-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col md:flex-row p-4">
          <input
            ref={searchInput}
            type="text"
            className="flex-grow py-3 px-4 m-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            placeholder={lang[currentLanguage].gptSearchPlaceholder}
          />
          <button
            className="py-3 px-6 m-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300 ease-in-out"
            onClick={handleGptSearch}
          >
            {lang[currentLanguage].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
