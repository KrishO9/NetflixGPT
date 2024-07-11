import React from 'react'
import { MovieList } from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  return (
    <div className="-mt-10 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"popular"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Streaming"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top rated"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    </div>
  )
};

export default SecondaryContainer;