import React from "react";
import { Link } from "react-router-dom";

import Layout from "components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="not-found">
        <h2>Not Found</h2>
        <p>404</p>

        <Link to="/" className="not-found__link">
          go to home page
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
