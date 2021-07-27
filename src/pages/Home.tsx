import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "state/user";
import { getMovies, getMovieUrl, selectMovies, Movie } from "state/movies";
import Layout from "components/Layout";
import Player from "components/Player";

const Home = () => {
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  const handleClick = (movieId: number) => {
    dispatch(getMovieUrl(movieId));
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <Layout>
      Home page
      <br />
      <br />
      <button onClick={handleLogout}>logout</button>
      <br />
      <br />
      <div>
        <Player />
        <ul>
          {movies.map((movie: Movie) => (
            <li key={movie.id} onClick={() => handleClick(movie.id)}>
              {movie.title}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
