import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_VIDEO_API } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieVideos = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      const response = await fetch(MOVIE_VIDEO_API + movieId + "/videos?language=en-US", API_OPTIONS);
      const json = await response.json();
      if (!json || !json.results) {
        throw new Error("Invalid response structure");
      }

      const filterData = json.results.filter((video) => video?.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
      // Optionally, you can dispatch an action to handle the error in the Redux store
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieVideos;
