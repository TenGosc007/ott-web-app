import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Layout from "components/Layout";
import { loginUserFetch, selectAuth } from "state/user";

type E = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

const Login = () => {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = async (e: E) => {
    dispatch(loginUserFetch({}));
  };

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

        <Link to="/" className="login__btn" onClick={handleClick}>
          Login
        </Link>
      </div>
    </Layout>
  );
};

export default Login;
