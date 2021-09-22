// import React, { useEffect } from "react";
import { logEvent } from "firebase/analytics";

import Layout from "components/Layout";
import Player from "components/Player";
import MovieList from "components/MovieList";
import { analytics } from "firebaseConfig";

const Home = () => {
  const clickHandler = () => {
    logEvent(analytics, "home_page", {
      name: "HOME 8)",
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
