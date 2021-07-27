import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "state/user";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logout());
    history.push("/login");
  };

  return (
    <button className="logout" onClick={handleLogout}>
      logout
    </button>
  );
};

export default Logout;
