import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "state/user";
import Layout from "components/Layout";
import Login from "components/Login";

const Splash = () => {
  const auth = useSelector(selectAuth);
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/");
    }
  }, [auth, history]);

  return (
    <Layout title="login">
      <div className="login">
        <h1 className="login__header">Welcome to OTT Player</h1>
        <p className="login__subtitle">Please log in to watch movies</p>

        <Login />
      </div>
    </Layout>
  );
};

export default Splash;
