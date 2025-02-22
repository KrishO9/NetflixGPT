import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies = useSelector((state) => state?.movies?.nowPlayingMovies);
    if(!movies) return;

    const mainMovie = movies[1]; 
    //console.log(mainMovie);

    const {id , original_title , overview } = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
            <VideoBg id={id}/>
    </div>
  )
};

export default MainContainer;