import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectAuth } from "state/user";
import Layout from "components/Layout";
import Login from "components/Login";
import Form from "components/Form";

const Splash = () => {
  const auth = useSelector(selectAuth);
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/");
    }
  }, [auth, history]);

  return (
    <Layout title="Login">
      <div className="splash">
        <div className="splash__title">
          <h1 className="splash__header">Welcome to OTT Player</h1>
          <p className="splash__subtitle">Please log in to watch movies</p>
        </div>

        <div className="splash__login-area">
          <Login />
          <div className="splash__separator">or</div>
          <Form />
        </div>
      </div>
    </Layout>
  );
};

export default Splash;
