import React, { useEffect } from "react";
import ReactGA from "react-ga";

import Layout from "components/Layout";
import Player from "components/Player";
import MovieList from "components/MovieList";

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Layout title="Home">
      <div className="home">
        <Player />
        <MovieList listId={2} />
      </div>
    </Layout>
  );
};

export default Home;
