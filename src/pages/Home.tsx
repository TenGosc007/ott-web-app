import React, { useEffect } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";

import Layout from "components/Layout";
import Player from "components/Player";
import MovieList from "components/MovieList";

const Home = () => {
  const analytics = getAnalytics();

  useEffect(() => {
    logEvent(analytics, "homepage_visited");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
