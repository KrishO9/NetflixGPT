import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const currentLanguage = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-full md:w-3/4 bg-black bg-opacity-80 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row p-4">
          <input
            type="text"
            className="flex-grow py-3 px-4 m-2 text-white bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400"
            placeholder={lang[currentLanguage].gptSearchPlaceholder}
          />
          <button className="py-3 px-6 m-2 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 transition duration-300 ease-in-out">
            {lang[currentLanguage].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
