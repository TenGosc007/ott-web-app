import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getMovies,
  getMovieUrl,
  selectMovies,
  Movie,
  selectLoading,
} from "state/movies";
import Spinner from "components/Spinner";

import imgPlaceholder from "assets/movie-placeholder.png";

interface Props {
  listId?: number;
}

const MovieList = ({ listId }: Props) => {
  const [id, setId] = useState<number>();
  const movies = useSelector(selectMovies);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const handleClick = (movieId: number) => {
    dispatch(getMovieUrl(movieId));
    setId(movieId);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    dispatch(getMovies(listId ?? 2));
  }, [dispatch, listId]);

  return (
    <div className="movie-list">
      <ul className="movie-list__list">
        {loading && !id && <Spinner />}
        {movies.map((movie: Movie) => (
          <li
            className={`movie-list__element ${id === movie.id ? "select" : ""}`}
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
