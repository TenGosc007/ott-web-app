import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUserFetch } from "state/user";

type E = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = async (e: E) => {
    dispatch(loginUserFetch({}));
  };
  return (
    <Link to="/" className="login__btn" onClick={handleClick}>
      Login
    </Link>
  );
};

export default Login;
