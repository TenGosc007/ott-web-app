import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";

import { selectCurrent, selectMovies, Movie } from "state/movies";

import imgPlaceholder from "assets/movie-placeholder.png";

const Player = () => {
  const [movie, setMovie] = useState<Movie>();
  const currentMovie = useSelector(selectCurrent);
  const movies = useSelector(selectMovies);

  useEffect(() => {
    if (currentMovie) {
      const findMovie = movies.find((m: Movie) => m.id === currentMovie?.id);
      setMovie(findMovie);
    }
  }, [movies, currentMovie]);

  return (
    <div className="player">
      <div className="player__container">
        {currentMovie ? (
          <ReactPlayer
            className="player__window"
            controls
            url={currentMovie.url}
            width="100%"
            height="100%"
          />
        ) : (
          <img
            className="player__window"
            src={imgPlaceholder}
            alt="placeholder"
            width="100%"
          />
        )}
      </div>
      <div className="player__info">
        <div className="player__title">{movie?.title ?? "Title"}</div>
        <div className="player__description">
          {movie?.description ?? "Description"}
        </div>
      </div>
    </div>
  );
};

export default Player;
