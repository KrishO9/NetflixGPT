import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { HOME_SCREEN_BG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <div className="fixed top-0 left-0 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={HOME_SCREEN_BG}
          alt="background"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col">
        <GptSearchBar />
        <div className="flex-1">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  )
}

export default GptSearch