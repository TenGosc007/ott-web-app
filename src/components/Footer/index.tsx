import React from "react";

import iconGit from "assets/iconmonstr-github-1.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>&copy; Aleksander Atamańczuk</h5>
      <a href="https://github.com/TenGosc007" target="_blank" rel="noreferrer">
        <img src={iconGit} alt="github" />
      </a>
    </footer>
  );
};

export default Footer;
