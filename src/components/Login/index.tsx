import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUserFetch } from "state/user";

type E = React.MouseEvent<HTMLAnchorElement, MouseEvent>;

const Login = () => {
  const dispatch = useDispatch();

  const handleClick = async (e: E) => {
    e.preventDefault();
    dispatch(loginUserFetch({}));
  };

  return (
    <Link to="/" className="login" onClick={handleClick}>
      continue as anonymous user
    </Link>
  );
};

export default Login;
