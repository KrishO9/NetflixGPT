
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const gptSearchView = useSelector(store => store.gpt.gptSearchView);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useTrendingMovies();
    return (
        <div>
            <Header/>
            {gptSearchView ? <GptSearch/> :  <> <MainContainer/> <SecondaryContainer/> </>}
           
        </div>
    );
    }

export default Browse;