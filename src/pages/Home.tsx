// import React, { useEffect } from "react";
import ReactGA from "react-ga";

import Layout from "components/Layout";
import Player from "components/Player";
import MovieList from "components/MovieList";

const Home = () => {
  const clickHandler = () => {
    ReactGA.event({
      category: "Button",
      action: "Click the button form Page",
    });
    alert("Send the information to google analytics");
  };

  return (
    <Layout title="Home">
      <button onClick={clickHandler}>CLICK ME</button>
      <div className="home">
        <Player />
        <MovieList listId={2} />
      </div>
    </Layout>
  );
};

export default Home;
