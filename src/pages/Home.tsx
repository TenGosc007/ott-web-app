import React from "react";

import Layout from "components/Layout";
import Player from "components/Player";
import MovieList from "components/MovieList";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <MovieList listId={3} />
        <MovieList />
      </div>
    </Layout>
  );
};

export default Home;
