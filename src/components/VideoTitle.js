import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-full lg:w-screen py-16 lg:py-[20%] px-4 lg:px-8 text-white z-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
      <div className="relative z-30">
        <h1 className="text-4xl lg:text-6xl font-bold py-2">{title}</h1>
        <p className="py-8 lg:py-12 text-lg lg:text-xl w-full lg:w-1/2">{overview}</p>
        <div className="flex space-x-4">
          <button className="text-lg bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
            ▶ Play
          </button>
          <button className="text-lg bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300 bg-opacity-50">
            ⓘ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
