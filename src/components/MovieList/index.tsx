import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMovies, getMovieUrl, selectMovies, Movie } from "state/movies";

import imgPlaceholder from "assets/movie-placeholder.png";

interface Props {
  listId?: number;
}

const MovieList = ({ listId }: Props) => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  const handleClick = (movieId: number) => {
    dispatch(getMovieUrl(movieId));
  };

  useEffect(() => {
    dispatch(getMovies(listId ?? 2));
  }, [dispatch, listId]);

  return (
    <div className="movie-list">
      <ul className="movie-list__list">
        {movies.map((movie: Movie) => (
          <li
            className="movie-list__element"
            key={movie.id}
            onClick={() => handleClick(movie.id)}
          >
            <img
              className="movie-list__img"
              src={movie.img ?? imgPlaceholder}
              alt="cover"
            />
            <h4 className="movie-list__title"> {movie.title}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
