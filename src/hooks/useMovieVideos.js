import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_VIDEO_API } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideos = (movieId) => {
    //console.log(movieId);
    const dispatch = useDispatch();
  const getMovieTrailer = async () => {
    const data = await fetch(MOVIE_VIDEO_API+movieId+"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    //console.log(json);
    const filterData = json?.results.filter((video) => video?.type === "Trailer");
    const trailer = filterData?.length ? filterData[0] : json.results[0];
    //console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieVideos;