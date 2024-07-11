import { useSelector } from "react-redux";
import useMovieVideos from "../hooks/useMovieVideos";

const VideoBg = ({ id }) => {
    const trailerVideo = useSelector((store) => store?.movies?.trailerVideos);  
    useMovieVideos(id);
  return (
    <div className = "">
      <iframe className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
};

export default VideoBg;
