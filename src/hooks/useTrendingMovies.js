

import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const trendingMovies = useSelector((state) => state.movies.trendingMovies); 

    const getTrendingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/movie/week',API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addTrendingMovies(json.results));
    };

    useEffect(() => {
       trendingMovies && getTrendingMovies();
    },[]);
};

export default useTrendingMovies;