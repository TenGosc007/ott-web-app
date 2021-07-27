import React from "react";
import { useSelector } from "react-redux";

import { selectData, selectAuth } from "state/user";
import Logout from "components/Logout";

import imgLogo from "assets/icon.svg";

const Header = () => {
  const user = useSelector(selectData);
  const auth = useSelector(selectAuth);

  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={imgLogo} alt="logo" />
        <div className="header__title">OTT Player</div>
      </div>

      {auth && (
        <div className="header__content">
          <div className="header__user-info">{user && user.UserName}</div>
          <Logout />
        </div>
      )}
    </header>
  );
};

export default Header;
