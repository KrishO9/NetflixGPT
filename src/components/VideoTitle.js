import React from 'react';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full lg:w-screen aspect-video py-16 lg:py-[20%] px-4 lg:px-8 bg-gradient-to-b from-transparent to-black text-white absolute">
      <h1 className="text-4xl lg:text-6xl font-bold py-2">{title}</h1>
      <p className="py-8 lg:py-12 text-lg lg:text-xl w-full lg:w-1/2">{overview}</p>
      <div className="flex space-x-4">
        <button className="text-l bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300 transition duration-300">
          ▶ Play
        </button>
        <button className="bg-gray-700 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 transition duration-300 bg-opacity-50">
        ⓘMore Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
