import React from "react";
// import { Helmet } from "react-helmet";

import Footer from "components/Footer";
import Header from "components/Header";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title = "", children }: Props) => {
  return (
    <>
      {/* <Helmet>
        <title>OTT Player {title && `| ${title}`}</title>
      </Helmet> */}
      <Header />
      <main className="layout">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
