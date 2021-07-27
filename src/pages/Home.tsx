import React from "react";

import Layout from "components/Layout";
import Player from "components/Player";
import MovieList from "components/MovieList";

const Home = () => {
  return (
    <Layout>
      <div>
        <MovieList />
      </div>
    </Layout>
  );
};

export default Home;
