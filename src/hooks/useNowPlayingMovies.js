import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlaying = useSelector((state) => state.movies.nowPlaying);

    const getNOwPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
        const json = await data.json();
       // console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
       !nowPlaying && getNOwPlayingMovies();
    },[]);
};

export default useNowPlayingMovies;